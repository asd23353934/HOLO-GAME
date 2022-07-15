let btn = document.getElementById("btn");
let skill_all = document.getElementById("skill_all");
let skill_01 = document.getElementById("skill01");
let skill_02 = document.getElementById("skill02");
let skill_03 = document.getElementById("skill03");
let skill_04 = document.getElementById("skill04");

let btn_choose = document.getElementById("choose");
let btn_shop = document.getElementById("shop");
let env = document.getElementById("env");
let player = document.getElementById("player");
let esc = document.getElementById("esc");


let ok = document.getElementById("ok");
let title_ = document.getElementById("title_");

let shEn = document.getElementById("show_en");
let shTime = document.getElementById("show_time");
let shSkill = document.getElementById("show_skill");
let shMoney = document.getElementById("show_money");

let randomBoost_lvl = document.getElementById("randomBoost_lvl");
let showSkill = document.getElementById("showSkill");

let playCurrent = document.getElementById("playCurrent");

let SKILL_LIST = document.getElementById("SKILL_LIST");
let degreeOf_difficulty = document.getElementById("degreeOf_difficulty");
let skillNUM = document.getElementById("skillNUM");
let degreeOf_money = 0;

function btn_() {
    player.style.display = "block";
    btn_choose.style.display = "none";
    btn_shop.style.display = "none";
    setTimeout(function () {
        player.style.top = 150 + "px";
    }, 100)
}
function esc_() {
    player.style.top = -730 + "px";
    let esc_ = setInterval(() => {
        if (player.offsetTop <= -730) {
            player.style.display = "none";
            btn_choose.style.display = "block";
            btn_shop.style.display = "block";
            clearInterval(esc_);
        }
    }, 15);
}

function ok_() {
    if (gura_play_ch == 1) {
        gura_hp = gura_hp_all;
        gura_atk = gura_atk_all;
        trident_atk = trident_atk_all;
        bloop_atk = bloop_atk_all;
        gunAtk = gunAtk_all;
    }
    if (mori_play_ch == 1) {
        mori_hp = mori_hp_all;
        dart_atk = dart_atk_ALL;
        sickle_akt1 = sickle_akt1_all;
        mori_atk4_atk = mori_atk4_atk_all;
        moriBlood_recover = moriBlood_recover_all;
    }
    degreeOf_difficulty.style.display = "block";
    x_ch = 2.5;
    y_ch = 0;
    xyTime = 0;
    tttt = 0;
    bloop_x_ch = [];
    bloop_y_ch = [];
    title_.style.display = "none";
    btn_shop.style.display = "none";
    btn_choose.style.display = "none";
    player.style.top = -730 + "px";
    takoA = 1;
}
function degreeOf(ch) {
    if (ch == 1) {
        first_an();
    }
    if (ch == 2) {
        hp_LVLUP = 9999;
        if (gura_play_ch == 1) {
            gura_hp_all += hp_LVLUP;
            gura_hp = gura_hp_all;
            gura_atk = 9999;
            trident_atk = 9999;
            bloop_atk = 9999;
            gunAtk = 9999;
            atk_in = 50;
            trident_num = 12;
            bloop_in = 10;
        }
        if (mori_play_ch == 1) {
            mori_hp_all += hp_LVLUP;
            mori_hp = mori_hp_all;
            dart_atk = 9999;
            sickle_akt1 = 9999;
            mori_atk4_atk = 9999;
            moriBlood_recover = 999;
            dart_num = 20;
        }
        degreeOf_money = 1;
        ene = 10000;
        skNum1 = 50;
        skNum2 = 50;
        skNum3 = 50;
        skNum4 = 50;
        sk_num = 200;
        skill_up_stop = 100;
        randomBoostLVL.style.width = 100 + "%";
        randomBoost_lvl_sp.innerHTML = 100;
        showSkillLVL.style.width = 100 + "%";
        skill.innerHTML = 200;
        first_an();
    }
    degreeOf_difficulty.style.display = "none";
}



