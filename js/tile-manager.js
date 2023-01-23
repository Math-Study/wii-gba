



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
}



// Logic for Options below here (idk ima go insane)