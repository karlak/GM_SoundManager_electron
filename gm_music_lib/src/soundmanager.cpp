#include "soundmanager.h"
#include <fstream>
#include <iostream>
#include <iomanip>
#include "portaudio.h"

#define STRINGIZE(x) STRINGIZE2(x)
#define STRINGIZE2(x) #x
#define __LINE_STR__ STRINGIZE(__LINE__)

#define log(x) log_func(x, __FILE__, __LINE_STR__)
#define log_error(x) { \
    log(std::string("ERROR in: ")+__FUNCTION__"() !"); \
    log_func(x); }


static bool is_initialized = false;
static bool is_stream_open = false;

void log_func(const std::string &text, const std::string &file, const std::string &line)
{
    std::ofstream log_file(
        "log_file.txt", 
        std::ios_base::out | std::ios_base::app );
    log_file << std::left << std::setw(39);
    log_file << (file + ":" + line);
    log_file << " " << text;
    log_file << std::endl;
}
void log_func(const std::string &text)
{
    std::ofstream log_file(
        "log_file.txt", 
        std::ios_base::out | std::ios_base::app );
    log_file << std::setw(45);
    log_file << ("...");
    log_file << text;
    log_file << std::endl;
}

bool SoundManager_Initialize(){
    if(is_initialized){
        log_error("SoundManager already initialized!");
        return false;
    }
    PaError err = Pa_Initialize();
    if(err == paNoError)
        return true;

    log_error(Pa_GetErrorText(err));
    return false;
}
bool SoundManager_Terminate(){
    if(!is_initialized){
        log_error("SoundManager not initialized!");
        return false;
    }
    PaError err = Pa_Terminate();
    if(err == paNoError)
        return true;

    log_error(Pa_GetErrorText(err));
    return false;
}

void SoundManager_callback(){

}

void SoundManager_OpenStream(){
    /*if (is_stream_open) {
        CloseStream();
    }*/
}
void SoundManager_CloseStream(){

}

float SoundManager_getGlobalGain(){

}
void SoundManager_setGlobalGain(float gain){

}


// Music functions
void SoundManager_Music_load(int music_id, std::string filename){

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
