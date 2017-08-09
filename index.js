
const ipc = require('electron').ipcRenderer
const { remote } = require('electron')

let win = remote.getCurrentWindow();

function check_position() {
	var pos = win.getPosition();
	if(pos[0]==-4000&&pos[1]==-4000){win.center();}
}
check_position();

ipc.on('maximize', (event, message) => {
  document.getElementById("titlebar").classList.add('maximized');
  syncMsgBtn.value= 'maximized';
})
ipc.on('unmaximize', (event, message) => {
  document.getElementById("titlebar").classList.remove('maximized');
  syncMsgBtn.value= 'unmaximized';
})

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

//
function update_cpuusage(argument) {
	cpu = remote.process.getCPUUsage();
	document.getElementById("cpuusage").innerHTML = "[CPU "+cpu.percentCPUUsage.toFixed(2) + "%]";
}
var t=setInterval(update_cpuusage,1000);
