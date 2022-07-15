var skNum1 = 1;
var skNum2 = 0;
var skNum3 = 0;
var skNum4 = 0;



function skill_up1() {
    if (skNum1 < 50 && sk > 0) {
        skNum1++;
        sk01.innerHTML = skNum1;
        sk--;
        skillNUM_sp.innerHTML = `${sk}`;
        if (gura_play_ch == 1) {
            if (skNum1 % 5 == 0) {
                atk_in += 5;
            }
            gura_atk++;
            attack_run();
        }
        if (mori_play_ch == 1) {
            sickle_akt1 += 5;
        }
    }
    if (sk == 0 || skNum1 == 50) {
        skill_all_down();
    }
}
function skill_down1() {
    if (skNum1 < 50) {
        skill01_1.style.display = "block";
        skill01_2.style.display = "block";
        setTimeout(function () {
            skill01_1.style.top = -98 + "px";
        }, 10)
    }
}
function skill_up2() {
    if (skNum2 < 50 && sk > 0) {
        skNum2++;
        sk02.innerHTML = skNum2;
        sk--;
        skillNUM_sp.innerHTML = `${sk}`;
        if (gura_play_ch == 1) {
            trident_atk++;
            if (trident_num < 12) {
                trident_num++;
            }
            if (skNum2 == 1) {
                trident_();
                trident__();
            }
        }
        if (mori_play_ch == 1) {
            if (skNum2 == 1) {
                dart_num++;
            }
            if (dart_num < 20 && skNum2 % 2 == 1 && skNum2 != 1) {
                dart_num++;
            }
            dart_atk += 5;
        }
    }
    if (sk == 0 || skNum2 == 50) {
        skill_all_down();
    }

}
function skill_down2() {
    if (skNum2 < 50) {
        skill02_1.style.display = "block";
        skill02_2.style.display = "block";
        setTimeout(function () {
            skill02_1.style.top = -98 + "px";
        }, 10)
    }
}
function skill_up3() {
    if (skNum3 < 50 && sk > 0) {
        skNum3++;
        sk03.innerHTML = skNum3;
        sk--;
        skillNUM_sp.innerHTML = `${sk}`;
        if (gura_play_ch == 1) {
            bloop_atk++;
            if (skNum3 == 1) {
                bloop_in++;
                bloop_();
            }
            if (skNum3 % 5 == 0 && skNum3 < 50) {
                bloop_in++;
            }
        }
        if (mori_play_ch == 1) {
            if (skNum2 % 2 == 0) {
                moriBlood_recover++;
            }
        }

    }
    if (sk == 0 || skNum3 == 50) {
        skill_all_down();
    }

}
function skill_down3() {
    if (skNum3 < 50) {
        skill03_1.style.display = "block";
        skill03_2.style.display = "block";
        setTimeout(function () {
            skill03_1.style.top = -98 + "px";
        }, 10)
    }
}
function skill_up4() {
    if (skNum4 < 50 && sk > 0) {
        skNum4++;
        sk04.innerHTML = skNum4;
        sk--;
        skillNUM_sp.innerHTML = `${sk}`;
        if (gura_play_ch == 1) {
            if (skNum4 == 1) {
                console.log(1);
                gun();
            }
            gunAtk++;
        }
        if (mori_play_ch == 1) {
            mori_atk4_atk += 10;
        }
    }
    if (sk == 0 || skNum4 == 50) {
        skill_all_down();
    }
}
function skill_down4() {
    if (skNum4 < 50) {
        skill04_1.style.display = "block";
        skill04_2.style.display = "block";
        setTimeout(function () {
            skill04_1.style.top = -98 + "px";
        }, 10)
    }
}
function skill_all_down() {
    if (skNum1 >= 50 || sk == 0) {
        skill01_1.style.top = 0 + "px";
    }
    if (skNum2 >= 50 || sk == 0) {
        skill02_1.style.top = 0 + "px";
    }
    if (skNum3 >= 50 || sk == 0) {
        skill03_1.style.top = 0 + "px";
    }
    if (skNum4 >= 50 || sk == 0) {
        skill04_1.style.top = 0 + "px";
    }
    setTimeout(function () {
        if (skNum1 >= 50 || sk == 0) {
            skill01_1.style.display = "none";
            skill01_2.style.display = "none";
        }
        if (skNum2 >= 50 || sk == 0) {
            skill02_1.style.display = "none";
            skill02_2.style.display = "none";
        }
        if (skNum3 >= 50 || sk == 0) {
            skill03_1.style.display = "none";
            skill03_2.style.display = "none";
        }
        if (skNum4 >= 50 || sk == 0) {
            skill04_1.style.display = "none";
            skill04_2.style.display = "none";
        }
    }, 250)
}
