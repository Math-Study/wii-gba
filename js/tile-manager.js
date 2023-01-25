
let currentId = null;


const item = document.querySelector('.item');

item.addEventListener('dragstart', dragStart);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
}


/* drop targets */
const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter)
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
});

document.addEventListener('drop', drop);
document.addEventListener('drop', dropInfo);

const initialParent = item.parentNode;

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

item.draggable = true;

item.addEventListener('dragstart', dragStart);

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.dataTransfer.setDragImage(e.target, e.offsetX, e.offsetY);
}
function dragEnd(e) {
    if (e.target.parentNode.classList.contains("box")) return;
    initialParent.appendChild(e.target);
}

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.remove('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');

    // get the draggable element
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);
    // check if draggable variable is properly set
    if(draggable) {
        // add it to the drop target
        e.target.appendChild(draggable);
        // display the draggable element
        draggable.classList.remove('hide');
    }
    console.log(e.target.id);
    let boxId = e.target.id;
    let manager = document.getElementById("manage");
    manager.innerHTML = "You are managing: " + boxId;
    currentId = e.target.id;
}


// Logic for Options below here (idk ima go insane)

// Ok I made options much less insane inducing


function dropInfo(e) {
    const ids = currentId;
    switch(ids) {
        case ids:
            console.log(ids)
            document.querySelector('#save').addEventListener("click", saveOptions);
        case ids: 
            console.log("work")
            let backgroundImage = localStorage.getItem(ids + "-image");
            document.querySelector('#image-link').value = backgroundImage;
            let previewImage = localStorage.getItem(ids + "-preview");
            document.querySelector('#preview-link').value = previewImage;
            let linkDestination = localStorage.getItem(ids + "-linkType");
            let linkValue = localStorage.getItem(ids + "-link");
            console.log("linkDestination: " + linkDestination);
            if (linkDestination == null) {
                document.querySelector('#emu').checked = true;
            }
            else if (linkDestination == "emu") {
                document.querySelector('#emu').checked = true;
                document.querySelector('#extLink').value = linkValue;
            }
            else if (linkDestination == "ext") {
                document.querySelector('#ext').checked = true;
                document.querySelector('#extLink').value = linkValue;
            }
            let core = localStorage.getItem(ids + "-core");
            if (core == null) {
                document.querySelector('#nds').checked = true;
            }
            else if (core == "gba") {
                console.log("gba")
                document.querySelector('#gba').checked = true;
            }
            else if (core == "nes") {
                document.querySelector('#nes').checked = true;
            }
            else if (core == "segaMd") {
                document.querySelector('#segaMd').checked = true;
            }
            else if (core == "nds") {
                document.querySelector('#nds').checked = true;
            }
    }
} 


function saveOptions() {
    const ids = currentId;
    console.log(ids);
                let romLocation = document.querySelector('input[name="location"]:checked').id;
                let linkDestination = document.querySelector('input[name="link"]:checked').id;
                if (linkDestination == "ext") {
                    localStorage.setItem(ids + "-link", document.querySelector('#extLink').value);
                    localStorage.setItem(ids + "-linkType", linkDestination);
                    console.log(localStorage.getItem(ids + "-link"));
                }
                else if (linkDestination == "emu") {
                    localStorage.setItem(ids + "-linkType", linkDestination);
                    localStorage.setItem(ids + "-link", document.querySelector('#extLink').value);
                    localStorage.setItem(ids + "-core", document.querySelector('input[name="core"]:checked').id);
                    console.log(localStorage.getItem(ids + "-core"));
                }
                if (romLocation == "external") {
                    localStorage.setItem(ids + "-rom", 'false');
                    console.log(localStorage.getItem(ids + "-rom"));
                } else if (romLocation == "internal") {
                    localStorage.setItem(ids + "-rom", 'true');
                    console.log(localStorage.getItem(ids + "-rom"));
                }
                let backgroundImage = document.querySelector('#image-link').value;
                localStorage.setItem(ids + "-image", backgroundImage);
                console.log(localStorage.getItem(ids + "-image"));
                let previewImage = document.querySelector('#preview-link').value;
                localStorage.setItem(ids + "-preview", previewImage);
                console.log(localStorage.getItem(ids + "-preview"));
    document.querySelector('#save').removeEventListener("click", saveOptions);
}


function getGridData() {
    let gridData = {};
    for (let i = 1; i <= 20; i++) {
        let tileId = "tile" + i;
        let backgroundImage = localStorage.getItem(tileId + "-image");
        let previewImage = localStorage.getItem(tileId + "-preview");
        let linkDestination = localStorage.getItem(tileId + "-linkType");
        let linkValue = localStorage.getItem(tileId + "-link");
        let core = localStorage.getItem(tileId + "-core");

        let tileData = {};
        if (backgroundImage) tileData.backgroundImage = backgroundImage;
        if (previewImage) tileData.previewImage = previewImage;
        if (linkDestination) tileData.linkDestination = linkDestination;
        if (linkValue) tileData.linkValue = linkValue;
        if (core) tileData.core = core;

        gridData[tileId] = tileData;
    }
    return gridData;
}



// export function
function exportGrid() {
    let gridData = {};
    for (let i = 1; i <= 24; i++) {
        let id = "box" + i;
        let element = document.getElementById(id);
        let linkType = localStorage.getItem(id + "-linkType");
        let link = localStorage.getItem(id + "-link");
        let image = localStorage.getItem(id + "-image");
        let preview = localStorage.getItem(id + "-preview");
        let core = localStorage.getItem(id + "-core");
        if (linkType || link || image || preview || core) {
            gridData[id] = {
                linkType: linkType,
                link: link,
                image: image,
                preview: preview,
                core: core
            }
        }
    }
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(gridData));
    let downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "gridData.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// import function
function importGrid() {
    let input = document.getElementById("importFile");
    let file = input.files[0];

    let reader = new FileReader();
    reader.onload = function() {
        let gridData = JSON.parse(reader.result);
        for (let id in gridData) {
            let element = document.getElementById(id);
            localStorage.setItem(id + "-linkType", gridData[id].linkType);
            localStorage.setItem(id + "-link", gridData[id].link);
            localStorage.setItem(id + "-image", gridData[id].image);
            localStorage.setItem(id + "-preview", gridData[id].preview);
            localStorage.setItem(id + "-core", gridData[id].core);
        }
        console.log(gridData);
    }
    reader.readAsText(file);
}


document.querySelector('#export').addEventListener("click", exportGrid);

let importButton = document.getElementById("importFile");
importButton.addEventListener("change", importGrid);