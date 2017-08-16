const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
var screen;

const path = require('path')
const url = require('url')
const windowStateKeeper = require('electron-window-state');
gm_music = require('./gm_music_lib/bin/win32-x64-53/gm_music_lib.node');
gm_music.initialize();
gm_music.openDefaultStream();

let win

function createWindow() {
    let mainWindowState = windowStateKeeper({
        defaultWidth: 800,
        defaultHeight: 600,
        fullScreen: false
    });



    var dirtyFlashHack = false; //(process.platform=='win32');

    win = new BrowserWindow({
        'x': dirtyFlashHack ? -4000 : mainWindowState.x,
        'y': dirtyFlashHack ? -4000 : mainWindowState.y,
        'width': mainWindowState.width,
        'height': mainWindowState.height,
        'frame': false,
        'show': false,
        'backgroundColor': '#FFF',
        'transparent': false,
        'fullscreenable': false,
        'minWidth': 600,
        'minHeight': 500,
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    mainWindowState.manage(win);
    // win.webContents.on('dom-ready', function () {
    //   // if(dirtyFlashHack){ // @bug ?
    //   //   console.log('dirtyFlashHack: true')
    //   //   win.show();
    //   //   win.hide();
    //   //   if(mainWindowState.x < 0 && mainWindowState.y < 0){
    //   //     win.setPosition(0, 0, false);
    //   //   }
    //   //   else{
    //   //     win.setPosition(mainWindowState.x, mainWindowState.y, false);
    //   //   }
    //   //   mainWindowState.manage(win);
    //   //   win.show();
    //   // }
    //   // else{
    //     // win.show();
    //   // }
    // });

    // win.webContents.openDevTools()

    var mouse_in_win = false;

    function checkWindowLeaveEvent() {
        var old_mouse_in_win = mouse_in_win;
        var bounds = win.getBounds();
        var pos = screen.getCursorScreenPoint();
        mouse_in_win = (
            pos.x > bounds.x && pos.x < bounds.x + bounds.width &&
            pos.y > bounds.y && pos.y < bounds.y + bounds.height
        );
        if (!mouse_in_win && old_mouse_in_win) {
            win.webContents.sendInputEvent({
                type: "mouseLeave",
                x: 0,
                y: 0
            });
        }

    }
    var checkWindowLeaveTimer = setInterval(checkWindowLeaveEvent, 50);
    win.show();
    win.on('closed', () => {
        clearInterval(checkWindowLeaveTimer);
        win = null;
    })

    win.on('maximize', () => {
        win.webContents.send('maximize', '')
    })
    win.on('unmaximize', () => {
        win.webContents.send('unmaximize', '')
    })


}

// electron.app.on('browser-window-created',function(e,window) {
//     window.setMenu(null);
// });

app.on('ready', () => {
    screen = electron.screen;
    createWindow();
});
app.on('window-all-closed', () => {
    gm_music.closeStream();
    gm_music.terminate();
    app.quit()
})
app.on('activate', () => {})

const ipc = require('electron').ipcMain

ipc.on('get_win_id', function(event, arg) {
    event.returnValue = win.id;
});