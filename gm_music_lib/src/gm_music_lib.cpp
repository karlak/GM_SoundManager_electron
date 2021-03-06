#include <nan.h> 
#include "soundmanager.h"
#include "macro_map.h"


#define VERIFY_ARG_TYPE_HELPER(x) if(!info[____current_arg_verified]->x){Nan::ThrowTypeError(("Invalid argument type [argument number "+std::to_string(____current_arg_verified)+" (starting at 0)]").c_str());return;}
#define ARG_TYPE(x) IIF( IS_PAREN(x) )(;, VERIFY_ARG_TYPE_HELPER(x)) ____current_arg_verified++;

#define ARG_COUNT(count) int ____current_arg_verified=0;if (info.Length() != count) {Nan::ThrowError("Wrong number of arguments ["#count" expected!]");return;}
#define args info

/*  Possible arguments to macro ARG_TYPE(x):
    ----------------------------------------
    IsUndefined()
    IsNull()
    IsTrue()
    IsFalse()
    IsName()
    IsString()
    IsSymbol()
    IsFunction()
    IsArray()
    IsObject()
    IsBoolean()
    IsNumber()
    IsExternal()
    IsInt32()
    IsUint32()
    IsDate()
    IsArgumentsObject()
    IsBooleanObject()
    IsNumberObject()
    IsStringObject()
    IsSymbolObject()
    IsNativeError()
    IsRegExp()
    IsGeneratorFunction()
    IsGeneratorObject()
    IsPromise()
    IsMap()
    IsSet()
    IsMapIterator()
    IsSetIterator()
    IsWeakMap()
    IsWeakSet()
    IsArrayBuffer()
    IsArrayBufferView()
    IsTypedArray()
    IsUint8Array()
    IsUint8ClampedArray()
    IsInt8Array()
    IsUint16Array()
    IsInt16Array()
    IsUint32Array()
    IsInt32Array()
    IsFloat32Array()
    IsFloat64Array()
    IsDataView()

    BooleanValue()

    ()   // <-- No checking
*/

NAN_METHOD(Add) {
    ARG_COUNT(2);
    ARG_TYPE(IsNumber());
    ARG_TYPE(IsNumber());

    double arg0 = info[0]->NumberValue();
    double arg1 = info[1]->NumberValue();
    auto num = Nan::New(arg0 + arg1 + 100);

    info.GetReturnValue().Set(num);
}

NAN_METHOD(GM_Initialize){
    ARG_COUNT(0);

    bool result = SoundManager_Initialize();
    info.GetReturnValue().Set(Nan::New(result));
}

NAN_METHOD(GM_Terminate){
    ARG_COUNT(0);
    bool result = SoundManager_Terminate();
    info.GetReturnValue().Set(Nan::New(result));
}
/*
struct DeviceInfo {
    int device_id;
    std::string name;
    std::string api;
    int maxInputChannels;
    int maxOutputChannels;
    double defaultLowInputLatency;
    double defaultLowOutputLatency;
    double defaultHighInputLatency;
    double defaultHighOutputLatency;
    double defaultSampleRate;
    bool is_default;
};
*/
NAN_METHOD(GM_GetDevicesInfo){
    ARG_COUNT(0);

    auto vec = SoundManager_GetDevicesInfo();
    auto array = Nan::New<v8::Array>(vec.size());

    for (auto it = vec.begin() ; it != vec.end(); ++it){
        auto obj = Nan::New<v8::Object>();
        obj->Set(Nan::New("device_id").ToLocalChecked(), Nan::New((*it).device_id));
        auto name = Nan::EmptyString();
        Nan::New((*it).name).ToLocal(&name);
        obj->Set(Nan::New("name").ToLocalChecked(), name);
        auto api = Nan::EmptyString();
        Nan::New((*it).api).ToLocal(&api);
        obj->Set(Nan::New("api").ToLocalChecked(), api);
        obj->Set(Nan::New("maxInputChannels").ToLocalChecked(), Nan::New((*it).maxInputChannels));
        obj->Set(Nan::New("maxOutputChannels").ToLocalChecked(), Nan::New((*it).maxOutputChannels));
        obj->Set(Nan::New("defaultLowInputLatency").ToLocalChecked(), Nan::New((*it).defaultLowInputLatency));
        obj->Set(Nan::New("defaultLowOutputLatency").ToLocalChecked(), Nan::New((*it).defaultLowOutputLatency));
        obj->Set(Nan::New("defaultHighInputLatency").ToLocalChecked(), Nan::New((*it).defaultHighInputLatency));
        obj->Set(Nan::New("defaultHighOutputLatency").ToLocalChecked(), Nan::New((*it).defaultHighOutputLatency));
        obj->Set(Nan::New("defaultSampleRate").ToLocalChecked(), Nan::New((*it).defaultSampleRate));
        obj->Set(Nan::New("is_default").ToLocalChecked(), Nan::New((*it).is_default));
        Nan::Set(array, (uint32_t)(it - vec.begin()), obj);
    }
    //std::cout << ' ' << *it;
    
    info.GetReturnValue().Set(array);
}

