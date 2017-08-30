const electron = require('electron');
const ipc = electron.ipcRenderer;
const remote = electron.remote;
const app = remote.app;
const win = remote.getCurrentWindow();
const dialog = remote.dialog;
var rootNode;
var fs = require('fs');
// const menu = remote.Menu;

// const Datastore = remote.require('./include/nedb')
const path = require('path');
var db;
var gm_music;
let assistWin;
let workerWin;

const path_sounds = path.join(app.getPath("userData"), 'audioData', 'sounds')
const path_musics = path.join(app.getPath("userData"), 'audioData', 'musics')
const path_loops = path.join(app.getPath("userData"), 'audioData', 'loops')

// Prevents the middle click scroll behavior
document.body.onmousedown = e => {
    if (e.button === 1) return false;
};

function minimize() {
    win.minimize();
}

function maximize() {
    if (win.isMaximized()) {
        win.unmaximize();
    } else {
        win.maximize();
    }

}

function closewindow() {
    win.close();
}



document.addEventListener("DOMContentLoaded", () => {

    win.show();
    ipc.on('maximize', (event, message) => {
        document.getElementById("titlebar").classList.add('maximized');
        document.getElementById("border").classList.add('maximized');
        document.getElementById("window").classList.add('maximized');
    })
    ipc.on('unmaximize', (event, message) => {
        document.getElementById("titlebar").classList.remove('maximized');
        document.getElementById("border").classList.remove('maximized');
        document.getElementById("window").classList.remove('maximized');
    })
    if (win.isMaximized()) {
        document.getElementById("titlebar").classList.add('maximized');
        document.getElementById("border").classList.add('maximized');
        document.getElementById("window").classList.add('maximized');
    }

    /***********************/
    /******* Splitter ******/
    const element_split_parent = document.querySelector("#split-parent");

    var leftPanelReduced = false;
    var leftPanelLastSize = null;
    var splitter = Split(['#left-panel', '#right-panel'], {
        gutterSize: 5,
        snapOffset: 0,
        minSize: 200,
        elementStyle: function(dimension, size, gutterSize, num = -1) {
            if (leftPanelReduced) {
                expandedTree();
            }
            if (typeof size === 'string' || size instanceof String) {
                if (size.indexOf('%') > 0 || size.indexOf('px') > 0) {
                    var ret = [];
                    ret['flex-basis'] = 'calc(' + size + ' - ' + gutterSize + 'px)';
                    return ret;
                }
                return {};
            }

            if (num == 0) {
                var calc_size_px = element_split_parent.offsetWidth * (size / 100.0);
                var ret = [];
                ret['flex-basis'] = 'calc(' + calc_size_px + 'px - ' + gutterSize + 'px)';
                return ret;
            }
            return {};
        },
        gutterStyle: function(dimension, gutterSize) {
            return {
                'flex-basis': gutterSize + 'px',
                'min-width': gutterSize + 'px',
                'z-index': '80',
            }
        }
    })

    function collapseTree() {
        if (leftPanelReduced) {
            splitter.setSizes(leftPanelLastSize);
            expandedTree();
        } else {
            leftPanelLastSize = splitter.getSizes();
            splitter.collapse(0);
            leftPanelReduced = true;
            $jquery("#reduceLabel").text(">");
        }

    }

    function expandedTree() {
        leftPanelReduced = false;
        $jquery("#reduceLabel").text("<");
    }
    $jquery("#reduceLabel").click(() => {
        collapseTree();
    });

    /***********************/
    /*******SearchBar*******/
    document.getElementById("searchBar").addEventListener("keydown", (event) => {
        if (event.key == 'Escape')
            document.getElementById("searchBar").value = '';
    });

    var delayTimer;

    function doSearch(text) {
        clearTimeout(delayTimer);
        if (text.length < 3) {
            delayTimer = setTimeout(function() {
                $jquery("#tree").fancytree("getTree").clearFilter();
            }, 300);
        } else {
            delayTimer = setTimeout(function() {
                $jquery("#tree").fancytree("getTree").filterNodes(text);
            }, 300);
        }
    }

    $jquery("#searchBar").on('input', function(e) {
        doSearch($jquery("#searchBar").val());
    });
    /************************/
    /********Database********/
    db = remote.getGlobal("db");

    /************************/
    /********GM_Music********/
    gm_music = remote.getGlobal("gm_music");



    /************************/
    /********TreeView********/
    function myAfterCollapse(event, data) {
        if (data.node.children != null && data.node.children.length > 0) {
            data.node.resetLazy();
        }
        return true;
    }

    function myLazyLoad(event, data) {
        var node = data.node;
        var parent_key = node.key;


        var dfd = new $jquery.Deferred();
        data.result = dfd.promise();

        // We find children of that 'key' node
        var cursor = db.find({ parent: parent_key, deleted: false }).sort({ is_folder: -1, title: 1 });
        cursor.exec(function(err, docs) {
            // transformation of the data to fancytree format
            var loaded = docs.map((doc) => {
                var ret = {
                    title: doc.title,
                    folder: doc.is_folder,
                    key: doc._id,
                    lazy: doc.is_folder
                };
                if (doc.type != "none") {
                    ret.icon = doc.type;
                }
                return ret;
            });
            // checking new elements for children (to set or remove the lazy flag)
            var promises = loaded.filter(function(loaded_element) {
                return loaded_element.folder; // just check the folders
            }).map(function(loaded_element) {
                var dfd2 = new $jquery.Deferred();
                db.findOne({ parent: loaded_element.key, deleted: false }, function(err, doc) {
                    if (doc === null) {
                        loaded_element.lazy = false;
                    }
                    dfd2.resolve();
                });
                return dfd2.promise();
            });

            $jquery.when.apply($jquery, promises).then(function() {
                dfd.resolve(loaded);
            });
        });
    }

    function myTreeDblClick(event, data) {
        var node = data.node;
        if (data.targetType === 'title' || data.targetType === 'icon') {
            // console.log(data, event);
            if (node.icon == "music") {
                editMusic(data.node.key, data.node);
            } else if (node.icon == "sound") {
                editSound(data.node.key, data.node);
            }
        }
    }

    // ContextMenu
    var myTreeContextMenuFolder = $jquery("#treeViewContext");

    function myTreeContext(event, data) {
        var node = data.node;
        if (data.targetType === 'title' || data.targetType === 'icon') {
            if (node != null) {
                node.setActive(true);
                if (myTreeContextMenuFolder.length > 0) {
                    myTreeContextMenuFolder.data('contextData', data);

                    myTreeContextMenuFolder.find("x-menuitem[name='delete']")[0].disabled = false;
                    myTreeContextMenuFolder.find("x-menuitem[name='rename']")[0].disabled = false;
                    myTreeContextMenuFolder.find("x-menuitem[name='newFolder']")[0].disabled = false;
                    myTreeContextMenuFolder.find("x-menuitem[name='addMenu']")[0].disabled = false;
                    if (node.folder) {
                        if (node.key == "root") {
                            myTreeContextMenuFolder.find("x-menuitem[name='delete']")[0].disabled = true;
                            myTreeContextMenuFolder.find("x-menuitem[name='rename']")[0].disabled = true;
                        }
                    } else {
                        myTreeContextMenuFolder.find("x-menuitem[name='newFolder']")[0].disabled = true;
                        myTreeContextMenuFolder.find("x-menuitem[name='addMenu']")[0].disabled = true;
                    }
                    myTreeContextMenuFolder[0].open(event.clientX, event.clientY, node.span);
                }
            }
        }
    }
    myTreeContextMenuFolder.on("click", "x-menuitem[name='rename']", (event) => {
        var data = $jquery(event.delegateTarget).data('contextData');
        setTimeout(function() { data.node.editStart(); }, 30);
    });
    myTreeContextMenuFolder.on("click", "x-menuitem[name='newFolder']", (event) => {
        var data = $jquery(event.delegateTarget).data('contextData');
        setTimeout(function() { data.node.editCreateNode("child", { title: "", folder: true }); }, 30);

    });
    myTreeContextMenuFolder.on("click", "x-menuitem[name='delete']", (event) => {
        var data = $jquery(event.delegateTarget).data('contextData');
        node = data.node;
        var message = node.folder ?
            "Are you sure you want to delete this folder and all its content ?\n" :
            "Are you sure you want to delete this entry ?\n";
        var res = dialog.showMessageBox(win, {
            message: message,
            buttons: ["Yes", "No"],
            defaultId: 0,
            icon: './include/imgs/delete-file_40456.png'
        });
        if (res == 0) {
            // Update the doc to set the deleted flag to true
            $jquery(node.span).addClass("pending");
            db.update({ _id: node.key }, { $set: { deleted: true } }, {}, (err, numAffected) => {
                if (err != null) {
                    console.error(err);
                } else {
                    node.remove();
                }
                $jquery(node.span).removeClass("pending");
            });
        }
    });
    myTreeContextMenuFolder.on("click", "x-menuitem[name='addSound']", (event) => {
        var data = $jquery(event.delegateTarget).data('contextData');
        // setTimeout(function() { data.node.editCreateNode("child", { title: "", folder: true }); }, 30);

        var options = {
            title: "Import sound...",
            filters: [
                { name: 'Audio files', extensions: ['ogg', 'mp3', 'flac', 'wav'] },
            ],
            properties: ["openFile", "multiSelections"],
        }
        dialog.showOpenDialog(win, options, (filePaths) => {
            if (filePaths == null)
                return;

            for (var i = 0; i < filePaths.length; i++) {
                newJob("jobNewSound", { path: filePaths[i], parent_key: data.node.key });
            }
        });
    });
    myTreeContextMenuFolder.on("click", "x-menuitem[name='addMusic']", (event) => {
        var data = $jquery(event.delegateTarget).data('contextData');
        // setTimeout(function() { data.node.editCreateNode("child", { title: "", folder: true }); }, 30);

        var options = {
            title: "Import music...",
            filters: [
                { name: 'Audio files', extensions: ['ogg', 'mp3', 'flac', 'wav'] },
            ],
            properties: ["openFile", "multiSelections"],
        }
        dialog.showOpenDialog(win, options, (filePaths) => {
            if (filePaths == null)
                return;

            for (var i = 0; i < filePaths.length; i++) {
                newJob("jobNewMusic", { path: filePaths[i], parent_key: data.node.key });
            }
        });
    });




    $jquery("#tree").fancytree({
        source: [{
            title: "Library",
            key: "root",
            folder: true,
            lazy: true
        }, ],
        //tabindex: "",
        autoScroll: true,
        titlesTabbable: true,
        minExpandLevel: 2,
        toggleEffect: {
            effect: "blind",
            options: {
                direction: "vertical",
                scale: "box"
            },
            duration: 60
        },
        lazyLoad: myLazyLoad,
        collapse: myAfterCollapse,
        dblclick: myTreeDblClick,
        // click: myTreeClick,
        // clickUp: myTreeContext,
        contextmenu: myTreeContext,
        extensions: ["dnd", "filter", "edit"],


        edit: {
            beforeEdit: function(event, data) {
                // `data.node` is about to be edited.
                // Return false to prevent this.
                return (data.node.key != "root")
            },
            edit: function(event, data) {
                // `data.node` switched into edit mode.
                // The <input> element was created (available as jQuery object `data.input`) 
                // and contains the original `data.node.title`.
                data.input.select();
            },
            beforeClose: function(event, data) {
                // Editing is about to end (either cancel or save).
                // Additional information is available:
                // - `data.dirty`:    true if text was modified by user.
                // - `data.input`:    The input element (jQuery object).
                //                    `data.input.val()` returns the new node title.
                // - `data.isNew`:    true if this node was newly created using `editCreateNode()`.
                // - `data.orgTitle`: The previous node title text.
                // - `data.originalEvent`:
                //                    Contains the originating event (i.e. blur, mousdown, keydown).
                // - `data.save`:     false if saving is not required, i.e. user pressed  
                //                    cancel or text is unchanged.
                //                    This value may be changed to override default behavior.
                // Return false to prevent this (keep the editor open), for example when 
                // validations fail.
            },
            save: function(event, data) {
                // Only called when the text was modified and the user pressed enter or
                // the <input> lost focus.
                // Additional information is available (see `beforeClose`).
                // Return false to keep editor open, for example when validations fail.
                // Otherwise the user input is accepted as `node.title` and the <input> 
                // is removed.
                // Typically we would also issue an Ajax request here to send the new data 
                // to the server (and handle potential errors when the asynchronous request 
                // returns).
                var node = data.node;
                if (data.isNew) {
                    db.insert({ title: data.input.val(), is_folder: true, parent: node.parent.key, deleted: false }, function(err, newDocs) {
                        if (err != null) {
                            console.error(err);
                            node.remove();
                        }
                        node.key = newDocs._id;
                        $jquery(node.span).removeClass("pending");
                    });
                } else {
                    db.update({ _id: node.key }, { $set: { title: data.input.val() } }, {}, (err, numAffected) => {
                        if (err != null) {
                            console.error(err);
                            node.setTitle(data.orgTitle);
                        }
                        $jquery(node.span).removeClass("pending");
                    });
                }
                return true;
            },
            close: function(event, data) {
                // Editor was removed.
                // Additional information is available (see `beforeClose`).
                if (data.save) {
                    $jquery(data.node.span).addClass("pending");
                }
            }
        },



        dnd: {
            // Available options with their default:
            autoExpandMS: 400, // Expand nodes after n milliseconds of hovering
            draggable: { // modify default jQuery draggable options
                zIndex: 1000,
                scroll: true,
                // containment: $("#tree")
                containment: "parent",
                revert: "invalid",
                revertDuration: 150,
            },
            droppable: null, // Additional options passed to jQuery UI droppable
            dropMarkerOffsetX: -24, // absolute position offset for .fancytree-drop-marker
            // relatively to ..fancytree-title (icon/img near a node accepting drop)
            dropMarkerInsertOffsetX: -16, // additional offset for drop-marker with hitMode = "before"/"after"
            focusOnClick: true, // Focus, although draggable cancels mousedown event (#270)
            preventRecursiveMoves: true, // Prevent dropping nodes on own descendants
            preventVoidMoves: true, // Prevent dropping nodes 'before self', etc.
            smartRevert: true, // set draggable.revert = true if drop was rejected

            // Events that make tree nodes draggable
            dragStart: function(node, data) {
                if (node.key == "root") {
                    return false;
                }
                return true;
            },
            dragStop: (sourceNode, data) => {
                return true
            },
            initHelper: (sourceNode, data) => {
                return false
            },
            updateHelper: (sourceNode, data) => {
                return false
            },

            // Events that make tree nodes accept draggables
            dragEnter: (targetNode, data) => {
                /* Return 'over', 'before, or 
                'after' to force a hitMode.*/
                if (targetNode != null && !targetNode.folder)
                    return false;
                return 'over';
            },
            dragExpand: (targetNode, data) => {
                //return false to prevent autoExpand
                if (data.otherNode != null && data.otherNode.key == targetNode.key)
                    return false;
                return true
            },
            dragOver: (targetNode, data) => {
                return true
            },
            dragDrop: (targetNode, data) => {
                data.otherNode.moveTo(targetNode, data.hitMode).then(() => {
                    //
                    db.update({ _id: data.otherNode.key }, { $set: { parent: targetNode.key } }, {}, () => {
                        targetNode.setExpanded(true);

                        targetNode.sortChildren((a, b) => {
                            if (a.folder != b.folder) {
                                return a.folder ? -1 : 1;
                            }
                            var x = a.title.toLowerCase(),
                                y = b.title.toLowerCase();
                            return x === y ? 0 : x > y ? 1 : -1;
                        });
                        doSearch($jquery("#searchBar").val());


                    });
                });
            },
            dragLeave: (targetNode, data) => {
                return true
            }
        },
        filter: { // override default settings
            counter: true, // No counter badges
            hideExpandedCounter: false,
            highlight: false,
            fuzzy: true,
            autoExpand: false,
            mode: "dimm", // "dimm": Grayout unmatched nodes, "hide": remove unmatched nodes
        },
    });
    var invisibleRootNode = $jquery("#tree").fancytree("getRootNode");
    if (invisibleRootNode) {
        rootNode = invisibleRootNode.getFirstChild();
        rootNode.setExpanded();
    }

    /*************************/
    /**** Filter the Tree ****/
    var KeyNoData = "__not_found__",
        escapeHtml = $jquery.ui.fancytree.escapeHtml;

    function _escapeRegex(str) {
        return (str + "").replace(/([.?*+\^\$\[\]\\(){}|-])/g, "\\$1");
    }
    // We override the filter function of the fancytree lib.
    $jquery.ui.fancytree._FancytreeClass.prototype._applyFilterImpl = function(filter, branchMode, _opts) {
        if (typeof filter !== "string") {
            console.error('Argument type not handled ! String expected, got', typeof filter);
            return;
        }
        this.enableFilter = true;
        this.lastFilterArgs = [filter, false, undefined];

        branchMode = false;
        var match, statusNode, re, reHighlight,
            count = 0,
            treeOpts = this.options,
            escapeTitles = treeOpts.escapeTitles,
            prevAutoCollapse = treeOpts.autoCollapse,
            opts = $jquery.extend({}, treeOpts.filter, _opts),
            hideMode = opts.mode === "hide",
            leavesOnly = !!opts.leavesOnly && !branchMode;

        var that = this;
        var nodePrototype = Object.getPrototypeOf(that.widget.getNodeByKey("root"));
        match = _escapeRegex(filter); // make sure a '.' is treated literally


        db.find({ is_folder: true, deleted: false }, function(err, docs) {
            // 1. We first get the folders from the DB to link unloaded files to tree nodes
            docs = docs.map((doc) => {
                var _doc = JSON.parse(JSON.stringify(doc))
                _doc.parent_key = doc.parent;
                _doc.parent = null;
                return _doc;
            });

            // 1.1. We create a map of doc_id -> doc_object
            var nodeMap = {};
            $jquery.each(docs, function(i, c) {
                nodeMap[c._id] = c;
            });

            // 1.2. We populate the docs parent field
            for (var i = 0; i < docs.length; i++) {
                // docs[i].obj = that.widget.getNodeByKey(docs[i]._id);
                docs[i].parent = that.widget.getNodeByKey(docs[i].parent_key)
                if (docs[i].parent == null) {
                    docs[i].parent = nodeMap[docs[i].parent_key];
                }
            }
            lookup_node_table = docs;

            // 2. We get actual data from the DB
            db.find({ title: { $regex: match, $options: "i" }, deleted: false }, function(err, docs) {
                resetCurrentFilter();

                for (var i = 0; i < docs.length; i++) {
                    var node = that.widget.getNodeByKey(docs[i]._id);
                    if (node != null) {
                        nodeMatched(node, true);
                        continue;
                    }
                    node = getFirstValidParentNode(docs[i]);
                    if (node != null)
                        nodeMatched(node);
                }

                renderCurrentFilter();
                // @todo (return the number of found elements in a promise?)
            });

            function getFirstValidParentNode(node) {
                var parent = that.widget.getNodeByKey(node.parent);
                if (parent != null) return parent;
                parent = nodeMap[node.parent];
                while (parent != null && Object.getPrototypeOf(parent) !== nodePrototype) {
                    parent = parent.parent;
                }
                return parent;
            }

            function nodeMatched(node, direct = false) {
                count++;
                if (direct) node.match = true;
                else node.subMatchCount += 1;
                node.visitParents(function(p) {
                    p.subMatchCount += 1;
                    // Expand match (unless this is no real match, but only a node in a matched branch)
                    if (opts.autoExpand && !matchedByBranch && !p.expanded) {
                        p.setExpanded(true, { noAnimation: true, noEvents: true, scrollIntoView: false });
                        p._filterAutoExpanded = true;
                    }
                });
            }

        });

        // Function def...
        function resetCurrentFilter() {
            that.$div.addClass("fancytree-ext-filter");
            if (hideMode) {
                that.$div.addClass("fancytree-ext-filter-hide");
            } else {
                that.$div.addClass("fancytree-ext-filter-dimm");
            }
            that.$div.toggleClass("fancytree-ext-filter-hide-expanders", !!opts.hideExpanders);
            // Reset current filter
            that.visit(function(node) {
                delete node.match;
                delete node.titleWithHighlight;
                node.subMatchCount = 0;
            });
            statusNode = that.getRootNode()._findDirectChild(KeyNoData);
            if (statusNode) {
                statusNode.remove();
            }
        }

        function renderCurrentFilter() {
            if (count === 0 && opts.nodata && hideMode) {
                statusNode = opts.nodata;
                if ($jquery.isFunction(statusNode)) {
                    statusNode = statusNode();
                }
                if (statusNode === true) {
                    statusNode = {};
                } else if (typeof statusNode === "string") {
                    statusNode = { title: statusNode };
                }
                statusNode = $jquery.extend({
                    statusNodeType: "nodata",
                    key: KeyNoData,
                    title: that.options.strings.noData
                }, statusNode);

                that.getRootNode().addNode(statusNode).match = true;
            }
            // Redraw whole tree
            that.render();
        }

        return count;
    };


    /**********************/
    /*     LoopFinder     */

    var spawn = require('child_process').spawn;

    function loopFinder() {
        var child = spawn('loopFinder.exe', ['Yuki Kajiura - I talk to the rain.ogg', './'], { cwd: './include/loopfinder/' });

        child.stdout.on('data', data => {
            console.log(`stdout: ${data}`);
        });

        // or if you want to send output elsewhere
        // child.stdout.pipe(dest);
    }
    // loopFinder();


    /*************************/
    /*   Import Assistant    */
    const url = require('url')

    function createAssistantWindow() {
        assistWin = new remote.BrowserWindow({
            'parent': remote.getCurrentWindow(),
            'modal': true,
            'width': 800,
            'height': 600,
            'frame': true,
            'show': true,
            'backgroundColor': '#FFF',
            'transparent': false,
            'fullscreenable': false,
            'resizable': false,
            'minimizable': false,
            'maximizable': false,
            'skipTaskbar': true,

        });
        assistWin.loadURL(url.format({
            pathname: path.join(__dirname, 'assistant.html'),
            protocol: 'file:',
            slashes: true
        }));
    }
    // createAssistantWindow();

    /************************/
    /*        Worker        */
    function createWorkerWindow() {
        workerWin = new remote.BrowserWindow({
            'parent': remote.getCurrentWindow(),
            'modal': false,
            'width': 800,
            'height': 600,
            'frame': true,
            'show': false,
            'backgroundColor': '#FFF',
            'transparent': false,
            'fullscreenable': false,
            'resizable': false,
            'minimizable': true,
            'maximizable': false,
            'skipTaskbar': false,
        });
        workerWin.loadURL(url.format({
            pathname: path.join(__dirname, 'worker.html'),
            protocol: 'file:',
            slashes: true
        }));
    }
    $jquery("#myButton").click(() => {
        $jquery("#workInfo").toggleClass('active');
    });

    createWorkerWindow();
    window.onbeforeunload = (e) => {
        newJob("jobClose", "");
    }
    $jquery("#workInfoImg").click(() => {
        $jquery("#workInfoImg").removeClass('error');
        workerWin.show();
    });
    ipc.on('worker_msg', (event, message) => {
        var message = JSON.parse(message);
        switch (message.type) {
            case 'error':
                console.error("workerError!", message.data);
                $jquery("#workInfoImg").addClass('error');
                break;
            case 'file_imported':
                var parent_node = $jquery("#tree").fancytree("getTree").getNodeByKey(message.data.parent_key);
                if (parent_node == null || (parent_node.lazy && parent_node.children == null))
                    return;
                parent_node.addNode({
                    title: message.data.title,
                    folder: false,
                    key: message.data.key,
                    lazy: false,
                    icon: message.data.type,
                });
                break;
                // case 'music_loaded':
                //     MusicSlots[message.data.slot]['musicLoaded']();
                //     break;
                // case 'music_unloaded':
                //     setFreeMusicSlot(message.data.slot);
                //     break;
            case 'working':
                // console.log("worker working...", message.data);
                if (message.data > 0) {
                    $jquery("#workInfoImg").addClass('active');
                } else {
                    $jquery("#workInfoImg").removeClass('active');
                }
                break;
        }
    });
    workerWin.webContents.on('dom-ready', function() {
        workerWinReady = true;
    });

    /************************/
    /*** Show the app div ***/
    document.body.classList.add('loaded');


    // $jquery("#right-panel").append(getModule("mixerElement", {id: 10, volume: 7}));
    // $jquery("#right-panel").append(getModule("mixerElement"));
    // $jquery("#right-panel").append(getModule("mixerElement"));
    // $jquery("#right-panel").append(getModule("mixerElement"));
    // $jquery("#music_edit").append(getModule("musicEdit"));

    ///////////

});


