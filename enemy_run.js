var kill = document.getElementById("kill_num");
var skill = document.getElementById("skill_num");
var my_money = document.getElementById("money");
let canvas0 = document.getElementById("can0");
let ctx0 = canvas0.getContext("2d");
let canvas0_1 = document.getElementById("can0_1");
let ctx0_1 = canvas0_1.getContext("2d");
let canvas0_2 = document.getElementById("can0_2");
let ctx0_2 = canvas0_1.getContext("2d");
let canvas0_3 = document.getElementById("can0_3");
let ctx0_3 = canvas0_3.getContext("2d");
let canvas0_4 = document.getElementById("can0_4");
let ctx0_4 = canvas0_4.getContext("2d");
can0.width = window.innerWidth;
can0.height = window.innerHeight;
can0_1.width = window.innerWidth;
can0_1.height = window.innerHeight;
can0_2.width = window.innerWidth;
can0_2.height = window.innerHeight;
can0_3.width = window.innerWidth;
can0_3.height = window.innerHeight;
can0_4.width = window.innerWidth;
can0_4.height = window.innerHeight;
BBB = new Image();
BBB.onload = function () {
    this.onload = null;
}
BBB.src = "tako.png";

BBB_1_1 = new Image();
BBB_1_1.onload = function () {
    this.onload = null;
}
BBB_1_1.src = "Death-senseiLeft.png";

BBB_1_2 = new Image();
BBB_1_2.onload = function () {
    this.onload = null;
}
BBB_1_2.src = "Death-senseiRight.png";

BBB_2_1 = new Image();
BBB_2_1.onload = function () {
    this.onload = null;
}
BBB_2_1.src = "bubbaleft.png";

BBB_2_2 = new Image();
BBB_2_2.onload = function () {
    this.onload = null;
}
BBB_2_2.src = "bubbaright.png";

BBB_3_1 = new Image();
BBB_3_1.onload = function () {
    this.onload = null;
}
BBB_3_1.src = "Kotorileft.png";

BBB_3_2 = new Image();
BBB_3_2.onload = function () {
    this.onload = null;
}
BBB_3_2.src = "Kotoriright.png";

