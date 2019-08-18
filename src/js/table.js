
window.onload = function(e) {
  // const button = document.querySelector('.panel-btn');
  const div = document.querySelector('.table');
  let cellInput = 5;
  let columnInput = 5;
  let table = document.createElement('table');
  let tableBody = document.createElement('tbody');

  function createTable(cellInp = 1, columnInp = 1) {
    
    const tbodyTr = document.createElement('tr');
    // const cellInput = document.querySelector('.panel-add__cell').value;
    // const columnInput = document.querySelector('.panel-add__column').value;

    tableBody.classList.add('.table-body');
    tbodyTr.classList.add('.table-body__tr');

    tableBody.appendChild(tbodyTr);
    table.appendChild(tableBody);
    div.appendChild(table);

    tbodyTr.innerHTML = '';
    
    for (let row = 0; row < columnInp; row++) {
      let tr = document.createElement('tr');
      for (let cell = 0; cell < cellInp; cell++) {
        let td = document.createElement('td');
        td.textContent = 'Some';
        td.classList.add('.newTd');
        tr.appendChild(td);
      }
      tbodyTr.appendChild(tr);
    }
  }

  function removeTable() {
    div.innerHTML = '';
  }

  function resize() {
    let tr = document.querySelector('tr');
    tr.addEventListener('click', function(e) {
      console.log(e);
      console.log(e.offsetX);
      console.log(e.offsetY);

      let offsetX = parseInt(e.offsetX);
      let offsetY = parseInt(e.offsetY);

      if (offsetX > 100) {
        removeTable();
        console.log(e.target.style.width);
        cellInput++;
        columnInput++;
        createTable(cellInput, columnInput);
      } else {
        createTable();
      }
    });
  }

  // button.addEventListener('click', createTable);
  createTable();
  resize();
}
