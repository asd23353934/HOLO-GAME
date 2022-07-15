var ene = 0; //紀錄擊殺數提升怪物數量
let eneTime = 0;
var ch = 0;
var takoStop = 0;
var takoTime = 0;
let takoBoss = 1; //BOSS出現開關
let enemy2 = 1;
let enemy2_x = 0;
let enemy2_y = 0;
let speed_j = [];
let enemy3 = 0;
let enemy3_num = 0;
function start_en() {
    var takoCh = setInterval(function () {
        if (stopCh == 1 || gura_hp <= 0 || mori_hp <= 0) {
            clearInterval(takoCh);
        }
        if (stopCh == 0) {
            if ((m == 1 && takoBoss == 1) ||
                (m > 1 && m % 5 == 0 && takoBoss == 1)) {
                takoBoss = 0;
            }
            if ((m == 2 && takoBoss == 2) ||
                (m > 1 && m % 5 == 1 && takoBoss == 2)) {
                takoBoss = 1;
            }
            if (takoBoss == 0) {
                enemyAtk_takoBoss_atk += 5;
                for (a = 0; a < enemyAtk_takoBoss_atk / 5; a++) {
                    enemyshow_();
                    ata_hp.push(20000 + ene * 1000);
                    speed.push(2.5);
                    takoBody_type.push(150);
                    enemyATk_ch.push(-1);
                    takoAtk.push(5);
                    aa.push(r);
                    bb.push(t);
                    takoBoss = 2;
                }
                enemy4_atk += 2;
                for (a = 0; a < 10; a++) {
                    if (r < 2000 && t < 150) {
                        r += Math.floor(Math.random() * 1500);
                        t = -100 + Math.floor(Math.random() * 10);
                    }
                    if (r > 1999 && t < 1500) {
                        r = 2000 + Math.floor(Math.random() * 10);
                        t += Math.floor(Math.random() * 1500);
                    }
                    if (r > 99 && t > 800) {
                        r -= Math.floor(Math.random() * 1500);
                        t = 1200 + Math.floor(Math.random() * 10);
                    }
                    if (r < 100 && t > 100) {
                        r = -100 + Math.floor(Math.random() * 10);
                        t -= Math.floor(Math.random() * 1500)
                    }
                    enemyshow_();
                    speed.push(2.5);
                    takoAtk.push(1);
                    takoBody_type.push(100);
                    enemyATk_ch.push(3);
                    if (degreeOf_money == 0)
                        ata_hp.push(1 + ene);
                    if (degreeOf_money == 1)
                        ata_hp.push(1 + ene * 100);
                    aa.push(r);
                    bb.push(t);
                }
            }
            if ((m == 3 && enemy2 == 1) ||
                (m > 3 && m % 3 == 0 && enemy2 == 1)) {
                enemy2 = 0;
            }
            if ((m == 4 && enemy2 == 2) ||
                (m > 3 && m % 3 == 1 && enemy2 == 2)) {
                enemy2 = 1;
            }
            if (enemy2 == 0) {
                enemy2_x = x;
                enemy2_y = y;
                for (a = 0; a < 90; a++) {
                    enemy2x = x + 1400 * Math.cos(Math.PI * 2 / 90 * a);
                    enemy2y = y + 1200 * Math.sin(Math.PI * 2 / 90 * a);
                    enemyshow_();
                    speed.push(0);
                    takoBody_type.push(100);
                    enemyATk_ch.push(1);
                    takoAtk.push(30);
                    if (degreeOf_money == 0)
                        ata_hp.push(20000 + ene);
                    if (degreeOf_money == 1)
                        ata_hp.push(20000 + ene * 100);
                    aa.push(enemy2x);
                    bb.push(enemy2y);
                }
                for (a = 0; a < aa.length; a++) {
                    if (enemyATk_ch[a] == 1) {
                        enemy2X = aa[a] - enemy2_x;
                        enemy2Y = bb[a] - enemy2_y;
                        enemy2radius = enemy2X * enemy2X + enemy2Y * enemy2Y;
                        speed[a] = enemy2X / Math.sqrt(enemy2radius);
                        speed_j[a] = enemy2Y / Math.sqrt(enemy2radius);
                    }
                }
                enemy2 = 2;
            }
            if ((m == 2 && enemy3 == 0) ||
                (m > 2 && m % 2 == 0 && enemy3 == 0)) {
                enemy3_num = 0;
                enemy3 = 1;
            }
            if ((m == 3 && enemy3 == 2) ||
                (m > 2 && m % 2 == 1 && enemy3 == 2)) {
                enemy3 = 0;
                enemyshow_();
                speed.push(1);
                takoAtk.push(0);
                takoBody_type.push(200);
                enemyATk_ch.push(4);
                if (degreeOf_money == 0)
                    ata_hp.push(20000 + ene);
                if (degreeOf_money == 1)
                    ata_hp.push(20000 + ene * 100);
                aa.push(r);
                bb.push(t);
            }
            if (enemy3 == 1) {
                enemy3 = 2;
                let enemy3_ = setInterval(() => {
                    if (stopCh == 1 || gura_hp <= 0 || mori_hp <= 0 || enemy3_num > 14) {
                        clearInterval(enemy3_);
                    }
                    enemy3_num++;
                    enemy3_x = Math.floor(Math.random() * 2000);
                    enemy3_y = Math.floor(Math.random() * 1000);
                    enemyshow_();
                    speed.push(5);
                    takoAtk.push(5);
                    takoBody_type.push(Math.floor(Math.random() * 50) + 350);
                    enemyATk_ch.push(2);
                    if (degreeOf_money == 0)
                        ata_hp.push(5000 + ene);
                    if (degreeOf_money == 1)
                        ata_hp.push(5000 + ene * 100);
                    aa.push(enemy3_x);
                    bb.push(enemy3_y);

                }, 1000);
            }
            // 怪物超出視窗更改怪物座標
            for (a = 0; a < aa.length; a++) {
                if (enemyATk_ch[a] != 1) {
                    if (aa[a] < -300) {
                        aa[a] = 2500 - Math.floor(Math.random() * 100);
                        bb[a] = Math.floor(Math.random() * 2000);
                    }
                    if (aa[a] > 2900) {
                        aa[a] = -200 + Math.floor(Math.random() * 100);
                        bb[a] = Math.floor(Math.random() * 2000);
                    }
                    if (bb[a] < -300) {
                        bb[a] = 2000 - Math.floor(Math.random() * 100);
                        aa[a] = Math.floor(Math.random() * 2700);
                    }
                    if (bb[a] > 2500) {
                        bb[a] = -200 + Math.floor(Math.random() * 100);
                        aa[a] = Math.floor(Math.random() * 2700);
                    }
                }

            }
        }

    }, 50)
    var takoch_01 = setInterval(function () {
        if (stopCh == 1 || gura_hp <= 0 || mori_hp <= 0) {
            clearInterval(takoch_01);
        }
        if (stopCh == 0) {
            if (degreeOf_money == 0) {
                ene = h * 3600 + m * 60 + s;
            }
            if (eneTime < 1480) {
                eneTime += ene * 0.001;
            }
            if (aa.length <= 100) {
                if (r < 2000 && t < 150) {
                    r += Math.floor(Math.random() * 1500);
                    t = -100 + Math.floor(Math.random() * 10);
                }
                if (r > 1999 && t < 1500) {
                    r = 2000 + Math.floor(Math.random() * 10);
                    t += Math.floor(Math.random() * 1500);
                }
                if (r > 99 && t > 800) {
                    r -= Math.floor(Math.random() * 1500);
                    t = 1200 + Math.floor(Math.random() * 10);
                }
                if (r < 100 && t > 100) {
                    r = -100 + Math.floor(Math.random() * 10);
                    t -= Math.floor(Math.random() * 1500)
                }
                enemyshow_();
                speed.push(2.5);
                takoAtk.push(1);
                takoBody_type.push(50);
                enemyATk_ch.push(0);
                if (degreeOf_money == 0)
                    ata_hp.push(1 + ene);
                if (degreeOf_money == 1)
                    ata_hp.push(1 + ene * 100);
                aa.push(r);
                bb.push(t);
            }
        }

    }, 20)


    // console.log(aa, stopCh);
    // for (a = 0; a < 10; a++) {
    //     enemyshow_();
    //     speed.push(10);
    //     takoAtk.push(100000);
    //     takoBody_type.push(50);
    //     enemyATk_ch.push(0);
    //     ata_hp.push(1 + ene);
    //     aa.push(Math.floor(Math.random() * 20));
    //     bb.push(Math.floor(Math.random() * 10));
    // }

}

function enemyshow_() {
    speed_j.push(0);
    enemyAtkTime.push(0);
    enemyAtk4_j.push(0);
    rangeAttack_j.push(0);
    tako_j.push(0);
    if (gura_play_ch == 1) {
        gunAtk_j.push(0);
        trident_j.push(0);
        bloop_j.push(0);
    }
    if (mori_play_ch == 1) {
        sickle_j.push(0);
        mori_atk4_j.push(0);
        mori_atk4_tocuh.push(0);
    }
}




