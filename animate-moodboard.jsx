////////////////////////////////////////////////////////////////////////////
//
// MICHAEL MÜLLER
// Copyright 2023 Michael Müller
// All Rights Reserved
//
/////////////////////////////////////////////////////////////////////////////


//variables
var guidePos = 500;
var guideHorizontal = false;

function createDockableUI(thisObj) {
    var dialog =
        thisObj instanceof Panel
            ? thisObj
            : new Window("window", undefined, undefined, { resizeable: true });
    dialog.onResizing = dialog.onResize = function() {
        this.layout.resize();
    };
    return dialog;
}

function showWindow(myWindow) {
    if (myWindow instanceof Window) {
        myWindow.center();
        myWindow.show();
    }
    if (myWindow instanceof Panel) {
        myWindow.layout.layout(true);
        myWindow.layout.resize();
    }
}

// var win = createDockableUI(this);


/*
Code for Import https://scriptui.joonas.me — (Triple click to select): 
{"activeId":0,"items":{"item-0":{"id":0,"type":"Dialog","parentId":false,"style":{"enabled":true,"varName":null,"windowType":"Dialog","creationProps":{"su1PanelCoordinates":false,"maximizeButton":false,"minimizeButton":false,"independent":false,"closeButton":true,"borderless":false,"resizeable":false},"text":"Dialog","preferredSize":[0,0],"margins":16,"orientation":"column","spacing":10,"alignChildren":["center","top"]}},"item-1":{"id":1,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"guides","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Guidelines","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-7":{"id":7,"type":"Panel","parentId":0,"style":{"enabled":true,"varName":"layouts","creationProps":{"borderStyle":"etched","su1PanelCoordinates":false},"text":"Create Layouts","preferredSize":[0,0],"margins":10,"orientation":"column","spacing":10,"alignChildren":["left","top"],"alignment":null}},"item-8":{"id":8,"type":"EditText","parentId":13,"style":{"enabled":true,"varName":"config","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"Configuration for guidelines","justify":"left","preferredSize":[245,0],"alignment":null,"helpTip":null}},"item-9":{"id":9,"type":"EditText","parentId":11,"style":{"enabled":true,"varName":"pos","creationProps":{"noecho":false,"readonly":false,"multiline":false,"scrollable":false,"borderless":false,"enterKeySignalsOnChange":false},"softWrap":false,"text":"Guideline position","justify":"left","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-10":{"id":10,"type":"Checkbox","parentId":11,"style":{"enabled":true,"varName":"horizontal","text":"make horizontal","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-11":{"id":11,"type":"Group","parentId":1,"style":{"enabled":true,"varName":"ctrl","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-12":{"id":12,"type":"Button","parentId":1,"style":{"enabled":true,"varName":"guideBtn","text":"Create Guideline","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}},"item-13":{"id":13,"type":"Group","parentId":7,"style":{"enabled":true,"varName":"ctrl","preferredSize":[0,0],"margins":0,"orientation":"row","spacing":10,"alignChildren":["left","center"],"alignment":null}},"item-14":{"id":14,"type":"Button","parentId":7,"style":{"enabled":true,"varName":"layoutBtn","text":"Create Layout","justify":"center","preferredSize":[0,0],"alignment":null,"helpTip":null}}},"order":[0,1,11,9,10,12,7,13,8,14],"settings":{"importJSON":true,"indentSize":false,"cepExport":false,"includeCSSJS":true,"showDialog":true,"functionWrapper":false,"afterEffectsDockable":false,"itemReferenceList":"None"}}
*/ 

// DIALOG
// ======
var dialog = createDockableUI(this);
    dialog.text = "Dialog"; 
    dialog.orientation = "column"; 
    dialog.alignChildren = ["center","top"]; 
    dialog.spacing = 10; 
    dialog.margins = 16; 

// GUIDES
// ======
var guides = dialog.add("panel", undefined, undefined, {name: "guides"}); 
    guides.text = "Guidelines"; 
    guides.orientation = "column"; 
    guides.alignChildren = ["left","top"]; 
    guides.spacing = 10; 
    guides.margins = 10; 

// CTRL
// ====
var ctrl = guides.add("group", undefined, {name: "ctrl"}); 
    ctrl.orientation = "row"; 
    ctrl.alignChildren = ["left","center"]; 
    ctrl.spacing = 10; 
    ctrl.margins = 0; 

var pos = ctrl.add('edittext {properties: {name: "pos"}}'); 
    pos.text = "500"; 
    pos.preferredSize.width = 150; 

var horizontal = ctrl.add("checkbox", undefined, undefined, {name: "horizontal"}); 
    horizontal.text = "make horizontal"; 

// GUIDES
// ======
var guideBtn = guides.add("button", undefined, undefined, {name: "guideBtn"}); 
    guideBtn.text = "Create Guideline"; 

// LAYOUTS
// =======
var layouts = dialog.add("panel", undefined, undefined, {name: "layouts"}); 
    layouts.text = "Create Layouts"; 
    layouts.orientation = "column"; 
    layouts.alignChildren = ["left","top"]; 
    layouts.spacing = 10; 
    layouts.margins = 10; 

// CTRL1
// =====
var ctrl1 = layouts.add("group", undefined, {name: "ctrl1"}); 
    ctrl1.orientation = "row"; 
    ctrl1.alignChildren = ["left","center"]; 
    ctrl1.spacing = 10; 
    ctrl1.margins = 0; 

var config = ctrl1.add('edittext {properties: {name: "config"}}'); 
    config.text = "Configuration for splitting layer"; 
    config.preferredSize.width = 250; 

