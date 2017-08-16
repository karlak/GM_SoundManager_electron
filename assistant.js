const electron = require('electron');
const ipc = electron.ipcRenderer;
const remote = electron.remote;
const app = remote.app;
const win = remote.getCurrentWindow();
const dialog = remote.dialog;
// const menu = remote.Menu;

const path = require('path');
var db;

// Prevents the middle click scroll behavior
document.body.onmousedown = e => {
    if (e.button === 1) return false;
};

document.addEventListener("DOMContentLoaded", () => {
});

