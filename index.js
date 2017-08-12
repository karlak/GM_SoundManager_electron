const electron = require('electron');
const ipc = electron.ipcRenderer;
const remote = electron.remote;
const app = remote.app;
const win = remote.getCurrentWindow();

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
    var t = setInterval(update_cpuusage, 1000);

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

    /************************/
    /********Database********/
    let db_filename = path.join(app.getPath('userData'), 'something.db');
    db = new Datastore({
        filename: db_filename,
        autoload: true
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
        var cursor = db.find({parent: parent_key}).sort({is_folder: -1, title: 1});
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
                db.findOne({
                    parent: loaded_element.key
                }, function(err, doc) {
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
        extensions: ["dnd", "filter"],
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
            mode: "dimm", // "dimm": Grayout unmatched nodes, "hide": remove unmatched nodes
        },
    });
    var invisibleRootNode = $jquery("#tree").fancytree("getRootNode");
    if (invisibleRootNode) {
        rootNode = invisibleRootNode.getFirstChild();
        rootNode.setExpanded();
    }
    $jquery("#myButton").click(()=>{
        $jquery("#tree").fancytree("getTree").filterNodes("title");
    });
    /*************************/
    /**** Filter the Tree ****/
    /*var KeyNoData = "__not_found__",
    escapeHtml = $jquery.ui.fancytree.escapeHtml;

    function _escapeRegex(str){
        return (str + "").replace(/([.?*+\^\$\[\]\\(){}|-])/g, "\\$1");
    }

    function extractHtmlText(s){
        if( s.indexOf(">") >= 0 ) {
            return $jquery("<div/>").html(s).text();
        }
        return s;
    }
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

        
        if(typeof filter === "string"){
            match = _escapeRegex(filter); // make sure a '.' is treated literally
            re = new RegExp(match);
            filter = function(node){

                db.find({title: /title/ }, function(err, docs) {
                    console.log($);
                    console.log($jquery);
                    console.log("testing node ", node.title, " with ", re)
                    console.log('Found ', docs);
                    console.log('Len ', docs.length);
                });
                //cursor.exec(function(err, docs) {
                return true;

                // var display,
                // text = node.title,
                // res = !!re.test(text);
                // return res;
            };
        }


        
        this.$div.addClass("fancytree-ext-filter");
        if( hideMode ){
            this.$div.addClass("fancytree-ext-filter-hide");
        } else {
            this.$div.addClass("fancytree-ext-filter-dimm");
        }
        this.$div.toggleClass("fancytree-ext-filter-hide-expanders", !!opts.hideExpanders);
        // Reset current filter
        this.visit(function(node){
            delete node.match;
            delete node.titleWithHighlight;
            node.subMatchCount = 0;
        });
        statusNode = this.getRootNode()._findDirectChild(KeyNoData);
        if( statusNode ) {
            statusNode.remove();
        }

        // Adjust node.hide, .match, and .subMatchCount properties
        treeOpts.autoCollapse = false;  // #528

        this.visit(function(node){
            if ( leavesOnly && node.children != null ) {
                return;
            }
            var res = filter(node),
            matchedByBranch = false;

            if( res === "skip" ) {
                node.visit(function(c){
                    c.match = false;
                }, true);
                return "skip";
            }
            if( res ) {
                count++;
                node.match = true;
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
        treeOpts.autoCollapse = prevAutoCollapse;

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
                title: this.options.strings.noData
            }, statusNode);

            this.getRootNode().addNode(statusNode).match = true;
        }
        // Redraw whole tree
        this.render();
        return count;
    };*/


    // $("#tree").fancytree("getTree").filterNodes("title", { autoExpand: false, leavesOnly: true });
    // $("#tree").fancytree("getTree").filterBranches("title");
    /************************/
    /*** Show the app div ***/
    document.body.classList.add('loaded');

});