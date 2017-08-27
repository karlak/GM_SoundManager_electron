// console.log('MixerElement.js Loaded !');


ModuleRegisterFuncs['mixerElement'] = function($elem, args) {
    // console.log('MixerElement Registered !', $elem, args);


    // Volume Slider
    var sliderVolume = $elem.find(".sliderVolume");
    if(sliderVolume.length==0) return;
    sliderVolume = sliderVolume[0];
    
    var volumeContainer = $elem.find(".volumeContainer");
    if(volumeContainer.length==1)
        volumeContainer = volumeContainer[0];
    else
        volumeContainer = null;

    var volume = noUiSlider.create(sliderVolume, {
        behaviour: "snap,wheel",
        volumeContainer: volumeContainer,
        start: 50,
        // padding: 10, 
        connect: [true, false],
        direction: 'rtl',
        orientation: 'vertical',
        range: {
            'min': 0,
            'max': 1
        }
    });
    // console.log(volume);
    // volume.setConnectValue(0, 0, 0);


    // Balance Slider
    var sliderBalance = $elem.find(".sliderBalance");
    if(sliderBalance.length==0) return;
    sliderBalance = sliderBalance[0];
    
    var balanceContainer = $elem.find(".balanceContainer");
    if(balanceContainer.length==1)
        balanceContainer = balanceContainer[0];
    else
        balanceContainer = null;
    
    var balance = noUiSlider.create(sliderBalance, {
        behaviour: "snap,wheel",
        volumeContainer: balanceContainer,
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
    
    ///////////
    // Update
    ///////////
    var music_slot = args.slot;
    args.register(update);
    volume.set(gm_music.music_getGain(music_slot));
    balance.set(gm_music.music_getBalance(music_slot));

    function update() {
        var vol = gm_music.music_getGain(music_slot);
        volume.setConnectValue(0, 0, vol);

        var bal = gm_music.music_getBalance(music_slot);
        // Compute balance gains
        var angle = bal * 0.78539816339;
        var bal_left  = (0.70710678118 * (Math.cos(angle) - Math.sin(angle)));
        var bal_right = (0.70710678118 * (Math.cos(angle) + Math.sin(angle)));
        balance.setConnectValue(0, -bal_left, bal_right);
    }

    volume.on('slide', function(values){
        var value = values[0]*1;
        gm_music.music_setGain(music_slot, value);
    });
    balance.on('slide', function(values){
        var value = values[0]*1;
        gm_music.music_setBalance(music_slot, value);
    });
}


