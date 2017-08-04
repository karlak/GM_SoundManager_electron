#include <fstream>
#include <sstream>
#include <iostream>
#include <iomanip>
#include <vector>
#include <map>
#include <algorithm>
#include <chrono>
#include <thread>
#include <atomic>

#include "soundmanager.h"



// File Scope
#define STRINGIZE(x) STRINGIZE2(x)
#define STRINGIZE2(x) #x
#define __LINE_STR__ STRINGIZE(__LINE__)

#define log(x) log_func(x, __FILE__, __LINE_STR__)
#define log_error(x) { \
    log(std::string("ERROR in: ")+__FUNCTION__"() !"); \
    log_func(x); }

static void log_func(const std::string &text, const std::string &file, const std::string &line)
{
    std::ofstream log_file(
        "log_file.txt", 
        std::ios_base::out | std::ios_base::app );
    log_file << std::left << std::setw(39);
    log_file << (file + ":" + line);
    log_file << " " << text;
    log_file << std::endl;
}
static void log_func(const std::string &text)
{
    std::ofstream log_file(
        "log_file.txt", 
        std::ios_base::out | std::ios_base::app );
    log_file << std::setw(45);
    log_file << ("...");
    log_file << text;
    log_file << std::endl;
}

struct LooperElement {
    float score, time1, time2;
    long sampleFrom, sampleTo, length;
    bool last = false; 
};

struct LooperInfos {
public:
    inline LooperElement* get_jump(long current_sample);
    inline void exit_jump();
    std::atomic<long> current_jump_progression;
    std::atomic<long> last_jump_position;
    std::vector< LooperElement > elems; //readonly after loading
    std::map< long, std::vector< long > > map_sample_from_index; //readonly after loading
    std::atomic<LooperElement*> current_jump;
};

typedef struct SoundManager_Music
{
    // Modified by Program whenever
    std::atomic<bool> loadedInfiniteLooper = false;
    LooperInfos* looperInfos = NULL;
    std::atomic<bool> repeat = false;
    std::atomic<bool> paused = true;
    std::atomic<float> desired_gain = 1;
    std::atomic<float> desired_balance = 0;
    std::atomic<float> paused_gain = 1;

    // Modified by Program, only after ensuring music is stopped
    bool loaded = false;
    unsigned long long nbSamples = 0;
    long sampleRate = 0;
    int nbChannels = 0;
    float* data = NULL;

    // Modified by Program, then callback in response
    std::atomic<long> order_seek = -1;
    std::atomic<bool> order_stop = false;

    // Modified by Callback only, or after ensuring music is stopped
    std::atomic<unsigned long> position = 0;
    std::atomic<unsigned long> stopped_position; // position when stop() is called
    std::atomic<float> gain = 1;
    std::atomic<float> gain_log = 0;
    std::atomic<float> balance = 0;
    std::atomic<float> balance_left_gain = 0;
    std::atomic<float> balance_right_gain = 0;
} Music;
typedef struct _SoundManager_data
{
    Music array_music[NUM_MUSICS];
    float global_gain = 1.f;
} SoundManager_data;


static bool is_initialized = false;
static bool is_stream_open = false;
static PaStream* stream = NULL;
static SoundManager_data sm_data;


// Global

bool SoundManager_Initialize(){
    if(is_initialized){
        log_error("SoundManager already initialized!");
        return false;
    }
    PaError err = Pa_Initialize();
    if(err != paNoError){
        log_error(Pa_GetErrorText(err));
        return false;
    }
    
    is_initialized = true;
    return true;
}
bool SoundManager_Terminate(){
    if(!is_initialized){
        log_error("SoundManager not initialized!");
        return false;
    }

    SoundManager_CloseStream();
    
    PaError err = Pa_Terminate();
    if(err != paNoError){
        log_error(Pa_GetErrorText(err));
        return false;
    }


    is_initialized = false;
    return true;
}

int SoundManager_callback(const void *input, void *output, unsigned long frameCount, const PaStreamCallbackTimeInfo* timeInfo, PaStreamCallbackFlags statusFlags, void *userData){
    input; timeInfo; statusFlags;
    // log("zbra0: "+std::to_string((int)output));
    memset(output, 0, sizeof(float) * frameCount * 2);
    for (int m = 0; m < NUM_MUSICS; m++) {
        Music* music = &((SoundManager_data*)userData)->array_music[m];
        SoundManager_Music_writeAudio((float*)output, frameCount, (SoundManager_data*)userData, music);
    }
    return paContinue;
}