function first_an() {
    skill_01.innerHTML = `
    <button id="skill01_1" onclick="skill_up1()">Q</button>
    <p id="skill01_2"></p>
    <p id="skill01_3">LV: <span id="sk01">1</span></p>
    `;
    skill_02.innerHTML = `
    <button id="skill02_1" onclick="skill_up2()">W</button>
    <p id="skill02_2"></p>
    <p id="skill02_3">LV: <span id="sk02">0</span></p>
    `;
    skill_03.innerHTML = `
    <button id="skill03_1" onclick="skill_up3()">E</button>
    <p id="skill03_2"></p>
    <p id="skill03_3">LV: <span id="sk03">0</span></p>
    `;
    skill_04.innerHTML = `
    <button id="skill04_1" onclick="skill_up4()">R</button>
    <p id="skill04_2"></p>
    <p id="skill04_3">LV: <span id="sk04">0</span></p>
    `;
    if (gura_play_ch == 1) {
        skill_01.innerHTML += `<img id="skill01_img" src="gurashop2.png" alt="">`;
        skill_02.innerHTML += `<img id="skill01_img" src="gurashop3.png" alt="">`;
        skill_03.innerHTML += `<img id="skill01_img" src="gurashop4.png" alt="">`;
        skill_04.innerHTML += `<img id="skill01_img" src="gurashop5.png" alt="">`;
        playCurrent.innerHTML = `<img id="playCurrent_img" src="OIP (1).jpg"><img id="playCurrentHP" src="HP.png"><p id="playCurrent_p">${gura_hp}</p>`;
        SKILL_LIST.innerHTML = `
        <div id="SKILL_LIST1"><img id="SKILL_LIST1_img" src="gurashop2.png" ><p id="SKILL_LIST1_p_1">0</p><p id="SKILL_LIST1_p_2">0</p></div>
        <div id="SKILL_LIST2"><img id="SKILL_LIST2_img" src="gurashop3.png" ><p id="SKILL_LIST2_p_1">0</p><p id="SKILL_LIST2_p_2">0</p></div>
        <div id="SKILL_LIST3"><img id="SKILL_LIST3_img" src="gurashop4.png" ><p id="SKILL_LIST3_p_1">0</p><p id="SKILL_LIST3_p_2">0</p></div>
        <div id="SKILL_LIST4"><img id="SKILL_LIST4_img" src="gurashop5.png" ><p id="SKILL_LIST4_p_1">0</p><p id="SKILL_LIST4_p_2">0</p></div>
        `
    }
    if (ame_play_ch == 1) {
        playCurrent.innerHTML = `<img id="playCurrent_img" src="OIP (2).jpg"><img id="playCurrentHP" src="HP.png">
        <p id="playCurrent_p">${gura_hp}</p>`;
        SKILL_LIST.innerHTML = `
        <div id="SKILL_LIST1"><img id="SKILL_LIST1_img" src="gurashop2.png" ><p id="SKILL_LIST1_p_1">0</p><p id="SKILL_LIST1_p_2">0</p></div>
        <div id="SKILL_LIST2"><img id="SKILL_LIST2_img" src="gurashop3.png" ><p id="SKILL_LIST2_p_1">0</p><p id="SKILL_LIST2_p_2">0</p></div>
        <div id="SKILL_LIST3"><img id="SKILL_LIST3_img" src="gurashop4.png" ><p id="SKILL_LIST3_p_1">0</p><p id="SKILL_LIST3_p_2">0</p></div>
        <div id="SKILL_LIST4"><img id="SKILL_LIST4_img" src="gurashop5.png" ><p id="SKILL_LIST4_p_1">0</p><p id="SKILL_LIST4_p_2">0</p></div>
        `
    }
    if (kiara_play_ch == 1) {
        playCurrent.innerHTML = `<img id="playCurrent_img" src="OIP (4).jpg"><img id="playCurrentHP" src="HP.png">
        <p id="playCurrent_p">${gura_hp}</p>`;
        SKILL_LIST.innerHTML = `
        <div id="SKILL_LIST1"><img id="SKILL_LIST1_img" src="gurashop2.png" ><p id="SKILL_LIST1_p_1">0</p><p id="SKILL_LIST1_p_2">0</p></div>
        <div id="SKILL_LIST2"><img id="SKILL_LIST2_img" src="gurashop3.png" ><p id="SKILL_LIST2_p_1">0</p><p id="SKILL_LIST2_p_2">0</p></div>
        <div id="SKILL_LIST3"><img id="SKILL_LIST3_img" src="gurashop4.png" ><p id="SKILL_LIST3_p_1">0</p><p id="SKILL_LIST3_p_2">0</p></div>
        <div id="SKILL_LIST4"><img id="SKILL_LIST4_img" src="gurashop5.png" ><p id="SKILL_LIST4_p_1">0</p><p id="SKILL_LIST4_p_2">0</p></div>
        `
    }
    if (ina_play_ch == 1) {
        playCurrent.innerHTML = `<img id="playCurrent_img" src="OIP.jpg"><img id="playCurrentHP" src="HP.png">
        <p id="playCurrent_p">${gura_hp}</p>`;
        SKILL_LIST.innerHTML = `
        <div id="SKILL_LIST1"><img id="SKILL_LIST1_img" src="gurashop2.png" ><p id="SKILL_LIST1_p_1">0</p><p id="SKILL_LIST1_p_2">0</p></div>
        <div id="SKILL_LIST2"><img id="SKILL_LIST2_img" src="gurashop3.png" ><p id="SKILL_LIST2_p_1">0</p><p id="SKILL_LIST2_p_2">0</p></div>
        <div id="SKILL_LIST3"><img id="SKILL_LIST3_img" src="gurashop4.png" ><p id="SKILL_LIST3_p_1">0</p><p id="SKILL_LIST3_p_2">0</p></div>
        <div id="SKILL_LIST4"><img id="SKILL_LIST4_img" src="gurashop5.png" ><p id="SKILL_LIST4_p_1">0</p><p id="SKILL_LIST4_p_2">0</p></div>
        `
    }
    if (mori_play_ch == 1) {
        skill_01.innerHTML += `<img id="skill01_img" src="moriatk1.png" >`;
        skill_02.innerHTML += `<img id="skill01_img" src="moriatk2.png" >`;
        skill_03.innerHTML += `<img id="skill01_img" src="moriatk3.png" >`;
        skill_04.innerHTML += `<img id="skill01_img" src="moriatk4.png" >`;
        playCurrent.innerHTML = `<img id="playCurrent_img" src="R.png"><img id="playCurrentHP" src="HP.png"><p id="playCurrent_p">${mori_hp}</p>`;
        SKILL_LIST.innerHTML = `
        <div id="SKILL_LIST1"><img id="SKILL_LIST1_img" src="moriatk1.png" ><p id="SKILL_LIST1_p_1">0</p><p id="SKILL_LIST1_p_2">0</p></div>
        <div id="SKILL_LIST2"><img id="SKILL_LIST2_img" src="moriatk2.png" ><p id="SKILL_LIST2_p_1">0</p><p id="SKILL_LIST2_p_2">0</p></div>
        <div id="SKILL_LIST3"><img id="SKILL_LIST3_img" src="moriatk3.png" ><p id="SKILL_LIST3_p_1">0</p><p id="SKILL_LIST3_p_2">0</p></div>
        <div id="SKILL_LIST4"><img id="SKILL_LIST4_img" src="moriatk4.png" ><p id="SKILL_LIST4_p_1">0</p><p id="SKILL_LIST4_p_2">0</p></div>
        `
    }
    if (degreeOf_money == 1) {
        sk01.innerHTML = `50`;
        sk02.innerHTML = `50`;
        sk03.innerHTML = `50`;
        sk04.innerHTML = `50`;
    }
    if (gura_play_ch == 1) {
        CCC.src = "img/R-PhotoRoom.png";
        DDD_1.src = "atk2.png";
        FFF.src = "bloopLeft.png";
        GGG.src = "atk4Left.png";
        EEE_1.src = "1111.png";
        SKILL_LIST1_p_2.innerHTML = `${gura_atk}`;
        SKILL_LIST2_p_2.innerHTML = `${trident_atk}`;
        SKILL_LIST3_p_2.innerHTML = `${bloop_atk}`;
        SKILL_LIST4_p_2.innerHTML = `${gunAtk}`;
    }
    if (mori_play_ch == 1) {
        CCC.src = "moriatk1left.png";
        DDD_1.src = "mori_atk2.png";
        FFF.src = "moriatk_4.png";
        GGG.src = "mori_atk4_1.png";
        EEE_2.src = "moriatk4.png";
        SKILL_LIST1_p_2.innerHTML = `${sickle_akt1}`;
        SKILL_LIST2_p_2.innerHTML = `${dart_atk}`;
        SKILL_LIST3_p_2.innerHTML = `${moriBlood_recover}`;
        SKILL_LIST4_p_2.innerHTML = `${mori_atk4_atk}`;
    }

    if (takoA == 1) {
        takoA = 0;
        x = 1000;
        y = -150;
        if (gura_play_ch == 1) {
            AAA.src = "guraDown.png";
            guraTime = 0;
            guraCh = 3;
            let first_ = setInterval(function () {
                if (y <= 420) {
                    y++;
                }
                if (y == 420) {
                    startall();
                }
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(AAA, guraTime, 0, 500, 200, x - 40, y - 20, 150, 75);
                guraTime += 500;
                if (guraTime == 2500) {
                    guraTime = 0;
                }
                if (env.style.display == "block") {
                    AAA.src = "guraRight.png";
                    guraCh = 0;
                    guraTime = 0;
                    clearInterval(first_);
                }
            }, 5)
        }
        if (mori_play_ch == 1) {
            AAA.src = "morileft.png";
            moriTime = 0;
            moriCh = 1;
            let first_ = setInterval(function () {
                if (y <= 420) {
                    y++;
                }
                if (y == 420) {
                    startall();
                }
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(AAA, moriTime, 0, 500, 482, x - 65, y - 50, 130, 100);
                moriTime += 500;
                if (moriTime == 2500) {
                    moriTime = 0;
                }
                if (env.style.display == "block") {
                    clearInterval(first_);
                }
            }, 5)
        }
    }



}





