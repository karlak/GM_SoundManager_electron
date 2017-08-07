const ipc = require('electron').ipcRenderer
const { remote } = require('electron')
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

function minimize() {
	remote.BrowserWindow.getFocusedWindow().minimize();
}
function maximize() {
	win = remote.BrowserWindow.getFocusedWindow();
	if(win.isMaximized()){
		win.unmaximize();
	}
	else{
		win.maximize();
	}

}
function closewindow() {
	remote.BrowserWindow.getFocusedWindow().close();
}