var workerWinReady = false;

function newJob(type, data) {
    if (workerWinReady) {
        workerWin.webContents.send('newJob', JSON.stringify({ type: type, data: data }));
    } else {
        console.error("Tried to create a job before the worker being ready !")
    }
}

var rightPanelElement = null;

function rightPanelShow($elem) {
    if (rightPanelElement) {
        rightPanelElement.hide();
        rightPanelElement.find(".module").each((index, _elem) => {
            _$elem = $jquery(_elem);
            ModuleFuncs[_$elem.data('moduleName')].onhide(_$elem);
        });
    }
    rightPanelElement = $elem;
    $elem.show();
}

function editMusic(filename, node) {
    $elem = $jquery("#musicEditContainer");
    $elem.empty();
    rightPanelShow($elem);
    $elem.append(getModule("musicEdit", { filename: filename, node: node }));
}

function editSound(filename, node) {
    $elem = $jquery("#soundEditContainer");
    $elem.empty();
    rightPanelShow($elem);
    $elem.append(getModule("soundEdit", { filename: filename, node: node }));
}


MusicSlots = [];
MusicSlotsSize = 32;

function getFreeMusicSlot(handler) {
    for (var i = 0; i < MusicSlotsSize; i++) {
        if (MusicSlots[i] == null) {
            MusicSlots[i] = handler || true;
            console.log("LOAD", i);
            return i;
        }
    }
    return null;
}

function setFreeMusicSlot(slot) {
    MusicSlots[slot] = null;
    console.log("FREE", slot);
}


// Debug Functions
function sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) { /* do nothing */ }
}