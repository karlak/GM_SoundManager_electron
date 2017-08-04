#ifndef SOUNDMANAGER_H
#define SOUNDMANAGER_H

#include <string>

bool SoundManager_Initialize();
bool SoundManager_Terminate();
// getDevicesInfo();
void SoundManager_callback();

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

#endif