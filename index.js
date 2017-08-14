const electron = require('electron');
const ipc = electron.ipcRenderer;
const remote = electron.remote;
const app = remote.app;
const win = remote.getCurrentWindow();
const dialog = remote.dialog;
// const menu = remote.Menu;

const Datastore = remote.require('./include/nedb')
const path = require('path');
var db;

// Prevents the middle click scroll behavior
document.body.onmousedown = e => {
    if (e.button === 1) return false;
};

function check_position() {
    var pos = win.getPosition();
    if (pos[0] == -4000 && pos[1] == -4000) {
        win.center();
    }
}

function minimize() {
    win.minimize();
}

function maximize() {
    if (win.isMaximized()) {
        win.unmaximize();
        check_position();
    } else {
        win.maximize();
    }

}

function closewindow() {
    win.close();
}

function update_cpuusage(argument) {
    cpu = remote.process.getCPUUsage();
    document.getElementById("cpuusage").innerHTML = "[CPU " + cpu.percentCPUUsage.toFixed(2) + "%]";
}

///////////////////////////////////////
///////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
    win.show();
    check_position();

    ipc.on('maximize', (event, message) => {
        document.getElementById("titlebar").classList.add('maximized');
    })
    ipc.on('unmaximize', (event, message) => {
        document.getElementById("titlebar").classList.remove('maximized');
    })
    // var t = setInterval(update_cpuusage, 1000);

    /***********************/
    /******* Splitter ******/
    const element_split_parent = document.querySelector("#split-parent");

    Split(['#left-panel', '#right-panel'], {
        gutterSize: 5,
        snapOffset: 0,
        elementStyle: function(dimension, size, gutterSize, num = -1) {
            // console.log(num);
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
                'min-width': gutterSize + 'px'
            }
        }
    })
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
        }
        else{
            delayTimer = setTimeout(function() {
                $jquery("#tree").fancytree("getTree").filterNodes(text);
            }, 300);
        }
    }

    $jquery("#searchBar").on('input',function(e){
        doSearch($jquery("#searchBar").val());
    });
    /************************/
    /********Database********/
    let db_filename = path.join(app.getPath('userData'), 'something.db');
    db = new Datastore({
        filename: db_filename,
        autoload: true,
        compareStrings: "localeCompare",
    });
    //db.insert({hello:'world!'});
    // db.persistence.compactDatafile();
    // db.find({}, function (err, docs) {
    //     console.log(docs);
    // });


    /************************/
    /********TreeView********/
    function myAfterCollapse(event, data) {
        if (data.node.children != null && data.node.children.length > 0) {
            console.log("resetLazy");
            data.node.resetLazy();
        }
        return true;
    }

    function myLazyLoad(event, data) {
        var node = data.node;
        var parent_key = node.key;
        console.log("Lazy load for key: ", parent_key);


        var dfd = new $jquery.Deferred();
        data.result = dfd.promise();

        // We find children of that 'key' node
        var cursor = db.find({parent: parent_key, deleted: false}).sort({is_folder: -1, title: 1});
        cursor.exec(function(err, docs) {
            // transformation of the data to fancytree format
            var loaded = docs.map((doc) => {
                return {
                    title: doc.title,
                    folder: doc.is_folder,
                    key: doc._id,
                    lazy: doc.is_folder
                };
            });
            // checking new elements for children (to set or remove the lazy flag)
            var promises = loaded.filter(function(loaded_element) {
                return loaded_element.folder; // just check the folders
            }).map(function(loaded_element) {
                var dfd2 = new $jquery.Deferred();
                db.findOne({parent: loaded_element.key, deleted: false}, function(err, doc) {
                    if (doc === null) {
                        loaded_element.lazy = false;
                    }
                    dfd2.resolve();
                });
                return dfd2.promise();
            });
            // console.log("promises: ", promises);

            $jquery.when.apply($jquery, promises).then(function() {
                dfd.resolve(loaded);
            });
        });
    }
    
    // ContextMenu
    var myTreeContextMenuFolder = $jquery("#treeViewContext");
    function myTreeContext(event, data) {
        var node = data.node;
        if(data.targetType==='title' || data.targetType==='icon'){
            if(node != null){
                node.setActive(true);
                if(myTreeContextMenuFolder.length > 0){
                    myTreeContextMenuFolder.data('contextData', data);

                    myTreeContextMenuFolder.find("x-menuitem[name='delete']")[0].disabled = false;
                    myTreeContextMenuFolder.find("x-menuitem[name='rename']")[0].disabled = false;
                    myTreeContextMenuFolder.find("x-menuitem[name='newFolder']")[0].disabled = false;
                    if(node.folder){
                        if(node.key == "root"){
                            myTreeContextMenuFolder.find("x-menuitem[name='delete']")[0].disabled = true;
                            myTreeContextMenuFolder.find("x-menuitem[name='rename']")[0].disabled = true;
                        }
                    }
                    else{
                        myTreeContextMenuFolder.find("x-menuitem[name='newFolder']")[0].disabled = true;
                    }
                    // console.log(node);
                    myTreeContextMenuFolder[0].open(event.clientX, event.clientY, node.span);
                }
            }
        }
    }
    myTreeContextMenuFolder.on("click", "x-menuitem[name='rename']", (event)=>{
        console.log('renaaaame');
        var data = $jquery(event.delegateTarget).data('contextData');
        console.log(data);
        setTimeout(function() { data.node.editStart(); }, 30);
    });
    myTreeContextMenuFolder.on("click", "x-menuitem[name='newFolder']", (event)=>{
        var data = $jquery(event.delegateTarget).data('contextData');
        // data.node.editStart();
        setTimeout(function() { data.node.editCreateNode("child", {title: "",folder: true}); }, 30);
        
    });
    myTreeContextMenuFolder.on("click", "x-menuitem[name='delete']", (event)=>{
        var data = $jquery(event.delegateTarget).data('contextData');
        node = data.node;
        // console.log(data)
        var message = node.folder ? 
                "Are you sure you want to delete this folder and all its content ?\n" :
                "Are you sure you want to delete this entry ?\n";
        var res = dialog.showMessageBox(win, {
            message: message,
            buttons: ["Yes", "No"],
            defaultId: 0,
            icon: './include/imgs/delete-file_40456.png'
        });
        if(res == 0){
            // Update the doc to set the deleted flag to true
            console.log('delete !');
            $jquery(node.span).addClass("pending");
            db.update({_id: node.key}, {$set: {deleted: true}}, {}, (err, numAffected)=>{
                if(err != null){
                    console.error(err);
                }
                else{
                    node.remove();
                }
                $jquery(node.span).removeClass("pending");
            });
        }
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
        // click: myTreeClick,
        // clickUp: myTreeContext,
        contextmenu: myTreeContext,
        extensions: ["dnd", "filter", "edit"],


        edit: {
            beforeEdit: function(event, data){
                // `data.node` is about to be edited.
                // Return false to prevent this.
                return (data.node.key != "root")
            },
            edit: function(event, data){
                // `data.node` switched into edit mode.
                // The <input> element was created (available as jQuery object `data.input`) 
                // and contains the original `data.node.title`.
                data.input.select();
            },
            beforeClose: function(event, data){
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
            save: function(event, data){
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
                if(data.isNew){
                    db.insert({title: data.input.val(), is_folder: true, parent: node.parent.key, deleted: false}, function (err, newDocs) {
                        if(err != null){
                            console.error(err);
                            node.remove();
                        }
                        node.key = newDocs._id;
                        $jquery(node.span).removeClass("pending");
                    });
                }
                else{
                    db.update({_id: node.key}, {$set: {title: data.input.val()}}, {}, (err, numAffected)=>{
                        if(err != null){
                            console.error(err);
                            node.setTitle(data.orgTitle);
                        }
                        $jquery(node.span).removeClass("pending");
                    });
                }
                return true;
            },
            close: function(event, data){
                // Editor was removed.
                // Additional information is available (see `beforeClose`).
                if( data.save ) {
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
                    targetNode.sortChildren();
                    targetNode.setExpanded(true);
                    db.update({
                        _id: data.otherNode.key
                    }, {
                        $set: {
                            parent: targetNode.key
                        }
                    }, {});
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

    function _escapeRegex(str){
        return (str + "").replace(/([.?*+\^\$\[\]\\(){}|-])/g, "\\$1");
    }
    // We override the filter function of the fancytree lib.
    $jquery.ui.fancytree._FancytreeClass.prototype._applyFilterImpl = function(filter, branchMode, _opts){
        // console.log(arguments);
        if(typeof filter !== "string"){
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
        

        db.find({is_folder: true, deleted: false}, function(err, docs) {
            // 1. We first get the folders from the DB to link unloaded files to tree nodes
            docs = docs.map((doc)=>{
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
                if(docs[i].parent == null){
                    docs[i].parent = nodeMap[docs[i].parent_key];
                }
            }
            lookup_node_table = docs;

            // 2. We get actual data from the DB
            db.find({title: {$regex: match}, deleted: false}, function(err, docs) {
                resetCurrentFilter();

                for (var i = 0; i < docs.length; i++) {
                    var node = that.widget.getNodeByKey(docs[i]._id);
                    if(node != null) {
                        nodeMatched(node, true);
                        continue;
                    }
                    node = getFirstValidParentNode(docs[i]);
                    if(node != null)
                        nodeMatched(node);
                }
                
                renderCurrentFilter();
                // console.log('Found', count, 'elements !');
                // @todo (return the number of found elements in a promise)
            });

            function getFirstValidParentNode(node) {
                var parent = that.widget.getNodeByKey(node.parent);
                if(parent != null) return parent;
                parent = nodeMap[node.parent];
                while(parent != null && Object.getPrototypeOf(parent) !== nodePrototype){
                    parent = parent.parent;
                }
                return parent;
            }

            function nodeMatched(node, direct = false){
                count++;
                if(direct) node.match = true;
                else node.subMatchCount += 1;
                node.visitParents(function(p){
                    p.subMatchCount += 1;
                    // Expand match (unless this is no real match, but only a node in a matched branch)
                    if( opts.autoExpand && !matchedByBranch && !p.expanded ) {
                        p.setExpanded(true, {noAnimation: true, noEvents: true, scrollIntoView: false});
                        p._filterAutoExpanded = true;
                    }
                });
            }

        });

        // Function def...
        function resetCurrentFilter(){
            that.$div.addClass("fancytree-ext-filter");
            if( hideMode ){
                that.$div.addClass("fancytree-ext-filter-hide");
            } else {
                that.$div.addClass("fancytree-ext-filter-dimm");
            }
            that.$div.toggleClass("fancytree-ext-filter-hide-expanders", !!opts.hideExpanders);
            // Reset current filter
            that.visit(function(node){
                delete node.match;
                delete node.titleWithHighlight;
                node.subMatchCount = 0;
            });
            statusNode = that.getRootNode()._findDirectChild(KeyNoData);
            if( statusNode ) {
                statusNode.remove();
            }
        }
        function renderCurrentFilter(){
            if( count === 0 && opts.nodata && hideMode ) {
                statusNode = opts.nodata;
                if( $jquery.isFunction(statusNode) ) {
                    statusNode = statusNode();
                }
                if( statusNode === true ) {
                    statusNode = {};
                } else if( typeof statusNode === "string" ) {
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


    // $("#tree").fancytree("getTree").filterNodes("title", { autoExpand: false, leavesOnly: true });
    // $("#tree").fancytree("getTree").filterBranches("title");
    /************************/
    /*** Show the app div ***/
    document.body.classList.add('loaded');

});


// Debug Functions
function sleepFor( sleepDuration ){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}