// console.log('musicEdit.js Loaded !');

ModuleRegisterFuncs['musicEdit'] = function($elem, args) {
    var music_slot = getFreeMusicSlot();
    var music_length;

    var $elem_play = $elem.find(".play");
    var $elem_stop = $elem.find(".stop");
    var $elem_mixerContainer = $elem.find(".mixerContainer");

    $elem.find(".musicTitle").text(args.node.title);
    gm_music.music_load(music_slot, path.join(path_musics, args.filename));
    music_length = gm_music.music_getLengthFrame(music_slot);
    gm_music.music_play(music_slot);


    var progressionSlider = noUiSlider.create($elem.find(".currentProgress")[0], {
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

    progressionSlider.on('end', function(value){
        var pos = value*music_length;
        gm_music.music_seekFrame(music_slot, pos);
    });

    playing = false;
    function update() {
        var pos = gm_music.music_getPositionFrame(music_slot);
        progressionSlider.setConnectValue(0, 0, pos/music_length);
        var current_playing = gm_music.music_isPlaying(music_slot);
        if(current_playing!=playing){
            playing = current_playing;
            $elem_play.toggleClass('on', playing);
        }
        if(mixerUpdate) mixerUpdate();
    }
    
    var mixerUpdate = null;
    $elem_mixerContainer.append(getModule("mixerElement", {slot: music_slot, register: (cb)=>{mixerUpdate = cb;}}));

    var updateInterval = window.setInterval(update, 1);


    $elem.find(".toggle").click((event)=>{
        $jquery(event.delegateTarget).toggleClass('on');
    });
    $elem_play.click((event)=>{
        var on = $jquery(event.delegateTarget).hasClass('on');
        if(on){
            gm_music.music_play(music_slot);
        }
        else{
            gm_music.music_pause(music_slot);
        }
    });
    $elem_stop.click((event)=>{
        gm_music.music_stop(music_slot);
    });



    $elem.on('remove', ()=>{
        setFreeMusicSlot(music_slot);
        gm_music.music_unload(music_slot);
        clearInterval(updateInterval);
    });

}


