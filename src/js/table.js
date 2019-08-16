
window.onload = function(e) {
  // const button = document.querySelector('.panel-btn');
  const div = document.querySelector('.table');

  function createTable() {
    const table = document.createElement('table');
    const tableBody = document.createElement('tbody');
    const tbodyTr = document.createElement('tr');
    // const cellInput = document.querySelector('.panel-add__cell').value;
    // const columnInput = document.querySelector('.panel-add__column').value;
    const cellInput = 5;
    const columnInput = 5;

    tableBody.classList.add('.table-body');
    tbodyTr.classList.add('.table-body__tr');

    tableBody.appendChild(tbodyTr);
    table.appendChild(tableBody);
    div.appendChild(table);

    tbodyTr.innerHTML = '';
    
    for (let row = 0; row < columnInput; row++) {
      let tr = document.createElement('tr');
      for (let cell = 0; cell < cellInput; cell++) {
        let td = document.createElement('td');
        td.textContent = 'Some';
        td.classList.add('.newTd');
        tr.appendChild(td);
      }
      tbodyTr.appendChild(tr);
    }
  }

  // button.addEventListener('click', createTable);
  createTable();

}

  