NAN_METHOD(GM_OpenStream){
    ARG_COUNT(1);
    ARG_TYPE(IsObject());

    auto arg0 = args[0]->ToObject();
    auto device_id = Nan::Get(arg0, Nan::New("device_id").ToLocalChecked());
    auto name = Nan::Get(arg0, Nan::New("name").ToLocalChecked());
    auto api = Nan::Get(arg0, Nan::New("api").ToLocalChecked());
    auto maxInputChannels = Nan::Get(arg0, Nan::New("maxInputChannels").ToLocalChecked());
    auto maxOutputChannels = Nan::Get(arg0, Nan::New("maxOutputChannels").ToLocalChecked());
    auto defaultLowInputLatency = Nan::Get(arg0, Nan::New("defaultLowInputLatency").ToLocalChecked());
    auto defaultLowOutputLatency = Nan::Get(arg0, Nan::New("defaultLowOutputLatency").ToLocalChecked());
    auto defaultHighInputLatency = Nan::Get(arg0, Nan::New("defaultHighInputLatency").ToLocalChecked());
    auto defaultHighOutputLatency = Nan::Get(arg0, Nan::New("defaultHighOutputLatency").ToLocalChecked());
    auto defaultSampleRate = Nan::Get(arg0, Nan::New("defaultSampleRate").ToLocalChecked());
    auto is_default = Nan::Get(arg0, Nan::New("is_default").ToLocalChecked());
    
    #define TEST_EXIST(var) if(var.IsEmpty()){Nan::ThrowError("Not well formed device parameter.");return;}
    TEST_EXIST(device_id);
    TEST_EXIST(name);
    TEST_EXIST(api);
    TEST_EXIST(maxInputChannels);
    TEST_EXIST(maxOutputChannels);
    TEST_EXIST(defaultLowInputLatency);
    TEST_EXIST(defaultLowOutputLatency);
    TEST_EXIST(defaultHighInputLatency);
    TEST_EXIST(defaultHighOutputLatency);
    TEST_EXIST(defaultSampleRate);
    TEST_EXIST(is_default);
    #undef TEST_EXIST

    DeviceInfo dev;
    dev.device_id = device_id.ToLocalChecked()->Uint32Value();
    dev.name = *Nan::Utf8String(name.ToLocalChecked());
    dev.api = *Nan::Utf8String(api.ToLocalChecked());
    dev.maxInputChannels = maxInputChannels.ToLocalChecked()->Uint32Value();
    dev.maxOutputChannels = maxOutputChannels.ToLocalChecked()->Uint32Value();
    dev.defaultLowInputLatency = defaultLowInputLatency.ToLocalChecked()->NumberValue();
    dev.defaultLowOutputLatency = defaultLowOutputLatency.ToLocalChecked()->NumberValue();
    dev.defaultHighInputLatency = defaultHighInputLatency.ToLocalChecked()->NumberValue();
    dev.defaultHighOutputLatency = defaultHighOutputLatency.ToLocalChecked()->NumberValue();
    dev.defaultSampleRate = defaultSampleRate.ToLocalChecked()->NumberValue();
    dev.is_default = is_default.ToLocalChecked()->BooleanValue();

    SoundManager_OpenStream(dev);
}
//void SoundManager_OpenStream(DeviceInfo dev);


