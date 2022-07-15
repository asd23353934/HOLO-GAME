let deathShow = document.getElementById("death");
let deathBack = document.getElementById("deathBack");

let enemyAtk = document.getElementById("enemyATK");
let eneATK = enemyAtk.getContext("2d");
let canvas0_3_1 = document.getElementById("can0_3_1");
let ctx0_3_1 = canvas0_3_1.getContext("2d");
let canvas0_4_1 = document.getElementById("can0_4_1");
let ctx0_4_1 = canvas0_4_1.getContext("2d");

enemyATK.width = window.innerWidth;
enemyATK.height = window.innerHeight;
can0_3_1.width = window.innerWidth;
can0_3_1.height = window.innerHeight;
can0_4_1.width = window.innerWidth;
can0_4_1.height = window.innerHeight;
HHH = new Image();
HHH.src = "rangeATK.png";
HHH.onload = function () {
    this.onload = null;
}

let gura_hp_all = 100;     //gura初始血量
let gura_hp = gura_hp_all; //gura目前血量
let mori_hp_all = 100;
let mori_hp = mori_hp_all;

let takoAtk = [];           //怪物攻擊傷害
let tako_j = [];           //怪物碰觸到人物後延遲觸碰
let bloodNum = 0;          //總血量/100的百分比
let bloodAll = 0;          //人物當前血量%數
let blood = document.getElementById("blood_volume");
let bloodVolume = document.getElementById("bloodVolume");

let enemyATk_ch = [];//判別不同種類怪物

let enemyAtkX = [];  //紀錄怪物X座標
let enemyAtkY = [];  //紀錄怪物Y座標
let enemyAtkTime = [];//怪物攻擊時長
let enemyAtk_vx = []; //怪物攻擊X座標移速
let enemyAtk_vy = []; //怪物攻擊Y座標移速
let enemyAtk_j = [];  //怪物遠程攻擊觸碰到人物後延遲

let small_ballX = []; //攻擊特效X座標
let small_ballY = []; //攻擊特效Y座標
let small_ballVX = [];//攻擊特效X座標移速
let small_ballVY = [];//攻擊座標Y座標移速
let small_ballTime = [] //攻擊特效間距
let smallballColor = [];//攻擊特效顏色
let smallRadius = [];   //攻擊特效圓半徑
let enemyAtk_takoBoss_atk = 0;//takoBoss 遠程攻擊傷害

let enemy4X = []; //攻擊初始座標X
let enemy4Y = []; //攻擊初始座標Y
let enemy4_x = [];//攻擊當前座標X
let enemy4_y = [];//攻擊當前座標Y
let enemy4_angle = [];//攻擊圖示所需角度
let enemyAtk4_j = [];//每次攻擊間格
let enemy4_atk = 1;//攻擊傷害
let enemy4_time = [];//攻擊持續時間

let rangeAttackX = [];
let rangeAttackY = [];
let rangeAttack_x = [];
let rangeAttack_y = [];
let rangeAttack_vx = [];
let rangeAttack_vy = [];
let rangeAttack_time = [];
let rangeAttack_j = [];
let rangeAttack_blank = [];
let rangeAttack_draw = 0;

let rangeAttack_small_x = [];
let rangeAttack_small_y = [];
let rangeAttack_small_vx = [];
let rangeAttack_small_vy = [];
let rangeAttack_small_Color = [];
let rangeAttack_small_radius = [];

