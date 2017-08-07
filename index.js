const ipc = require('electron').ipcRenderer
// const {app, BrowserWindow} = require('electron')

// const win_id = ipc.sendSync('get_win_id', '')
// let win = BrowserWindow.fromId(win_id)

const syncMsgBtn = document.getElementById('sync-msg')
syncMsgBtn.value='...';

ipc.on('maximize', (event, message) => {
  document.getElementById("titlebar").classList.add('maximized');
  syncMsgBtn.value= 'maximized';
})
ipc.on('unmaximize', (event, message) => {
  document.getElementById("titlebar").classList.remove('maximized');
  syncMsgBtn.value= 'unmaximized';
})





