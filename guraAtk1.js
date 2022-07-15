var canvas1 = document.getElementById("can1");
var ctx1 = canvas1.getContext("2d");
let showSkillLVL = document.getElementById("showSkillLVL");
let randomBoostLVL = document.getElementById("randomBoostLVL");
let randomBoost_lvl_sp = document.getElementById("randomBoost_lvl_sp");
can1.width = window.innerWidth;
can1.height = window.innerHeight;
CCC = new Image();
CCC.src = "img/R-PhotoRoom.png";
CCC.onload = function () {
    this.onload = null;
}
let atkNUM1 = 0;
let atkNUM1_ALL = 0;
let atk1 = 0;         //第一招擊殺數
var atk_spacing = 50; //每一發攻擊之間間距
var atk_in = 5;       //攻擊圖案數量
var atk_num = [50];   //紀錄攻擊間距與攻擊顯示時間
var atkTime = 0;      //使每一發的攻擊圖示呈現扇形所需角度
var atkCh = 25.8;     //改變上下左右攻擊方向
var atkCh_num = [];   //紀錄初始攻擊方向
var atk_x = [];       //紀錄攻擊圖示當前攻擊X位置
var atk_y = [];       //紀錄攻擊圖示當前攻擊Y位置
var atkx = [];        //紀錄初使人物X位置
var atky = [];        //紀錄初使人物Y位置
var j = [];           //判斷擊中後攻擊消失
let atk1_angle = [];

var ki = 0;           //擊殺數
var sk = 0;           //技能點
let sk_num = 1;
let skLVL = 0;
let skExperience = 10;
let atkRAN = 0;
let atkRANALL = 0;

let gura_atk_all = 1; //gura傷害初始值
var gura_atk = gura_atk_all;     //gura第一招傷害

let atk1234 = 0;      //全部技能擊殺總量
let atk_all = 0;      //擊殺總量除上顯示隨機提升所需量的餘數
let atkNum = 0;       //消除餘數的擊殺總量除顯示隨機提升所需量得到的次數
let skill_up_stop = 1;//顯示隨機提升所需量上限值
let atkLimit = 10;    //顯示隨機提升所需量
let atkLimit_num = 0; //增加顯示隨機提升所需量

