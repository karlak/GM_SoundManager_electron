#include <nan.h> 
#include "soundmanager.h"


void Add(const Nan::FunctionCallbackInfo<v8::Value>& info) {
  SoundManager_Initialize();
  SoundManager_OpenStream();
  SoundManager_Music_load(0, "PSY.ogg");
  SoundManager_Music_play(0);

  if (info.Length() < 2) {
    Nan::ThrowTypeError("Wrong number of arguments");
    return;
  }

  if (!info[0]->IsNumber() || !info[1]->IsNumber()) {
    Nan::ThrowTypeError("Wrong arguments");
    return;
  }

  double arg0 = info[0]->NumberValue();
  double arg1 = info[1]->NumberValue();
  v8::Local<v8::Number> num = Nan::New(arg0 + arg1 + 100);

  info.GetReturnValue().Set(num);
}

void Init(v8::Local<v8::Object> exports) {
  exports->Set(Nan::New("add").ToLocalChecked(),
               Nan::New<v8::FunctionTemplate>(Add)->GetFunction());
}

NODE_MODULE(gm_music_lib, Init)
/*
/////////////////////
using namespace v8;

NAN_METHOD(Print) {
	printf("I am a native addon and I AM ALIVE!\n");
}

NAN_MODULE_INIT(Init) {
  Nan::Set(target, Nan::New("print").ToLocalChecked(),
      Nan::GetFunction(Nan::New<FunctionTemplate>(Print)).ToLocalChecked());
}

NODE_MODULE(myaddon, Init)

*/