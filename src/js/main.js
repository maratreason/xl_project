/**
 * Функция, которая должна изменять размеры текущего div.
 */
function resize() {
  let ie = 0;
  let op = 0;
  let ff = 0;

  /**
   * Изменение по ширине.
   */
  let deltaW = 0;

  /**
   * Изменение по высоте.
   */
  let deltaH = 0;

  /**
   * Определяем браузер.
   */
  const browser = navigator.userAgent;
  if (browser.indexOf('Opera') != -1) op = 1;
  else {
    if (browser.indexOf('MSIE') != -1) ie = 1;
    else {
      if (browser.indexOf('Firefox') != -1) ff = 1;
    }
  }

  /**
   * Получаем основной блок.
   */
  const block = document.querySelectorAll('.table-content__item');

  /**
   * Получаем блок для изменения размеров.
   */
  const blockR = document.querySelectorAll('.table-content__item');

  /**
   * Ставим обработку на отпускание кнопки мыши.
   */
  document.onmouseup = clearXY;

  /**
   * Ставим обработку на нажатие кнопки мыши.
   */
  blockR.forEach((item, i) => {
    item.addEventListener('mousedown', saveWH);
    console.log(item);
  });


  /**
   * Функция для получения текущих координат курсора мыши.
   * @param {*} objEvent event.
   * @return {Array}.
   */
  function getXY(objEvent) {
    let x;
    let y;
    if (objEvent) {
      x = objEvent.pageX;
      y = objEvent.pageY;
    } else {
      x = window.event.clientX;
      y = window.event.clientY;
      if (ie) {
        y -= 2;
        x -= 2;
      }
    }
    return [x, y];
  }

  /**
   * Функция.
   * @param {*} objEvent event.
   * @return {Boolean}.
   */
  function saveWH(objEvent) {
    const point = getXY(objEvent);

    for (let i = 0; i < block.length; i++) {

      /**
       * Текущая ширина блока.
       */
      const Wblock = block[i].clientWidth;

      /**
       * Текущая высота блока.
       */
      const Hblock = block[i].clientHeight;

      /**
       * Измеряем текущую разницу между шириной и x-координатой мыши.
       */
      deltaW = Wblock - point[0];

      /**
       * Измеряем текущую разницу между высотой и y-координатой мыши.
       */
      deltaH = Hblock - point[1];

      /**
       * Ставим обработку движения мыши для разных браузеров.
       */
      document.onmousemove = resizeBlock;
    }

    if (op || ff) document.addEventListener('onmousemove', resizeBlock, false);

    /**
     * Отключаем стандартную обработку нажатия мыши.
     */
    return false;
  }

  /**
   * Функция для измерения ширины окна.
   * @return {Boolean}.
   */
  function clientWidth() {
    return document.documentElement.clientWidth == 0
        ? document.body.clientWidth : document.documentElement.clientWidth;
  }

  /**
   * Функция для измерения высоты окна.
   * @return {Boolean}.
   */
  function clientHeight() {
    return document.documentElement.clientHeight == 0
        ? document.body.clientHeight : document.documentElement.clientHeight;
  }

  /**
   * Функция отключения.
   * При отпускании кнопки мыши отключаем обработку движения курсора мыши
   */
  function clearXY() {
    document.onmousemove = null;
  }

  /**
   * Функция изменения размера.
   * @param {*} objEvent текущий объект.
   */
  function resizeBlock(objEvent) {
    const point = getXY(objEvent);

    /**
     * Изменяем новое приращение по ширине.
     */
    const newW = deltaW + point[0];

    /**
     * Изменяем новое приращение по высоте.
     */
    const newH = deltaH + point[1];

    for (let i = 0; i < block.length; i++) {

      /**
       * Устанавливаем новую ширину блока.
       */
      block[i].style.width = newW + 'px';

      /**
       * Устанавливаем новую высоту блока.
       */
      block[i].style.height = newH + 'px';

      /**
       * Если блок выходит за пределы экрана,
       * то устанавливаем максимальные значения для ширины и высоты.
       */
      if (block[i].offsetLeft + block[i].clientWidth > clientWidth()) {
        block[i].style.width = (clientWidth() - block[i].offsetLeft) + 'px';
      }

      if (block[i].offsetTop + block[i].clientHeight > clientHeight()) {
        block[i].style.height = (clientHeight() - block[i].offsetTop) + 'px';
      }
    }
  }
}

resize();