#include <fstream>
#include <iostream>
#include <iomanip>
#include <vector>
#include <map>
#include <algorithm>
#include <chrono>
#include <thread>

#include "soundmanager.h"



// File Scope
#define STRINGIZE(x) STRINGIZE2(x)
#define STRINGIZE2(x) #x
#define __LINE_STR__ STRINGIZE(__LINE__)

#define log(x) log_func(x, __FILE__, __LINE_STR__)
#define log_error(x) { \
    log(std::string("ERROR in: ")+__FUNCTION__"() !"); \
    log_func(x); }

struct LooperElement {
    float score, time1, time2;
    long sampleFrom, sampleTo, length;
    bool last = false; 
};

class LooperInfos {
public:
    LooperInfos(const char* filename);
    inline LooperElement* get_jump(long current_sample);
    inline void exit_jump();
    long current_jump_progression;
    long last_jump_position;
private:
    std::vector< LooperElement > elems;
    std::map< long, std::vector< long > > map_sample_from_index;
    LooperElement* current_jump;
    
};

typedef struct SoundManager_Music
{
    // Modified by Program whenever
    bool loadedInfiniteLooper;
    LooperInfos* looperInfos;
    bool repeat;
    bool paused;
    float desired_gain;
    float desired_balance;
    float paused_gain;

    // Modified by Program, only after ensuring music is stopped
    bool loaded;
    unsigned long long nbSamples;
    long sampleRate_file;
    long sampleRate;
    int nbChannels;
    float* data;

    // Modified by Program, then callback in response
    long order_seek;
    bool order_stop;

    // Modified by Callback only, or after ensuring music is stopped
    unsigned long position;
    unsigned long stopped_position; // position when stop() is called
    float gain;
    float gain_log;
    float balance;
    float balance_left_gain;
    float balance_right_gain;
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

}
void SoundManager_setGlobalGain(float gain){

}


// Music functions
void SoundManager_Music_load(int music_id, std::string filename){
    Music* m = &sm_data.array_music[music_id];
    if(m->loaded){
        SoundManager_Music_unload(music_id);
    }
    m->repeat = false;
    m->gain = 0.3333333f;
    m->desired_gain = m->gain;
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
    m->sampleRate_file = sfinfo.samplerate;
    m->sampleRate = sfinfo.samplerate;
    m->nbChannels = sfinfo.channels;
    
    m->data = new float[m->nbSamples];
    if (sf_read_float(file, m->data, m->nbSamples) != m->nbSamples) {
        log_error(std::string("Samples error."));
    }
    /*for(int i=0;i<m->nbSamples;i++){
        if(m->data[i]>0.01)
            ;//log("file: "+std::to_string(i));
    }*/
    sf_close(file);
    m->loaded = true;
}
bool SoundManager_Music_isLoaded(int music_id){

}
void SoundManager_Music_unload(int music_id){

}

void SoundManager_Music_loadInfiniteLooper(int music_id, std::string filename){

}
bool SoundManager_Music_isLoadedInfiniteLooper(int music_id){

}
void SoundManager_Music_unloadInfiniteLooper(int music_id){

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
void SoundManager_Music_stop(int music_id){

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
        m->gain = m->desired_gain;
    else
        m->gain += (m->desired_gain - m->gain) * UPDATE_GAIN_RATE;
    
    //y = (Math.exp(x)-1)/(Math.E-1)
    m->gain_log = (powf(10, m->gain)-1)/9;
    
}

void update_balance(Music* m)
{
    if (m->paused_gain < PAUSE_FADE_LIMIT)
        m->balance = m->desired_balance;
    else
        m->balance += (m->desired_balance - m->balance) * UPDATE_BALANCE_RATE;

    double angle = m->balance * PI_4;
    m->balance_left_gain = (float)(SQRT2_2 * (cos(angle) - sin(angle)));
    m->balance_right_gain = (float)(SQRT2_2 * (cos(angle) + sin(angle)));
}

void SoundManager_Music_writeAudio(float* out, unsigned long frameCount, SoundManager_data* userData, Music* m){
    if (m->loaded) {

        if (m->order_stop) {
            m->paused = true;
            if (m->paused_gain < PAUSE_FADE_LIMIT || m->position >= m->nbSamples) {
                m->stopped_position = m->position;
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
            m->gain = m->desired_gain;
            return;
        }
        for (unsigned int i = 0; i < frameCount; i++) {
            update_gain(m);
            update_balance(m);

            if (m->paused) {
                if (m->paused_gain < PAUSE_FADE_LIMIT) {
                    return;
                }
                m->paused_gain *= PAUSE_FADE_RATE;
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
    if (current_jump) {
        if (current_jump_progression < current_jump->length) {
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

    if (current_jump) {
        if (current_jump->sampleTo + current_jump->length >= last_jump_position)
            current_jump = nullptr;
    }
    
    return current_jump;
}

void LooperInfos::exit_jump() { current_jump = NULL; }
