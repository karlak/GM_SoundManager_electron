console.log('MixerElement.js Loaded !');


ModuleRegisterFuncs['mixerElement'] = function($elem) {
	console.log('MixerElement Registered !', $elem);
	$elem.click(()=>{console.log("zbra!")});
}
