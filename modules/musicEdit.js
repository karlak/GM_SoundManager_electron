// console.log('musicEdit.js Loaded !');

// var volume;
ModuleRegisterFuncs['musicEdit'] = function($elem, args) {
    var music_slot = getFreeMusicSlot();
    var music_length;
    // function musicLoaded() {
    //     console.log("MUSIC LOADED!");
    // }
    $elem.find(".musicTitle").text(args.node.title);
    gm_music.music_load(music_slot, path.join(path_musics, args.filename));
    music_length = gm_music.music_getLengthFrame(music_slot);
    gm_music.music_play(music_slot);


    progressionSlider = noUiSlider.create($elem.find(".currentProgress")[0], {
        behaviour: "snap,wheel",
        volumeContainer: $elem.find(".progressContainer")[0],
        start: 50,
        connect: [true, false],
        orientation: 'horizontal',
        range: {
            'min': 0,
            'max': 1
        }
    });

    progressionSlider.on('set', function(a, b, c, d){
        var pos = a*music_length;
        gm_music.music_seekFrame(music_slot, pos);
    });

    function update() {
        var pos = gm_music.music_getPositionFrame(music_slot);
        progressionSlider.setConnectValue(0, 0, pos/music_length);
    }

    var updateInterval = window.setInterval(update, 100);


    $elem.on('remove', ()=>{
        setFreeMusicSlot(music_slot);
        gm_music.music_unload(music_slot);
        clearInterval(updateInterval);
    });

}


