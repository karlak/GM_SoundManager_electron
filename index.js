const electron = require('electron');
const ipc = electron.ipcRenderer;
const remote = electron.remote;
const app = remote.app;
const win = remote.getCurrentWindow();

const Datastore = remote.require('nedb')
const path = require('path');
var db;

// Prevents the middle click scroll behavior
document.body.onmousedown = e => { if (e.button === 1) return false; };

function check_position() {
    var pos = win.getPosition();
    if(pos[0]==-4000&&pos[1]==-4000){win.center();}
}

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

function update_cpuusage(argument) {
    cpu = remote.process.getCPUUsage();
    document.getElementById("cpuusage").innerHTML = "[CPU "+cpu.percentCPUUsage.toFixed(2) + "%]";
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
    var t=setInterval(update_cpuusage,1000);
    
    /******* Splitter ******/
    const element_split_parent = document.querySelector("#split-parent");

    Split(['#left-panel', '#right-panel'], {
        gutterSize: 5,
        snapOffset: 0,
        elementStyle: function (dimension, size, gutterSize, num=-1) {
                // console.log(num);
                if (typeof size === 'string' || size instanceof String) {
                    if (size.indexOf('%')>0 || size.indexOf('px')>0) {
                        var ret = [];
                        ret['flex-basis'] = 'calc(' + size + ' - ' + gutterSize + 'px)';
                        return ret;
                    }
                    return {};
                }

                if(num==0){
                    var calc_size_px = element_split_parent.offsetWidth * (size / 100.0);
                    var ret = [];
                    ret['flex-basis'] = 'calc(' + calc_size_px + 'px - ' + gutterSize + 'px)';
                    return ret;
                }
                return {};
            },
            gutterStyle: function (dimension, gutterSize) {
                return {
                    'flex-basis':  gutterSize + 'px',
                    'min-width': gutterSize + 'px'
                }
            }
        })
    /***********************/
    /*******SearchBar*******/
    document.getElementById("searchBar").addEventListener("keydown", (event) => {
        if(event.key=='Escape')
            document.getElementById("searchBar").value = '';
    });

    /************************/
    /********Database********/
    let db_filename = path.join(app.getPath('userData'), 'something.db');
    db = new Datastore({ filename: db_filename, autoload: true});
    //db.insert({hello:'world!'});
    // db.persistence.compactDatafile();
    // db.find({}, function (err, docs) {
    //     console.log(docs);
    // });


    /************************/
    /********TreeView********/
    function myLazyLoad(event, data) {
        var node = data.node;
        var parent_key = node.key;
        console.log("Lazy load for key: ", parent_key);

        
        var dfd = new $.Deferred();
        data.result = dfd.promise();
        
        db.find({ parent: parent_key }, function (err, docs) {
            var loaded = docs.map((doc)=>{
                return { title: doc.title, folder: doc.is_folder, key: doc._id, lazy: doc.is_folder};
            })
            console.log("Loaded: ", loaded);
            dfd.resolve(loaded);
        });
    }
    $("#tree").fancytree({
        source: [
        {title: "Library", key: "root", folder: true, lazy: true},
        ],
        //tabindex: "",
        autoScroll: true,
        titlesTabbable: true,
        minExpandLevel: 2,
        toggleEffect: { effect: "blind", options: {direction: "vertical", scale: "box"}, duration: 60 },
        lazyLoad: myLazyLoad,
        extensions: ["dnd"],
        dnd: {
            // Available options with their default:
            autoExpandMS: 400,          // Expand nodes after n milliseconds of hovering
            draggable: {                // modify default jQuery draggable options
                zIndex: 1000,
                scroll: true,
                containment: "parent",
                revert: "invalid"
            },
            droppable: null,            // Additional options passed to jQuery UI droppable
            dropMarkerOffsetX: -24,     // absolute position offset for .fancytree-drop-marker
                                        // relatively to ..fancytree-title (icon/img near a node accepting drop)
            dropMarkerInsertOffsetX: -16, // additional offset for drop-marker with hitMode = "before"/"after"
            focusOnClick: true,        // Focus, although draggable cancels mousedown event (#270)
            preventRecursiveMoves: true,// Prevent dropping nodes on own descendants
            preventVoidMoves: true,     // Prevent dropping nodes 'before self', etc.
            smartRevert: true,          // set draggable.revert = true if drop was rejected

            // Events that make tree nodes draggable
            dragStart: function(node, data) {
                if(node.key == "root") {return false;}
                return true;
            },
            dragStop:     (sourceNode, data)=>{return true},
            initHelper:   (sourceNode, data)=>{return false},
            updateHelper: (sourceNode, data)=>{return false},

            // Events that make tree nodes accept draggables
            dragEnter: (targetNode, data)=> {
                /* Return 'over', 'before, or 
                'after' to force a hitMode.*/
                if(targetNode!=null && !targetNode.folder)
                    return false;
                return 'over';
            },            
            dragExpand: (targetNode, data)=> {
                //return false to prevent autoExpand
                if(data.otherNode != null && data.otherNode.key == targetNode.key)
                    return false;
                return true
            },           
            dragOver: (targetNode, data)=>{return true},
            dragDrop: (targetNode, data)=>{
                data.otherNode.moveTo(targetNode, data.hitMode);
            },
            dragLeave: (targetNode, data)=>{return true}
        },
    });
    var invisibleRootNode = $("#tree").fancytree("getRootNode");
    if( invisibleRootNode ){
        rootNode = invisibleRootNode.getFirstChild();
        rootNode.setExpanded();
    }

    /************************/
    /*** Show the app div ***/
    document.body.classList.add('loaded');

});











