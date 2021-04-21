function coloring() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  document.body.style.background = `rgb(${r}, ${g}, ${b})`;
}

function throttle(func, delay) {
  let pre = 0;
  return function () {
    let now = new Date();
    if(now - pre > delay) {
      func();
      pre = now;
    }
  }
}