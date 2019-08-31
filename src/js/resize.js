let element = document.querySelectorAll('.cell');
let resizer = document.createElement('div');



function initResize(e) {
  window.addEventListener('mousemove', resize, false);
  window.addEventListener('mouseup', stopResize, false);
}

function resize(e) {
  element.forEach(elem => {
    elem.style.width = (e.clientX - elem.offsetLeft) + 'px';
    elem.style.height = (e.clientY - elem.offsetTop) + 'px';
  });
}

function stopResize(e) {
  window.removeEventListener('mousemove', resize, false);
  window.removeEventListener('mouseup', stopResize, false);
}