// LAYOUTS
// =======
var layoutBtn = layouts.add("button", undefined, undefined, {name: "layoutBtn"}); 
    layoutBtn.text = "Create Layout"; 

    // TIME
    // ====
    var time = dialog.add("panel", undefined, undefined, {name: "time"}); 
        time.text = "Timing"; 
        time.orientation = "column"; 
        time.alignChildren = ["left","top"]; 
        time.spacing = 10; 
        time.margins = 10; 
    
    // BEATS
    // =====
    var beats = time.add("group", undefined, {name: "beats"}); 
        beats.orientation = "row"; 
        beats.alignChildren = ["left","center"]; 
        beats.spacing = 10; 
        beats.margins = 0; 
    
    var statictext1 = beats.add("statictext", undefined, undefined, {name: "statictext1"}); 
        statictext1.text = "BPM"; 
    
    var bpm = beats.add('edittext {properties: {name: "bpm"}}'); 
        bpm.text = "120"; 
    
    // OFFSET
    // ======
    var offset = time.add("group", undefined, {name: "offset"}); 
        offset.orientation = "row"; 
        offset.alignChildren = ["left","center"]; 
        offset.spacing = 10; 
        offset.margins = 0; 
    
    var statictext2 = offset.add("statictext", undefined, undefined, {name: "statictext2"}); 
        statictext2.text = "Offset"; 
    
    var offsetBeats = offset.add('edittext {properties: {name: "offsetBeats"}}'); 
        offsetBeats.text = "4"; 
    
    // TIME
    // ====
    var offsetBtn = time.add("button", undefined, undefined, {name: "offsetBtn"}); 
        offsetBtn.text = "Offset Layers"; 



showWindow(dialog);

// write user input to variables
dialog.guides.ctrl.pos.onChange = function() { guidePos = this.text; }
dialog.guides.ctrl.horizontal.onChange = function() { guideHorizontal = this.value; }

dialog.layouts.ctrl1.config.onChange = function() { layerElements = eval(this.text); }

// Define the button behavior
// dialog.buttons.okBtn.onClick = function () { this.parent.parent.close(1); };
// dialog.buttons.cancelBtn.onClick = function () { this.parent.parent.close(2); };

dialog.guides.guideBtn.onClick = createGuideline //create Guideline
dialog.layouts.layoutBtn.onClick = createMaskedLayers // link createMaskedLayers function to button

dialog.time.offsetBtn.onClick = offsetLayer // new create Mask function
  

////////////////////////////////////////////
//
//
//  
//
//
////////////////////////////////////////////
////////////////////////////////////////////



// default row & column setup
// 
// 
var layerElements = [
    [1, [1,2] ], //column -> [width, [element1_Height,element2_Height,...] ]
    [1, [2,1] ],
    [1, [1,2] ]
];

function createMaskedLayers () {

    //get selected layers
    var curItem = app.project.activeItem;
    var selectedLayers = curItem.selectedLayers;

    var compWidth = 1920;
    var compHeight = 1080;

    
    
    // -----------------------------
    // calculate column width
    // -----------------------------
    
    var gridColumns = 0;

    
    var i=0;
    while( i < layerElements.length){
        gridColumns = gridColumns + layerElements[i][0];
        i++;
    }

    if(gridColumns < 1) gridColumns = 1;

    var columnWidth = compWidth/gridColumns;

    
    

    // -----------------------------
    // calculate row height
    // & create layers
    // -----------------------------

    var c=0;
    var lc = 0; //index for the layer elements
    var layers = [];

    while( c < layerElements.length){
        
        var g = layerElements[c][1];
        var sg = 0;
        var ic = 0;
        while( ic < g.length){
            
            sg = sg + g[ic];
            
            ic++;
        }
        var rowHeight = compHeight/sg;

        //create elements for column
        var cl = 0;
        while(cl < layerElements[c][1].length){

            // calculate element width and height
            var lwidth = columnWidth * layerElements[c][0];
            var lheight = rowHeight * layerElements[c][1][cl];

            // calculate element offset
            var xoffset = columnWidth * c;

            if(cl > 0){
                var yoffset = rowHeight * layerElements[c][1][cl-1];
            }else{
                var yoffset = 0;
            }

            // create layers
            if(lc > 0){
                var layerobj = selectedLayers[0].duplicate();
            }else{
                var layerobj = selectedLayers[0];
            }

            var layer = {"layer" : layerobj, "xoffset" : xoffset, "yoffset" : yoffset, "width" : lwidth, "height" : lheight};
            layers.push(layer);
            

            lc++;
            cl++;
        }

        c++;
    }

    i = 0;
    while( i < layers.length ) {
        
        createMask(layers[i].layer, layers[i].xoffset, layers[i].yoffset, layers[i].width, layers[i].height);

        offsetLayer(layers[i].layer);
        
        i++;
    }

}

function createMask (layer, x,y,w,h) {
    newMask = layer.Masks.addProperty("Mask");
    newMask.inverted = false;
    myMaskShape = newMask.property("maskShape");
    myShape = myMaskShape.value;
    myShape.vertices = [[x,y],[x,y+h],[x+w,y+h],[x+w,y]];
    myShape.closed = true;
    myMaskShape.setValue(myShape);
}

function offsetLayer(layer) {

    //get selected layers
    if(typeof(layer) == "undefined" || layer == null){ 
        var curItem = app.project.activeItem;
        var selectedLayers = curItem.selectedLayers;

        alert("setting layer by selection");

        layer = selectedLayers[0]; 
    }
    
    alert(layer.id);

    // calculate frame offset
    var framerate = app.project.activeItem.frameRate;

    //
    alert(framerate);

}


function createGuideline() {
  if(guideHorizontal){
      app.project.activeItem.addGuide(guidePos, 1);
  }else{
      app.project.activeItem.addGuide(1, guidePos);
  }
}