const div = document.querySelector('.table');

/**
 * This function created a new table.
 * @param {Number} cellInp cells.
 * @param {Number} columnInp columns.
 */
function createTable(cellInp, columnInp) {

  let innerCell;
  let column;

  for (let row = 0; row < cellInp; row++) {
    column = document.createElement('div');
    
    column.classList.add('column');
    column.addEventListener('mousemove', resize);
    column.style.resize = 'both';

    div.appendChild(column);
    for (let col = 0; col < columnInp; col++) {
      innerCell = document.createElement('div');
      innerCell.classList.add('cell');
      innerCell.style.resize = 'both';
      innerCell.addEventListener('mousemove', resize);
      column.appendChild(innerCell);
    }
    div.appendChild(column);
  }

  function resize(event) {
    event.target.style.cursor = 'all-scroll';
    column.style.width = event.target.style.width + 'px';
    column.style.height = event.target.style.height + 'px';
  }
}

createTable(15, 20);
