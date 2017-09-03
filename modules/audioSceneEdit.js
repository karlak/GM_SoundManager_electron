if (typeof ModuleFuncs === 'undefined') {
    ModuleFuncs = [];
}

ModuleFuncs['audioSceneEdit'] = newModule();
ModuleFuncs['audioSceneEdit']['register'] = function($elem, args) {
    console.log("loading a new audioSceneEdit")
    /**
     * FINISHED LOADING
     */
    $elem.removeClass('loading');


    /**
     * CLEANUP
     */
    $elem.on('remove', () => {
    });
}


ModuleFuncs['audioSceneEdit']['onhide'] = function($elem, args) {
    // $elem.remove();
    console.log("audioSceneEdit hidden");
}
