// console.log('musicEdit.js Loaded !');
/*
<div class="musicEdit">
    <div class="musicTitle"></div>
    <div class="progressContainer">
        <div class="currentProgress"></div>
    </div>
    <center>
        <div class="mixerContainer"></div>
        <div class="play toggle"><span><x-icon name="play-arrow"></x-icon></span></div>
        <div class="stop button"><span><x-icon name="stop"></x-icon></span></div>
    </center>
</div>
*/
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

    /**
     * SLIDERS INIT
     */
    var sliderProgression = noUiSlider.create($elem.find(".currentProgress")[0], {
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

    var sliderVolume = noUiSlider.create($elem.find(".sliderVolume")[0], {
        behaviour: "snap,wheel",
        volumeContainer: $elem.find(".volumeContainer")[0],
        start: 50,
        connect: [true, false],
        direction: 'rtl',
        orientation: 'vertical',
        range: {
            'min': 0,
            'max': 1
        }
    });
    sliderVolume.set(gm_music.music_getGain(music_slot));

    var sliderBalance = noUiSlider.create($elem.find(".sliderBalance")[0], {
        behaviour: "snap,wheel",
        volumeContainer: $elem.find(".balanceContainer")[0],
        start: 0,
        connect: [true, false],
        range: {
            'min': -1,
            'max': 1
        },
        snap_to_close_value: {
            'distance': 10,
            'values': [50]
        },
    });
    sliderBalance.set(gm_music.music_getBalance(music_slot));

    /**
     * SLIDER EVENTS
     */
    sliderProgression.on('end', function(value){
        var pos = value*music_length;
        gm_music.music_seekFrame(music_slot, pos);
    });
    sliderVolume.on('slide', function(values){
        var value = values[0]*1;
        gm_music.music_setGain(music_slot, value);
    });
    sliderBalance.on('slide', function(values){
        var value = values[0]*1;
        gm_music.music_setBalance(music_slot, value);
    });

    /**
     * UPDATE [called every x ms]
     */
    var playing = false;
    function update() {
        // Progression
        var pos = gm_music.music_getPositionFrame(music_slot);
        sliderProgression.setConnectValue(0, 0, pos/music_length);

        // Volume
        var vol = gm_music.music_getGain(music_slot);
        sliderVolume.setConnectValue(0, 0, vol);

        // Balance
        var bal = gm_music.music_getBalance(music_slot);
        var angle = bal * 0.78539816339;
        var bal_left  = (0.70710678118 * (Math.cos(angle) - Math.sin(angle)));
        var bal_right = (0.70710678118 * (Math.cos(angle) + Math.sin(angle)));
        sliderBalance.setConnectValue(0, -bal_left, bal_right);

        // Buttons
        var current_playing = gm_music.music_isPlaying(music_slot);
        if(current_playing!=playing){
            playing = current_playing;
            $elem_play.toggleClass('on', playing);
        }
    }
    
    var updateInterval = window.setInterval(update, 1);
    
    /**
     * BUTTONS INIT
     */
    $elem.find(".toggle").click((event)=>{
        $jquery(event.delegateTarget).toggleClass('on');
    });

    /**
     * BUTTONS EVENTS
     */
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


    /**
     * FINISHED LOADING
     */
    $elem.removeClass('loading');


    /**
     * CLEANUP
     */
    $elem.on('remove', ()=>{
        setFreeMusicSlot(music_slot);
        gm_music.music_unload(music_slot);
        clearInterval(updateInterval);
    });

}


// var mixerUpdate = null;
// $elem_mixerContainer.append(getModule("mixerElement", {slot: music_slot, register: (cb)=>{mixerUpdate = cb;}}));

