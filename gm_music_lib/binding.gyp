{
  "variables": {
      "module_name":"gm_music_lib",
      "module_path":"../",
  },
  "targets": [
    {
      "target_name": "<(module_name)",
      "sources": [ "src/*.cpp" ],
      "include_dirs": [ 
        "<!(node -e \"require('nan')\")",
        "include/portaudio/",
        "include/libsndfile/",
      ],
      "libraries": [
        "portaudio_x64.lib",
        "libsndfile-1.lib",
      ],
      "library_dirs": [
        "lib/",
      ]
    },
    {
      "target_name": "action_after_build",
      "type": "none",
      "dependencies": [ "<(module_name)" ],
      "_copies": [
        {
          "files": [
            "<(PRODUCT_DIR)/<(module_name).node",
            "lib/portaudio_x64.dll",
          ],
          "destination": "<(module_path)"
        }
      ]
    }
  ]
}