let touch_x = [];     //攻擊特效初始X座標
let touch_y = [];     //攻擊特效初始Y座標
let touchX = [];      //攻擊特效當前X座標
let touchY = [];      //攻擊特效當前Y座標
let touchVX = [];     //攻擊特效X座標移動速度
let touchVY = [];     //攻擊特效Y座標移動速度
let touchColor = [];  //攻擊特效顏色
let touchRadius = []; //攻擊特效圓半徑
let touchTime = [];   //攻擊特效出現時間與判定是否有值
function attack_run() {
    for (a = 0; a < atk_in; a++) {
        if (a % 5 == 0 && a > 0) {
            atk_num[a] = atk_num[a - 1] - 10;
        }
        if (a % 5 > 0 && a % 5 < 5) {
            atk_num[a] = atk_num[a - 1];
        }
    }
}
function attack_run1() {
    var attack_run_2 = setInterval(function () {
        if (stopCh == 1 || gura_hp <= 0) {
            clearInterval(attack_run_2);
        }
        if (atk_num.length > 4) {
            for (a = 0; a < atk_in; a++) {
                if (stopCh == 0) {
                    if (atk_num[a] == 50) {
                        atkx[a] = x - 13;
                        atky[a] = y - 10;
                        atkCh_num[a] = atkCh;
                        atk1_angle[a] = Math.floor(Math.random() * 720);
                        j[a] = 0;
                    }
                    atk_num[a]++;
                    if (atkx[a] != undefined) {
                        if (atk_num[a] >= 50) {
                            atkTime++;
                            atk_x[a] = atkx[a] + (-500 + atk_num[a] * 10) * Math.cos(Math.PI + atkCh_num[a] + atkTime * 0.3);
                            atk_y[a] = atky[a] + (-500 + atk_num[a] * 10) * Math.sin(Math.PI + atkCh_num[a] + atkTime * 0.3);
                        }
                        if (atkTime == 5) {
                            atkTime = 0;
                        }
                    }
                    if (atk_num[a] >= 150) {
                        atk_num[a] = 50;
                    }
                }
            }
        }

    }, 15)
    let atk1Show_ = setInterval(() => {
        if (stopCh == 1 || gura_hp <= 0) {
            clearInterval(atk1Show_);
        }

        for (a = 0; a < touch_x.length; a++) {
            for (b = a * 3; b < a * 3 + 3; b++) {
                touchX[b] += touchVX[b];
                touchY[b] += touchVY[b];
                touchColor[b] = `rgb(1, 137, 255,${1 - touchTime[b] * 0.05})`;
                touchRadius[b] += touchTime[b] * 0.1;
                touchTime[b]++;
                if (touchTime[b] > 30) {
                    touch_x.splice(a, 1);
                    touch_y.splice(a, 1);
                    touchX.splice(a * 3, 3);
                    touchY.splice(a * 3, 3);
                    touchVX.splice(a * 3, 3);
                    touchVY.splice(a * 3, 3);
                    touchColor.splice(a * 3, 3);
                    touchRadius.splice(a * 3, 3);
                    touchTime.splice(a * 3, 3);
                }
            }
        }
    }, 15);
    var attack_run_3 = setInterval(function () {
        if (stopCh == 1 || gura_hp <= 0) {
            clearInterval(attack_run_3);
        }

        ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
        for (yyy = 0; yyy < atk_in; yyy++) {
            if (atk_num[yyy] >= 50 && atk_x.length > 0 && j[yyy] == 0) {
                ctx1.save();
                ctx1.translate(atk_x[yyy], atk_y[yyy]);
                ctx1.rotate(atk1_angle[yyy] * Math.PI / 360);
                ctx1.drawImage(CCC, -25, -25, 50, 50);
                ctx1.restore();
                atk1_angle[yyy] += Math.floor(Math.random() * 3) + 3;
                if (atk1_angle[yyy] >= 720) {
                    atk1_angle[yyy] = 0;
                }
            }
        }
        for (a = 0; a < touch_x.length; a++) {
            for (b = a * 3; b < a * 3 + 3; b++) {
                if (touchTime[b] >= 0) {
                    ctx1.beginPath();
                    ctx1.arc(touchX[b], touchY[b], touchRadius[b], 0, Math.PI * 2, true);
                    ctx1.closePath();
                    ctx1.fillStyle = touchColor[b];
                    ctx1.fill();
                }
            }
        }
    }, 15)
    let touchEnemy = setInterval(() => {
        if (stopCh == 1 || gura_hp <= 0) {
            clearInterval(touchEnemy);
        }
        if (atkx[a] != undefined) {
            for (a = 0; a < atk_in; a++) {
                for (b = 0; b < aa.length; b++) {
                    if (takoBody_type[b] < 101 || enemyATk_ch[b] != 2) {
                        if (atk_x[a] + takoBody_type[b] / 2 > aa[b] &&
                            atk_x[a] - takoBody_type[b] / 2 < aa[b] &&
                            atk_y[a] + takoBody_type[b] / 2 > bb[b] &&
                            atk_y[a] - takoBody_type[b] / 2 < bb[b] &&
                            j[a] == 0) {
                            j[a] = 1;
                            touch_x.push(aa[b]);
                            touch_y.push(bb[b]);
                            // ATKIN_();
                            if (ata_hp[b] > 0) {
                                ata_hp[b] -= gura_atk;
                                if (atkNUM1_ALL > 0) {
                                    atkNUM1 += gura_atk;
                                    if (atkNUM1 >= Math.pow(10, 7)) {
                                        atkNUM1_ALL++;
                                        atkNUM1 -= Math.pow(10, 7);
                                    }
                                    SKILL_LIST1_p_1.innerHTML = `${atkNUM1_ALL}m${atkNUM1}`;
                                }
                                if (atkNUM1_ALL == 0) {
                                    atkNUM1 += gura_atk;
                                    SKILL_LIST1_p_1.innerHTML = atkNUM1;
                                    if (atkNUM1 >= Math.pow(10, 7)) {
                                        atkNUM1_ALL = 1;
                                        atkNUM1 -= Math.pow(10, 7);
                                    }
                                }
                                show_atk_(b, gura_atk, 0);
                            }
                            if (ata_hp[b] <= 0) {
                                atk1++;
                                toch(b);
                            }
                        }
                    }
                }
            }
        }
    }, 15)
    let atk1_show = setInterval(() => {
        if (stopCh == 1 || gura_hp <= 0) {
            clearInterval(atk1_show);
        }
        for (a = 0; a < touch_x.length; a++) {
            for (b = a * 3; b < a * 3 + 3; b++) {
                if (!touchTime[b] > 0) {
                    touchX[b] = touch_x[a];
                    touchY[b] = touch_y[a];
                    touchColor[b] = 'rgb(1, 137, 255)';
                    touchRadius[b] = 10;
                    touchTime[b] = 0;
                    touchVX[b] = 1;
                    touchVY[b] = 1;
                    if (x < touchX[b]) {
                        touchVX[b] = Math.floor(Math.random() * 5) + 2;
                    }
                    if (x > touchX[b]) {
                        touchVX[b] = -Math.floor(Math.random() * 5) - 2;
                    }
                    if (y < touchY[b]) {
                        touchVY[b] = Math.floor(Math.random() * 5) + 2;
                    }
                    if (y > touchY[b]) {
                        touchVY[b] = -Math.floor(Math.random() * 5) - 2;
                    }
                }

            }
        }
    }, 15);
}




