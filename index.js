const ipc = require('electron').ipcRenderer
const { remote } = require('electron')
const win = remote.getCurrentWindow();

// Prevents the middle click scroll behavior
document.body.onmousedown = e => { if (e.button === 1) return false; };

function check_position() {
    var pos = win.getPosition();
    if(pos[0]==-4000&&pos[1]==-4000){win.center();}
}

function minimize() {
    win.minimize();
}

function maximize() {
    if(win.isMaximized()){
        win.unmaximize();
        check_position();
    }
    else{
        win.maximize();
    }

}

function closewindow() {
    win.close();
}

function update_cpuusage(argument) {
    cpu = remote.process.getCPUUsage();
    document.getElementById("cpuusage").innerHTML = "[CPU "+cpu.percentCPUUsage.toFixed(2) + "%]";
}

///////////////////////////////////////
///////////////////////////////////////

window.addEventListener("load", () => {
    check_position();
    
    ipc.on('maximize', (event, message) => {
        document.getElementById("titlebar").classList.add('maximized');
        syncMsgBtn.value= 'maximized';
    })
    ipc.on('unmaximize', (event, message) => {
        document.getElementById("titlebar").classList.remove('maximized');
        syncMsgBtn.value= 'unmaximized';
    })
    var t=setInterval(update_cpuusage,1000);
    
    /******* Splitter ******/
    const element_split_parent = document.querySelector("#split-parent");

    Split(['#left-panel', '#right-panel'], {
        gutterSize: 5,
        snapOffset: 0,
        elementStyle: function (dimension, size, gutterSize, num=-1) {
                // console.log(num);
                if (typeof size === 'string' || size instanceof String) {
                    if (size.indexOf('%')>0 || size.indexOf('px')>0) {
                        var ret = [];
                        ret['flex-basis'] = 'calc(' + size + ' - ' + gutterSize + 'px)';
                        return ret;
                    }
                    return {};
                }

                if(num==0){
                    var calc_size_px = element_split_parent.offsetWidth * (size / 100.0);
                    var ret = [];
                    ret['flex-basis'] = 'calc(' + calc_size_px + 'px - ' + gutterSize + 'px)';
                    return ret;
                }
                return {};
            },
            gutterStyle: function (dimension, gutterSize) {
                return {
                    'flex-basis':  gutterSize + 'px',
                    'min-width': gutterSize + 'px'
                }
            }
        })
    /***********************/

});











