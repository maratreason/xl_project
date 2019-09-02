const root = document.querySelector('.table');

function createTable(columnsCount, rowsCount) {

  let cell;
  let column;
  rowsCount++;
  let header = createHeader();

  for (let row = 0; row <= columnsCount; row++) {
    column = document.createElement('div');
    column.classList.add('column');
    cell = document.createElement('div');
    cell.classList.add('cell');
    column.appendChild(cell);
    root.appendChild(column);

    for (let col = 0; col < rowsCount; col++) {
      if (col === 0) {
        cell.classList.add('cell-head');
        cell.innerHTML = `
          ${header[row - 1]}
          <div class="resize-col" data-resize="col"></div>
        `;
      }

      if (row === 0 && col >= 0) {
        cell.classList.add('cell-head');
        cell.classList.add('cell-head-number');
        cell.classList.remove('row');
        cell.innerHTML = `
          ${col}
          <div class="resize-row" data-resize="row"></div>
        `;
        cell.contentEditable = false;
        column.style.width = '40px';
      }

      if (col !== (columnsCount)) {
        cell = document.createElement('div');
        cell.classList.add('cell');
        cell.classList.add('cell-' + row);
        cell.classList.add('row');
        cell.classList.add('row-' + col);
        cell.setAttribute('contenteditable', true);
        column.appendChild(cell);
      }
    }
  }

  document.querySelectorAll('.cell-head-number')[0].textContent = '';
}

function createHeader(j = 0) {
  let arr = [];
  for (let i = 65; i <= 90; i++) {
    arr.push(String.fromCodePoint(i));
    if (String.fromCodePoint(i).charAt(0) === "Z") {
      j = 1;
      for (let i = 65; i <= 90; i++) {
        arr.push(String.fromCodePoint(i) + ' ' + j);
      }
    }
  }

  return arr;
}

createTable(30, 30);
