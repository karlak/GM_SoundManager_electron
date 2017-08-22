console.log('MixerElement.js Loaded !');

var volume;
ModuleRegisterFuncs['mixerElement'] = function($elem, args) {
    console.log('MixerElement Registered !', $elem, args);


    // Volume Slider
    var sliderVolume = $elem.find(".sliderVolume");
    if(sliderVolume.length==0) return;
    sliderVolume = sliderVolume[0];
    
    var volumeContainer = $elem.find(".volumeContainer");
    if(volumeContainer.length==1)
        volumeContainer = volumeContainer[0];
    else
        volumeContainer = null;

    volume = noUiSlider.create(sliderVolume, {
        behaviour: "snap,wheel",
        volumeContainer: volumeContainer,
        start: 40,
        connect: [true, false],
        direction: 'rtl',
        orientation: 'vertical',
        range: {
            'min': 0,
            'max': 100
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
    // console.log(balance);
}