function startall() {

    setTimeout(function () {
        stopCh = 0;
        env.style.display = "block";
        stop_esc.style.display = "block";
        skill_01.style.display = "block";
        skill_02.style.display = "block";
        skill_03.style.display = "block";
        skill_04.style.display = "block";
        skill_all.style.display = "block";
        shEn.style.display = "block";
        shMoney.style.display = "block";
        shSkill.style.display = "block";
        shTime.style.display = "block";
        bloodVolume.style.display = "block";
        randomBoost_lvl.style.display = "block";
        showSkill.style.display = "block";
        playCurrent.style.display = "block";
        SKILL_LIST.style.display = "block";
        skillNUM.style.display = "block";
    }, 10)
    setTimeout(() => {
        showAtk();
        start_en();
        takoAttack();
        kiNum_();
        enemy_run();
        time();
    }, 100);
    if (degreeOf_money == 1) {
        setTimeout(() => {
            showAtk();
            start_en();
            takoAttack();
            kiNum_();
            enemy_run();
            time();
        }, 100);
    }

    if (gura_play_ch == 1) {
        setTimeout(function () {
            trident_();
            trident__();
            bloop_();
            gun();
        }, 100)
        setTimeout(function () {
            attack_run();
            attack_run1();
            gura_run();
        }, 100)

        if (degreeOf_money == 1) {
            setTimeout(function () {
                trident_();
                trident__();
                bloop_();
                gun();
            }, 100)
            setTimeout(function () {
                attack_run();
                attack_run1();
                gura_run();
            }, 100)
        }
    }
    if (mori_play_ch == 1) {
        setTimeout(function () {
            mori_run();
            moriatk1();
            moriatk2();
            moriatk4();
        }, 100)
        if (degreeOf_money == 1) {
            setTimeout(function () {
                mori_run();
                moriatk1();
                moriatk2();
                moriatk4();
            }, 100)
        }
    }
}

