#ifndef SOUNDMANAGER_H
#define SOUNDMANAGER_H

#include <string>
#include "portaudio.h"
#include "sndfile.h"

#define SAMPLE_RATE 44100
#define NUM_MUSICS 32
#define PAUSE_FADE_RATE (0.996f)
#define PAUSE_FADE_LIMIT (0.01f)
#define UPDATE_GAIN_RATE (0.00005f)
#define UPDATE_BALANCE_RATE (0.0001f)

#define PI_4 0.78539816339 // PI/4
#define SQRT2_2 0.70710678118 // SQRT(2)/2
#define E_minus1 1.718281828459045235360287471352662497757247093699959574966 // (e-1)

bool SoundManager_Initialize();
bool SoundManager_Terminate();
// getDevicesInfo();
int SoundManager_callback(const void *input, void *output, unsigned long frameCount, const PaStreamCallbackTimeInfo* timeInfo, PaStreamCallbackFlags statusFlags, void *userData);

void SoundManager_OpenStream();
void SoundManager_CloseStream();

float SoundManager_getGlobalGain();
void SoundManager_setGlobalGain(float gain);


// Music functions
void SoundManager_Music_load(int music_id, std::string filename);
bool SoundManager_Music_isLoaded(int music_id);
void SoundManager_Music_unload(int music_id);

void SoundManager_Music_loadInfiniteLooper(int music_id, std::string filename);
bool SoundManager_Music_isLoadedInfiniteLooper(int music_id);
void SoundManager_Music_unloadInfiniteLooper(int music_id);

void SoundManager_Music_play(int music_id);
void SoundManager_Music_isPlaying(int music_id);
void SoundManager_Music_stop(int music_id);
void SoundManager_Music_isStopped(int music_id);
void SoundManager_Music_pause(int music_id);
bool SoundManager_Music_isPaused(int music_id);

bool SoundManager_Music_getRepeat(int music_id);
void SoundManager_Music_setRepeat(int music_id, bool repeat);

float SoundManager_Music_getGain(int music_id);
void SoundManager_Music_setGain(int music_id, float gain);
float SoundManager_Music_getBalance(int music_id);
void SoundManager_Music_setBalance(int music_id, float balance);

unsigned long SoundManager_Music_getPositionFrame(int music_id);
unsigned long SoundManager_Music_getPositionBisFrame(int music_id);
unsigned long SoundManager_Music_getStoppedPositionFrame(int music_id);

unsigned long SoundManager_Music_getLengthFrame(int music_id);
unsigned long SoundManager_Music_getLengthSample(int music_id);

unsigned long SoundManager_Music_getSampleRate(int music_id);
void SoundManager_Music_seekFrame(int music_id, unsigned long sample, bool wait);

//float* SoundManager_Music_getData(int music_id);
//float* SoundManager_Music_getVisualData(int music_id, int width); // @todo
struct SoundManager_Music;
struct _SoundManager_data;
void SoundManager_Music_writeAudio(float* out, unsigned long frameCount, _SoundManager_data* userData, SoundManager_Music* m);

#endif