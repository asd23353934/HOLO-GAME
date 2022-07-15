var canvas2 = document.getElementById("can2");
var ctx2 = canvas2.getContext("2d");
can2.width = window.innerWidth;
can2.height = window.innerHeight;

DDD_1 = new Image();
DDD_1.src = "atk2.png";
DDD_2 = new Image();
DDD_2.src = "atk3.png";
DDD_3 = new Image();
DDD_3.src = "atk5.png";
DDD_4 = new Image();
DDD_4.src = "atk7.png";
DDD_1.onload = function () {
    this.onload = null;
}
DDD_2.onload = function () {
    this.onload = null;
}
DDD_3.onload = function () {
    this.onload = null;
}
DDD_4.onload = function () {
    this.onload = null;
}
let atkNUM2 = 0;
let atkNUM2_ALL = 0;
let atk2 = 0;
var trident_x = [];                     //三叉戟X座標
var trident_y = [];                     //三叉戟Y座標
var trident_speed_x = 10;               //三叉戟X軸移動速度
var trident_speed_y = 10;               //三叉戟Y軸移動速度
let trident_atk_all = 0;                //三叉戟初始傷害
var trident_atk = trident_atk_all;      //三叉戟當前傷害
var trident_time = 0;                   //三叉戟射程距離
var trident_j = [];                     //三叉戟觸碰怪物後延遲
var trident_num = 0;                    //三叉戟當前數量
function trident_() {
    for (a = 0; a < trident_num; a++) {
        if (stopCh == 0) {
            if (a == 0 ||
                a == 8) {
                trident_x[a] = x - 5;
            }
            if (a == 4) {
                trident_x[a] = x - 50;
            }
            if (a == 1 ||
                a == 9) {
                trident_x[a] = x + 5;
            }
            if (a == 5) {
                trident_x[a] = x + 50;
            }
            if (a == 2 ||
                a == 10) {
                trident_y[a] = y + 5;
            }
            if (a == 6) {
                trident_y[a] = y - 50;
            }
            if (a == 3 ||
                a == 11) {
                trident_y[a] = y - 5;

            }
            if (a == 7) {
                trident_y[a] = y + 50;
            }
            if (a == 0 ||
                a == 1) {
                trident_y[a] = y - 70;
            }
            if (a == 4 ||
                a == 5) {
                trident_y[a] = y;
            }
            if (a == 8 ||
                a == 9) {
                trident_y[a] = y + 70;
            }
            if (a == 2 ||
                a == 3) {
                trident_x[a] = x - 70;
            }
            if (a == 6 ||
                a == 7) {
                trident_x[a] = x;
            }
            if (a == 10 ||
                a == 11) {
                trident_x[a] = x + 70;
            }
        }
    }
}
function trident__() {
    var tridentAtk = setInterval(function () {
        if (stopCh == 1 || gura_hp <= 0) {
            clearInterval(tridentAtk);
        }
        if (stopCh == 0) {
            for (a = 0; a < trident_j.length; a++) {
                if (stopCh == 0) {
                    if (trident_j[a] > 0) {
                        trident_j[a]++
                    }
                    if (trident_j[a] == 35) {
                        trident_j[a] = 0;
                    }
                }
            }
            trident_time++;
            if (trident_time >= 150) {
                trident_time = 0;
                trident_();
            }
            for (a = 0; a < trident_num; a++) {

                if (a == 0 ||
                    a == 4 ||
                    a == 8) {
                    trident_x[a] -= trident_speed_x;
                }
                if (a == 1 ||
                    a == 5 ||
                    a == 9) {
                    trident_x[a] += trident_speed_x;
                }
                if (a == 2 ||
                    a == 6 ||
                    a == 10) {
                    trident_y[a] -= trident_speed_y;
                }
                if (a == 3 ||
                    a == 7 ||
                    a == 11) {
                    trident_y[a] += trident_speed_y;
                }

            }

            for (n = 0; n < trident_num; n++) {
                if (stopCh == 0) {
                    for (v = 0; v < aa.length; v++) {
                        if (takoBody_type[v] < 101 || enemyATk_ch[v] != 2) {
                            if (trident_x[n] + takoBody_type[v] + 20 > aa[v] &&
                                trident_x[n] - takoBody_type[v] - 20 < aa[v] &&
                                trident_y[n] + takoBody_type[v] + 20 > bb[v] &&
                                trident_y[n] - takoBody_type[v] - 20 < bb[v] &&
                                ata_hp[v] > 0 &&
                                trident_j[v] == 0) {
                                trident_j[v] = 1;
                                if (ata_hp[v] > 0) {
                                    ata_hp[v] -= trident_atk;
                                    if (atkNUM2_ALL > 0) {
                                        atkNUM2 += trident_atk;
                                        if (atkNUM2 >= Math.pow(10, 7)) {
                                            atkNUM2_ALL++;
                                            atkNUM2 -= Math.pow(10, 7);
                                        }
                                        SKILL_LIST2_p_1.innerHTML = `${atkNUM2_ALL}m${atkNUM2}`;
                                    }
                                    if (atkNUM2_ALL == 0) {
                                        atkNUM2 += trident_atk;
                                        SKILL_LIST2_p_1.innerHTML = atkNUM2;
                                        if (atkNUM2 >= Math.pow(10, 7)) {
                                            atkNUM2_ALL = 1;
                                            atkNUM2 -= Math.pow(10, 7);
                                        }
                                    }

                                    show_atk_(v, trident_atk, 0);
                                }
                                if (ata_hp[v] <= 0) {
                                    atk2++;
                                    toch(v);
                                }
                                // TRIDENT_();
                            }
                        }
                    }
                }
            }
        }
    }, 5)
    var tridentDraw = setInterval(function () {
        if (stopCh == 1 || gura_hp <= 0) {
            clearInterval(tridentDraw);
        }
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        if (trident_atk > 0) {
            for (v = 0; v < trident_num; v++) {
                if (v == 0 ||
                    v == 4 ||
                    v == 8) {
                    ctx2.drawImage(DDD_4, trident_x[v], trident_y[v], 150, 50);
                }
                if (v == 1 ||
                    v == 5 ||
                    v == 9) {
                    ctx2.drawImage(DDD_2, trident_x[v], trident_y[v], 150, 50);
                }
                if (v == 2 ||
                    v == 6 ||
                    v == 10) {
                    ctx2.drawImage(DDD_1, trident_x[v], trident_y[v], 50, 150);
                }
                if (v == 3 ||
                    v == 7 ||
                    v == 11) {
                    ctx2.drawImage(DDD_3, trident_x[v], trident_y[v], 50, 150);
                }

            }
        }
    }, 5)
}