var aa = []; //怪物X座標
var bb = []; //怪物Y座標
let takott = 0;
let takoRun_time = 0;
var r = t = -50; //怪物初始座標
let speed = []; //怪物移動速度
var ata_hp = []; //怪物血量
let takoBody_type = []; //tako體型
let bubba = 0;
function enemy_run() {
    var enemyRun = setInterval(function () {
        if (stopCh == 1 || gura_hp <= 0 || mori_hp <= 0) {
            clearInterval(enemyRun);
        }
        if (stopCh == 0) {
            for (c = 0; c < aa.length; c++) {
                if ((takoBody_type[c] < 101 || enemyATk_ch[c] != 2) && enemyATk_ch[c] != 3 && enemyATk_ch[c] != 1) {
                    if (aa[c] > x + 50) {
                        aa[c] -= speed[c];
                    }
                    if (aa[c] < x - 50) {
                        aa[c] += speed[c];
                    }
                    if (bb[c] > y + 50) {
                        bb[c] -= speed[c];
                    }
                    if (bb[c] < y - 50) {
                        bb[c] += speed[c];
                    }
                    if (aa[c] < x + 40 &&
                        aa[c] > x - 40 &&
                        bb[c] < y + 40 &&
                        bb[c] > y - 40) {
                        if (aa[c] > x) {
                            aa[c] += speed[c] + 5;
                        }
                        if (aa[c] < x) {
                            aa[c] -= speed[c] + 5;
                        }
                        if (bb[c] > y) {
                            bb[c] += speed[c] + 5;
                        }
                        if (bb[c] < y) {
                            bb[c] -= speed[c] + 5;
                        }
                    }
                }
            }
        }
    }, 30)
    let enemyRun3 = setInterval(() => {
        if (stopCh == 1 || gura_hp <= 0 || mori_hp <= 0) {
            clearInterval(enemyRun3);
        }
        for (c = 0; c < aa.length; c++) {
            if (enemyATk_ch[c] == 3) {
                if (aa[c] > x + 800) {
                    aa[c] -= speed[c];
                }
                if (aa[c] < x - 800) {
                    aa[c] += speed[c];
                }
                if (bb[c] > y + 350) {
                    bb[c] -= speed[c];
                }
                if (bb[c] < y - 350) {
                    bb[c] += speed[c];
                }
                if (aa[c] < x + 600 &&
                    aa[c] > x - 600 &&
                    bb[c] < y + 300 &&
                    bb[c] > y - 300) {
                    if (aa[c] > x) {
                        aa[c] += speed[c] + Math.floor(Math.random() * 4);
                    }
                    if (aa[c] < x) {
                        aa[c] -= speed[c] + Math.floor(Math.random() * 4);
                    }
                    if (bb[c] > y) {
                        bb[c] += speed[c] + Math.floor(Math.random() * 4);
                    }
                    if (bb[c] < y) {
                        bb[c] -= speed[c] + Math.floor(Math.random() * 4);
                    }
                }
            }
        }
    }, 30);
    let enemy2RUN = setInterval(() => {
        if (stopCh == 1 || gura_hp <= 0 || mori_hp <= 0) {
            clearInterval(enemy2RUN);
        }
        for (a = 0; a < aa.length; a++) {
            if (enemyATk_ch[a] == 1) {
                aa[a] -= speed[a] * 0.1;
                bb[a] -= speed_j[a] * 0.1;
                if (enemy2_x + 50 > aa[a] &&
                    enemy2_x - 50 < aa[a] &&
                    enemy2_y + 50 > bb[a] &&
                    enemy2_y - 50 < bb[a]) {
                    aa.splice(a, 1);
                    bb.splice(a, 1);
                    trident_j.splice(a, 1);
                    bloop_j.splice(a, 1);
                    ata_hp.splice(a, 1);
                    tako_j.splice(a, 1);
                    takoBody_type.splice(a, 1);
                    enemyATk_ch.splice(a, 1);
                    enemyAtkTime.splice(a, 1);
                    takoAtk.splice(a, 1);
                    speed.splice(a, 1);
                    enemyAtk4_j.splice(a, 1);
                    rangeAttack_j.splice(a, 1);
                    speed_j.splice(a, 1);
                }
            }
        }
    }, 15);
    var enemyJudge = setInterval(function () {
        if (stopCh == 1 || gura_hp <= 0 || mori_hp <= 0) {
            clearInterval(enemyJudge);
        }
        if (stopCh == 0) {
            for (c = 0; c < aa.length; c++) {
                b = 0;
                for (f = 0; f < aa.length; f++) {
                    b++;
                    if (b + c == aa.length) {
                        b = 0 - c;
                    }
                    if (enemyATk_ch[c] != 1 && enemyATk_ch[c + b] != 1 &&
                        (takoBody_type[c] < 101 || enemyATk_ch[c] != 2) &&
                        (takoBody_type[c + b] < 101 || enemyATk_ch[c + b] != 2)) {
                        if (aa[c] + takoBody_type[c] * 0.7 > aa[c + b] &&
                            aa[c] - takoBody_type[c] * 0.7 < aa[c + b] &&
                            bb[c] + takoBody_type[c] * 0.7 > bb[c + b] &&
                            bb[c] - takoBody_type[c] * 0.7 < bb[c + b]) {
                            if (aa[c] > aa[c + b]) {
                                aa[c + b] -= 1;
                            }
                            if (aa[c] < aa[c + b]) {
                                aa[c] -= 1;
                            }
                            if (aa[c] < aa[c + b]) {
                                aa[c + b] += 1;
                            }
                            if (aa[c] > aa[c + b]) {
                                aa[c] += 1;
                            }
                            if (bb[c] > bb[c + b]) {
                                bb[c + b] -= 1;
                            }
                            if (bb[c] < bb[c + b]) {
                                bb[c] -= 1;
                            }
                            if (bb[c] < bb[c + b]) {
                                bb[c + b] += 1;
                            }
                            if (bb[c] > bb[c + b]) {
                                bb[c] += 1;
                            }
                        }
                    }
                }
            }
        }

    }, 5)
    var enemyDraw = setInterval(function () {
        if (stopCh == 1 || gura_hp <= 0 || mori_hp <= 0) {
            clearInterval(enemyDraw);
        }
        ctx0.clearRect(0, 0, canvas0.width, canvas0.height);
        ctx0_1.clearRect(0, 0, canvas0_1.width, canvas0_1.height);
        ctx0_2.clearRect(0, 0, canvas0_2.width, canvas0_2.height);
        ctx0_3.clearRect(0, 0, canvas0_3.width, canvas0_3.height);
        ctx0_4.clearRect(0, 0, canvas0_4.width, canvas0_4.height);
        for (xxx = 0; xxx < aa.length; xxx++) {
            if (ata_hp[xxx] > 0) {
                if (enemyATk_ch[xxx] == 0 || enemyATk_ch[xxx] == -1) {
                    ctx0.drawImage(BBB, takoRun_time, 0, 220, 212, aa[xxx] - takoBody_type[xxx] / 2, bb[xxx] - takoBody_type[xxx] / 2, takoBody_type[xxx], takoBody_type[xxx]);
                }
                if (enemyATk_ch[xxx] == 1) {
                    if (x < aa[xxx]) {
                        ctx0_1.drawImage(BBB_1_2, aa[xxx] - takoBody_type[xxx] / 2, bb[xxx] - takoBody_type[xxx] / 2, takoBody_type[xxx], takoBody_type[xxx]);
                    } else {
                        ctx0_1.drawImage(BBB_1_1, aa[xxx] - takoBody_type[xxx] / 2, bb[xxx] - takoBody_type[xxx] / 2, takoBody_type[xxx], takoBody_type[xxx]);
                    }
                }
                if (enemyATk_ch[xxx] == 2) {
                    if (x < aa[xxx]) {
                        ctx0_2.drawImage(BBB_2_1, 0, bubba, 450, 400, aa[xxx] - takoBody_type[xxx] / 2, bb[xxx] - takoBody_type[xxx] / 2, takoBody_type[xxx], takoBody_type[xxx]);
                    } else {
                        ctx0_2.drawImage(BBB_2_2, 0, bubba, 450, 400, aa[xxx] - takoBody_type[xxx] / 2, bb[xxx] - takoBody_type[xxx] / 2, takoBody_type[xxx], takoBody_type[xxx]);
                    }
                    if (takoBody_type[xxx] > 100) {
                        takoBody_type[xxx]--;
                    }
                }
                if (enemyATk_ch[xxx] == 3) {
                    if (x < aa[xxx]) {
                        ctx0_3.drawImage(BBB_3_1, aa[xxx] - takoBody_type[xxx] / 2, bb[xxx] - takoBody_type[xxx] / 2, takoBody_type[xxx], takoBody_type[xxx]);
                    } else {
                        ctx0_3.drawImage(BBB_3_2, aa[xxx] - takoBody_type[xxx] / 2, bb[xxx] - takoBody_type[xxx] / 2, takoBody_type[xxx], takoBody_type[xxx]);
                    }

                }
                if (enemyATk_ch[xxx] == 4) {
                    if (x < aa[xxx]) {
                        ctx0_4.drawImage(EEE_1, aa[xxx] - takoBody_type[xxx] / 2, bb[xxx] - takoBody_type[xxx] / 2, takoBody_type[xxx], takoBody_type[xxx]);
                    } else {
                        ctx0_4.drawImage(EEE, aa[xxx] - takoBody_type[xxx] / 2, bb[xxx] - takoBody_type[xxx] / 2, takoBody_type[xxx], takoBody_type[xxx]);
                    }
                }
            }
        }
        takott += 4;
        if (takott > 0 && takott % 220 == 0) {
            bubba += 400;
            takoRun_time = takott;
        }

        if (bubba >= 1600) {
            bubba = 0;
        }

        if (takott >= 880) {
            takott = 0;
            takoRun_time = 0;
        }
    }, 15)

}


