let arr = [];
document.addEventListener('keypress', event => {
  const $parent = event.target.closest('.column');
  const column = $parent.textContent.trim()[0];
  const cell = parseInt(event.target.dataset.row) + 1;
  let text = event.target.textContent.trim();
  if (event.keyCode === 13) {
    saveText(column, cell, text);
  }
});

function saveText(column, cell, text) {
  arr = JSON.parse(localStorage.getItem('saveTextState')) || [];
  const state = {};
  state.column = column;
  state.cell = cell;
  state.text = text;
  arr.push(state);
  localStorage.setItem('saveTextState', JSON.stringify(arr));
}