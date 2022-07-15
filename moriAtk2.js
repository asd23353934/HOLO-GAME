let dart_x = [];
let dart_y = [];
let dartXX = [];
let dartYY = [];
let dart_vx = [];
let dart_vy = [];
let dart_time = [];
let dart_num = 0;
let dart_atk_ALL = 5;
let dart_atk = dart_atk_ALL;
let dart_j = [];
let dart_angle = 0;
let dart_draw = 0;
function moriatk2() {
    let moriatk2_NUM = setInterval(() => {
        if (stopCh == 1 || mori_hp <= 0) {
            clearInterval(moriatk2_NUM);
        }
        if (dart_time.length == 0 && aa.length > 0) {
            for (a = 0; a < dart_num; a++) {
                dart_x.push(x);
                dart_y.push(y);
                dart_j.push(0);
                dart_time.push(0);
            }
        }
        for (a = 0; a < dart_time.length; a++) {
            if (dart_time[a] == 0 && aa.length > 0) {
                dart_time[a] = 1;
                dart_enemy_x = Math.floor(Math.random() * aa.length);
                dart_enemy_y = Math.floor(Math.random() * aa.length);
                dartXX[a] = aa[dart_enemy_x];
                dartYY[a] = bb[dart_enemy_y];
                dartX = x - dartXX[a];
                dartY = y - dartYY[a];
                dart_Length = dartX * dartX + dartY * dartY;
                dart_vx[a] = 15 * (dartX / Math.sqrt(dart_Length));
                dart_vy[a] = 15 * (dartY / Math.sqrt(dart_Length));
            }
        }
    }, 15);
    let moriatk2_RUN1 = setInterval(() => {
        if (stopCh == 1 || mori_hp <= 0) {
            clearInterval(moriatk2_RUN1);
        }

        for (a = 0; a < dartXX.length; a++) {
            if (dart_time[a] == 1) {
                dart_x[a] -= dart_vx[a];
                dart_y[a] -= dart_vy[a];
                if (dart_x[a] + 50 > dartXX[a] &&
                    dart_x[a] - 50 < dartXX[a] &&
                    dart_y[a] + 50 > dartYY[a] &&
                    dart_y[a] - 50 < dartYY[a]) {
                    dart_time[a] = 2;
                }
            }
            for (b = 0; b < aa.length; b++) {
                if (dart_x[a] + 100 > aa[b] &&
                    dart_x[a] - 100 < aa[b] &&
                    dart_y[a] + 100 > bb[b] &&
                    dart_y[a] - 100 < bb[b] &&
                    dart_j[a] == 0) {
                    ata_hp[b] -= dart_atk;
                    if (atkNUM2_ALL > 0) {
                        atkNUM2 += dart_atk;
                        if (atkNUM2 >= Math.pow(10, 7)) {
                            atkNUM2_ALL++;
                            atkNUM2 -= Math.pow(10, 7);
                        }
                        SKILL_LIST2_p_1.innerHTML = `${atkNUM2_ALL}m${atkNUM2}`;
                    }
                    if (atkNUM2_ALL == 0) {
                        atkNUM2 += dart_atk;
                        SKILL_LIST2_p_1.innerHTML = atkNUM2;
                        if (atkNUM2 >= Math.pow(10, 7)) {
                            atkNUM2_ALL = 1;
                            atkNUM2 -= Math.pow(10, 7);
                        }
                    }
                    show_atk_(b, dart_atk, 0);
                }
                if (ata_hp[b] <= 0) {
                    atk2++;
                    toch(b);
                }
                
                
            }
            dart_j[a]++;
            if (dart_j[a] > 10) {
                dart_j[a] = 0;
            }
            if (dart_time[a] > 1) {
                dart_time[a]++;
            }
            if (dart_time[a] >= 600) {
                dart_x.splice(a, 1);
                dart_y.splice(a, 1);
                dartXX.splice(a, 1);
                dartYY.splice(a, 1);
                dart_vx.splice(a, 1);
                dart_vy.splice(a, 1);
                dart_time.splice(a, 1);
                dart_j.splice(a, 1);
            }
        }
    }, 15)
    let moriatk2_RUN2 = setInterval(function () {
        if (stopCh == 1 || mori_hp <= 0) {
            clearInterval(moriatk2_RUN2);
        }
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        for (a = 0; a < dartXX.length; a++) {
            ctx2.save();
            ctx2.translate(dart_x[a], dart_y[a]);
            ctx2.rotate(dart_angle * Math.PI / 360);
            ctx2.drawImage(DDD_1, dart_draw, 0, 220, 212, -120, -120, 220, 212);
            ctx2.restore();
        }
        dart_draw += 240;
        if (dart_draw == 1200) {
            dart_draw = 0;
        }
        dart_angle += 40;
        if (dart_angle >= 720) {
            dart_angle = 0;
        }
    }, 15)
}
