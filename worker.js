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
const path_scenes = path.join(app.getPath("userData"), 'audioData', 'scenes')
mkdirp(path_sounds);
mkdirp(path_musics);
mkdirp(path_loops);
mkdirp(path_scenes);
// console.log(path_loops);

var db = remote.getGlobal("db");
var gm_music = remote.getGlobal("gm_music");

// gm_music = require('./gm_music_lib/bin/win32-x64-53/gm_music_lib.node');
// gm_music.initialize();
// gm_music.openDefaultStream();



// const dialog = remote.dialog;
// const menu = remote.Menu;

// win.webContents.openDevTools();


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
    else{
        // gm_music.closeStream();
        // gm_music.terminate();
    }
}

function addTableElem(_type, desc) {
	var entryType = $jquery("<td name='type'/>");
		entryType.text('['+_type+']');

	var entryDesc = $jquery("<td name='desc'/>");
		entryDesc.text(desc);

	var entryResult = $jquery("<td name='res'/>");
		entryResult.text("...");

	var line = $jquery("<tr/>")
		line.append(entryType);
		line.append(entryDesc);
		line.append(entryResult);

    $jquery('#table').append(line);
    return line;
}

function getJobDesc(message) {
	switch (message.type) {
        case "jobClose":
			return "Close this window.";
        case "jobNewSound":
            return "Import the sound file '"+message.data.path+"'";
        case "jobNewMusic":
            return "Import the music file '"+message.data.path+"'";
        case "jobMusicLoad":
            return "Loading the music file '"+message.data.filename+"'";
        case "jobMusicUnload":
            return "Unloading the music file '"+message.data.filename+"'";
        default:
			return "@todo: add job description";
    }
}

var dfd = $jquery.Deferred()  // Master deferred
var dfdNext = dfd; // Next deferred in the chain
var x = 0 // Loop index
var values = []

dfd.resolve();


ipc.on('newJob', pushJob);

function pushJob(event, message) {
    var rec = JSON.parse(message);
    
    var tableLine = addTableElem(rec.type, getJobDesc(rec));
    values.push([rec, tableLine]);
    
    sendParent("working", values.length)
    
    dfdNext = dfdNext.then(function () {
        var value = values.shift();
        return doNextJobs({ type: value[0].type, data: value[0].data }).then((res)=>{
            sendParent("working", values.length)
            if (res.ok) {
                value[1].find("td[name='res']").text("ok");
                value[1].addClass("ok");
            }else{
                sendParent("error", res.msg);
                value[1].addClass("nok");
                value[1].find("td[name='res']").text("err");
                var errLine = $jquery("<tr class='error' />");
                errLine.append($jquery("<td colspan='3' />").text(res.msg));
                value[1].after(errLine);
            }
        });
    });
}

function sendParent(type, data) {
    parentWin.webContents.send("worker_msg", JSON.stringify({ type: type, data: data }));
}

function doNextJobs(job) {
    var dfdJob = $jquery.Deferred();
    switch (job.type) {
        case "jobClose":
            canClose = true;
            win.close();
            dfdJob.resolve({ok: true, msg: ""});
            break;
        case "jobNewSound":
            jobImportAudioFile(job.data, 'sound', dfdJob);
            break;
        case "jobNewMusic":
            jobImportAudioFile(job.data, 'music', dfdJob);
            break;
        case "jobMusicLoad":
            jobMusicLoad(job.data, dfdJob);
            break;
        case "jobMusicUnload":
            jobMusicUnload(job.data, dfdJob);
            break;
        default:
            console.error("Job unknown !", job);
            // sendParent("error", "Tried to start an unknown job ! [" + job.type + "]");
            dfdJob.resolve({ok: false, msg: "Tried to run an unknown job ! [" + job.type + "]"});
    }
    return dfdJob.promise();
}

function jobMusicLoad(data, dfd) {
    if(data.slot == null){
        // We can't load the file right now, no slot free left
        dfd.resolve({ok: false, msg: "No Free Slot left"});
    }
    var file_path = path.join(path_musics, data.filename);
    gm_music.music_load(data.slot, file_path);
    sendParent('music_loaded', data);
    dfd.resolve({ok: true, msg: ""});
}

function jobMusicUnload(data, dfd) {
    gm_music.music_unload(data.slot);
    sendParent('music_unloaded', data);
    dfd.resolve({ok: true, msg: ""});
}

function jobImportAudioFile(data, type, dfd) {
    //{path: filePaths[i], parent_key: data.node.key}
    input_path = data.path;
    parent_key = data.parent_key;
    // Convert the file to the right type and copy the result in the right folder, with a generated unique name.
    // 1. Define the name
    // 1.1 Create an entry in the db which is labeled 'deleted' to get the id
    input_info = path.parse(input_path);
    db.insert({ title: input_info.name, is_folder: false, parent: parent_key, deleted: true, type: type }, function(err, newDocs) {
        if(err!=null){
            dfd.resolve({ok: false, msg: "Error while inserting the entry in the database"});
            return;
        }
        var key = newDocs._id;
        console.log("Converting the file...", input_info.name);

        var child;
        if(type=='music'){
            child = spawn('sox.exe', [input_path, '-r', '44100', '-t', 'ogg', path.join(path_musics, key)], { cwd: './include/sox/' });
        }
        else if(type=='sound'){
            child = spawn('sox.exe', [input_path, '-r', '44100', '-t', 'ogg', path.join(path_sounds, key)], { cwd: './include/sox/' });
        }
        else{
            dfd.resolve({ok: false, msg: "Type Unknown!"});
        }

        child.on('exit', function(code) {
            if (code != 0) {
                child.stderr.on('data', data => {
                    console.log(`stderr: ${data}`);
                });
                dfd.resolve({ok: false, msg: "Error while converting the file"});
                return;
            }
            console.log("Converted !");
            db.update({_id: key}, {$set: {deleted: false}}, {}, (err, numAffected)=>{
                if(err!=null){
                    dfd.resolve({ok: false, msg: "Error while updating the database entry !"});
                    return;
                }
                sendParent('file_imported', {title: input_info.name, key: key, parent_key: parent_key, type: type});
                dfd.resolve({ok: true, msg: ""});
                return;
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