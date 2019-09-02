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
      $parent.style.minWidth = (offsetWidth + delta) + 'px';
    }

    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
    }
  }

  if (resize === 'row') {
    const $parent = event.target.closest('.cell-head-number');
    const coordsY = $parent.getBoundingClientRect();
    const {offsetHeight} = $parent;
    const {row} = $parent.dataset
    const rows = document.querySelectorAll(`[data-row="${row}"]`)

    document.onmousemove = e => {
      const delta = Math.floor(e.clientY - coordsY.bottom);
      const height = offsetHeight + delta
      $parent.style.height = height + 'px';
      rows.forEach(row => row.style.height = height + 'px')
    }

    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
    }
  }


});
