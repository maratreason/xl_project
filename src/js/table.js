
window.onload = function(e) {
  const button = document.querySelector('.panel-btn');

  function createTable() {
    const tbody = document.querySelector('.table-body__tr');

    const cellInput = document.querySelector('.panel-add__cell').value;
    const columnInput = document.querySelector('.panel-add__column').value;
    console.log(cellInput);
    console.log(columnInput);

    tbody.innerHTML = '';
    
    for (let row = 0; row < columnInput; row++) {
      let tr = document.createElement('tr');
      for (let cell = 0; cell < cellInput; cell++) {
        let td = document.createElement('td');
        td.textContent = 'Some';
        tr.appendChild(td);
      }
      tbody.appendChild(tr);
    }
  }

  button.addEventListener('click', createTable);
}