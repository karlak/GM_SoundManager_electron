const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const windowStateKeeper = require('electron-window-state');
const gm_music = require('./gm_music_lib/bin/win32-x64-53/gm_music_lib.node');
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  let mainWindowState = windowStateKeeper({
    defaultWidth: 800,
    defaultHeight: 600
  });

  win = new BrowserWindow({
    'x': mainWindowState.x,
    'y': mainWindowState.y,
    'width': mainWindowState.width,
    'height': mainWindowState.height,
    'frame': true
  });
  mainWindowState.manage(win);

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)
app.on('window-all-closed', app.quit)
app.on('activate', () => {})

/*const ipc = require('electron').ipcMain

ipc.on('synchronous-message', function (event, arg) {
  event.returnValue = gm_music;
  console.log('ping received!');
})*/

