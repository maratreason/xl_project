
const root = document.querySelector('.table')

const colState = JSON.parse(localStorage.getItem('colState')) || {}
const rowState = JSON.parse(localStorage.getItem('rowState')) || {}
const textState = JSON.parse(localStorage.getItem('saveTextState')) || []

function createTable(columnsCount, rowsCount) {

  let cell
  let column
  rowsCount++
  let header = createHeader()

  for (let row = 0; row <= columnsCount; row++) {
    column = document.createElement('div')
    column.classList.add('column')
    cell = document.createElement('div')
    cell.classList.add('cell')
    column.appendChild(cell)
    root.appendChild(column)

    for (let col = 0; col < rowsCount; col++) {
      if (col === 0) {
        const letter = header[row-1]
        cell.setAttribute('data-head', 'cell-head')
        cell.setAttribute('contenteditable', 'false')
        cell.innerHTML = `
          ${letter}
          <div class="resize-col" data-resize="col" data-col="${letter}"></div>
        `

        if (colState[letter]) {
          column.style.minWidth = colState[letter] + 'px'
        }
      }

      if (row === 0 && col >= 0) {
        cell.classList.add('cell-head')
        cell.setAttribute('data-head', 'cell-head-number')

        cell.innerHTML = `
          ${col}
          <div class="resize-row" data-resize="row" data-row="${col}"></div>
        `

        cell.style.height = rowState[col] + 'px'
        cell.setAttribute('contenteditable', 'false')
      }

      if (col !== columnsCount) {
        cell = document.createElement('div')
        cell.setAttribute('data-row', col)
        cell.setAttribute('data-cell', `cell-${row}`)
        cell.setAttribute('data-row-count', `row-${col}`)
        cell.classList.add('cell')
        cell.setAttribute('contenteditable', 'true')
        cell.style.height = rowState[col + 1] + 'px'
      }

      const letter = header[row-1]

      textState.forEach(e => {
        if (e.column === letter && (e.cell - 1) === col) {
          cell.textContent = e.text
        }
      })

      cell.style.height = rowState[col + 1] + 'px'
      column.appendChild(cell)
    }
  }

  document.querySelectorAll('.cell[data-head=cell-head-number]')[0].textContent = ''
}

function createHeader(j = 0) {
  let arr = []
  for (let i = 65; i <= 90; i++) {
    arr.push(String.fromCodePoint(i))
    if (String.fromCodePoint(i).charAt(0) === "Z") {
      j = 1
      for (let i = 65; i <= 90; i++) {
        arr.push(String.fromCodePoint(i) + ' ' + j)
      }
    }
  }

  return arr
}

createTable(15, 15)
