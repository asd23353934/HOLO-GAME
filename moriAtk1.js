let sickle_angle = 460;
let sickle_direction = 0;
let sickle_akt1_all = 10;
let sickle_akt1 = sickle_akt1_all;
let sickle_j = [];
function moriatk1() {
    let moriatk1_RUN1 = setInterval(function () {
        if (stopCh == 1 || mori_hp <= 0) {
            clearInterval(moriatk1_RUN1);
        }
        if (fx.includes("ArrowLeft")) {
            sickle_direction = 0;
            CCC.src = "moriatk1left.png";
        }
        if (fx.includes("ArrowRight")) {
            CCC.src = "moriatk1.png";
            sickle_direction = 1;
        }
        ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
        ctx1.save();
        if (sickle_direction == 0) {
            ctx1.translate(x - 70, y );
            ctx1.rotate(-sickle_angle * Math.PI / 360);
            ctx1.drawImage(CCC, -280, -118, 300, 300);
        }
        if (sickle_direction == 1) {
            ctx1.translate(x + 70, y );
            ctx1.rotate(sickle_angle * Math.PI / 360);
            ctx1.drawImage(CCC, -62, -118, 300, 300);
        }
        ctx1.restore();
        sickle_angle += 30;
        if (sickle_angle >= 1010)
            sickle_angle = 460;
    }, 15)
    let moriatk1_RUN2 = setInterval(() => {
        if (stopCh == 1 || mori_hp <= 0) {
            clearInterval(moriatk1_RUN2);
        }
        for (a = 0; a < aa.length; a++) {
            if (sickle_j[a] > 0)
                sickle_j[a]++;
            if (sickle_j[a] > 10)
                sickle_j[a] = 0;
            if (sickle_j[a] == 0 && ata_hp[a] > 0) {
                if (sickle_direction == 0 &&
                    x + 50 > aa[a] &&
                    x - 300 < aa[a] &&
                    y + 300 > bb[a] &&
                    y - 300 < bb[a]) {
                    ata_hp[a] -= sickle_akt1;
                    if (atkNUM1_ALL > 0) {
                        atkNUM1 += sickle_akt1;
                        if (atkNUM1 >= Math.pow(10, 7)) {
                            atkNUM1_ALL++;
                            atkNUM1 -= Math.pow(10, 7);
                        }
                        SKILL_LIST1_p_1.innerHTML = `${atkNUM1_ALL}m${atkNUM1}`;
                    }
                    if (atkNUM1_ALL == 0) {
                        atkNUM1 += sickle_akt1;
                        SKILL_LIST1_p_1.innerHTML = atkNUM1;
                        if (atkNUM1 >= Math.pow(10, 7)) {
                            atkNUM1_ALL = 1;
                            atkNUM1 -= Math.pow(10, 7);
                        }
                    }
                    sickle_j[a]++;
                    show_atk_(a, sickle_akt1, 0);
                    if (ata_hp[a] <= 0) {
                        atk1++;
                        toch(a);
                    }
                }
                if (sickle_direction == 1 &&
                    x + 300 > aa[a] &&
                    x - 50 < aa[a] &&
                    y + 300 > bb[a] &&
                    y - 300 < bb[a]) {
                    ata_hp[a] -= sickle_akt1;
                    if (atkNUM1_ALL > 0) {
                        atkNUM1 += sickle_akt1;
                        if (atkNUM1 >= Math.pow(10, 7)) {
                            atkNUM1_ALL++;
                            atkNUM1 -= Math.pow(10, 7);
                        }
                        SKILL_LIST1_p_1.innerHTML = `${atkNUM1_ALL}m${atkNUM1}`;
                    }
                    if (atkNUM1_ALL == 0) {
                        atkNUM1 += sickle_akt1;
                        SKILL_LIST1_p_1.innerHTML = atkNUM1;
                        if (atkNUM1 >= Math.pow(10, 7)) {
                            atkNUM1_ALL = 1;
                            atkNUM1 -= Math.pow(10, 7);
                        }
                    }
                    sickle_j[a]++;
                    show_atk_(a, sickle_akt1, 0);
                    if (ata_hp[a] <= 0) {
                        atk1++;
                        toch(a);
                    }
                }
                
            }
        }
    }, 15);
}