//出現隨機提升能力視窗
function kiNum_() {
    var kiNum = setInterval(() => {
        if (skill_up_stop >= 100 || stopCh == 1 || gura_hp <= 0) {
            clearInterval(kiNum);
        }
        atk1234 = atk1 + atk2 + atk3 + atk4 + atk_all;
        if (ranstop == 0 && atk1 + atk2 + atk3 + atk4 + atk_all >= atkLimit &&
            stopCh == 0) {
            atk1234 = atk1 + atk2 + atk3 + atk4 + atk_all;
            atk_all = atk1234 % atkLimit;
            atk1234 -= atk_all;
            atkNum = atk1234 / atkLimit;
            atk1 = atk2 = atk3 = atk4 = 0;
            atk1234 = atk_all;
            if (skill_up_stop < 100) {
                atkLimit += atkNum * 10;
                skill_up_stop += atkNum;
                atkRAN = atkLimit / 100;
                atkRANALL = atk1234 / atkRAN;
                randomBoostLVL.style.width = atkRANALL + "%";
                randomBoost_lvl_sp.innerHTML = `${skill_up_stop}`;
                if (degreeOf_money == 0) {
                    ranBoost(atkNum);
                    clearInterval(kiNum);
                }
            }
        }
        if (degreeOf_money == 0) {
            atkRAN = atkLimit / 100;
            atkRANALL = atk1234 / atkRAN;
            randomBoostLVL.style.width = atkRANALL + "%";
            randomBoost_lvl_sp.innerHTML = `${skill_up_stop}`;
            if (gura_play_ch == 1) {
                SKILL_LIST1_p_2.innerHTML = `${gura_atk}`;
                SKILL_LIST2_p_2.innerHTML = `${trident_atk}`;
                SKILL_LIST3_p_2.innerHTML = `${bloop_atk}`;
                SKILL_LIST4_p_2.innerHTML = `${gunAtk}`;
            }
            if (mori_play_ch == 1) {
                SKILL_LIST1_p_2.innerHTML = `${sickle_akt1}`;
                SKILL_LIST2_p_2.innerHTML = `${dart_atk}`;
                SKILL_LIST3_p_2.innerHTML = `${moriBlood_recover}`;
                SKILL_LIST4_p_2.innerHTML = `${mori_atk4_atk}`;
            }
        }
    }, 15)
}
function toch(ccc) {

    var ss = 0;
    ss = ccc;
    ki++;
    skLVL++;
    if (degreeOf_money == 0) {
        money++;
    }
    kill.innerHTML = ki;
    my_money.innerHTML = money;
    if (skLVL == skExperience && sk_num < 200) {
        skLVL = 0;
        skExperience++;
        sk++;
        skillNUM_sp.innerHTML = `${sk}`;
        sk_num++;
        skill.innerHTML = sk_num;
        if (skNum1 < 50) {
            skill_down1();
        }
        if (skNum2 < 50) {
            skill_down2();
        }
        if (skNum3 < 50) {
            skill_down3();
        }
        if (skNum4 < 50) {
            skill_down4();
        }
    }
    aa.splice(ss, 1);
    bb.splice(ss, 1);
    if (gura_play_ch == 1) {
        trident_j.splice(ss, 1);
        bloop_j.splice(ss, 1);
        gunAtk_j.splice(ss, 1);
    }
    if (mori_play_ch == 1) {
        sickle_j.splice(ss, 1);
        mori_atk4_j.splice(ss, 1);
        moriatk3();
    }
    ata_hp.splice(ss, 1);
    tako_j.splice(ss, 1);
    takoBody_type.splice(ss, 1);
    enemyATk_ch.splice(ss, 1);
    enemyAtkTime.splice(ss, 1);
    takoAtk.splice(ss, 1);
    speed.splice(ss, 1);
    enemyAtk4_j.splice(ss, 1);
    rangeAttack_j.splice(ss, 1);
    speed_j.splice(ss, 1);
    mori_atk4_tocuh.splice(ss, 1);
    if (degreeOf_money == 0) {
        skEXPER = skExperience / 100;
        skALLEXPER = skLVL / skEXPER;
        showSkillLVL.style.width = skALLEXPER + "%";
    }
}