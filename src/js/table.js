const div = document.querySelector('.table');
const table = document.createElement('table');
const tableBody = document.createElement('tbody');

/**
 * This function created a new table.
 * @param {Number} cellInp cells.
 * @param {Number} columnInp columns.
 */
function createTable(cellInp, columnInp) {
  const tbodyTr = document.createElement('tr');
  tableBody.classList.add('.table-body');
  tbodyTr.classList.add('.table-body__tr');

  tableBody.appendChild(tbodyTr);
  table.appendChild(tableBody);
  div.appendChild(table);

  tbodyTr.innerHTML = '';

  for (let row = 0; row < columnInp; row++) {
    const tr = document.createElement('tr');
    for (let cell = 0; cell < cellInp; cell++) {
      const td = document.createElement('td');
      td.textContent = 'Some';
      td.classList.add('.newTd');
      tr.appendChild(td);
    }
    tbodyTr.appendChild(tr);
  }
}

createTable(20, 15);