void SoundManager_OpenStream(){
    if (is_stream_open) {
        log("Stream already open ! Closing current stream...");
        SoundManager_CloseStream();
    }
    PaError err;

    err = Pa_OpenDefaultStream(&stream, 0, 2, paFloat32, SAMPLE_RATE, 64, &SoundManager_callback, &sm_data);
    if (err != paNoError){
        log_error(Pa_GetErrorText(err))
        return;
    }

    err = Pa_StartStream(stream);
    if (err != paNoError){
        log_error(Pa_GetErrorText(err))
        return;
    }

    is_stream_open = true;
}
void SoundManager_CloseStream(){
    if(is_stream_open){
        PaError err = Pa_CloseStream(stream);
        if (err != paNoError){
            log_error(Pa_GetErrorText(err))
            return;
        }
        is_stream_open = false;
    }
}

float SoundManager_getGlobalGain(){
    return sm_data.global_gain;
}

void SoundManager_setGlobalGain(float gain){
    sm_data.global_gain = gain;
}

// Music functions
void SoundManager_Music_load(int music_id, std::string filename){
    Music* m = &sm_data.array_music[music_id];
    if(m->loaded){
        SoundManager_Music_unload(music_id);
    }
    m->repeat = false;
    m->gain = 0.3333333f;
    m->desired_gain = m->gain.load();
    m->position = 0;
    m->order_seek = -1;
    m->order_stop = false;
    m->paused = true;
    m->paused_gain = 0.0001f;
    m->loadedInfiniteLooper = false;

    SNDFILE* file;
    SF_INFO sfinfo;
    sfinfo.format = 0;
    
    file = sf_open(filename.c_str(), SFM_READ, &sfinfo);
    if (!file) {
        log_error(std::string("Impossible d'ouvrir le fichier: ")+std::string(filename))
        return;
    }
    
    m->nbSamples = sfinfo.channels * (long)sfinfo.frames;
    // m->sampleRate_file = sfinfo.samplerate;
    m->sampleRate = sfinfo.samplerate;
    m->nbChannels = sfinfo.channels;
    
    m->data = new float[m->nbSamples];
    if (sf_read_float(file, m->data, m->nbSamples) != m->nbSamples) {
        log_error("Samples error.");
    }
    if (SAMPLE_RATE != m->sampleRate) {
        log_error("Sample rate not supported!");
    }
    sf_close(file);
    m->loaded = true;
}
bool SoundManager_Music_isLoaded(int music_id){
    Music* m = &sm_data.array_music[music_id];
    return m->loaded;
}
void SoundManager_Music_unload(int music_id){
    Music* m = &sm_data.array_music[music_id];
    if (m->loaded) {
        SoundManager_Music_stop(music_id, true);
        m->loaded = false;
        delete[] m->data;
    }
}

void SoundManager_Music_loadInfiniteLooper(int music_id, std::string filename){
    Music* m = &sm_data.array_music[music_id];
    if (m->loadedInfiniteLooper)
        SoundManager_Music_unloadInfiniteLooper(music_id);

    m->looperInfos = new LooperInfos;
    auto loop = m->looperInfos;

    loop->current_jump = nullptr;
    loop->current_jump_progression = 0;

    std::ifstream file(filename);
    if (!file.good()) {
        log_error("Error while opening the loop file: "+filename);
        return;
    }
    std::string line;

    int i;
    for (i = 0; std::getline(file, line) /*&& i<50*/;)   //read stream line by line
    {
        std::istringstream in(line);      //make a stream for the line itself
        float score = 0;
        long s_to = 0;
        long s_from = 0;
        long length = 0;
        float t1 = 0;
        float t2 = 0;
        int activatedBack = 0;
        int activatedForward = 0;

        in >> score >> s_to >> s_from >> length >> t1 >> t2 >> activatedBack >> activatedForward;

        if (activatedBack) {
            loop->elems.resize(i + 1);
            loop->elems[i].score = score;
            loop->elems[i].sampleTo = s_to;
            loop->elems[i].sampleFrom = s_from;
            loop->elems[i].length = length;
            loop->elems[i].time1 = t1;
            loop->elems[i].time2 = t2;
            if (activatedBack == 2) {
                loop->elems[i].last = true;
                loop->last_jump_position = loop->elems[i].sampleFrom;
            }
            else {
                loop->elems[i].last = false;
            }
            loop->map_sample_from_index[loop->elems[i].sampleFrom].push_back(i);
            i++;
        }
        if (activatedForward && activatedBack!=2) {
            loop->elems.resize(i + 1);
            loop->elems[i].score = score;
            loop->elems[i].sampleTo = s_from;
            loop->elems[i].sampleFrom = s_to;
            loop->elems[i].length = length;
            loop->elems[i].time1 = t2;
            loop->elems[i].time2 = t1;
            loop->elems[i].last = false;
            loop->map_sample_from_index[loop->elems[i].sampleFrom].push_back(i);
            i++;
        }
    }


    m->loadedInfiniteLooper = true;
}
bool SoundManager_Music_isLoadedInfiniteLooper(int music_id){
    Music* m = &sm_data.array_music[music_id];
    return m->loadedInfiniteLooper;
}
void SoundManager_Music_unloadInfiniteLooper(int music_id){
    Music* m = &sm_data.array_music[music_id];
    if (m->loadedInfiniteLooper) {
        SoundManager_Music_stop(music_id, true);
        m->loadedInfiniteLooper = false;
        delete m->looperInfos;
    }
}

