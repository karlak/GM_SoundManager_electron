if (typeof ModuleFuncs === 'undefined') {
    ModuleFuncs = [];
}

ModuleFuncs['audioScenes'] = newModule();
ModuleFuncs['audioScenes']['register'] = function($elem, args) {
    console.log("loading a new audioScenes")
    /**
     * ELEMENT FUNCTIONS DEF
     */
    $elem.loadScene = (filename) => {
        console.log("Loading a scene ["+filename+"]");
    };
    $elem.unloadScene = ($scene) =>{
        console.log("Unloading a scene");
    }




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


ModuleFuncs['audioScenes']['onhide'] = function($elem, args) {
    // $elem.remove();
    console.log("audioScenes hidden");
}
