const div = document.querySelector('.table');

function createTable(cellInp, columnInp) {

  let innerCell;
  let column;
  columnInp++;
  let headerABC = createABC();

  for (let row = 0; row <= cellInp; row++) {
    column = document.createElement('div');
    column.classList.add('column');
    innerCell = document.createElement('div');
    innerCell.classList.add('cell');
    column.appendChild(innerCell);
    div.appendChild(column);

    for (let col = 0; col < columnInp; col++) {

      if (col === 0) {
        innerCell.classList.add('cell-head');
        innerCell.textContent = headerABC[row-1];
      }

      if (row === 0 && col >= 1) {
        innerCell.textContent = col;
        innerCell.classList.add('cell-head');
        innerCell.classList.add('cell-head-number');
        column.style.width = '40px';
      }

      if (col != columnInp - 1) {
        innerCell = document.createElement('div');
        innerCell.classList.add('cell');
        column.appendChild(innerCell);
      }
    }
  }
  
}

function createABC() {
  let arr = [];
  for (let i = 65; i <= 90; i++) {
    arr.push(String.fromCodePoint(i));
  }

  return arr;
}

createTable(15, 15);