void SoundManager_Music_play(int music_id){
    Music* m = &sm_data.array_music[music_id];
    if(m->paused){
        m->paused_gain = 1.f;
        m->paused = false;
    }
}
void SoundManager_Music_isPlaying(int music_id){

}

void SoundManager_Music_stop(int music_id, bool wait){
    Music* m = &sm_data.array_music[music_id];
    if (!m->loaded)
        return;
    m->order_stop = 1;
    if (wait) {
        while (m->order_stop)
            std::this_thread::sleep_for(std::chrono::milliseconds(10)); // @check if it works
    }
}
void SoundManager_Music_isStopped(int music_id){

}
void SoundManager_Music_pause(int music_id){

}
bool SoundManager_Music_isPaused(int music_id){

}

bool SoundManager_Music_getRepeat(int music_id){

}
void SoundManager_Music_setRepeat(int music_id, bool repeat){

}

float SoundManager_Music_getGain(int music_id){

}
void SoundManager_Music_setGain(int music_id, float gain){

}
float SoundManager_Music_getBalance(int music_id){

}
void SoundManager_Music_setBalance(int music_id, float balance){

}

unsigned long SoundManager_Music_getPositionFrame(int music_id){

}
unsigned long SoundManager_Music_getPositionBisFrame(int music_id){

}
unsigned long SoundManager_Music_getStoppedPositionFrame(int music_id){

}

unsigned long SoundManager_Music_getLengthFrame(int music_id){

}
unsigned long SoundManager_Music_getLengthSample(int music_id){

}

unsigned long SoundManager_Music_getSampleRate(int music_id){

}
void SoundManager_Music_seekFrame(int music_id, unsigned long sample, bool wait){

}

///////////
void update_gain(Music* m)
{
    if (m->paused_gain < PAUSE_FADE_LIMIT)
        m->gain = m->desired_gain.load();
    else{
        float current_gain = m->gain;
        m->gain = current_gain + ((m->desired_gain - current_gain) * UPDATE_GAIN_RATE);
    }
    
    //y = (Math.exp(x)-1)/(Math.E-1)
    m->gain_log = (powf(10, m->gain)-1)/9;
    
}

void update_balance(Music* m)
{
    if (m->paused_gain < PAUSE_FADE_LIMIT)
        m->balance = m->desired_balance.load();
    else{
        float current_balance = m->balance;
        m->balance = current_balance + ((m->desired_balance - current_balance) * UPDATE_BALANCE_RATE);
    }

    double angle = m->balance * PI_4;
    m->balance_left_gain = (float)(SQRT2_2 * (cos(angle) - sin(angle)));
    m->balance_right_gain = (float)(SQRT2_2 * (cos(angle) + sin(angle)));
}