function takoAttack() {
    var takoATK = setInterval(function () {
        if (stopCh == 1 || gura_hp <= 0 || mori_hp <= 0) {
            clearInterval(takoATK);
        }
        if (stopCh == 0) {
            for (a = 0; a < aa.length; a++) {
                if (takoBody_type[a] < 101 || enemyATk_ch[a] != 2) {
                    if (aa[a] + takoBody_type[a] > x &&
                        aa[a] - takoBody_type[a] < x &&
                        bb[a] + takoBody_type[a] > y &&
                        bb[a] - takoBody_type[a] < y &&
                        tako_j[a] == 0) {
                        // BLOOP_();
                        tako_j[a] = 1;

                        if (gura_play_ch == 1) {
                            gura_hp -= takoAtk[a];
                        }
                        if (mori_play_ch == 1) {
                            mori_hp -= takoAtk[a];
                        }

                    }
                    if (enemyATk_ch[a] == -1) {
                        if (enemyAtkTime[a] >= 300) {
                            enemyAtkTime[a] = 0;
                        }
                        if (enemyAtkTime[a] == 0) {
                            enemyAtkTime[a]++;
                            enemyAtkX.push(aa[a]);
                            enemyAtkY.push(bb[a]);
                        }
                        if (enemyAtkTime[a] > 0) {
                            enemyAtkTime[a]++;
                        }
                    }
                    if (enemyATk_ch[a] == 3) {
                        if (enemyAtk4_j[a] > 0) {
                            enemyAtk4_j[a]++;
                        }
                        if (enemyAtk4_j[a] > 300) {
                            enemyAtk4_j[a] = 0;
                        }
                        if (enemyAtk4_j[a] == 0) {
                            enemy4X.push(aa[a]);
                            enemy4Y.push(bb[a]);
                            enemy4_time.push(0);
                            enemyAtk4_j[a]++;
                        }
                    }
                    if (enemyATk_ch[a] == 4) {
                        if (rangeAttack_j[a] > 0) {
                            rangeAttack_j[a]++;
                        }
                        if (rangeAttack_j[a] > 400) {
                            rangeAttack_j[a] = 0;
                        }
                        if (rangeAttack_j[a] == 0) {
                            rangeAttack_x.push(aa[a]);
                            rangeAttack_y.push(bb[a]);
                            rangeAttack_j[a]++;
                        }

                    }

                }
            }
            for (a = 0; a < tako_j.length; a++) {
                if (tako_j[a] > 0) {
                    tako_j[a]++;
                }
                if (tako_j[a] == 80) {
                    tako_j[a] = 0;
                }
            }

            if (gura_hp < 0)
                gura_hp = 0;
            if (mori_hp < 0)
                mori_hp = 0;

            if (gura_play_ch == 1) {
                bloodNum = gura_hp_all / 100;
                playCurrent_p.innerHTML = `${gura_hp}`;
                bloodAll = gura_hp / bloodNum;
            }
            if (mori_play_ch == 1) {
                bloodNum = mori_hp_all / 100;
                playCurrent_p.innerHTML = `${mori_hp}`;
                bloodAll = mori_hp / bloodNum;
            }

            blood.style.width = bloodAll + '%';
            if (gura_play_ch == 1) {
                if (gura_hp <= 0) {
                    deathShow.style.display = "block";
                    stopCh = 1;
                    clearInterval(takoATK);
                }

            }
            if (mori_play_ch == 1) {
                if (mori_hp <= 0) {
                    deathShow.style.display = "block";
                    stopCh = 1;
                    clearInterval(takoATK);
                }
            }
        }
    }, 15)
    let enemyAtk_ = setInterval(() => {
        if (stopCh == 1 || gura_hp <= 0 || mori_hp <= 0) {
            clearInterval(enemyAtk_);
        }
        for (a = 0; a < enemyAtkX.length; a++) {
            if (enemyAtk_j[a] == undefined) {
                for (b = a * 5; b < a * 5 + 5; b++) {
                    small_ballTime[b] = 50;
                }
                enemyAtk_j[a] = 0;
                enemyAtk_vx[a] = 0;
                enemyAtk_vy[a] = 0;
                enemyAtkXX = x - enemyAtkX[a];  //怪物攻擊為圓心與人物X距離
                enemyAtkYY = y - enemyAtkY[a];  //怪物攻擊為圓心與人物Y距離
                enemyAtk_distance = enemyAtkXX * enemyAtkXX + enemyAtkYY * enemyAtkYY; // 斜角 c  = a * a + b * b
                enemyAtk_vx[a] = 6 * (enemyAtkXX / Math.sqrt(enemyAtk_distance));//設定怪物攻擊移動速度與方向 vx = 移速 * (COSθ = x / r)
                enemyAtk_vy[a] = 6 * (enemyAtkYY / Math.sqrt(enemyAtk_distance));//設定怪物攻擊移動速度與方向 vy = 移速 * (SINθ = y / r)
            }
        }
    }, 15)
    let smallRun = setInterval(() => {
        if (stopCh == 1 || gura_hp <= 0 || mori_hp <= 0) {
            clearInterval(smallRun);
        }
        for (a = 0; a < enemyAtkX.length; a++) {
            enemyAtk_j[a]++;
            if (enemyAtk_j[a] > 500) {
                takoBoss_end(a);
            }
            enemyAtkX[a] += enemyAtk_vx[a];
            enemyAtkY[a] += enemyAtk_vy[a];
            if (enemyAtkX[a] + 70 > x &&
                enemyAtkX[a] - 70 < x &&
                enemyAtkY[a] + 70 > y &&
                enemyAtkY[a] - 70 < y) {
                if (gura_play_ch == 1) {
                    gura_hp -= enemyAtk_takoBoss_atk;
                }
                if (mori_play_ch == 1) {
                    mori_hp -= enemyAtk_takoBoss_atk
                }
                takoBoss_end(a);
            }
        }
        for (a = 0; a < enemyAtkX.length; a++) {
            for (b = a * 5; b < a * 5 + 5; b++) {
                if (small_ballTime[b] == 50) {
                    smallballColor[b] = `rgb(168, 93, 93)`;
                    small_ballX[b] = enemyAtkX[a];
                    small_ballY[b] = enemyAtkY[a];
                    smallRadius[b] = 40;
                }
                small_ballTime[b] += Math.floor(Math.random() * 2);
                if (Math.abs(enemyAtkX[a]) >= Math.abs(enemyAtkY[a])) {
                    small_ballVX[b] = -enemyAtk_vx[a];
                    small_ballVY[b] = -enemyAtk_vy[a] + Math.floor(Math.random() * 40) - 19.5;
                }
                if (Math.abs(enemyAtkX[a]) < Math.abs(enemyAtkY[a])) {
                    small_ballVX[b] = -enemyAtk_vx[a] + Math.floor(Math.random() * 40) - 19.5;
                    small_ballVY[b] = -enemyAtk_vy[a];
                }
                small_ballX[b] += small_ballVX[b] * 0.5;
                small_ballY[b] += small_ballVY[b] * 0.5;
                if (small_ballTime[b] > 60) {
                    small_ballTime[b] = 50;
                }
                if (small_ballTime[b] > 50 && smallRadius[b] > 2) {
                    smallballColor[b] = `rgb(168, 93, 93,${smallRadius[b] * 0.4 - 4})`
                    smallRadius[b] -= 1.5;
                }
            }
        }
    }, 15);
    let ballRun = setInterval(() => {
        if (stopCh == 1 || gura_hp <= 0 || mori_hp <= 0) {
            clearInterval(ballRun);
        }
        eneATK.clearRect(0, 0, enemyAtk.width, enemyAtk.height);
        for (a = 0; a < enemyAtkX.length; a++) {
            for (b = a * 5; b < a * 5 + 5; b++) {
                eneATK.beginPath();
                eneATK.arc(small_ballX[b], small_ballY[b], smallRadius[b], 0, Math.PI * 2, true);
                eneATK.closePath();
                eneATK.fillStyle = smallballColor[b];
                eneATK.fill();
            }
            eneATK.beginPath();
            eneATK.arc(enemyAtkX[a], enemyAtkY[a], 30, 0, Math.PI * 2, true);
            eneATK.closePath();
            eneATK.fillStyle = `rgb(0,0,0)`;
            eneATK.fill();
        }
    }, 15);

    let enemy4Draw = setInterval(() => {
        if (stopCh == 1 || gura_hp < 1 || mori_hp < 1) {
            clearInterval(enemy4Draw);
        }
        ctx0_3_1.clearRect(0, 0, canvas0_3_1.width, canvas0_3_1.height);
        for (b = 0; b < enemy4X.length; b++) {
            if (enemy4_time[b] > 0) {
                ctx0_3_1.save();
                ctx0_3_1.beginPath();
                ctx0_3_1.translate(enemy4X[b], enemy4Y[b]);
                ctx0_3_1.rotate(enemy4_angle[b] * Math.PI / 360);
                ctx0_3_1.moveTo(0, -20);
                ctx0_3_1.lineTo(20, 0);
                ctx0_3_1.lineTo(0, 20);
                ctx0_3_1.lineTo(0, 10);
                ctx0_3_1.lineTo(-30, 10);
                ctx0_3_1.lineTo(-30, -10);
                ctx0_3_1.lineTo(0, -10);
                ctx0_3_1.lineTo(0, -20);
                ctx0_3_1.fillStyle = `rgb(255,255,255)`;
                ctx0_3_1.fill();
                ctx0_3_1.moveTo(0, -20);
                ctx0_3_1.lineTo(20, 0);
                ctx0_3_1.lineTo(0, 20);
                ctx0_3_1.lineTo(0, 10);
                ctx0_3_1.lineTo(-30, 10);
                ctx0_3_1.lineTo(-30, -10);
                ctx0_3_1.lineTo(0, -10);
                ctx0_3_1.lineTo(0, -20);
                ctx0_3_1.lineWidth = 5;
                ctx0_3_1.strokeStyle = `rgb(0,0,0)`;
                ctx0_3_1.stroke();
                ctx0_3_1.restore();
            }

        }
    }, 15);
    let enemy4Run1 = setInterval(() => {
        if (stopCh == 1 || gura_hp <= 0 || mori_hp <= 0) {
            clearInterval(enemy4Run1);
        }
        for (b = 0; b < enemy4X.length; b++) {
            enemy4_time[b]++;
            if (enemy4_time[b] > 900) {
                enemy4_end(b);
            }
            enemy4_x[b] = x - enemy4X[b];
            enemy4_y[b] = y - enemy4Y[b];
            enemy4_angle[b] = Math.atan(enemy4_y[b] / enemy4_x[b]) * 180 / Math.PI;
            if (enemy4_x[b] < 0) {
                enemy4_angle[b] += 180;
            }
            enemy4_angle[b] *= 2;

            if (x > enemy4X[b]) {
                enemy4X[b] += 1.5;
            }
            if (x < enemy4X[b]) {
                enemy4X[b] -= 1.5;
            }
            if (y > enemy4Y[b]) {
                enemy4Y[b] += 1.5;
            }
            if (y < enemy4Y[b]) {
                enemy4Y[b] -= 1.5;
            }
            if (x + 50 > enemy4X[b] &&
                x - 50 < enemy4X[b] &&
                y + 50 > enemy4Y[b] &&
                y - 50 < enemy4Y[b]) {
                if (gura_play_ch == 1) {
                    gura_hp -= enemy4_atk;
                }
                if (mori_play_ch == 1) {
                    mori_hp -= enemy4_atk;
                }

                enemy4_end(b);
            }
        }
    }, 15);
    let enemy5 = setInterval(() => {
        if (stopCh == 1 || gura_hp <= 0 || mori_hp <= 0) {
            clearInterval(enemy5);
        }
        for (a = 0; a < rangeAttack_x.length; a++) {
            if (rangeAttack_time[a] == undefined) {
                rangeAttackX[a] = x;
                rangeAttackY[a] = y;
                rangeAttack_time[a] = 0;
                rangeAttack_vx[a] = 0;
                rangeAttack_vy[a] = 0;
                rangeAttack_blank[a] = 0;
                rangeAttackXX = x - rangeAttack_x[a];  //怪物攻擊為圓心與人物X距離
                rangeAttackYY = y - rangeAttack_y[a];  //怪物攻擊為圓心與人物Y距離
                rangeAttack_distance = rangeAttackXX * rangeAttackXX + rangeAttackYY * rangeAttackYY; // 斜角 c  = a * a + b * b
                rangeAttack_vx[a] = 6 * (rangeAttackXX / Math.sqrt(rangeAttack_distance));// 設定怪物攻擊移動速度與方向 vx = 移速 * (COSθ = x / r)
                rangeAttack_vy[a] = 6 * (rangeAttackYY / Math.sqrt(rangeAttack_distance));// 設定怪物攻擊移動速度與方向 vy = 移速 * (SINθ = y / r)
            }

        }
    }, 15)
    let enemy5Run = setInterval(() => {
        if (stopCh == 1 || gura_hp <= 0 || mori_hp <= 0) {
            clearInterval(enemy5Run);
        }
        for (a = 0; a < rangeAttack_time.length; a++) {
            if (rangeAttack_time[a] == 0) {
                rangeAttack_x[a] += rangeAttack_vx[a];
                rangeAttack_y[a] += rangeAttack_vy[a];
                if (rangeAttackX[a] + 50 > rangeAttack_x[a] &&
                    rangeAttackX[a] - 50 < rangeAttack_x[a] &&
                    rangeAttackY[a] + 50 > rangeAttack_y[a] &&
                    rangeAttackY[a] - 50 < rangeAttack_y[a]) {
                    rangeAttack_time[a] = 1;
                }
            }
            if (rangeAttack_time[a] > 0) {
                rangeAttack_time[a]++;
                for (b = a * 10; b < a * 10 + 10; b++) {
                    if (rangeAttack_small_radius[b] < 1 || rangeAttack_small_Color[b] < 0 ||
                        rangeAttack_small_x[b] == undefined) {
                        rangeAttack_small_Color[b] = 1;
                        rangeAttack_small_radius[b] = Math.floor(Math.random() * 5) + 25;
                        rangeAttack_small_x[b] = rangeAttack_x[a] + Math.floor(Math.random() * 100) - 49.5;
                        rangeAttack_small_y[b] = rangeAttack_y[a] + Math.floor(Math.random() * 100) - 49.5;
                        rangeAttack_small_vx[b] = 0;
                        rangeAttack_small_vy[b] = 0;
                        if (rangeAttack_small_x[b] > rangeAttack_x[a] + 2) {
                            rangeAttack_small_vx[b] = Math.floor(Math.random() * 4) + 1;
                        }
                        if (rangeAttack_small_x[b] < rangeAttack_x[a] - 2) {
                            rangeAttack_small_vx[b] = -Math.floor(Math.random() * 4) - 1;
                        }
                        if (rangeAttack_small_y[b] > rangeAttack_y[a] + 2) {
                            rangeAttack_small_vy[b] = Math.floor(Math.random() * 4) + 1;
                        }
                        if (rangeAttack_small_y[b] < rangeAttack_y[a] - 2) {
                            rangeAttack_small_vy[b] = -Math.floor(Math.random() * 4) - 1;
                        }
                    }
                    rangeAttack_small_x[b] += rangeAttack_small_vx[b];
                    rangeAttack_small_y[b] += rangeAttack_small_vy[b];
                }
                if (x + 150 > rangeAttack_x[a] &&
                    x - 150 < rangeAttack_x[a] &&
                    y + 150 > rangeAttack_y[a] &&
                    y - 150 < rangeAttack_y[a] &&
                    rangeAttack_blank[a] == 0) {
                    rangeAttack_blank[a] = 1;
                    if (gura_play_ch == 1) {
                        gura_hp -= 10;
                    }
                    if (mori_play_ch == 1) {
                        mori_hp -= 10;
                    }
                }
                if (rangeAttack_blank[a] > 0) {
                    rangeAttack_blank[a]++;
                }
                if (rangeAttack_blank[a] > 50) {
                    rangeAttack_blank[a] = 0;
                }
            }
            if (rangeAttack_time[a] > 500) {
                rangeAttackX.splice(a, 1);
                rangeAttackY.splice(a, 1);
                rangeAttack_x.splice(a, 1);
                rangeAttack_y.splice(a, 1);
                rangeAttack_vx.splice(a, 1);
                rangeAttack_vy.splice(a, 1);
                rangeAttack_time.splice(a, 1);
                rangeAttack_small_x.splice(a, 10);
                rangeAttack_small_y.splice(a, 10);
                rangeAttack_small_vx.splice(a, 10);
                rangeAttack_small_vy.splice(a, 10);
                rangeAttack_small_Color.splice(a, 10);
                rangeAttack_small_radius.splice(a, 10);
            }
        }
    }, 15);
    let enemy5Draw = setInterval(() => {
        if (stopCh == 1 || gura_hp <= 0 || mori_hp <= 0) {
            clearInterval(enemy5Draw);
        }
        ctx0_4_1.clearRect(0, 0, canvas0_4_1.width, canvas0_4_1.height);
        for (a = 0; a < rangeAttack_x.length; a++) {
            if (rangeAttack_time[a] == 0) {
                ctx0_4_1.beginPath();
                ctx0_4_1.arc(rangeAttack_x[a], rangeAttack_y[a], 30, 0, Math.PI * 2, true);
                ctx0_4_1.fill();
            }
            if (rangeAttack_time[a] > 0) {
                ctx0_4_1.drawImage(HHH, rangeAttack_draw, 0, 400, 500, rangeAttack_x[a] - 190, rangeAttack_y[a] - 190, 400, 500);
                for (b = a * 10; b < a * 10 + 10; b++) {
                    ctx0_4_1.beginPath();
                    ctx0_4_1.arc(rangeAttack_small_x[b], rangeAttack_small_y[b], rangeAttack_small_radius[b], 0, Math.PI * 2, true);
                    ctx0_4_1.strokeStyle = `rgb(0, 89, 255,${rangeAttack_small_Color[b]})`;
                    ctx0_4_1.lineWidth = 6;
                    ctx0_4_1.stroke();
                    rangeAttack_small_radius[b] -= Math.floor(Math.random() * 3) * 0.6;
                    rangeAttack_small_Color[b] -= Math.floor(Math.random() * 3) * 0.06;
                }
            }
        }
        rangeAttack_draw += 400;
        if (rangeAttack_draw >= 9600) {
            rangeAttack_draw = 0;
        }
    }, 15);
}
function enemy4_end(BB) {
    enemy4X.splice(BB, 1);
    enemy4Y.splice(BB, 1);
    enemy4_x.splice(BB, 1);
    enemy4_y.splice(BB, 1);
    enemy4_angle.splice(BB, 1);
    enemy4_time.splice(BB, 1);
}
function takoBoss_end(CC) {
    enemyAtkX.splice(CC, 1);
    enemyAtkY.splice(CC, 1);
    enemyAtk_vx.splice(CC, 1);
    enemyAtk_vy.splice(CC, 1);
    enemyAtk_j.splice(CC, 1);
    small_ballX.splice(CC, 5);
    small_ballY.splice(CC, 5);
    small_ballVX.splice(CC, 5);
    small_ballVY.splice(CC, 5);
    small_ballTime.splice(CC, 5);
    smallballColor.splice(CC, 5);
    smallRadius.splice(CC, 5);
}
//死亡初始化
function deathBack_() {
    setTimeout(function () {
        env.style.display = "none";
        skill_01.style.display = "none";
        skill_02.style.display = "none";
        skill_03.style.display = "none";
        skill_04.style.display = "none";
        skill_all.style.display = "none";
        shEn.style.display = "none";
        skillNUM.style.display = "none";
    }, 100)
    setTimeout(function () {
        shMoney.style.display = "none";
        shSkill.style.display = "none";
        shTime.style.display = "none";
        deathShow.style.display = "none";
        title_.style.display = "block";
        btn_choose.style.display = "block";
        btn_shop.style.display = "block";
        env.style.backgroundColor = `rgba(0,0,0,0)`;
    }, 100)
    setTimeout(function () {
        esc_open = 0;
        degreeOf_money = 0;
        atkNUM1 = 0;
        atkNUM1_ALL = 0;
        atkNUM2 = 0;
        atkNUM2_ALL = 0;
        atkNUM3 = 0;
        atkNUM3_ALL = 0;
        atkNUM4 = 0;
        atkNUM4_ALL = 0;
        enemy2 = 1;
        enemy3 = 0;
        enemy3_num = 0;
        takoRun_time = 0;
        takoBoss = 1;
        gun_atk = 0;
        gunShow_ch = 0;
        bloopGun_time = 0;
        bloopGun_a = 1425;
        bloopGun_down = 0;
        bloopGunX = 0;
        bloopGunY = -600;
        gunAtk_j = [];
        show_atk_x = [];
        show_atk_y = [];
        show_atkx = [];
        show_atky = [];
        show_atk_ch = [];
        atk_gun_ch = [];
        atk_in = 5;
        atk_num = [50];
        atk_x = [];
        atk_y = [];
        atkx = [];
        atky = [];
        atkCh_num = [];
        j = [];
        ki = 0;
        kill.innerHTML = 0;
        sk = 0;
        bloop_in = 0;
        bloopx = [];
        bloopy = [];
        key1 = 0;
        ran_time = 0;
    }, 50)
    setTimeout(function () {
        enemy4X = [];
        enemy4Y = [];
        enemy4_x = [];
        enemy4_y = [];
        enemy4_angle = [];
        enemyAtk4_j = [];
        enemy4_atk = 1;
        enemy4_time = [];
        takoAtk = [];
        enemyATk_ch = [];
        enemyAtkX = [];
        enemyAtkY = [];
        enemyAtkTime = [];
        enemyAtk_vx = [];
        enemyAtk_vy = [];
        enemyAtk_j = [];
        small_ballX = [];
        small_ballY = [];
        small_ballVX = [];
        small_ballVY = [];
        small_ballTime = [];
        smallballColor = [];
        smallRadius = [];
        enemyAtk_takoBoss_atk = 0;
        bloop_x = [];
        bloop_y = [];
        bloop_time = 0;
        bloop_time_all = [];
        bloop_j = [];
        trident_x = [];
        trident_y = [];
        trident_time = 0;
        trident_j = [];
        trident_num = 0;
        sd = 0;
        s = 0;
        m = 0;
        h = 0;
        ata_hp = [];
        aa = [];
        bb = [];
        trident_j = [];
        bloop_j = [];
        ene = 0;
        eneTime = 0;
        ch = 0;
        takoStop = 0;
        takoTime = 0;
        sickle_akt1 = sickle_akt1_all;
        sickle_j = [];
        dart_x = [];
        dart_y = [];
        dartXX = [];
        dartYY = [];
        dart_vx = [];
        dart_vy = [];
        dart_time = [];
        dart_j = [];
        dart_num = 0;
        mori_atk4_draw_x = -90;
        mori_atk4_draw = 0
        mori_atk4_draw_delay = 0;
        mori_atk4_atk = mori_atk4_atk_all;
        mori_atk4_draw1 = 0;
        mori_atk4_draw1_time = [];
        mori_atk4Time = 0;
        mori_atk4_j = [];
        mori_env = 0;
        dart_atk = dart_atk_ALL;
        sickle_direction = 0;
        moriBlood_recover = moriBlood_recover_all;
        mori_atk4_tocuh = [];
        if (gura_play_ch == 1) {
            gura_hp_all -= hp_LVLUP;
            gura_hp = gura_hp_all;
        }
        if (mori_play_ch == 1) {
            mori_hp_all -= hp_LVLUP;
            mori_hp = mori_hp_all;

        }
        hp_LVLUP = 0;
    }, 100)
    setTimeout(function () {
        rangeAttackX = [];
        rangeAttackY = [];
        rangeAttack_x = [];
        rangeAttack_y = [];
        rangeAttack_vx = [];
        rangeAttack_vy = [];
        rangeAttack_time = [];
        rangeAttack_j = [];
        rangeAttack_blank = [];
        rangeAttack_small_x = [];
        rangeAttack_small_y = [];
        rangeAttack_small_vx = [];
        rangeAttack_small_vy = [];
        rangeAttack_small_Color = [];
        rangeAttack_small_radius = [];
        takoBody_type = [];
        speed = [];
        touch_x = [];
        touch_y = [];
        touchX = [];
        touchY = [];
        touchVX = [];
        touchVY = [];
        touchColor = [];
        touchRadius = [];
        touchTime = [];
        skNum1 = 1;
        skNum2 = 0;
        skNum3 = 0;
        skNum4 = 0;
        skill01_1.style.display = "none";
        skill01_2.style.display = "none";
        skill02_1.style.display = "none";
        skill02_2.style.display = "none";
        skill03_1.style.display = "none";
        skill03_2.style.display = "none";
        skill04_1.style.display = "none";
        skill04_2.style.display = "none";
        ti_s.innerHTML = "00";
        ti_m.innerHTML = "00";
        ti_h.innerHTML = "00";
        sk01.innerHTML = 1;
        sk02.innerHTML = 0;
        sk03.innerHTML = 0;
        sk04.innerHTML = 0;
        skill.innerHTML = 0;
        envir.style.top = -2100 + "px";
        envir.style.left = -1550 + "px";
        bloop_x_ch = [930];
        bloop_y_ch = [500];
        tako_j = [];
    }, 100)
    setTimeout(function () {
        SKILL_LIST.style.display = "none";
        showEsc.style.display = "none";
        stop_esc.style.display = "none";
        atk1234 = 0;
        atk_all = 0;
        atkNum = 0;
        skill_up_stop = 1;
        atkLimit = 10;
        atkLimit_num = 0;
        atk1 = atk2 = atk3 = atk4 = 0;
        randomBoost.style.display = "none";
        randomBoost.innerHTML = ``;
        randomBoost_repeat = 0;
        randomBoost_num = [];
        fx = [];
        skLVL = 0;
        sk_num = 0;
        ranstop = 0;
        skExperience = 10;
        bloodNum = 0;
        bloodAll = 0;
        atkRAN = 0;
        atkRANALL = 0;
        blood.style.width = 100 + `%`;
        bloodVolume.style.display = "none";
        randomBoost_lvl.style.display = "none";
        showSkill.style.display = "none";
        randomBoostLVL.style.width = 0 + "%";
        randomBoost_lvl_sp.innerHTML = `${1}`;
        showSkillLVL.style.width = 0 + "%";
        playCurrent.style.display = "none";
        skill01_1.style.top = -98 + "px";
        skill02_1.style.top = -98 + "px";
        skill03_1.style.top = -98 + "px";
        skill04_1.style.top = -98 + "px";
        skillNUM_sp.innerHTML = 0;
        ctx3.globalAlpha = 1;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx0.clearRect(0, 0, canvas0.width, canvas0.height);
        ctx0_1.clearRect(0, 0, canvas0_1.width, canvas0_1.height);
        ctx0_2.clearRect(0, 0, canvas0_2.width, canvas0_2.height);
        ctx0_3.clearRect(0, 0, canvas0_3.width, canvas0_3.height);
        ctx0_3_1.clearRect(0, 0, canvas0_3_1.width, canvas0_3_1.height);
        ctx0_4_1.clearRect(0, 0, canvas0_4_1.width, canvas0_4_1.height);
        ctx0_4.clearRect(0, 0, canvas0_4.width, canvas0_4.height);
        ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
        ctx4_1.clearRect(0, 0, canvas4_1.width, canvas4_1.height);
        ctx4_2.clearRect(0, 0, canvas4_2.width, canvas4_2.height);
        sh_atk.clearRect(0, 0, show_atk.width, show_atk.height);
        eneATK.clearRect(0, 0, enemyAtk.width, enemyAtk.height);
        first_1();
    }, 100)
    setTimeout(function () {
        first_();
        Move();
    }, 100)
}