NAN_METHOD(GM_OpenDefaultStream){
    ARG_COUNT(0);

    SoundManager_OpenDefaultStream();
}
NAN_METHOD(GM_CloseStream){
    ARG_COUNT(0);

    SoundManager_CloseStream();
}

NAN_METHOD(GM_GetGlobalGain){
    ARG_COUNT(1);
    ARG_TYPE(IsNumber());

    float result = SoundManager_getGlobalGain();
    info.GetReturnValue().Set(Nan::New(result));
}

NAN_METHOD(GM_SetGlobalGain){
    ARG_COUNT(1);
    ARG_TYPE(IsNumber());

    SoundManager_setGlobalGain((float)args[0]->NumberValue());
}

NAN_METHOD(GM_Music_Load){
    ARG_COUNT(2);
    ARG_TYPE(IsNumber());
    ARG_TYPE(IsString());

    SoundManager_Music_load(args[0]->Uint32Value(), *Nan::Utf8String(args[1]));
}
// // Music functions

NAN_METHOD(GM_Music_IsLoaded){
    ARG_COUNT(1);
    ARG_TYPE(IsNumber());
    auto music_id = args[0]->Uint32Value();

    info.GetReturnValue().Set(Nan::New(SoundManager_Music_isLoaded(music_id)));
}

NAN_METHOD(GM_Music_Unload){
    ARG_COUNT(1);
    ARG_TYPE(IsNumber());
    auto music_id = args[0]->Uint32Value();
    
    SoundManager_Music_unload(music_id);
}

NAN_METHOD(GM_Music_LoadInfiniteLooper){
    ARG_COUNT(2);
    ARG_TYPE(IsNumber());
    ARG_TYPE(IsString());

    SoundManager_Music_loadInfiniteLooper(args[0]->Uint32Value(), *Nan::Utf8String(args[1]));
}
NAN_METHOD(GM_Music_IsLoadedInfiniteLooper){
    ARG_COUNT(1);
    ARG_TYPE(IsNumber());
    auto music_id = args[0]->Uint32Value();

    info.GetReturnValue().Set(Nan::New(SoundManager_Music_isLoadedInfiniteLooper(music_id)));
}
NAN_METHOD(GM_Music_UnloadInfiniteLooper){
    ARG_COUNT(1);
    ARG_TYPE(IsNumber());
    auto music_id = args[0]->Uint32Value();
    
    SoundManager_Music_unloadInfiniteLooper(music_id);
}

NAN_METHOD(GM_Music_Play){
    ARG_COUNT(1);
    ARG_TYPE(IsNumber());

    SoundManager_Music_play(args[0]->Uint32Value());
}
NAN_METHOD(GM_Music_IsPlaying){
    ARG_COUNT(1);
    ARG_TYPE(IsNumber());
    auto music_id = args[0]->Uint32Value();

    info.GetReturnValue().Set(Nan::New(SoundManager_Music_isPlaying(music_id)));
}
NAN_METHOD(GM_Music_Stop){
    ARG_COUNT(1);
    ARG_TYPE(IsNumber());

    SoundManager_Music_stop(args[0]->Uint32Value());
}
NAN_METHOD(GM_Music_IsStopped){
    ARG_COUNT(1);
    ARG_TYPE(IsNumber());
    auto music_id = args[0]->Uint32Value();

    info.GetReturnValue().Set(Nan::New(SoundManager_Music_isStopped(music_id)));
}
NAN_METHOD(GM_Music_Pause){
    ARG_COUNT(1);
    ARG_TYPE(IsNumber());

    SoundManager_Music_pause(args[0]->Uint32Value());
}
NAN_METHOD(GM_Music_IsPaused){
    ARG_COUNT(1);
    ARG_TYPE(IsNumber());
    auto music_id = args[0]->Uint32Value();

    info.GetReturnValue().Set(Nan::New(SoundManager_Music_isPaused(music_id)));
}

