
document.addEventListener('mousedown', event => {

  const {resize} = event.target.dataset;

  if (!resize) {
    return;
  }

  if (resize === 'col') {
    const $parent = event.target.closest('.column');
    const coordsX = $parent.getBoundingClientRect();
    const {offsetWidth} = $parent;

    document.onmousemove = e => {
      const delta = Math.floor(e.pageX - coordsX.right);
      const width = offsetWidth + delta > 100 ? offsetWidth + delta : 100 + 'px';
      $parent.style.minWidth = width + 'px';
      
      const column = event.target.dataset.col;
      saveColumnState(column, width);
    }

    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
    }
  }

  if (resize === 'row') {
    const $parent = event.target.closest('.cell');
    const coordsY = $parent.getBoundingClientRect();
    const {offsetHeight} = $parent;

    document.onmousemove = e => {
      const delta = Math.floor(e.clientY - coordsY.bottom);
      const height = offsetHeight + delta > 25 ? offsetHeight + delta : 25 + 'px';
      const row = event.target.dataset.row;

      $parent.style.height = height + 'px';

      saveRowState(row, height);
    }

    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
    }  
  }
});

function saveColumnState(column, width) {
  const state = JSON.parse(localStorage.getItem('colState')) || {};
  state[column] = width;
  localStorage.setItem('colState', JSON.stringify(state));
}

function saveRowState(row, height) {
  const state = JSON.parse(localStorage.getItem('rowState')) || {};
  state[row] = height;
  localStorage.setItem('rowState', JSON.stringify(state));
}