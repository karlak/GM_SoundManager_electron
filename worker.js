const spawn = require('child_process').spawn;
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
const path_loops = path.join(app.getPath("userData"), 'audioData', 'loops')
mkdirp(path_sounds);
mkdirp(path_musics);
mkdirp(path_loops);
console.log(path_loops);
// const Datastore = remote.require('./include/nedb')
var db = remote.getGlobal("db");

// const dialog = remote.dialog;
// const menu = remote.Menu;

win.webContents.openDevTools();


// Prevents the middle click scroll behavior
document.body.onmousedown = e => {
    if (e.button === 1) return false;
};

var canClose = false;
window.onbeforeunload = (e) => {
    if (!canClose) {
        e.returnValue = false
        win.hide();
    }
}

function done(){
	return $jquery.when();
}


var dfd = $jquery.Deferred()  // Master deferred
var dfdNext = dfd; // Next deferred in the chain
var x = 0 // Loop index
var values = []

dfd.resolve();


ipc.on('newJob', (event, message) => {
    var rec = JSON.parse(message);
	
    values.push(rec);
    dfdNext = dfdNext.then(function () {
    	var value = values.shift();
    	return doNextJobs({ type: value.type, data: value.data });
    });
})

function sendParent(type, data) {
    parentWin.webContents.send("worker_msg", JSON.stringify({ type: type, data: data }));
}

function doNextJobs(job) {
    var dfdJob = $jquery.Deferred();
    switch (job.type) {
        case "jobClose":
            canClose = true;
            win.close();
            dfdJob.resolve();
            break;
        case "jobNewSound":
            // console.log("JobNewSound job started!", job.data);
            jobNewSound(job.data, dfdJob);
            break;
        default:
            console.error("Job unknown !");
            sendParent("error", "Tried to start an unknown job ! [" + job.type + "]");
            dfdJob.resolve();
    }
    sendParent("working", values.length)
    return dfdJob.promise();
}

function jobNewSound(data, dfd) {
	//{path: filePaths[i], parent_key: data.node.key}
	input_path = data.path;
	parent_key = data.parent_key;
    // Convert the file to the right type and copy the result in the right folder, with a generated unique name.
    // 1. Define the name
    // 1.1 Create an entry in the db which is labeled 'deleted' to get the id
    input_info = path.parse(input_path);
    db.insert({ title: input_info.name, is_folder: false, parent: parent_key, deleted: true, type: "sound" }, function(err, newDocs) {
    	if(err!=null){
    		sendParent("error", "[" + input_path + "] Error while inserting an entry in the database !")
			dfd.resolve();
    		return;
    	}
        var key = newDocs._id;
        console.log("Converting the file...", input_info.name);

        //sox "Yuki Kajiura - I talk to the rain.ogg" -r 44100 -t ogg "ouuuut"
        var child = spawn('sox.exe', [input_path, '-r', '44100', '-t', 'ogg', path.join(path_sounds, key)], { cwd: './include/sox/' });

        child.on('exit', function(code) {
            if (code != 0) {
                child.stderr.on('data', data => {
                    console.log(`stderr: ${data}`);
                });
                sendParent("error", "[" + input_path + "] Error while converting file " + input_info.name + " !");
				dfd.resolve();
                return;
            }
            console.log("Converted !");
            db.update({_id: key}, {$set: {deleted: false}}, {}, (err, numAffected)=>{
            	if(err!=null){
            		sendParent("error", "[" + input_path + "] Error while updating the database !")
            	}
            	sendParent('_jobNewSound', {title: input_info.name, key: key, parent_key: parent_key});
				dfd.resolve();
            });
        });
    });
}

// document.addEventListener("DOMContentLoaded", () => {});

// Debug Functions
function sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) { /* do nothing */ }
}