NAN_METHOD(GM_Music_GetRepeat){
    ARG_COUNT(1);
    ARG_TYPE(IsNumber());
    auto music_id = args[0]->Uint32Value();

    info.GetReturnValue().Set(Nan::New(SoundManager_Music_getRepeat(music_id)));
}
NAN_METHOD(GM_Music_SetRepeat){
    ARG_COUNT(2);
    ARG_TYPE(IsNumber());
    ARG_TYPE(IsBoolean());

    SoundManager_Music_setRepeat(args[0]->Uint32Value(), args[1]->BooleanValue());
}

NAN_METHOD(GM_Music_GetGain){
    ARG_COUNT(1);
    ARG_TYPE(IsNumber());
    auto music_id = args[0]->Uint32Value();

    info.GetReturnValue().Set(Nan::New(SoundManager_Music_getGain(music_id)));
}
NAN_METHOD(GM_Music_GetGainLog){
    ARG_COUNT(1);
    ARG_TYPE(IsNumber());
    auto music_id = args[0]->Uint32Value();

    info.GetReturnValue().Set(Nan::New(SoundManager_Music_getGainLog(music_id)));
}
NAN_METHOD(GM_Music_SetGain){
    ARG_COUNT(2);
    ARG_TYPE(IsNumber());
    ARG_TYPE(IsNumber());
    auto music_id = args[0]->Uint32Value();
    float gain = (float)args[1]->NumberValue();

    SoundManager_Music_setGain(music_id, gain);
}
NAN_METHOD(GM_Music_GetBalance){
    ARG_COUNT(1);
    ARG_TYPE(IsNumber());
    auto music_id = args[0]->Uint32Value();

    info.GetReturnValue().Set(Nan::New(SoundManager_Music_getBalance(music_id)));
}
NAN_METHOD(GM_Music_SetBalance){
    ARG_COUNT(2);
    ARG_TYPE(IsNumber());
    ARG_TYPE(IsNumber());
    auto music_id = args[0]->Uint32Value();
    float balance = (float)args[1]->NumberValue();

    SoundManager_Music_setBalance(music_id, balance);
}

NAN_METHOD(GM_Music_GetPositionFrame){
    ARG_COUNT(1);
    ARG_TYPE(IsNumber());
    auto music_id = args[0]->Uint32Value();

    info.GetReturnValue().Set(Nan::New((double)SoundManager_Music_getPositionFrame(music_id)));
}
NAN_METHOD(GM_Music_GetPositionBisFrame){
    ARG_COUNT(1);
    ARG_TYPE(IsNumber());
    auto music_id = args[0]->Uint32Value();

    info.GetReturnValue().Set(Nan::New((double)SoundManager_Music_getPositionBisFrame(music_id)));
}
NAN_METHOD(GM_Music_GetStoppedPositionFrame){
    ARG_COUNT(1);
    ARG_TYPE(IsNumber());
    auto music_id = args[0]->Uint32Value();

    info.GetReturnValue().Set(Nan::New((double)SoundManager_Music_getStoppedPositionFrame(music_id)));
}
NAN_METHOD(GM_Music_GetLengthFrame){
    ARG_COUNT(1);
    ARG_TYPE(IsNumber());
    auto music_id = args[0]->Uint32Value();

    info.GetReturnValue().Set(Nan::New((double)SoundManager_Music_getLengthFrame(music_id)));
}
NAN_METHOD(GM_Music_GetLengthSample){
    ARG_COUNT(1);
    ARG_TYPE(IsNumber());
    auto music_id = args[0]->Uint32Value();

    info.GetReturnValue().Set(Nan::New((double)SoundManager_Music_getLengthSample(music_id)));
}

