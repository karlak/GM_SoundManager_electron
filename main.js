const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const windowStateKeeper = require('electron-window-state');
gm_music = require('./gm_music_lib/bin/win32-x64-53/gm_music_lib.node');

let win

function createWindow () {
  let mainWindowState = windowStateKeeper({
    defaultWidth: 800,
    defaultHeight: 600,
    fullScreen: false
  });


  
  var dirtyFlashHack=false;//(process.platform=='win32');
  
  win = new BrowserWindow({
    'x': dirtyFlashHack?-4000:mainWindowState.x,
    'y': dirtyFlashHack?-4000:mainWindowState.y,
    'width': mainWindowState.width,
    'height': mainWindowState.height,
    'frame': false,
    'show': false,
    'backgroundColor': '#ECECEC',
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

  win.webContents.on('dom-ready', function () {
    if(dirtyFlashHack){ // @bug ?
      console.log('dirtyFlashHack: true')
      win.show();
      win.hide();
      if(mainWindowState.x < 0 && mainWindowState.y < 0){
        win.setPosition(0, 0, false);
      }
      else{
        win.setPosition(mainWindowState.x, mainWindowState.y, false);
      }
      mainWindowState.manage(win);
      win.show();
    }
    else{
      console.log('dirtyFlashHack: false')
      mainWindowState.manage(win);
      win.show();
    }
  });

  // win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })

  win.on('maximize', () => {
    win.webContents.send('maximize', '')
  })
  win.on('unmaximize', () => {
    win.webContents.send('unmaximize', '')
  })

  
}

app.on('ready', createWindow)
app.on('window-all-closed', app.quit)
app.on('activate', () => {})

const ipc = require('electron').ipcMain

ipc.on('get_win_id', function (event, arg) {
  event.returnValue = win.id;
});

