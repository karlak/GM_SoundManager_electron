const electron = require('electron');
const ipc = electron.ipcRenderer;
const remote = electron.remote;
// const app = remote.app;
const win = remote.getCurrentWindow();
const parentWin = win.getParentWindow();
// const dialog = remote.dialog;
// const menu = remote.Menu;

// const path = require('path');
// var db;
var jobs = [];

// Prevents the middle click scroll behavior
document.body.onmousedown = e => {
    if (e.button === 1) return false;
};


win.on('close', (event) => {});


ipc.on('jobNewSound', (event, message) => {
    console.log("!!!!");
    jobs.push({ type: 'jobNewSound', data: JSON.parse(message) });
    if (jobs.length <= 1) {
        doNextJobs();
    }
})

function sendParent(type, data) {
    parentWin.webContents.send(type, JSON.stringify(data));
}

function doNextJobs() {
	sendParent("workerWorking", true);
	while(jobs.length > 0){
	    var job = jobs.shift();
	    switch (job.type) {
	        case "jobNewSound":
	            console.log("JobNewSound job started!", job.data);
	            break;
	        default:
	            console.error("Job unknown !");
	            sendParent("workerError", "Tried to start an unknown job !");
	    }
	}
	sendParent("workerWorking", false);
}

document.addEventListener("DOMContentLoaded", () => {});