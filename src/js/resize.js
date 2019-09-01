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
    let cellNumber = +$parent.textContent;
    
    document.onmousemove = e => {
      const heightDelta = Math.floor((e.screenY - coordsY.top) / 2);
      $parent.style.height = (offsetHeight + heightDelta) + 'px';
      let cells = document.querySelectorAll('.row');

      for (let i = 0; i < cells.length; i++) {
        if (cells[i].classList.contains('row-' + (cellNumber - 1))) {
          cells[i].style.height = (offsetHeight + heightDelta) + 'px';
        }
      }
    }

    document.onmouseup = () => {
      document.onmousemove = null;
      document.onmouseup = null;
    }
  }

  
});