void SoundManager_Music_writeAudio(float* out, unsigned long frameCount, SoundManager_data* userData, Music* m){
    if (m->loaded) {

        if (m->order_stop) {
            m->paused = true;
            if (m->paused_gain < PAUSE_FADE_LIMIT || m->position >= m->nbSamples) {
                m->stopped_position = m->position.load();
                m->position = 0;
                m->order_stop = false;
            }
        }

        if (m->order_seek != -1) {
            m->position = m->order_seek;
            if (m->loadedInfiniteLooper)
                m->looperInfos->exit_jump();
            m->order_seek = -1;
        }

        /////////////
        if (m->position >= m->nbSamples) {
            m->gain = m->desired_gain.load();
            return;
        }
        for (unsigned int i = 0; i < frameCount; i++) {
            update_gain(m);
            update_balance(m);

            if (m->paused) {
                if (m->paused_gain < PAUSE_FADE_LIMIT) {
                    return;
                }
                auto current = m->paused_gain.load();
                while (!m->paused_gain.compare_exchange_weak(current, current * PAUSE_FADE_RATE)) // @do tests
                    ;
            }
            else {
                m->paused_gain = std::min(1.f, m->paused_gain / PAUSE_FADE_RATE);
            }
            

            float* dataPtr = &(m->data[m->position]);
            
            // if (m->loadedInfiniteLooper) {
            //     LooperInfos* looper = m->looperInfos;
            //     LooperElement* e;
            //     if (e = looper->get_jump(m->position / m->nbChannels)) {
            //         static float dataLooper[64];
            //         for (int i = 0; i < m->nbChannels; i++) {
            //             auto jump_pos = looper->current_jump_progression;
            //             dataLooper[i] = 0;
            //             /*long from = e->sampleFrom;
            //             long to = e->sampleTo;
            //             long chan = nbChannels;
            //             long res = (e->sampleFrom + jump_pos)*nbChannels + i;
            //             */
            //             dataLooper[i] += m->data[(e->sampleFrom + jump_pos)*m->nbChannels + i] * ((e->length - jump_pos) / (float)e->length);
            //             dataLooper[i] += m->data[(e->sampleTo + jump_pos)*m->nbChannels + i] * ((jump_pos) / (float)e->length);
                        
            //             // m fator prevent a bit of the loss of volume from the mixing of the chunks (=1 at the beg/end; =1.25 at the middle). 
            //             // Those values seem to work
            //             float factor = (-(((jump_pos) / (float)e->length) - 0.5f)*(((jump_pos) / (float)e->length) - 0.5f) + 0.25f) + 1.f;
            //             dataLooper[i] *= factor;
            //         }
            //         looper->current_jump_progression++;
            //         dataPtr = dataLooper;
            //         if (looper->current_jump_progression == e->length) {
            //             m->position = (e->sampleTo + looper->current_jump_progression - 1)*m->nbChannels;
            //         }
            //     }
            // }
            


            if (m->nbChannels == 1) {
                //left
                *out++ += *dataPtr * m->gain_log * m->paused_gain * m->balance_left_gain * userData->global_gain;
                //right
                *out++ += *dataPtr * m->gain_log * m->paused_gain * m->balance_right_gain * userData->global_gain;
                m->position++;
            }
            else {
                //left
                *out++ += *dataPtr * m->gain_log * m->paused_gain * m->balance_left_gain * userData->global_gain;
                /*if(*out > 0.001)
                    log(">0.1!!!");
                //log("mult: "+std::to_string((float)m->gain_log * m->paused_gain * m->balance_left_gain * userData->global_gain));
                if(m->position%10000==0){
                    log("-----------");
                    log(std::to_string(m->gain_log));
                    log(std::to_string(m->paused_gain));
                    log(std::to_string(m->balance_left_gain));
                    log(std::to_string(userData->global_gain));
                    log(std::to_string(m->desired_gain));

                    log("-----------");
                }*/

                m->position++;
                dataPtr++;
                //right
                *out++ += *dataPtr * m->gain_log * m->paused_gain * m->balance_right_gain * userData->global_gain;
                m->position += m->nbChannels - 1;
            }

            if (m->position >= m->nbSamples) {
                m->position = 0;
                if (!m->repeat){
                    m->paused = true;
                    m->paused_gain = PAUSE_FADE_LIMIT * 0.75;
                    return;
                }
            }
        }

    }
}


LooperElement *LooperInfos::get_jump(long current_sample)
{
    auto current_jump_loaded = current_jump.load();
    if (current_jump_loaded) {
        if (current_jump_progression.load() < current_jump_loaded->length) {
            return current_jump;
        }
        else {
            current_jump = nullptr;
            current_jump_progression = 0;
        }
    }
    LooperElement* e = nullptr;

    auto const it = map_sample_from_index.find(current_sample);
    if (it != map_sample_from_index.end()) {
        auto vec = it->second;
        auto l = vec.size();
        auto index = vec[rand()%l];
        e = &elems[index];
        if (e->last) {
            current_jump = e;
        }
        else {
            if (rand() % 100 < 20) {
                current_jump = e;
            }
        }
    }

    if (current_jump_loaded) {
        if (current_jump_loaded->sampleTo + current_jump_loaded->length >= last_jump_position)
            current_jump_loaded = nullptr;
    }
    
    return current_jump;
}

void LooperInfos::exit_jump() { current_jump = NULL; }
