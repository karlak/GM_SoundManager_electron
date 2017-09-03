/************************/
/**  Load HTML Module  **/
ModuleList = [];

function getModule(module, args) {
    if (ModuleList[module] == null) {
        console.log("Loading module...", module);
        // HTML
        var file_content = fs.readFileSync('./modules/' + module + '.html', "utf8");
        ModuleList[module] = { html: $jquery(file_content) };
    }
    var element = ModuleList[module].html.clone();
    element.addClass('module');
    element.data('moduleName', module);

    // console.log(module);
    ModuleFuncs[module].register(element, args);
    return element;
}

function newModule() {
    return {
        'register': ($elem, args) => {},
        'onhide': ($elem, args) => {},
    }
}