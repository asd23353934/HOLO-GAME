let mori_atk4_draw_x = -90;
let mori_atk4_draw = 0
let mori_atk4_draw_delay = 0;
let mori_atk4_atk_all = 20;
let mori_atk4_atk = mori_atk4_atk_all;
let mori_atk4_tocuh = [];
let mori_atk4_draw1 = 0;
let mori_atk4_draw1_time = 0;
let mori_atk4Time = 0;
let mori_atk4_j = [];
let mori_env = 0;
function moriatk4() {
    let moriatk4_atk4RUN1 = setInterval(() => {
        if (stopCh == 1 || mori_hp <= 0) {
            clearInterval(moriatk4_atk4RUN1);
        }
        if (mori_atk4Time == 0 && skNum4 > 0) {
            for (a = 0; a < aa.length; a++) {
                mori_atk4_tocuh[a] = 1;
            }
            mori_atk4_draw1_time++;
            mori_atk4Time++;

        }
        if (mori_atk4_draw1_time > 0 && mori_env < 1) {
            mori_env += 0.01;
            if (mori_env >= 1) {
                mori_env = 1;
            }
            env.style.backgroundColor = `rgba(0,0,0,${mori_env})`
        }
        console.log(mori_env, mori_atk4_draw1_time);
        if (mori_atk4_draw1_time == 0 && mori_env > 0) {
            console.log(mori_env, mori_atk4_draw1_time);
            mori_env -= 0.01;
            if (mori_env <= 0) {
                mori_env = 0;
            }
            env.style.backgroundColor = `rgba(0,0,0,${mori_env})`
        }
        if (mori_atk4Time > 1) {
            mori_atk4Time++;
        }
        if (mori_atk4Time > 1500) {
            mori_atk4Time = 0;
        }
    }, 15);
    let moriatk4_draw = setInterval(() => {
        if (stopCh == 1 || mori_hp <= 0) {
            clearInterval(moriatk4_draw);
        }
        ctx4_1.clearRect(0, 0, canvas4_1.width, canvas4_1.height);
        if (mori_env == 1) {
            ctx4_1.save();
            ctx4_1.translate(x, y);
            ctx4_1.rotate(-30 * Math.PI / 180)
            ctx4_1.drawImage(FFF, mori_atk4_draw, 0, 498, 203, mori_atk4_draw_x-300, -400, 1800, 800);
            ctx4_1.restore();
            mori_atk4_draw_delay += 250;
            if (mori_atk4_draw_delay % 500 == 0) {
                mori_atk4_draw_x -= 80;
                mori_atk4_draw += 498;
            }
        }

    }, 15);

    let moriatk4_draw1 = setInterval(() => {
        if (stopCh == 1 || mori_hp <= 0) {
            clearInterval(moriatk4_draw1);
        }
        ctx4_2.clearRect(0, 0, canvas4_2.width, canvas4_2.height);
        if (mori_atk4Time == 1 && !mori_atk4_tocuh.includes(1) && mori_atk4_draw_delay == 0) {
            mori_atk4Time = 0;
            mori_atk4_draw1_time = 0;
        }
        if (mori_atk4_draw_delay >= 15000) {
            if (mori_atk4_draw1_time == 0) {
                mori_atk4_draw_x = -90;
                mori_atk4Time++;
                mori_atk4_draw = 0;
                mori_atk4_draw_delay = 0;
            }
            if (mori_atk4_draw1_time > 0) {
                for (a = 0; a < aa.length; a++) {
                    if (ata_hp[a] > 0 && mori_atk4_tocuh[a] == 1) {
                        moriatk4XX = aa[a] + Math.floor(Math.random() * 20) - 9.5;
                        moriatk4YY = bb[a] + Math.floor(Math.random() * 20) - 9.5;
                        ctx4_2.drawImage(GGG, mori_atk4_draw1, 0, 180, 226, moriatk4XX - 90, moriatk4YY - 90, 180, 226);
                    }
                }
                mori_atk4_draw1 += 180;

                if (mori_atk4_draw1 >= 900) {
                    mori_atk4_draw1 = 0;
                }
                mori_atk4_draw1_time++;
                if (mori_atk4_draw1_time == 250)
                    mori_atk4_draw1_time = 0;
            }
        }

    }, 20);
    let moriatk4_atk4RUN2 = setInterval(() => {
        if (stopCh == 1 || mori_hp <= 0) {
            clearInterval(moriatk4_atk4RUN2);
        }
        if (mori_atk4_draw_delay >= 15000) {
            for (a = 0; a < aa.length; a++) {
                if (mori_atk4_tocuh[a] == 1) {
                    if (mori_atk4_j[a] == 0) {
                        mori_atk4_ran = mori_atk4_atk + Math.floor(Math.random() * 10);
                        ata_hp[a] -= mori_atk4_ran;
                        if (atkNUM4_ALL > 0) {
                            atkNUM4 += mori_atk4_ran;
                            if (atkNUM4 >= Math.pow(10, 7)) {
                                atkNUM4_ALL++;
                                atkNUM4 -= Math.pow(10, 7);
                            }
                            SKILL_LIST4_p_1.innerHTML = `${atkNUM4_ALL}m${atkNUM4}`;
                        }
                        if (atkNUM4_ALL == 0) {
                            atkNUM4 += mori_atk4_ran;
                            SKILL_LIST4_p_1.innerHTML = atkNUM4;
                            if (atkNUM4 >= Math.pow(10, 7)) {
                                atkNUM4_ALL = 1;
                                atkNUM4 -= Math.pow(10, 7);
                            }
                        }
                        show_atk_(a, mori_atk4_ran, 2);
                        if (ata_hp[a] <= 0) {
                            atk4++;
                            toch(a);
                        }
                    }
                    if (mori_atk4_j[a] > 0)
                        mori_atk4_j[a]++;
                    if (mori_atk4_j[a] > 30)
                        mori_atk4_j[a] == 0;
                }
            }
        }
    }, 15);
    let moriatk4_draw2 = setInterval(() => {
        if (stopCh == 1 || mori_hp <= 0) {
            clearInterval(moriatk4_draw2);
        }
        if (mori_atk4_draw1_time == 0 || mori_atk4Time == 1) {
            ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
            ctx3.globalAlpha = 0 + mori_env;
            ctx3.drawImage(EEE_2, x - 300, y - 450, 600, 600);
        }
    }, 15);
}
