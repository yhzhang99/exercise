window.addEventListener('load', function () {
    var arw_l = document.querySelector('.arw-l');
    var arw_r = document.querySelector('.arw-r');
    var img_wrapper = document.querySelector('.img-wrapper');
    var imges = document.querySelector('.imges');
    var spot = document.querySelector('.spot');
    var imges_width = img_wrapper.offsetWidth;
    var num = 0;
    var num_s = 0;

    img_wrapper.addEventListener('mouseenter', function () {
        arw_l.style.display = 'block';
        arw_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
        // 鼠标经过停止自动播放
    })
    // 鼠标经过图片显示箭头

    img_wrapper.addEventListener('mouseleave', function () {
        arw_l.style.display = 'none';
        arw_r.style.display = 'none';
        timer = setInterval(function () {
            arw_r.click();
        }, 5000)
        // 鼠标离开自动播放
    })
    // 鼠标离开隐藏箭头

    var w = (imges.children.length) * 14;
    spot.style.width = w + 'px';
    // 动态生成导航圆点栏

    for (let i = 0; i < imges.children.length; i++) {
        // 遍历所有图片
        var li = document.createElement('li');
        spot.appendChild(li);

        li.addEventListener('mouseenter', function () {
            this.style.cursor = 'pointer';
        })
        // 鼠标结果变成小手

        li.addEventListener('click', function () {
            // 点哪个哪个变色
            for (let j = 0; j < spot.children.length; j++) {
                // 遍历所有导航圆点
                spot.children[j].className = '';
            }
            num = i;
            // num定位当前圆点

            this.className = 'current';
            // 排他算法
            animate(imges, -imges_width * i);
            // 点圆点后移动到对应图片
        })
        // 排他思想，设置当前圆点颜色
    }
    // 动态生成圆点

    spot.children[0].className = 'current';
    // 默认第一个圆点变色

    var first = imges.children[0].cloneNode(true);
    imges.appendChild(first);
    // 克隆第一张图片

    // 右箭头
    arw_r.addEventListener('click', function () {
        num++;
        if (num > imges.children.length - 1) {
            // 当图片播放到最后一张
            imges.style.left = '0px';
            // 恢复到第一张图位置
            num = 1;
            // 第一张图，第二张图，num=1，播放第一张图
        }
        animate(imges, -imges_width * num);
        // 右箭头动画
        cirChange();
        // 圆点和图片对应
    })

    // 左箭头
    arw_l.addEventListener('click', function () {
        num--;
        if (num < 0) {
            // 当图片播放到第一张
            num = spot.children.length - 1;
            // 表面上最后一张图，实际上倒数第二张图
            imges.style.left = -imges_width * spot.children.length + 'px';
            // 恢复到最后第一张图位置
        }
        animate(imges, -imges_width * num);
        // 右箭头动画
        cirChange();
        // 圆点和图片对应
    })

    function cirChange() {
        // 圆点和图片对应
        for (let j = 0; j < spot.children.length; j++) {
            // 遍历所有导航圆点
            spot.children[j].className = '';
            // 清除所有圆点类
        }
        num_s = num;
        if (num == spot.children.length) {
            num_s = 0;
            // 超过后相当于播放到最后位置也就是重复第一张图，所以当前圆点num_s需要置为第一个
        }
        spot.children[num_s].className = 'current';
        // 排他算法 圆点跟随图片变色
    }

    var timer = setInterval(function () {
        arw_r.click();
    }, 5000)
})