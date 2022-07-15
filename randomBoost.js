let randomBoost = document.getElementById("randomBoost");

let ranTime = 0;                //以防觸發隨機時按下暫停
let randomBoost_repeat = 0;     //記錄每一次隨機數
let randomBoost_num = [];       //過篩無重複數後塞入隨機數
let ranstop = 0;
let ranNum = 0;
let ranOff = 1;
let hp_LVLUP = 0;

//過篩選擇隨機數
function ranBoost(kii) {
    stopCh = 1;
    if (ranstop == 0) {
        ranstop = 1;
        ranTime = 1;
        ranNum = kii;
    }
    if (stopCh == 1) {
        randomBoost_repeat = 0;
        randomBoost_num = [];
        setTimeout(() => {
            let ran_num = setInterval(function () {
                if (randomBoost_num.length < 3) {
                    randomBoost_repeat = Math.floor(Math.random() * 10);
                }
                if (!randomBoost_num.includes(randomBoost_repeat)) {
                    randomBoost_num.push(randomBoost_repeat);
                }
                if (randomBoost_num.length == 3) {
                    inner();
                    clearInterval(ran_num);
                }
            }, 50)
        }, 250);
    }

}




//顯示隨機事件畫面
function inner() {
    randomBoost.style.display = "block";
    randomBoost.innerHTML = `
    <div id="randomBoost_title">
        <p id="randomBoost_text">選擇能力提升</p>
    </div>
    <div id="randomBoost_instruct1">
        <p id="randomBoost_instruct1_p">1</p>
        <div id="randomBoost_instruct1_mark"></div>
    </div>
    <div id="randomBoost_instruct2">
        <p id="randomBoost_instruct1_p">2</p>
        <div id="randomBoost_instruct1_mark"></div>
    </div>
    <div id="randomBoost_instruct3">
        <p id="randomBoost_instruct1_p">3</p>
        <div id="randomBoost_instruct1_mark"></div>
    </div>
    `
    for (a = 0; a < 3; a++) {
        if (randomBoost_num[a] == 0) {
            if (gura_play_ch == 1) {
                randomBoost.innerHTML += `
                <div id="randomBoost_${a}" onclick="r1(0)">
                <img id= "randomBoost_img"src="img/R-PhotoRoom.png"></img>
                <p id="randomBoost_p">提升10點A傷害</p>
                </div>
                `
            }
            if (mori_play_ch == 1) {
                randomBoost.innerHTML += `
                <div id="randomBoost_${a}" onclick="r1(0)">
                <img id= "randomBoost_img"src="moriatk1.png"></img>
                <p id="randomBoost_p">提升10點鐮刀傷害</p>
                </div>
                `
            }
        }
        if (randomBoost_num[a] == 1) {
            if (gura_play_ch == 1) {
                randomBoost.innerHTML += `
                <div id="randomBoost_${a}" onclick="r1(1)">
                <img id= "randomBoost_img"src="atk2.png"></img>
                <p id="randomBoost_p">提升10點三叉戟傷害</p>
                </div>
                `
            }
            if (mori_play_ch == 1) {
                randomBoost.innerHTML += `
                <div id="randomBoost_${a}" onclick="r1(1)">
                <img id= "randomBoost_img"src="moriatk2.png"></img>
                <p id="randomBoost_p">提升10點飛鏢傷害</p>
                </div>
                `
            }
        }
        if (randomBoost_num[a] == 2) {
            if (gura_play_ch == 1) {
                randomBoost.innerHTML += `
                <div id="randomBoost_${a}" onclick="r1(2)">
                <img id= "randomBoost_img"src="f8f8f8.png"></img>
                <p id="randomBoost_p">提升2點Bloop傷害</p>
                </div>
                `
            }
            if (mori_play_ch == 1) {
                randomBoost.innerHTML += `
                <div id="randomBoost_${a}" onclick="r1(2)">
                <img id= "randomBoost_img"src="moriatk3.png"></img>
                <p id="randomBoost_p">提升1點擊殺恢復</p>
                </div>
                `
            }
        }
        if (randomBoost_num[a] == 3) {
            if (gura_play_ch == 1) {
                randomBoost.innerHTML += `
                <div id="randomBoost_${a}" onclick="r1(3)">
                <img id= "randomBoost_img"src="img/R-PhotoRoom.png"></img>
                <p id="randomBoost_p">提升10點雷射泡傷害</p>
                </div>
                `
            }
            if (mori_play_ch == 1) {
                randomBoost.innerHTML += `
                <div id="randomBoost_${a}" onclick="r1(3)">
                <img id= "randomBoost_img"src="moriatk4.png"></img>
                <p id="randomBoost_p">提升10點死神傷害</p>
                </div>
                `
            }
        }
        if (randomBoost_num[a] == 4) {
            if (gura_play_ch == 1) {
                randomBoost.innerHTML += `
                <div id="randomBoost_${a}" onclick="r1(4)">
                <img id= "randomBoost_img"src="moriatk3.png"></img>
                <p id="randomBoost_p">增加10點血量</p>
                </div>
                `
            }
            if (mori_play_ch == 1) {
                randomBoost.innerHTML += `
                <div id="randomBoost_${a}" onclick="r1(4)">
                <img id= "randomBoost_img"src="moriatk3.png"></img>
                <p id="randomBoost_p">增加10點血量</p>
                </div>
                `
            }
        }
        if (randomBoost_num[a] == 5) {
            if (gura_play_ch == 1) {
                randomBoost.innerHTML += `
                <div id="randomBoost_${a}" onclick="r1(5)">
                <img id= "randomBoost_img"src="moriatk3.png"></img>
                <p id="randomBoost_p">恢復5點血量</p>
                </div>
                `
            }
            if (mori_play_ch == 1) {
                randomBoost.innerHTML += `
                <div id="randomBoost_${a}" onclick="r1(5)">
                <img id= "randomBoost_img"src="moriatk3.png"></img>
                <p id="randomBoost_p">恢復5點血量</p>
                </div>
                `
            }
        }
        if (randomBoost_num[a] == 6) {
            if (gura_play_ch == 1) {
                randomBoost.innerHTML += `
                <div id="randomBoost_${a}" onclick="r1(6)">
                <img id= "randomBoost_img"src="img/R-PhotoRoom.png"></img>
                <p id="randomBoost_p">提升10點A傷害</p>
                </div>
                `
            }
            if (mori_play_ch == 1) {
                randomBoost.innerHTML += `
                <div id="randomBoost_${a}" onclick="r1(6)">
                <img id= "randomBoost_img"src="moriatk1.png"></img>
                <p id="randomBoost_p">提升10點鐮刀</p>
                </div>
                `
            }
        }
        if (randomBoost_num[a] == 7) {
            if (gura_play_ch == 1) {
                randomBoost.innerHTML += `
                <div id="randomBoost_${a}" onclick="r1(7)">
                <img id= "randomBoost_img"src="img/R-PhotoRoom.png"></img>
                <p id="randomBoost_p">提升10點A傷害</p>
                </div>
                `
            }
            if (mori_play_ch == 1) {
                randomBoost.innerHTML += `
                <div id="randomBoost_${a}" onclick="r1(7)">
                <img id= "randomBoost_img"src="moriatk1.png"></img>
                <p id="randomBoost_p">提升10點鐮刀</p>
                </div>
                `
            }
        }
        if (randomBoost_num[a] == 8) {
            if (gura_play_ch == 1) {
                randomBoost.innerHTML += `
                <div id="randomBoost_${a}" onclick="r1(8)">
                <img id= "randomBoost_img"src="img/R-PhotoRoom.png"></img>
                <p id="randomBoost_p">提升10點A傷害</p>
                </div>
                `
            }
            if (mori_play_ch == 1) {
                randomBoost.innerHTML += `
                <div id="randomBoost_${a}" onclick="r1(8)">
                <img id= "randomBoost_img"src="moriatk1.png"></img>
                <p id="randomBoost_p">提升10點鐮刀</p>
                </div>
                `
            }
        }
        if (randomBoost_num[a] == 9) {
            if (gura_play_ch == 1) {
                randomBoost.innerHTML += `
                <div id="randomBoost_${a}" onclick="r1(9)">
                <img id= "randomBoost_img"src="img/R-PhotoRoom.png"></img>
                <p id="randomBoost_p">提升10點A傷害</p>
                </div>
                `
            }
            if (mori_play_ch == 1) {
                randomBoost.innerHTML += `
                <div id="randomBoost_${a}" onclick="r1(9)">
                <img id= "randomBoost_img"src="moriatk1.png"></img>
                <p id="randomBoost_p">提升10點鐮刀</p>
                </div>
                `
            }
        }
        if (randomBoost_num[a] == 10) {
            if (gura_play_ch == 1) {
                randomBoost.innerHTML += `
                <div id="randomBoost_${a}" onclick="r1(10)">
                <img id= "randomBoost_img"src="img/R-PhotoRoom.png"></img>
                <p id="randomBoost_p">提升10點A傷害</p>
                </div>
                `
            }
            if (mori_play_ch == 1) {
                randomBoost.innerHTML += `
                <div id="randomBoost_${a}" onclick="r1(10)">
                <img id= "randomBoost_img"src="moriatk1.png"></img>
                <p id="randomBoost_p">提升10點鐮刀</p>
                </div>
                `
            }
        }
    }
    setTimeout(function () {
        randomBoost_0.style.left = 5 + "%";
        randomBoost_1.style.left = 5 + "%";
        randomBoost_2.style.left = 5 + "%";
    }, 50)
    setTimeout(() => {
        randomBoost_instruct1.style.top = 16 + "%";
    }, 50);
    setTimeout(() => {
        randomBoost_instruct2.style.top = 46 + "%";
    }, 50);
    setTimeout(() => {
        randomBoost_instruct3.style.top = 77 + "%";
        key1 = 0;
    }, 50);
}
//選擇提升
function r1(Ch) {
    if (ranTime == 1) {
        key1 = 1;
        if (gura_play_ch == 1) {
            if (Ch == 0 || Ch == 6 || Ch == 7 || Ch == 8 || Ch == 9 || Ch == 10) {
                gura_atk += 10;
            }
            if (Ch == 1) {
                trident_atk += 10;
            }
            if (Ch == 2) {
                bloop_atk += 2;
            }
            if (Ch == 3) {
                gunAtk += 10;
            }
            if (Ch == 4) {
                hp_LVLUP += 10;
                gura_hp_all += 10;
                bloodNum = gura_hp_all / 100;
            }
            if (Ch == 5) {
                gura_hp += 5;
                if (gura_hp > gura_hp_all) {
                    gura_hp = gura_hp_all;
                }
            }
        }
        if (mori_play_ch == 1) {
            if (Ch == 0 || Ch == 6 || Ch == 7 || Ch == 8 || Ch == 9 || Ch == 10) {
                sickle_akt1 += 10;
            }
            if (Ch == 1) {
                dart_atk += 10;
            }
            if (Ch == 2) {
                moriBlood_recover++;
            }
            if (Ch == 3) {
                mori_atk4_atk += 10;
            }
            if (Ch == 4) {
                hp_LVLUP += 10;
                mori_hp_all += 10;
                bloodNum = mori_hp_all / 100;
            }
            if (Ch == 5) {
                mori_hp += 5;
                if (mori_hp > mori_hp_all) {
                    mori_hp = mori_hp_all;
                }
            }
        }
        randomBoost.style.display = "none";
        randomBoost.innerHTML = "";
        if (ranNum == ranOff) {
            ranNum = 0;
            ranOff = 1;
            ranstop = 0;
            ranTime = 0;
            stopCh = -1;
            stop();
        }
        if (ranOff < ranNum) {
            ranOff++;
            ranBoost();
        }
    }
}