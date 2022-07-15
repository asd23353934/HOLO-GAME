let showEsc = document.getElementById("showEsc");
let stop_esc = document.getElementById("stop");
var stopCh = 0;
function stop() {
    stopCh++;
    if (stopCh == 1)
        showEsc.style.display = "block";
    if (stopCh == 2) {
        stopCh = 0;
        showEsc.style.display = "none";
    }
    if (stopCh == 0 && ranstop == 0) {
        randomBoost.style.display = "none";
        if (enemy3_num > 0 && enemy3_num < 15)
            enemy3 = 1;
        time();
        kiNum_();
        start_en();
        enemy_run();
        showAtk();
        takoAttack();
        if (degreeOf_money == 1) {
            time();
            kiNum_();
            start_en();
            enemy_run();
            showAtk();
            takoAttack();
        }
        if (gura_play_ch == 1) {
            if (skNum2 > 0) {
                if (trident_time == 0)
                    trident_();
                if (trident_time >= 0)
                    trident__();
            }
            if (skNum3 > 0)
                bloop_();
            attack_run();
            attack_run1();
            gura_run();
            gun();
            gun1();
            if (degreeOf_money == 1) {
                attack_run();
                attack_run1();
                if (skNum2 > 0) {
                    if (trident_time == 0)
                        trident_();
                    if (trident_time >= 0)
                        trident__();
                }
                if (skNum3 > 0)
                    bloop_();
                gura_run();
                gun();
                gun1();
            }
        }

        if (mori_play_ch == 1) {
            moriatk1();
            moriatk2();
            mori_run();
            moriatk4();
            if (degreeOf_money == 1) {
                moriatk1();
                moriatk2();
                mori_run();
                moriatk4();
            }
        }


    }
}