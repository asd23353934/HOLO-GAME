var canvas3 = document.getElementById("can3");
var ctx3 = canvas3.getContext("2d");

can3.width = window.innerWidth;
can3.height = window.innerHeight;


EEE = new Image();
EEE.onload = function () {
    this.onload = null;
    first_1();
}
EEE.src = "f8f8f8.png";

EEE_1 = new Image();
EEE_1.onload = function () {
    this.onload = null;
}
EEE_1.src = "1111.png";
EEE_2 = new Image();
EEE_2.onload = function () {
    this.onload = null;
}
EEE_2.src = "moriatk4.png";
let bloop_x_ch = [930]; //bloop第一隻主畫面初始X座標
let bloop_y_ch = [500]; //bloop第一隻主畫面初始Y座標
function first_1() {
    console.log(1);
    let bloop_run = setInterval(function () {

        ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
        if (takoA == 1) {
            clearInterval(bloop_run);
        }
        for (a = 0; a < bloop_x_ch.length; a++) {
            if (y - 50 < bloop_y_ch[a])
                bloop_y_ch[a] -= 6;
            if (y + 50 > bloop_y_ch[a])
                bloop_y_ch[a] += 6;
            if (x - 50 < bloop_x_ch[a]) {
                bloop_x_ch[a] -= 6;
                ctx3.drawImage(EEE_1, bloop_x_ch[a], bloop_y_ch[a], 100, 100);
            }
            if (x + 50 > bloop_x_ch[a]) {
                bloop_x_ch[a] += 6;
                ctx3.drawImage(EEE, bloop_x_ch[a], bloop_y_ch[a], 100, 100);
            }


        }

    }, 15)
    let bloopRun = setInterval(function () {
        if (takoA == 1) {
            clearInterval(bloopRun);
        }
        for (a = 0; a < bloop_x_ch.length; a++) {
            b = 0;
            for (f = 0; f < bloop_x_ch.length; f++) {
                b++;
                if (b + a == bloop_x_ch.length)
                    b = 0 - a;
                if (bloop_x_ch[a] + 70 > bloop_x_ch[a + f] &&
                    bloop_x_ch[a] - 70 < bloop_x_ch[a + f] &&
                    bloop_y_ch[a] + 70 > bloop_y_ch[a + f] &&
                    bloop_y_ch[a] - 70 < bloop_y_ch[a + f] &&
                    bloop_x_ch.length > 1) {
                    if (bloop_x_ch[a] > bloop_x_ch[a + f])
                        bloop_x_ch[a + f] -= 1;
                    if (bloop_x_ch[a] < bloop_x_ch[a + f])
                        bloop_x_ch[a] -= 1;
                    if (bloop_x_ch[a] < bloop_x_ch[a + f])
                        bloop_x_ch[a + f] += 1;
                    if (bloop_x_ch[a] > bloop_x_ch[a + f])
                        bloop_x_ch[a] += 1;
                    if (bloop_y_ch[a] > bloop_y_ch[a + f])
                        bloop_y_ch[a + f] -= 1.5;
                    if (bloop_y_ch[a] < bloop_y_ch[a + f])
                        bloop_y_ch[a] -= 1.5;
                    if (bloop_y_ch[a] < bloop_y_ch[a + f])
                        bloop_y_ch[a + f] += 1.5;
                    if (bloop_y_ch[a] > bloop_y_ch[a + f])
                        bloop_y_ch[a] += 1.5;
                }
            }
        }
    }, 5)
}

