function animate(obj, target, callback) {
    clearInterval(obj.timer);
    // 保证定时器只有一个
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        // 步长值
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // 步长值取整
        if (obj.offsetLeft === target) {
            clearInterval(obj.timer);
            // if (callback) {
            //     // 如果有回调函数，则在定时器结束后调用
            //     callback();
            // }
            callback && callback();
        }
        // 到达目的位置停止定时器
        obj.style.left = obj.offsetLeft + step + 'px';
        // 缓动动画
        // 未到达目的位置继续走
    }, 7)
}