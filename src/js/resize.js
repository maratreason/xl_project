document.addEventListener('mousedown', event => {
  const {resize} = event.target.dataset
  if (!resize) {
    return
  }

  if (resize === 'col') {
    const $parent = event.target.closest('.column')
    const coords = $parent.getBoundingClientRect()
    const {offsetWidth} = $parent

    document.onmousemove = e => {
      const delta = Math.floor(e.pageX - coords.right)
      $parent.style.width = (offsetWidth + delta) + 'px'
    }

    document.onmouseup = () => {
      document.onmousemove = null
      document.onmouseup = null
    }
  }
})