let atkNUM3 = 0
let atkNUM3_ALL = 0;
let atk3 = 0;
var bloop_in = 0;                   //bloop當前數量
var bloopx = [];                    //cosX軸距離
var bloopy = [];                    //sinY軸距離
var bloop_x = [];                   //X圓心+bloop圓的範圍
var bloop_y = [];                   //Y圓心+bloop圓的範圍
let bloop_atk_all = 0;              //bloop初始傷害
var bloop_atk = bloop_atk_all;      //bloop目前傷害
var bloop_time = 0;                 //設定不同bloop的角度間距
var bloop_time_all = [];            //記錄每隻bloop的角度
var bloop_j = [];                   //bloop觸碰怪物後延遲
function bloop_() {
    var bloop_begin = setInterval(function () {
        if (stopCh == 1 || gura_hp <= 0) {
            clearInterval(bloop_begin);
        }
        if (stopCh == 0) {
            for (a = 0; a < bloop_j.length; a++) {
                if (bloop_j[a] > 0) {
                    bloop_j[a]++;
                }
                if (bloop_j[a] == 15) {
                    bloop_j[a] = 0;
                }
            }
            for (a = 0; a < bloop_in; a++) {
                bloop_time += 0.00004;
                bloop_time_all[a] = a + 1 + bloop_time;
            }
            for (a = 0; a < bloop_in; a++) {
                bloopx[a] = 200 * Math.cos(Math.PI + bloop_time_all[a] * 120);
                bloopy[a] = 200 * Math.sin(Math.PI + bloop_time_all[a] * 120);
                bloop_x[a] = x + bloopx[a];
                bloop_y[a] = y + bloopy[a];
                for (b = 0; b < aa.length; b++) {
                    if (takoBody_type[b] < 101 || enemyATk_ch[b] != 2) {
                        if (bloop_x[a] + 50 > aa[b] &&
                            bloop_x[a] - 50 < aa[b] &&
                            bloop_y[a] + 50 > bb[b] &&
                            bloop_y[a] - 50 < bb[b] &&
                            ata_hp[b] > 0 &&
                            bloop_j[b] == 0) {
                            bloop_j[b] = 1;
                            // BLOOP_();
                            if (enemyATk_ch[b] != 1) {
                                if (aa[b] > x + 50) {
                                    aa[b] += 25;
                                }
                                if (aa[b] < x - 50) {
                                    aa[b] -= 25;
                                }
                                if (bb[b] > y + 50) {
                                    bb[b] += 25;
                                }
                                if (bb[b] < y - 50) {
                                    bb[b] -= 25;
                                }
                            }
                            if (ata_hp[b] > 0) {
                                ata_hp[b] -= bloop_atk;
                                if (atkNUM3_ALL > 0) {
                                    atkNUM3 += bloop_atk;
                                    if (atkNUM3 >= Math.pow(10, 7)) {
                                        atkNUM3_ALL++;
                                        atkNUM3 -= Math.pow(10, 7);
                                    }
                                    SKILL_LIST3_p_1.innerHTML = `${atkNUM3_ALL}m${atkNUM3}`;
                                }
                                if (atkNUM3_ALL == 0) {
                                    atkNUM3 += bloop_atk;
                                    SKILL_LIST3_p_1.innerHTML = atkNUM3;
                                    if (atkNUM3 >= Math.pow(10, 7)) {
                                        atkNUM3_ALL = 1;
                                        atkNUM3 -= Math.pow(10, 7);
                                    }
                                }
                                show_atk_(b, bloop_atk, 0);
                            }
                            if (ata_hp[b] <= 0) {
                                atk3++;
                                toch(b);
                            }
                        }
                    }
                }
            }
        }
    }, 10)
    var bloopDraw = setInterval(function () {
        if (stopCh == 1 || gura_hp <= 0) {
            clearInterval(bloopDraw);
        }
        if (bloop_in > 0) {
            ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
            for (a = 0; a < bloop_in; a++) {
                if (fx.includes("ArrowRight")) {
                    EEE.src = "f8f8f8.png";
                }
                if (fx.includes("ArrowLeft")) {
                    EEE.src = "1111.png";
                }
                ctx3.drawImage(EEE, bloop_x[a] - 45, bloop_y[a] - 35, 100, 100);
            }
        }

    }, 1)
}