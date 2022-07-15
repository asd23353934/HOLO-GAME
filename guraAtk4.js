var canvas4_1 = document.getElementById("can4_1");
var ctx4_1 = canvas4_1.getContext("2d");
var canvas4_2 = document.getElementById("can4_2");
var ctx4_2 = canvas4_2.getContext("2d");
can4_1.width = window.innerWidth;
can4_1.height = window.innerHeight;
can4_2.width = window.innerWidth;
can4_2.height = window.innerHeight;

FFF = new Image();
FFF.src = "bloopLeft.png";
FFF.onload = function () {
    this.onload = null;
}
GGG = new Image();
GGG.src = "atk4Left.png";
GGG.onload = function () {
    this.onload = null;
}
let atkNUM4 = 0;
let atkNUM4_ALL = 0;
let atk4 = 0;
let gun_atk = 0;            //紀錄觸碰怪物後浮動傷害
var gunShow = 0;            //雷射砲橫軸圖的分段座標
var gunShow_ch = 0;         //判斷人物是左是右
let gunAtk_all = 10;        //雷射炮初始傷害
var gunAtk = gunAtk_all;    //雷射炮當前傷害
var gunAtk_j = [];          //雷射炮觸碰怪物後延遲
let bloopGun_time = 0;      //雷射炮發射時長
let bloopGun_a = 1425;      //bloop橫軸圖的分段座標
let bloopGun_down = 0;      //雷射炮冷卻時間
let bloopGunX = 0;          //bloopX座標
let bloopGunY = y - 1000;       //bloopY座標
function gun() {
    let gunBloop = setInterval(function () {
        if (stopCh == 1 || gura_hp <= 0) {
            clearInterval(gunBloop);
        }
        if (stopCh == 0) {
            if (bloopGun_down >= 3) {
                bloopGun_down++;
            }
            if (bloopGun_down >= 1000) {
                bloopGun_down = 0;
            }
            if (fx[0] == "ArrowRight") {
                gunShow_ch = 0;
            }
            if (fx[0] == "ArrowLeft") {
                gunShow_ch = 1;
            }
            if (skNum4 > 0) {
                console.log(2);
                if (bloopGun_down == 0) {
                    bloopGunY += 12;
                    if (bloopGunY >= y - 300) {
                        bloopGunY = y - 300;
                        bloopGun_down = 1;
                        ctx4_1.clearRect(0, 0, canvas4_1.width, canvas4_1.height);
                    }
                }
                if (bloopGun_down == 2) {
                    bloopGunY -= 12;
                    if (bloopGunY <= y - 1000) {
                        bloopGun_down = 3;
                        ctx4_1.clearRect(0, 0, canvas4_1.width, canvas4_1.height);
                    }
                }
                if (bloopGun_down == 0 || bloopGun_down == 2) {
                    ctx4_1.clearRect(0, 0, canvas4_1.width, canvas4_1.height);
                    if (gunShow_ch == 0) {
                        FFF.src = "f8f8f8.png";
                        bloopGunX = x - 520;
                        ctx4_1.drawImage(FFF, bloopGunX, bloopGunY, 600, 600);
                    }
                    if (gunShow_ch == 1) {
                        FFF.src = "1111.png";
                        bloopGunX = x + 100;
                        ctx4_1.drawImage(FFF, bloopGunX, bloopGunY, 600, 600);
                    }
                }

                if (bloopGun_down == 1) {
                    if (bloopGun_a <= 0) {
                        bloopGun_time++;
                    }
                    if (bloopGun_time == 1) {
                        gun1();
                    }
                    if (bloopGun_time == 1000) {
                        bloopGun_time = -1;
                    }
                    ctx4_1.clearRect(0, 0, canvas4_1.width, canvas4_1.height);
                    if (bloopGun_time >= -1) {
                        if (gunShow_ch == 0) {
                            FFF.src = "bloopRight.png";
                            ctx4_1.drawImage(FFF, bloopGun_a, 0, 475, 600, x - 480, y - 300, 475, 600);
                        }
                        if (gunShow_ch == 1) {
                            FFF.src = "bloopLeft.png";
                            ctx4_1.drawImage(FFF, bloopGun_a, 0, 475, 600, x + 140, y - 300, 475, 600);
                        }
                    }
                    if (bloopGun_time == 0) {
                        bloopGun_a -= 475;
                    }
                    if (bloopGun_time == -1) {
                        bloopGun_a += 475;
                        if (bloopGun_a == 1425) {
                            bloopGun_time = 0;
                            bloopGun_down = 2;
                            ctx4_1.clearRect(0, 0, canvas4_1.width, canvas4_1.height);
                        }
                    }
                }

            }

        }
    }, 15)
}
function gun1() {
    let gunShow_ = setInterval(function () {
        if (stopCh == 1 || gura_hp < 1) {
            clearInterval(gunShow_);
        }

        if (bloopGun_down >= 2 || skNum4 == 0) {
            ctx4_2.clearRect(0, 0, canvas4_2.width, canvas4_2.height);
            clearInterval(gunShow_);
        }
        if (stopCh == 0) {
            if (skNum4 > 0 && bloopGun_time > 0) {
                console.log(3);
                if (gunShow >= 5136) {
                    gunShow = 0;
                }
                ctx4_2.clearRect(0, 0, canvas4_2.width, canvas4_2.height);
                if (gunShow_ch == 0) {
                    GGG.src = "atk4Right.png"
                    ctx4_2.drawImage(GGG, gunShow, 0, 670, 179, x + 60, y - 250, 1893, 500);
                }
                if (gunShow_ch == 1) {
                    GGG.src = "atk4Left.png"
                    ctx4_2.drawImage(GGG, gunShow, 0, 600, 180, x - 1980, y - 250, 1893, 500);
                }

                gunShow += 644;
                for (a = 0; a < aa.length; a++) {
                    if (takoBody_type[a] < 101 || enemyATk_ch[a] != 2) {
                        if (gunAtk_j[a] > 0) {
                            gunAtk_j[a]++;
                        }
                        if (gunAtk_j[a] > 2) {
                            gunAtk_j[a] = 0;
                        }
                        if (gunAtk_j[a] == 0 &&
                            y + 300 > bb[a] &&
                            y - 300 < bb[a] &&
                            ata_hp[a] > 0) {
                            if (x + 200 >= aa[a] &&
                                gunShow_ch == 1) {
                                gunAtk_j[a] = 1;
                                if (ata_hp[a] > 0) {
                                    gun_atk = gunAtk + Math.floor(Math.random() * (gunAtk + 10));
                                    ata_hp[a] -= gun_atk;
                                    if (atkNUM4_ALL > 0) {
                                        atkNUM4 += gun_atk;
                                        if (atkNUM4 >= Math.pow(10, 7)) {
                                            atkNUM4_ALL++;
                                            atkNUM4 -= Math.pow(10, 7);
                                        }
                                        SKILL_LIST4_p_1.innerHTML = `${atkNUM4_ALL}m${atkNUM4}`;
                                    }
                                    if (atkNUM4_ALL == 0) {
                                        atkNUM4 += gun_atk;
                                        SKILL_LIST4_p_1.innerHTML = atkNUM4;
                                        if (atkNUM4 >= Math.pow(10, 7)) {
                                            atkNUM4_ALL = 1;
                                            atkNUM4 -= Math.pow(10, 7);
                                        }
                                    }
                                    show_atk_(a, gun_atk, 1);
                                }
                                if (ata_hp[a] <= 0) {
                                    atk4++;
                                    toch(a);
                                }
                            }
                            if (x - 200 < aa[a] &&
                                gunShow_ch == 0) {
                                gunAtk_j[a] = 1;
                                if (ata_hp[a] > 0) {
                                    gun_atk = gunAtk + Math.floor(Math.random() * (gunAtk + 10));
                                    ata_hp[a] -= gun_atk;
                                    if (atkNUM4_ALL > 0) {
                                        atkNUM4 += gun_atk;
                                        if (atkNUM4 >= Math.pow(10, 7)) {
                                            atkNUM4_ALL++;
                                            atkNUM4 -= Math.pow(10, 7);
                                        }
                                        SKILL_LIST4_p_1.innerHTML = `${atkNUM4_ALL}m${atkNUM4}`;
                                    }
                                    if (atkNUM4_ALL == 0) {
                                        atkNUM4 += gun_atk;
                                        SKILL_LIST4_p_1.innerHTML = atkNUM4;
                                        if (atkNUM4 >= Math.pow(10, 7)) {
                                            atkNUM4_ALL = 1;
                                            atkNUM4 -= Math.pow(10, 7);
                                        }
                                    }
                                    show_atk_(a, gun_atk, 1);
                                }
                                if (ata_hp[a] <= 0) {
                                    atk4++;
                                    toch(a);
                                }
                            }
                        }
                    }
                }
            }
        }
    }, 50)
}