
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
    box.addEventListener('drop', drop);
    box.addEventListener('drop', dropInfo);
});


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
            document.querySelector('#save').addEventListener("click", () => {
                let linkDestination = document.querySelector('input[name="link"]:checked').id;
                if (linkDestination == "ext") {
                    localStorage.setItem(ids + "-link", document.querySelector('#extLink').value);
                    localStorage.setItem(ids + "-linkType", linkDestination);
                    console.log(localStorage.getItem(ids + "-link"));
                }
                else if (linkDestination == "emu") {
                    localStorage.setItem(ids + "-core", document.querySelector('input[name="core"]:checked').id);
                    console.log(localStorage.getItem(ids + "-core"));
                }
                let backgroundImage = document.querySelector('#image-link').value;
                localStorage.setItem(ids + "-image", backgroundImage);
                console.log(localStorage.getItem(ids + "-image"));
                let previewImage = document.querySelector('#preview-link').value;
                localStorage.setItem(ids + "-preview", previewImage);
                console.log(localStorage.getItem(ids + "-preview"));
            });
        case ids: 
            console.log("work")
            let backgroundImage = localStorage.getItem(ids + "-image");
            document.querySelector('#image-link').value = backgroundImage;
            let previewImage = localStorage.getItem(ids + "-preview");
            document.querySelector('#preview-link').value = previewImage;
            let linkDestination = localStorage.getItem(ids + "-linkType");
            console.log("linkDestination: " + linkDestination);
            if (linkDestination == null) {
                document.querySelector('#emu').checked = true;
            }
            else if (linkDestination == "emu") {
                document.querySelector('#emu').checked = true;
                document.querySelector('#extLink').value = linkDestination;
            }
            else if (linkDestination == "ext") {
                document.querySelector('#ext').checked = true;
                document.querySelector('#extLink').value = linkDestination;
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

