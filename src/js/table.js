const div = document.querySelector('.table');

/**
 * This function created a new table.
 * @param {Number} cellInp cells.
 * @param {Number} columnInp columns.
 */
function createTable(cellInp, columnInp) {

  let innerCell;
  let column;
  let resizer = document.createElement('div');

  for (let row = 0; row < cellInp; row++) {
    column = document.createElement('div');
    column.classList.add('column');

    div.appendChild(column);
    for (let col = 0; col < columnInp; col++) {
      innerCell = document.createElement('div');
      resizer = document.createElement('div');
      resizer.classList.add('resizer');
      innerCell.addEventListener('mousedown', initResize, false);
      innerCell.classList.add('cell');
      innerCell.appendChild(resizer);
      column.appendChild(innerCell);
    }
    div.appendChild(column);
  }
}

createTable(5, 5);


let element = document.querySelectorAll('.cell');
let resizer = document.createElement('div');

resizer.className = 'resizer';
resizer.style.width = '20px';
resizer.style.height = '20px';
resizer.style.background = 'red';
resizer.style.position = 'absolute';
resizer.style.right = 0;
resizer.style.bottom = 0;
resizer.style.cursor = 'se-resize';

element.forEach(elem => {
  elem.appendChild(resizer);
});

// resizer.addEventListener('mousedown', initResize, false);

function initResize(e) {
  window.addEventListener('mousemove', resize, false);
  window.addEventListener('mouseup', stopResize, false);
}

function resize(e) {
  element.forEach(elem => {
    elem.style.width = (e.clientX - elem.offsetLeft) + 'px';
    elem.style.height = (e.clientY - elem.offsetTop) + 'px';
  });
}

function stopResize(e) {
  window.removeEventListener('mousemove', resize, false);
  window.removeEventListener('mouseup', stopResize, false);
}