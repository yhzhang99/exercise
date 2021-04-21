// 防抖函数
function debounce(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer)
    timer = setTimeout(function () {
      func();
    }, delay);
  }
}