NAN_METHOD(GM_Music_GetSampleRate){
    ARG_COUNT(1);
    ARG_TYPE(IsNumber());
    auto music_id = args[0]->Uint32Value();

    info.GetReturnValue().Set(Nan::New((uint32_t)SoundManager_Music_getSampleRate(music_id)));
}


NAN_METHOD(GM_Music_SeekFrame){
    ARG_COUNT(2);
    ARG_TYPE(IsNumber());
    ARG_TYPE(IsNumber());
    auto music_id = args[0]->Uint32Value();
    unsigned long long frame = (unsigned long long)(args[1]->NumberValue());

    SoundManager_Music_seekFrame(music_id, frame);
}



// void SoundManager_Music_seekFrame(int music_id, unsigned long long frame);

NAN_MODULE_INIT(Init) {
    // Export(target, "add", Add);
    Export(target, "initialize",                    GM_Initialize);
    Export(target, "terminate",                     GM_Terminate);
    Export(target, "getDevicesInfo",                GM_GetDevicesInfo);
    Export(target, "openStream",                    GM_OpenStream);
    Export(target, "openDefaultStream",             GM_OpenDefaultStream);
    Export(target, "closeStream",                   GM_CloseStream);
    Export(target, "getGlobalGain",                 GM_GetGlobalGain);
    Export(target, "setGlobalGain",                 GM_SetGlobalGain);
    Export(target, "music_load",                    GM_Music_Load);
    Export(target, "music_isLoaded",                GM_Music_IsLoaded);
    Export(target, "music_unload",                  GM_Music_Unload);
    Export(target, "music_loadInfiniteLooper",      GM_Music_LoadInfiniteLooper);
    Export(target, "music_isLoadedInfiniteLooper",  GM_Music_IsLoadedInfiniteLooper);
    Export(target, "music_unloadInfiniteLooper",    GM_Music_UnloadInfiniteLooper);
    Export(target, "music_play",                    GM_Music_Play);
    Export(target, "music_isPlaying",               GM_Music_IsPlaying);
    Export(target, "music_stop",                    GM_Music_Stop);
    Export(target, "music_isStopped",               GM_Music_IsStopped);
    Export(target, "music_pause",                   GM_Music_Pause);
    Export(target, "music_isPaused",                GM_Music_IsPaused);
    Export(target, "music_getRepeat",               GM_Music_GetRepeat);
    Export(target, "music_setRepeat",               GM_Music_SetRepeat);
    Export(target, "music_getGain",                 GM_Music_GetGain);
    Export(target, "music_getGainLog",              GM_Music_GetGainLog);
    Export(target, "music_setGain",                 GM_Music_SetGain);
    Export(target, "music_getBalance",              GM_Music_GetBalance);
    Export(target, "music_setBalance",              GM_Music_SetBalance);
    Export(target, "music_getPositionFrame",        GM_Music_GetPositionFrame);
    Export(target, "music_getPositionBisFrame",     GM_Music_GetPositionBisFrame);
    Export(target, "music_getStoppedPositionFrame", GM_Music_GetStoppedPositionFrame);
    Export(target, "music_getLengthFrame",          GM_Music_GetLengthFrame);
    Export(target, "music_getLengthSample",         GM_Music_GetLengthSample);
    Export(target, "music_getSampleRate",           GM_Music_GetSampleRate);
    Export(target, "music_seekFrame",               GM_Music_SeekFrame);
}


NODE_MODULE(gm_music_lib, Init)

