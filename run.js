let canvas = document.getElementById("can");
let ctx = canvas.getContext("2d");

// can.width = parseInt(getComputedStyle(can, null)["width"]) * devicePixelRatio;
// can.height = parseInt(getComputedStyle(can, null)["height"]) * devicePixelRatio;

can.width = window.innerWidth;
can.height = window.innerHeight;
let envir = document.getElementById("envir");
AAA = new Image();

//需在全螢幕下才能載入圖片
AAA.onload = function () {
    this.onload = null;
    first_();
}
AAA.src = "guraDown.png";


let takoA = 0;          //初始畫面清除
let x = 1000;            //人物X座標
let y = 550;            //人物Y座標
let vx = 2;             //人物X軸移動速度
let vy = 2;             //人物Y軸移動速度
let guraTime = 0;       //gura橫軸圖的分段座標
let guraCh = 0;         //判斷是否為同方向若不同則清除gura橫軸座標參數
let moriCh = 0;
let moriTime = 0;
let x_ch = 3.5;         //gura主畫面的X軸移動速度
let y_ch = 0;           //gura主畫面的Y軸移動速度
let xyTime = 0;         //gura主畫面隨機給予Y軸移動方向跟速度
let tttt = 0;           //gura主畫面橫軸圖分段座標
function first_() {
    AAA.src = "guraDown.png";
    x = 0;
    y = 400;
    var all_f = setInterval(function () {
        if (takoA == 1) {
            clearInterval(all_f);
        }
        if (-950 > x) {
            x_ch = 3.5;
            if (bloop_x_ch.length < 50) {
                bloop_x_ch.push(-950);
                bloop_y_ch.push(y + 10);
                bloop_x_ch.push(-950);
                bloop_y_ch.push(y - 10);
            }

        }
        if (2850 < x) {
            x_ch = -3.5;
            if (bloop_x_ch.length < 50) {
                bloop_x_ch.push(2800);
                bloop_y_ch.push(y + 10);
                bloop_x_ch.push(2800);
                bloop_y_ch.push(y - 10);
            }
        }
        if (xyTime == 0) {
            y_ch = Math.floor(Math.random() * 5) - 2.5;
            xyTime++;
        }
        if (xyTime > 0) {
            xyTime++;
            if (xyTime > 500) {
                xyTime = 0;
            }
        }
        y += y_ch;
        x += x_ch;
        if (y < -40) {
            y = 1000;
        }
        if (y > 1050) {
            y = -20;
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(AAA, tttt, 0, 500, 200, x, y, 150, 75);
        tttt += 500;
        if (tttt >= 2500) {
            tttt = 0;
        }
    }, 5)
}





function gura_run() {
    let playRun = setInterval(function () {
        if (stopCh == 1 || gura_hp <= 0) {
            clearInterval(playRun);
        }
        bloodVolume.style.top = y + 60 + "px";
        bloodVolume.style.left = x - 50 + "px";
        if (fx.includes("ArrowRight")) {
            atkCh = 43;
            if (envir.offsetLeft > -2950 &&
                envir.offsetLeft < 0) {
                envir.style.left = envir.offsetLeft - vx + "px";
                for (c = 0; c < aa.length; c++) {
                    aa[c] -= vx;
                }
                for (c = 0; c < trident_num; c++) {
                    trident_x[c] -= vx;
                }
                for (c = 0; c < atk_in; c++) {
                    atkx[c] -= vx;
                }
                for (c = 0; c < enemyAtkX.length; c++) {
                    enemyAtkX[c] -= vx;
                }
                for (c = 0; c < enemy4X.length; c++) {
                    enemy4X[c] -= vx;
                }
                for (c = 0; c < rangeAttackX.length; c++) {
                    rangeAttackX[c] -= vx;
                    rangeAttack_x[c] -= vx;
                }
                enemy2_x -= vx;
            }
            if (envir.offsetLeft <= -2950) {
                if (x < 1900) {
                    x += vx;
                }
                if (x >= 1900) {
                    x -= 3;
                }
            }
            if (envir.offsetLeft >= 0) {
                if (x < 1000) {
                    x += vx;
                }
                if (x >= 1000) {
                    x = 1000;
                    envir.style.left = envir.offsetLeft - 1 + "px";
                }
            }
        }
        if (fx.includes("ArrowLeft")) {
            atkCh = 15;
            if (envir.offsetLeft > -2950 &&
                envir.offsetLeft < 0) {
                envir.style.left = envir.offsetLeft + vx + "px";
                for (c = 0; c < aa.length; c++) {
                    aa[c] += vx;
                }
                for (c = 0; c < trident_num; c++) {
                    trident_x[c] += vx;
                }
                for (c = 0; c < atk_in; c++) {
                    atkx[c] += vx;
                }
                for (c = 0; c < enemyAtkX.length; c++) {
                    enemyAtkX[c] += vx;
                }
                for (c = 0; c < enemy4X.length; c++) {
                    enemy4X[c] += vx;
                }
                for (c = 0; c < rangeAttackX.length; c++) {
                    rangeAttackX[c] += vx;
                    rangeAttack_x[c] += vx;
                }
                enemy2_x += vx;
            }
            if (envir.offsetLeft >= 0) {
                if (x > 0) {
                    x -= vx;
                }
                if (x <= 0) {
                    x += 3;
                }
            }
            if (envir.offsetLeft <= -2950) {
                if (x > 1000) {
                    x -= vx;
                }
                if (x <= 1000) {
                    x = 1000;
                    envir.style.left = envir.offsetLeft + 1 + "px";
                }
            }
        }
        if (fx.includes("ArrowDown")) {
            atkCh = 25.8;
            if (envir.offsetTop > -3950 &&
                envir.offsetTop < 0) {
                envir.style.top = envir.offsetTop - vy + "px";
                for (c = 0; c < aa.length; c++) {
                    bb[c] -= vy;
                }
                for (c = 0; c < trident_num; c++) {
                    trident_y[c] -= vy;
                }
                for (c = 0; c < atk_in; c++) {
                    atky[c] -= vy;
                }
                for (c = 0; c < enemyAtkX.length; c++) {
                    enemyAtkY[c] -= vy;
                }
                for (c = 0; c < enemy4Y.length; c++) {
                    enemy4Y[c] -= vy;
                }
                for (c = 0; c < rangeAttackX.length; c++) {
                    rangeAttackY[c] -= vy;
                    rangeAttack_y[c] -= vy;
                }
                enemy2_y -= vy;
            }
            if (envir.offsetTop <= -3950) {
                if (y < 900) {
                    y += vy;
                }
                if (y >= 900) {
                    y -= 3;
                }
            }
            if (envir.offsetTop >= 0) {
                if (y < 420) {
                    y += vy;
                }
                if (y >= 420) {
                    y = 420;
                    envir.style.top = envir.offsetTop - 1 + "px";
                }
            }
        }
        if (fx.includes("ArrowUp")) {
            atkCh = 10.1;
            if (envir.offsetTop > -3950 &&
                envir.offsetTop < 0) {
                envir.style.top = envir.offsetTop + vy + "px";
                for (c = 0; c < aa.length; c++) {
                    bb[c] += vy;
                }
                for (c = 0; c < trident_num; c++) {
                    trident_y[c] += vy;
                }
                for (c = 0; c < atk_in; c++) {
                    atky[c] += vy;
                }
                for (c = 0; c < enemyAtkX.length; c++) {
                    enemyAtkY[c] += vy;
                }
                for (c = 0; c < enemy4Y.length; c++) {
                    enemy4Y[c] += vy;
                }
                for (c = 0; c < rangeAttackX.length; c++) {
                    rangeAttackY[c] += vy;
                    rangeAttack_y[c] += vy;
                }
                enemy2_y += vy;
            }
            if (envir.offsetTop >= 0) {
                if (y > 0) {
                    y -= vy;
                }
                if (y <= 0) {
                    y += 3;
                }
            }
            if (envir.offsetTop <= -3950) {
                if (y > 395) {
                    y -= vy;
                }
                if (y <= 420) {
                    y = 420;
                    envir.style.top = envir.offsetTop + 1 + "px";
                }
            }

        }
    }, 10)
    var playDraw = setInterval(function () {
        if (stopCh == 1 || gura_hp <= 0) {
            clearInterval(playDraw);
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (fx[0] == "ArrowRight") {
            if (guraCh != 0) {
                guraTime = 0;
            }
            guraCh = 0;
            AAA.src = "guraRight.png";
            ctx.drawImage(AAA, guraTime, 0, 375, 498, x - 50, y - 50, 100, 100);
            guraTime += 375;
            if (guraTime == 3000) {
                guraTime = 0;
            }
        }
        if (fx[0] == "ArrowLeft") {
            if (guraCh != 1) {
                guraTime = 0;
            }
            guraCh = 1;
            AAA.src = "guraLeft.png";
            ctx.drawImage(AAA, guraTime, 0, 375, 498, x - 50, y - 50, 100, 100);
            guraTime += 375;
            if (guraTime == 3000) {
                guraTime = 0;
            }
        }
        if (fx[0] == "ArrowUp") {
            if (guraCh != 2) {
                guraTime = 0;
            }
            guraCh = 2;
            AAA.src = "guraUp.png";
            ctx.drawImage(AAA, guraTime, 0, 362, 498, x - 50, y - 50, 100, 100);
            guraTime += 362;
            if (guraTime == 8326) {
                guraTime = 0;
            }
        }
        if (fx[0] == "ArrowDown") {
            if (guraCh != 3) {
                guraTime = 0;
            }
            guraCh = 3;
            AAA.src = "guraDown.png";
            ctx.drawImage(AAA, guraTime, 0, 500, 200, x - 75, y - 37.5, 150, 75);
            guraTime += 500;
            if (guraTime == 2500) {
                guraTime = 0;
            }
        }
        if (fx.length == 0) {
            if (guraCh == 0 || guraCh == 1) {
                ctx.drawImage(AAA, guraTime, 0, 375, 498, x - 50, y - 50, 100, 100);
            }
            if (guraCh == 2) {
                ctx.drawImage(AAA, guraTime, 0, 362, 498, x - 50, y - 50, 100, 100);
            }
            if (guraCh == 3) {
                ctx.drawImage(AAA, guraTime, 0, 500, 200, x - 75, y - 37.5, 150, 75);
            }
        }
    }, 35)
}


function mori_run() {
    let playRun = setInterval(function () {
        if (stopCh == 1 || mori_hp <= 0) {
            clearInterval(playRun);
        }
        bloodVolume.style.top = y + 60 + "px";
        bloodVolume.style.left = x - 50 + "px";
        if (fx.includes("ArrowRight")) {
            if (envir.offsetLeft > -2950 &&
                envir.offsetLeft < 0) {
                envir.style.left = envir.offsetLeft - vx + "px";
                for (c = 0; c < aa.length; c++) {
                    aa[c] -= vx;
                }
                for (c = 0; c < enemyAtkX.length; c++) {
                    enemyAtkX[c] -= vx;
                }
                for (c = 0; c < enemy4X.length; c++) {
                    enemy4X[c] -= vx;
                }
                for (c = 0; c < rangeAttackX.length; c++) {
                    rangeAttackX[c] -= vx;
                    rangeAttack_x[c] -= vx;
                }
                for (c = 0; c < dart_time.length; c++) {
                    dart_x[c] -= vx;
                    dartXX[c] -= vx;
                }
                enemy2_x -= vx;
            }
            if (envir.offsetLeft <= -2950) {
                if (x < 1900) {
                    x += vx;
                }
                if (x >= 1900) {
                    x -= 3;
                }
            }
            if (envir.offsetLeft >= 0) {
                if (x < 1000) {
                    x += vx;
                }
                if (x >= 1000) {
                    x = 1000;
                    envir.style.left = envir.offsetLeft - 1 + "px";
                }
            }
        }
        if (fx.includes("ArrowLeft")) {
            if (envir.offsetLeft > -2950 &&
                envir.offsetLeft < 0) {
                envir.style.left = envir.offsetLeft + vx + "px";
                for (c = 0; c < aa.length; c++) {
                    aa[c] += vx;
                }
                for (c = 0; c < enemyAtkX.length; c++) {
                    enemyAtkX[c] += vx;
                }
                for (c = 0; c < enemy4X.length; c++) {
                    enemy4X[c] += vx;
                }
                for (c = 0; c < rangeAttackX.length; c++) {
                    rangeAttackX[c] += vx;
                    rangeAttack_x[c] += vx;
                }
                for (c = 0; c < dart_time.length; c++) {
                    dart_x[c] += vx;
                    dartXX[c] += vx;
                }
                enemy2_x += vx;
            }
            if (envir.offsetLeft >= 0) {
                if (x > 0) {
                    x -= vx;
                }
                if (x <= 0) {
                    x += 3;
                }
            }
            if (envir.offsetLeft <= -2950) {
                if (x > 900) {
                    x -= vx;
                }
                if (x <= 1000) {
                    x = 1000;
                    envir.style.left = envir.offsetLeft + 1 + "px";
                }
            }
        }
        if (fx.includes("ArrowDown")) {
            if (envir.offsetTop > -3950 &&
                envir.offsetTop < 0) {
                envir.style.top = envir.offsetTop - vy + "px";
                for (c = 0; c < aa.length; c++) {
                    bb[c] -= vy;
                }
                for (c = 0; c < enemyAtkX.length; c++) {
                    enemyAtkY[c] -= vy;
                }
                for (c = 0; c < enemy4Y.length; c++) {
                    enemy4Y[c] -= vy;
                }
                for (c = 0; c < rangeAttackX.length; c++) {
                    rangeAttackY[c] -= vy;
                    rangeAttack_y[c] -= vy;
                }
                for (c = 0; c < dart_time.length; c++) {
                    dart_y[c] -= vy;
                    dartYY[c] -= vy;
                }
                enemy2_y -= vy;
            }
            if (envir.offsetTop <= -3950) {
                if (y < 900) {
                    y += vy;
                }
                if (y >= 900) {
                    y -= 3;
                }
            }
            if (envir.offsetTop >= 0) {
                if (y < 420) {
                    y += vy;
                }
                if (y >= 420) {
                    y = 420;
                    envir.style.top = envir.offsetTop - 1 + "px";
                }
            }
        }
        if (fx.includes("ArrowUp")) {
            if (envir.offsetTop > -3950 &&
                envir.offsetTop < 0) {
                envir.style.top = envir.offsetTop + vy + "px";
                for (c = 0; c < aa.length; c++) {
                    bb[c] += vy;
                }
                for (c = 0; c < enemyAtkX.length; c++) {
                    enemyAtkY[c] += vy;
                }
                for (c = 0; c < enemy4Y.length; c++) {
                    enemy4Y[c] += vy;
                }
                for (c = 0; c < rangeAttackX.length; c++) {
                    rangeAttackY[c] += vy;
                    rangeAttack_y[c] += vy;
                }
                for (c = 0; c < dart_time.length; c++) {
                    dart_y[c] += vy;
                    dartYY[c] += vy;
                }
                enemy2_y += vy;
            }
            if (envir.offsetTop >= 0) {
                if (y > 0) {
                    y -= vy;
                }
                if (y <= 0) {
                    y += 3;
                }
            }
            if (envir.offsetTop <= -3950) {
                if (y > 420) {
                    y -= vy;
                }
                if (y <= 420) {
                    y = 420;
                    envir.style.top = envir.offsetTop + 1 + "px";
                }
            }
        }
    }, 10)
    let playDraw = setInterval(function () {
        if (stopCh == 1 || mori_hp <= 0) {
            clearInterval(playDraw);
        }
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (fx[0] == "ArrowLeft" || fx[0] == "ArrowUp") {
            AAA.src = "morileft.png";
            if (moriTime % 500 != 0) {
                moriTime = 0;
            }
            moriCh = 1;
            moriTime += 500;
            if (moriTime >= 4000)
                moriTime = 0;
        }
        if (fx[0] == "ArrowRight" || fx[0] == "ArrowDown") {
            AAA.src = "moriright.png";
            if (moriTime % 750 != 0) {
                moriTime = 0;
            }
            moriCh = 0;
            moriTime += 750;
            if (moriTime >= 6000) {
                moriTime = 0;
            }
        }
        if (moriCh == 0) {
            ctx.drawImage(AAA, moriTime, 0, 750, 820, x - 65, y - 50, 120, 100);
        }
        if (moriCh == 1) {
            ctx.drawImage(AAA, moriTime, 0, 500, 482, x - 65, y - 50, 130, 100);
        }
    }, 15)
}
