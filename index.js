var backCanvas = document.getElementById("bg_img_canvas");
var backContext = backCanvas.getContext("2d");
//调整画布大小
backCanvas.width = 2440;
backCanvas.height = 760;
//制作背景滚动的云雾
var image = new Image();
image.src = "./img/sunset333.jpg";
image.onload = function () {
    let xx = 0;
    setInterval(function () {
        backContext.clearRect(0, 0, 1280, 1024);
        backContext.save();//用来保存Canvas的状态。save之后，可以调用Canvas的平移、放缩、旋转、错切、裁剪等操作。
        //context.绘制图片(图片或画布或影片, 裁切位置x, y,  裁切宽,高,  绘制图片的位置x,y,  图片宽,高)
        backContext.drawImage(image, xx, 0, 7680, 2700, 0, 0, 7680, 800);
        // 刷新 background position.
        backContext.restore();//恢复Canvas之前保存的状态。防止save后对Canvas执行的操作对后续的绘制有影响。
        xx += 0.06;
        if (xx >= 5680) {
            xx = -0.06;
        }
    }, 1);
};

/*小熊的添加*/
//动画计数, 熊猫的x位置, y位置
var dx =15, dy = 12, xmove = 170.33, ymove = 0;
var py = 0, x = 80, y = 300;//初始裁剪位置 初始显示位置
var px = [510.99, 681.33, 851.66, 1022, 1192.33, 1362.66, 0, 170.33, 340.66];

var i = 0;
//加载熊猫图片
var img = new Image();
img.src = "./img/sprite.png";

//创建画布
var canvas = document.getElementById("myCanvas");//获取元素
context = canvas.getContext("2d");//渲染环境，获得2d环境

//调整画布大小
canvas.width = 2440;
canvas.height = 480;
//初始的位置
context.drawImage(img, px[0], py, 170, 172, 80, 300, 200, 203);

//小熊移动位置
function move(e) {
    switch (e.keyCode) {
        case 65://left A/a
            context.clearRect(0, 0, 2440, 980);
            i = i - 1;
            x = x - dx;
            if (i == -1) {//context.绘制图片(图片或画布或影片,  裁切位置x, y,  裁切宽,高,  绘制图片的位置x,y,  图片宽,高)
                i = 8;
                context.drawImage(img, px[i], py, 170, 172, x, y, 200, 203);
            } else
                context.drawImage(img, px[i], py, 170, 172, x, y, 200, 203);

            break;

        case 68://right D/d
            context.clearRect(0, 0, 2440, 980);
            i++;
            x = x + dx;
            if (i == 9) {
                i = 0;
                context.drawImage(img, px[i], py + 0, 170, 172, x, y, 200, 203);
            }
            context.drawImage(img, px[i], py + 0, 170, 172, x, y, 200, 203);
            /*if(x>=)*/
            break;

        case 87://up W/w

            context.clearRect(0, 0, 2440, 980);
            y = y - dy;
            context.drawImage(img, px[i], py, 170, 172, x, y, 200, 203);
            break;

        case 83://down S/s
            //if((px+move)>0){xmove=-xmove;}
            context.clearRect(0, 0, 2440, 980);
            y = y + dy;
            context.drawImage(img, px[i], py, 170, 172, x, y, 200, 203);
            break;
    }
}


// //键盘事件控制panda的移动位置
// function onkeydown(e){
//
//   if(e.onkeydown=='A'){// turn left
//     move(-170.33,0,-10,0);/* dx=-10;dy=0;*/
//   }
//   else if(e.onkeydown=='D'){//turn right
//     move(170.33,0,10,0);/*  dx=10;dy=0;*/
//   }
//   else if(e.onkeydown=='W'){// up
//     move(170.33,0,0,-10);/*  dx=0;dy=-10;*/
//   }
//   else if(e.onkeydown=='S'){//down
//     move(170.33,0,0,10);/*   dx=0;dy=10;*/
//   }
// }
//
// draw();
