const path = require('path')
const mkdirp = require('mkdirp');
const electron = require('electron');
const ipc = electron.ipcRenderer;
const remote = electron.remote;
const app = remote.app;
const win = remote.getCurrentWindow();
const parentWin = win.getParentWindow();
const path_sounds = path.join(app.getPath("userData"), 'audioData', 'sounds')
const path_musics = path.join(app.getPath("userData"), 'audioData', 'musics')
const path_loops  = path.join(app.getPath("userData"), 'audioData', 'loops')
mkdirp(path_sounds);
mkdirp(path_musics);
mkdirp(path_loops);
console.log(path_loops);
// const dialog = remote.dialog;
// const menu = remote.Menu;

// const path = require('path');
// var db;
var jobs = [];

// Prevents the middle click scroll behavior
document.body.onmousedown = e => {
    if (e.button === 1) return false;
};

var canClose = false;
window.onbeforeunload = (e) => {
	if(!canClose){
    	e.returnValue = false
    	win.hide();
	}
}

ipc.on('newJob', (event, message) => {
	var rec = JSON.parse(message);
    jobs.push({type: rec.type, data: rec.data});
    if (jobs.length <= 1) {
        doNextJobs();
    }
})

function sendParent(type, data) {
    parentWin.webContents.send("worker_msg", JSON.stringify({type: type, data: data}));
}

function doNextJobs() {
	sendParent("workerWorking", true);
	while(jobs.length > 0){
	    var job = jobs.shift();
	    switch (job.type) {
	        case "jobClose":
	        	canClose = true;
	        	win.close();
	            break;
	        case "jobNewSound":
	            console.log("JobNewSound job started!", job.data);
	            break;
	        default:
	            console.error("Job unknown !");
	            sendParent("workerError", "Tried to start an unknown job ! ["+job.type+"]");
	    }
	}
	sendParent("workerWorking", false);
}

document.addEventListener("DOMContentLoaded", () => {});


// Debug Functions
function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}
