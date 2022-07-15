let moriBlood_recover_all = 1;
let moriBlood_recover = moriBlood_recover_all;
let moriBlood_num = 0;
function moriatk3() {
    if (skNum3 > 0) {
        moriBlood_num++;
        if (moriBlood_num >= 50) {
            moriBlood_num -= 50;
            mori_hp += moriBlood_recover;
            if (atkNUM3_ALL > 0) {
                atkNUM3 += moriBlood_recover;
                if (atkNUM3 >= Math.pow(10, 7)) {
                    atkNUM3_ALL++;
                    atkNUM3 -= Math.pow(10, 7);
                }
                SKILL_LIST3_p_1.innerHTML = `${atkNUM3_ALL}m${atkNUM3}`;
            }
            if (atkNUM3_ALL == 0) {
                atkNUM3 += moriBlood_recover;
                SKILL_LIST3_p_1.innerHTML = atkNUM3;
                if (atkNUM3 >= Math.pow(10, 7)) {
                    atkNUM3_ALL = 1;
                    atkNUM3 -= Math.pow(10, 7);
                }
            }
            if (mori_hp >= mori_hp_all) {
                mori_hp = mori_hp_all;
            }
        }
    }

}