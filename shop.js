var gura_play = 0;          //判斷是否擁有gura人物
var ame_play = 0;           //判斷是否擁有ame人物    
var kiara_play = 0;         //判斷是否擁有kiara人物
var ina_play = 0;           //判斷是否擁有ina人物
var mori_play = 0;          //判斷是否擁有mori人物

var gura_play_ch = 0;
var ame_play_ch = 0;
var kiara_play_ch = 0;
var ina_play_ch = 0;
var mori_play_ch = 0;

let money = 1000;
let shopPlay_money_play = document.getElementById("shopPlay_money_play");
let shopPlay_money_skill = document.getElementById("shopPlay_money_skill");

var shopESC = document.getElementById("shop_esc");
var shopBack = document.getElementById("shop_back");
var shopAll = document.getElementById("shop_");

var shopHome = document.getElementById("shop_home");
var shopPlay = document.getElementById("shop_play");
var shopSkill = document.getElementById("shop_skill");
var shopList = document.getElementById("shop_all");

var homeShop = document.getElementById("shopHome");
var playShop = document.getElementById("shopPlay");
var skillShop = document.getElementById("shopSkill");
var shopMark = document.getElementById("shopMark");
var smallMark = document.getElementById("smallMark");

let shop_home_1 = document.getElementById("shop_home_1");
let shop_home_2 = document.getElementById("shop_home_2");
let small1 = document.getElementById("small1");
let small2 = document.getElementById("small2");
let shop_Play = document.getElementById("shop_Play")
let skillIntroduce = document.getElementById("skillIntroduce");
let shopSkill_introduce = document.getElementById("shopSkill_introduce");
let shopShow_skill = document.getElementById("shopShow_skill");
let imgPlay1 = document.getElementById("imgPlay1");
let imgPlay2 = document.getElementById("imgPlay2");
let imgPlay3 = document.getElementById("imgPlay3");
let imgPlay4 = document.getElementById("imgPlay4");
let imgPlay5 = document.getElementById("imgPlay5");
let buyplay1 = document.getElementById("buyplay1");
let buyplay2 = document.getElementById("buyplay2");
let buyplay3 = document.getElementById("buyplay3");
let buyplay4 = document.getElementById("buyplay4");
let buyplay5 = document.getElementById("buyplay5");
let playAll_skill_img1 = document.getElementById("playAll_skill_img1");
let playAll_skill_img2 = document.getElementById("playAll_skill_img2");
let playAll_skill_img3 = document.getElementById("playAll_skill_img3");
let playAll_skill_img4 = document.getElementById("playAll_skill_img4");
let playAll_skill_img5 = document.getElementById("playAll_skill_img5");
let shop_Skill_ul = document.getElementById("shop_Skill_ul");
let mouseDown = 0;
let mouse = {
    x: 0,
    y: 0,
    vx: 0,
    vy: 0,
};
let numX = 0;
document.onmousedown = function (event) {
    let e = event || window.event;
    mouse.x = e.clientX;
    mouse.y = e.ClientY;
    mouseDown = 1;
}

document.onmousemove = function (event) {
    mouse.vx = event.pageX;
    mouse.vy = event.pageY;
};
document.onmouseup = function () {
    mouseDown = 0;
};
function Move() {
    let move = setInterval(function () {
        if (mouseDown == 1 && shopPlay.style.display == "block") {
            numX = mouse.vx - mouse.x;
            shop_Skill_ul.style.left = shop_Skill_ul.offsetLeft + numX * 2 + "px";
            shop_Play.style.left = shop_Play.offsetLeft + numX * 2 + "px";
            mouse.x = mouse.vx;
        }
        if (shop_Play.offsetLeft < -1000) {
            shop_Play.style.left = -1000 + "px";

        }
        if (shop_Skill_ul.offsetLeft < -450) {
            shop_Skill_ul.style.left = -450 + "px";
        }
        if (shop_Play.offsetLeft > 0) {
            shop_Play.style.left = 0;
        }
        if (shop_Skill_ul.offsetLeft > 0) {
            shop_Skill_ul.style.left = 0;
        }
        if (takoA == 1) {
            clearInterval(move);
        }
    }, 50)
}
Move();
let downShop = 0;
let chooseShop = 0;
function shopPlay_choose(ch) {
    chooseShop = ch;
    if (ch == 1) {
        shopShow_skill.innerHTML = `
        <img id="shopShow_skill1" onmouseover="shopPlay_over(1)"  src="img/R-PhotoRoom.png" >
        <img id="shopShow_skill2" onmouseover="shopPlay_over(2)" src="atk2.png">
        <img id="shopShow_skill3" onmouseover="shopPlay_over(3)" src="f8f8f8.png">
        <img id="shopShow_skill4" onmouseover="shopPlay_over(4)" src="atk44.png">
        `
    }
    if (ch == 2) {
        shopShow_skill.innerHTML = `
        <img id="shopShow_skill1" onmouseover="shopPlay_over(1)" src="" >
        <img id="shopShow_skill2" onmouseover="shopPlay_over(2)" src="">
        <img id="shopShow_skill3" onmouseover="shopPlay_over(3)" src="">
        <img id="shopShow_skill4" onmouseover="shopPlay_over(4)" src="">
        `
    }
    if (ch == 3) {
        shopShow_skill.innerHTML = `
        <img id="shopShow_skill1" onmouseover="shopPlay_over(1)" src="" >
        <img id="shopShow_skill2" onmouseover="shopPlay_over(2)" src="">
        <img id="shopShow_skill3" onmouseover="shopPlay_over(3)" src="">
        <img id="shopShow_skill4" onmouseover="shopPlay_over(4)" src="">
        `
    }
    if (ch == 4) {
        shopShow_skill.innerHTML = `
        <img id="shopShow_skill1" onmouseover="shopPlay_over(1)" src="" >
        <img id="shopShow_skill2" onmouseover="shopPlay_over(2)" src="">
        <img id="shopShow_skill3" onmouseover="shopPlay_over(3)" src="">
        <img id="shopShow_skill4" onmouseover="shopPlay_over(4)" src="">
        `
    }
    if (ch == 5) {
        shopShow_skill.innerHTML = `
        <img id="shopShow_skill1" onmouseover="shopPlay_over(1)" src="moriatk1.png">
        <img id="shopShow_skill2" onmouseover="shopPlay_over(2)" src="moriatk2.png">
        <img id="shopShow_skill3" onmouseover="shopPlay_over(3)" src="moriatk3.png">
        <img id="shopShow_skill4" onmouseover="shopPlay_over(4)" src="moriatk4.png">
        `
    }
    if (downShop != chooseShop) {
        if (chooseShop == 1) {
            imgPlay1.style.top = 0;
        }
        if (chooseShop == 2) {
            imgPlay2.style.top = 0;
        }
        if (chooseShop == 3) {
            imgPlay3.style.top = 0;
        }
        if (chooseShop == 4) {
            imgPlay4.style.top = 0;
        }
        if (chooseShop == 5) {
            imgPlay5.style.top = 0;
        }
    }
}
let buyCk1 = document.getElementById("buyCk1");
let buyCk_sp1 = document.getElementById("buyCk_sp1");
let buy_err1 = document.getElementById("buy_err1");
//購買人物判斷金額
function buy_play_ch() {
    if (downShop == 1) {
        if (gura_play == 1) {
            buy_err1.style.display = "block";
        }
        if (gura_play == 0) {
            if (money >= 100) {
                buyCk1.style.display = "block";
                buyCk_sp1.innerHTML = `100`;

            }
            if (money < 100) {
                buy_err1.style.display = "block";
            }
        }
    }
    if (downShop == 2) {
        if (ame_play == 1) {
            buy_err1.style.display = "block";
        }
        if (ame_play == 0) {
            if (money >= 100) {
                buyCk1.style.display = "block";
                buyCk_sp1.innerHTML = `100`;

            }
            if (money < 100) {
                buy_err1.style.display = "block";
            }
        }
    }
    if (downShop == 3) {
        if (kiara_play == 1) {
            buy_err1.style.display = "block";
        }
        if (kiara_play == 0) {
            if (money >= 100) {
                buyCk1.style.display = "block";
                buyCk_sp1.innerHTML = `100`;

            }
            if (money < 100) {
                buy_err1.style.display = "block";
            }
        }
    }
    if (downShop == 4) {
        if (ina_play == 1) {
            buy_err1.style.display = "block";
        }
        if (ina_play == 0) {
            if (money >= 100) {
                buyCk1.style.display = "block";
                buyCk_sp1.innerHTML = `100`;

            }
            if (money < 100) {
                buy_err1.style.display = "block";
            }
        }
    }
    if (downShop == 5) {
        if (mori_play == 1) {
            buy_err1.style.display = "block";
        }
        if (mori_play == 0) {
            if (money >= 100) {
                buyCk1.style.display = "block";
                buyCk_sp1.innerHTML = `100`;

            }
            if (money < 100) {
                buy_err1.style.display = "block";
            }
        }
    }
}
function errEsc_play() {
    buy_err1.style.display = "none";
}
//按下確認購買後金額消費
function buyCk_KK() {
    if (downShop == 1) {
        gura_play++;
    }
    if (downShop == 2) {
        ame_play++;
    }
    if (downShop == 3) {
        kiara_play++;
    }
    if (downShop == 4) {
        ina_play++;
    }
    if (downShop == 5) {
        mori_play++;
    }
    money -= 100;
    shopPlay_money_play.innerHTML = `${money}`;
    shopPlay_money_skill.innerHTML = `${money}`;
    buyCk1.style.display = "none";
}
function buyck_NN() {
    buyCk1.style.display = "none";
}
//點擊人物互動與新增購買鍵
function shopPlay_click(ck) {
    downShop = ck;
    if (downShop == 1) {
        buyplay1.innerHTML = `
            <button id="buyplay" onmousedown="buy_play_ch()">購買</button>
            `;
        imgPlay1.style.top = 0;
    }
    if (downShop == 2) {
        buyplay2.innerHTML = `
            <button id="buyplay" onmousedown="buy_play_ch()">購買</button>
            `;
        imgPlay2.style.top = 0;
    }
    if (downShop == 3) {
        buyplay3.innerHTML = `
            <button id="buyplay" onmousedown="buy_play_ch()">購買</button>
            `;
        imgPlay3.style.top = 0;
    }
    if (downShop == 4) {
        buyplay4.innerHTML = `
            <button id="buyplay" onmousedown="buy_play_ch()">購買</button>
            `;
        imgPlay4.style.top = 0;
    }
    if (downShop == 5) {
        buyplay5.innerHTML = `
            <button id="buyplay" onmousedown="buy_play_ch()">購買</button>
            `;
        imgPlay5.style.top = 0;
    }
    if (downShop != 1) {
        buyplay1.innerHTML = ``;
        imgPlay1.style.top = 160 + "px";
    }
    if (downShop != 2) {
        buyplay2.innerHTML = ``;
        imgPlay2.style.top = 160 + "px";
    }
    if (downShop != 3) {
        buyplay3.innerHTML = ``;
        imgPlay3.style.top = 160 + "px";
    }
    if (downShop != 4) {
        buyplay4.innerHTML = ``;
        imgPlay4.style.top = 160 + "px";
    }
    if (downShop != 5) {
        buyplay5.innerHTML = ``;
        imgPlay5.style.top = 160 + "px";
    }
}
//滑鼠離開人物後回到初始樣式(除了點擊過的人物)
function shopPlay_out() {
    if (downShop == 0)
        shopShow_skill.innerHTML = ``;
    if (downShop > 0)
        shopPlay_choose(downShop);
    imgPlay1.style.top = 160 + "px";
    imgPlay2.style.top = 160 + "px";
    imgPlay3.style.top = 160 + "px";
    imgPlay4.style.top = 160 + "px";
    imgPlay5.style.top = 160 + "px";
    if (downShop == 1)
        imgPlay1.style.top = 0;
    if (downShop == 2)
        imgPlay2.style.top = 0;
    if (downShop == 3)
        imgPlay3.style.top = 0;
    if (downShop == 4)
        imgPlay4.style.top = 0;
    if (downShop == 5)
        imgPlay5.style.top = 0;
}
let shop_over = 0;
//滑鼠移動到介紹技能框時跳出介紹視窗
function shopPlay_over(over) {
    skillIntroduce.style.top = mouse.vy - 250 + "px";
    skillIntroduce.style.left = mouse.vx + 30 + "px";
    if (shop_over == 0) {
        shop_over = 1;
        shop_showSkill();

    }
    if (downShop == 1 && shop_over == 1) {
        if (over == 1) {
            skillIntroduce.innerHTML = `
            <video autoplay loop src="AAtk1.mp4" id="skillIntroduce_video"></video>
            <p id="skillIntroduce_p">朝後方以扇形方式射出攻擊</p>
            `
        }
        if (over == 2) {
            skillIntroduce.innerHTML = `
            <video autoplay loop src="trident.mp4" id="skillIntroduce_video"></video>
            <p id="skillIntroduce_p">以自我中心擲出十字形三叉戟</p>
            `
        }
        if (over == 3) {
            skillIntroduce.innerHTML = `
            <video autoplay loop src="bloop.mp4" id="skillIntroduce_video"></video>
            <p id="skillIntroduce_p">召喚bloop圍繞在身旁擊退怪物</p>
            `
        }
        if (over == 4) {
            skillIntroduce.innerHTML = `
            <video autoplay loop src="AAtk4.mp4" id="skillIntroduce_video"></video>
            <p id="skillIntroduce_p">呼叫巨型bloop施展大範圍雷射炮</p>
            `
        }
    }
    if (downShop == 5 && shop_over == 1) {
        if (over == 1) {
            skillIntroduce.innerHTML = `
            <video autoplay loop src="moriatk1.mp4" id="skillIntroduce_video"></video>
            <p id="skillIntroduce_p">朝前方大幅度揮動鐮刀</p>
            `
        }
        if (over == 2) {
            skillIntroduce.innerHTML = `
            <video autoplay loop src="moriatk2.mp4" id="skillIntroduce_video"></video>
            <p id="skillIntroduce_p">召喚飛鏢隨機鎖定怪物</p>
            `
        }
        if (over == 3) {
            skillIntroduce.innerHTML = `
            <p id="skillIntroduce_p">每固定擊殺一定的量將恢復一點血量</p>
            `
        }
        if (over == 4) {
            skillIntroduce.innerHTML = `
            <video autoplay loop src="moriatk4.mp4" id="skillIntroduce_video"></video>
            <p id="skillIntroduce_p">召喚死神對全場怪物造成傷害</p>
            `
        }
    }
    if (shop_over == 1)
        shop_over = 2;
}
//蹦出的介紹技能視窗出現座標
function shop_showSkill() {
    let shop = setInterval(function () {
        skillIntroduce.style.top = mouse.vy - 250 + "px";
        skillIntroduce.style.left = mouse.vx + 30 + "px";
        if (shop_over == 0) {
            skillIntroduce.innerHTML = ``;
            clearInterval(shop);
        }
    }, 5)
}
function shop_out() {
    shop_over = 0;
}
let shopTime = 0;
//首頁輪播圖
function carousel() {
    let shopCarousel = setInterval(function () {
        if (shopTime == 0) {
            shop_home_1.style.left = 0 + "%";
            shop_home_2.style.left = 100 + "%";
            small1.style.border = `10px solid black`;
            small2.style.border = `10px solid white`;
        }
        if (shopTime == 50) {
            shop_home_2.style.left = 0 + "%";
            shop_home_1.style.left = -100 + "%";
            small1.style.border = `10px solid white`;
            small2.style.border = `10px solid black`;
        }
        shopTime++;
        if (shopTime == 100)
            shopTime = 0;
        if (shopAll.style.display == "none") {
            shopTime = 0;
            clearInterval(shopCarousel);
        }
    }, 50)
}
function carouselSmall_1() {
    if (small1.style.border == `10px solid white`)
        shopTime = 0;
}
function carouselSmall_2() {
    if (small2.style.border == `10px solid white`)
        shopTime = 50;
}


let shop_buy_add = [];
let shop_buy_button = [];
for (a = 0; a < 5; a++) {
    shop_buy_add[a] = 1;
    shop_buy_button[a] = 100;
}
function shop_reduce(re) {
    for (a = 0; a < 5; a++) {
        if (playAll_skill_ck == a + 1) {
            if (re == 1 && shop_buy_add[0] > 1) {
                shop_buy_button[0] -= 100;
                shop_buy_add[0]--;
                shop_skill_buyMoney1.innerText = `${shop_buy_button[0]}`
                shop_skill_num1.innerText = `${shop_buy_add[0]}`;
            }
            if (re == 2 && shop_buy_add[1] > 1) {
                shop_buy_button[1] -= 100;
                shop_buy_add[1]--;
                shop_skill_buyMoney2.innerText = `${shop_buy_button[1]}`
                shop_skill_num2.innerText = `${shop_buy_add[1]}`;
            }
            if (re == 3 && shop_buy_add[2] > 1) {
                shop_buy_button[2] -= 100;
                shop_buy_add[2]--;
                shop_skill_buyMoney3.innerText = `${shop_buy_button[2]}`
                shop_skill_num3.innerText = `${shop_buy_add[2]}`;
            }
            if (re == 4 && shop_buy_add[3] > 1) {
                shop_buy_button[3] -= 100;
                shop_buy_add[3]--;
                shop_skill_buyMoney4.innerText = `${shop_buy_button[3]}`
                shop_skill_num4.innerText = `${shop_buy_add[3]}`;
            }
            if (re == 5 && shop_buy_add[4] > 1) {
                shop_buy_button[4] -= 100;
                shop_buy_add[4]--;
                shop_skill_buyMoney5.innerText = `${shop_buy_button[4]}`
                shop_skill_num5.innerText = `${shop_buy_add[4]}`;
            }
        }
    }
}
function shop_add(ad) {
    for (a = 0; a < 5; a++) {
        if (playAll_skill_ck == a + 1) {
            if (ad == 1 && all_lvl_shop[a].hp + shop_buy_add[0] < 999) {
                shop_buy_button[0] += 100;
                shop_buy_add[0]++;
                shop_skill_buyMoney1.innerText = `${shop_buy_button[0]}`
                shop_skill_num1.innerText = `${shop_buy_add[0]}`;
            }
            if (ad == 2 && all_lvl_shop[a].atkNum1 + shop_buy_add[1] < 999) {
                shop_buy_button[1] += 100;
                shop_buy_add[1]++;
                shop_skill_buyMoney2.innerText = `${shop_buy_button[1]}`
                shop_skill_num2.innerText = `${shop_buy_add[1]}`;
            }
            if (ad == 3 && all_lvl_shop[a].atkNum2 + shop_buy_add[2] < 999) {
                shop_buy_button[2] += 100;
                shop_buy_add[2]++;
                shop_skill_buyMoney3.innerText = `${shop_buy_button[2]}`
                shop_skill_num3.innerText = `${shop_buy_add[2]}`;
            }
            if (ad == 4 && all_lvl_shop[a].atkNum3 + shop_buy_add[3] < 999) {
                shop_buy_button[3] += 100;
                shop_buy_add[3]++;
                shop_skill_buyMoney4.innerText = `${shop_buy_button[3]}`
                shop_skill_num4.innerText = `${shop_buy_add[3]}`;
            }
            if (ad == 5 && all_lvl_shop[a].atkNum4 + shop_buy_add[4] < 999) {
                shop_buy_button[4] += 100;
                shop_buy_add[4]++;
                shop_skill_buyMoney5.innerText = `${shop_buy_button[4]}`
                shop_skill_num5.innerText = `${shop_buy_add[4]}`;
            }
        }
    }


}
let buyCk = document.getElementById("buyCk");
let buyCk_sp = document.getElementById("buyCk_sp");
let buy_err = document.getElementById("buy_err");

let gura_lvl_shop = {
    hp: 0,
    atkNum1: 0,
    atkNum2: 0,
    atkNum3: 0,
    atkNum4: 0,
}
let ame_lvl_shop = {
    hp: 0,
    atkNum1: 0,
    atkNum2: 0,
    atkNum3: 0,
    atkNum4: 0,
}
let kiara_lvl_shop = {
    hp: 0,
    atkNum1: 0,
    atkNum2: 0,
    atkNum3: 0,
    atkNum4: 0,
}
let ina_lvl_shop = {
    hp: 0,
    atkNum1: 0,
    atkNum2: 0,
    atkNum3: 0,
    atkNum4: 0,
}
let mori_lvl_shop = {
    hp: 0,
    atkNum1: 0,
    atkNum2: 0,
    atkNum3: 0,
    atkNum4: 0,
}
let all_lvl_shop = [gura_lvl_shop, ame_lvl_shop, kiara_lvl_shop, ina_lvl_shop, mori_lvl_shop];
function errEsc() {
    buy_err.style.display = "none";
}
function buyck_N() {
    buyCk.style.display = "none";
}
function buyCk_K() {
    for (a = 0; a < 5; a++) {
        if (playAll_skill_ck == a + 1) {
            if (buy_confirm == 0) {
                if (playAll_skill_ck == 1) {
                    gura_hp_all += shop_buy_add[0];
                }
                if (playAll_skill_ck == 5) {
                    mori_hp_all += shop_buy_add[0];
                }
                all_lvl_shop[playAll_skill_ck - 1].hp += shop_buy_add[0];
            }
            if (buy_confirm == 1) {
                if (playAll_skill_ck == 1) {
                    gura_atk_all += shop_buy_add[1] * 5;
                }
                if (playAll_skill_ck == 5) {
                    sickle_akt1_all += shop_buy_add[1] * 5;
                }
                all_lvl_shop[playAll_skill_ck - 1].atkNum1 += shop_buy_add[1];
            }
            if (buy_confirm == 2) {
                if (playAll_skill_ck == 1) {
                    trident_atk_all += shop_buy_add[2] * 5;
                }
                if (playAll_skill_ck == 5) {
                    dart_atk_ALL += shop_buy_add[2] * 5;
                }
                all_lvl_shop[playAll_skill_ck - 1].atkNum2 += shop_buy_add[2];
            }
            if (buy_confirm == 3) {
                if (playAll_skill_ck == 1) {
                    bloop_atk_all += shop_buy_add[3];
                }
                if (playAll_skill_ck == 5) {
                    moriBlood_recover_all += shop_buy_add[3];
                }
                all_lvl_shop[playAll_skill_ck - 1].atkNum3 += shop_buy_add[3];
            }
            if (buy_confirm == 4) {
                if (playAll_skill_ck == 1) {
                    gunAtk_all += shop_buy_add[4] * 5;
                }
                if (playAll_skill_ck == 5) {
                    mori_atk4_atk_all += shop_buy_add[4] * 5;
                }
                all_lvl_shop[playAll_skill_ck - 1].atkNum4 += shop_buy_add[4];
            }
        }
    }
    for (a = 0; a < 5; a++) {
        if (buy_confirm == a) {
            money -= shop_buy_button[a];
            shopPlay_money_play.innerHTML = `${money}`;
            shopPlay_money_skill.innerHTML = `${money}`;
        }
    }

    shop_Skill_ul.innerHTML = ``;
    for (b = 1; b < 6; b++) {
        shop_Skill_ul.innerHTML += `
            <li id="shop_skill${b}">
                <button onclick="shop_reduce(${b})" id="shop_skill_left${b}"></button>
                <p id="shop_skill_num${b}">1</p>
                <button onclick="shop_add(${b})" id="shop_skill_right${b}"></button>
                <button onclick="shop_buy(${b})" id="shop_skill_buyMoney${b}">100</button>
            </li>
            `
        if (b == 1) {
            shop_skill1.innerHTML += `
                <img draggable="false" id="shop_skill_img${b}" src="gurashop${b}.png" onmouseover="buy_over_introduce(${b})" onmouseout="buy_out_introduce()">
                        `
            shop_skill1.innerHTML += `
                <p id="shop_skill_all${b}">${all_lvl_shop[playAll_skill_ck - 1].hp}<span id="shop_skill_span"> /999</span></p>
                `
        }
        if (b == 2) {
            if (playAll_skill_ck == 1) {
                shop_skill2.innerHTML += `
                <img draggable="false" id="shop_skill_img${b}" src="gurashop${b}.png" onmouseover="buy_over_introduce(${b})" onmouseout="buy_out_introduce()">
                        `
            }
            if (playAll_skill_ck == 5) {
                shop_skill2.innerHTML += `
                <img draggable="false" id="shop_skill_img${b}" src="moriatk${b - 1}.png" onmouseover="buy_over_introduce(${b})" onmouseout="buy_out_introduce()">
                        `
            }
            shop_skill2.innerHTML += `
                        <p id="shop_skill_all${b}">${all_lvl_shop[playAll_skill_ck - 1].atkNum1}<span id="shop_skill_span"> /999</span></p>
                        `
        }
        if (b == 3) {
            if (playAll_skill_ck == 1) {
                shop_skill3.innerHTML += `
                <img draggable="false" id="shop_skill_img${b}" src="gurashop${b}.png" onmouseover="buy_over_introduce(${b})" onmouseout="buy_out_introduce()">
                        `
            }
            if (playAll_skill_ck == 5) {
                shop_skill3.innerHTML += `
                <img draggable="false" id="shop_skill_img${b}" src="moriatk${b - 1}.png" onmouseover="buy_over_introduce(${b})" onmouseout="buy_out_introduce()">
                        `
            }
            shop_skill3.innerHTML += `
                        <p id="shop_skill_all${b}">${all_lvl_shop[playAll_skill_ck - 1].atkNum2}<span id="shop_skill_span"> /999</span></p>
                        `
        }
        if (b == 4) {
            if (playAll_skill_ck == 1) {
                shop_skill4.innerHTML += `
                <img draggable="false" id="shop_skill_img${b}" src="gurashop${b}.png" onmouseover="buy_over_introduce(${b})" onmouseout="buy_out_introduce()">
                        `
            }
            if (playAll_skill_ck == 5) {
                shop_skill4.innerHTML += `
                <img draggable="false" id="shop_skill_img${b}" src="moriatk${b - 1}.png" onmouseover="buy_over_introduce(${b})" onmouseout="buy_out_introduce()">
                        `
            }
            shop_skill4.innerHTML += `
                        <p id="shop_skill_all${b}">${all_lvl_shop[playAll_skill_ck - 1].atkNum3}<span id="shop_skill_span"> /999</span></p>
                        `
        }
        if (b == 5) {
            if (playAll_skill_ck == 1) {
                shop_skill5.innerHTML += `
                <img draggable="false" id="shop_skill_img${b}" src="gurashop${b}.png" onmouseover="buy_over_introduce(${b})" onmouseout="buy_out_introduce()">
                        `
            }
            if (playAll_skill_ck == 5) {
                shop_skill5.innerHTML += `
                <img draggable="false" id="shop_skill_img${b}" src="moriatk${b - 1}.png" onmouseover="buy_over_introduce(${b})" onmouseout="buy_out_introduce()">
                        `
            }
            shop_skill5.innerHTML += `
                        <p id="shop_skill_all${b}">${all_lvl_shop[playAll_skill_ck - 1].atkNum4}<span id="shop_skill_span"> /999</span></p>
                        `
        }
    }
    for (a = 0; a < 5; a++) {
        shop_buy_add[a] = 1;
        shop_buy_button[a] = 100;
    }
    buyCk.style.display = "none";
}
let buy_confirm = 0; //紀錄購買哪一樣東西
function shop_buy(by) {
    buy_confirm = by - 1;
    if (money >= shop_buy_button[buy_confirm]) {
        buyCk.style.display = "block";
        buyCk_sp.innerHTML = `${shop_buy_button[buy_confirm]}`;
    }
    if (money < shop_buy_button[buy_confirm]) {
        buy_err.style.display = "block";
    }
}
let buy_out = 0; //介紹開關
function buy_over_introduce(bi) {
    shopSkill_introduce.style.top = mouse.vy - 100 + "px";
    shopSkill_introduce.style.left = mouse.vx + 35 + "px";
    if (buy_out == 0) {
        buy_out = 1;
        buy_introduce_loop();
    }
    if (bi == 1) {
        shopSkill_introduce.innerHTML = `
        <p id="shopSkill_introduce_p">提高1點生命值</p>
        `
    }
    if (playAll_skill_ck == 1) {
        if (bi == 2) {
            shopSkill_introduce.innerHTML = `
            <p id="shopSkill_introduce_p">提高5點A傷害</p>
            `
        }
        if (bi == 3) {
            shopSkill_introduce.innerHTML = `
            <p id="shopSkill_introduce_p">提高5點三叉戟傷害</p>
            `
        }
        if (bi == 4) {
            shopSkill_introduce.innerHTML = `
            <p id="shopSkill_introduce_p">提高1點bloop傷害</p>
            `
        }
        if (bi == 5) {
            shopSkill_introduce.innerHTML = `
            <p id="shopSkill_introduce_p">提高5點雷射泡傷害</p>
            `
        }
    }
    if (playAll_skill_ck == 5) {
        if (bi == 2) {
            shopSkill_introduce.innerHTML = `
            <p id="shopSkill_introduce_p">提高5點鐮刀傷害</p>
            `
        }
        if (bi == 3) {
            shopSkill_introduce.innerHTML = `
            <p id="shopSkill_introduce_p">提高5點飛鏢傷害</p>
            `
        }
        if (bi == 4) {
            shopSkill_introduce.innerHTML = `
            <p id="shopSkill_introduce_p">提高1點擊殺恢復量</p>
            `
        }
        if (bi == 5) {
            shopSkill_introduce.innerHTML = `
            <p id="shopSkill_introduce_p">提高5點死神傷害</p>
            `
        }
    }
}
function buy_introduce_loop() {
    let buy_ = setInterval(function () {
        shopSkill_introduce.style.top = mouse.vy - 100 + "px";
        shopSkill_introduce.style.left = mouse.vx + 35 + "px";
        if (buy_out == 0) {
            shopSkill_introduce.innerHTML = ``;
            clearInterval(buy_);
        }
    }, 5)
}
function buy_out_introduce() {
    buy_out = 0;
}
let playAll_skill_or = 0;
function playAll_skill_over(or) {
    shop_Skill_ul.innerHTML = ``;
    if (or == 1) {
        playAll_skill_img1.style.transform = `scale(1.0)`;
    }
    if (or == 2) {
        playAll_skill_img2.style.transform = `scale(1.0)`;
    }
    if (or == 3) {
        playAll_skill_img3.style.transform = `scale(1.0)`;
    }
    if (or == 4) {
        playAll_skill_img4.style.transform = `scale(1.0)`;
    }
    if (or == 5) {
        playAll_skill_img5.style.transform = `scale(1.0)`;
    }

    for (b = 1; b < 6; b++) {
        shop_Skill_ul.innerHTML += `
            <li id="shop_skill${b}">
                <button onclick="shop_reduce(${b})" id="shop_skill_left${b}"></button>
                <p id="shop_skill_num${b}">1</p>
                <button onclick="shop_add(${b})" id="shop_skill_right${b}"></button>
                <button onclick="shop_buy(${b})" id="shop_skill_buyMoney${b}">100</button>
            </li>
            `
        if (b == 1) {
            shop_skill1.innerHTML += `
                <img draggable="false" id="shop_skill_img${b}" src="gurashop${b}.png" onmouseover="buy_over_introduce(${b})" onmouseout="buy_out_introduce()">
                        `
            shop_skill1.innerHTML += `
                        <p id="shop_skill_all${b}">${all_lvl_shop[or - 1].hp}<span id="shop_skill_span"> /999</span></p>
                        `
        }
        if (b == 2) {
            if (or == 1) {
                shop_skill2.innerHTML += `
                <img draggable="false" id="shop_skill_img${b}" src="gurashop${b}.png" onmouseover="buy_over_introduce(${b})" onmouseout="buy_out_introduce()">
                        `
            }
            if (or == 5) {
                shop_skill2.innerHTML += `
                <img draggable="false" id="shop_skill_img${b}" src="moriatk${b - 1}.png" onmouseover="buy_over_introduce(${b})" onmouseout="buy_out_introduce()">
                        `
            }
            shop_skill2.innerHTML += `
                        <p id="shop_skill_all${b}">${all_lvl_shop[or - 1].atkNum1}<span id="shop_skill_span"> /999</span></p>
                        `
        }
        if (b == 3) {
            if (or == 1) {
                shop_skill3.innerHTML += `
                <img draggable="false" id="shop_skill_img${b}" src="gurashop${b}.png" onmouseover="buy_over_introduce(${b})" onmouseout="buy_out_introduce()">
                        `
            }
            if (or == 5) {
                shop_skill3.innerHTML += `
                <img draggable="false" id="shop_skill_img${b}" src="moriatk${b - 1}.png" onmouseover="buy_over_introduce(${b})" onmouseout="buy_out_introduce()">
                        `
            }
            shop_skill3.innerHTML += `
                        <p id="shop_skill_all${b}">${all_lvl_shop[or - 1].atkNum2}<span id="shop_skill_span"> /999</span></p>
                        `
        }
        if (b == 4) {
            if (or == 1) {
                shop_skill4.innerHTML += `
                <img draggable="false" id="shop_skill_img${b}" src="gurashop${b}.png" onmouseover="buy_over_introduce(${b})" onmouseout="buy_out_introduce()">
                        `
            }
            if (or == 5) {
                shop_skill4.innerHTML += `
                <img draggable="false" id="shop_skill_img${b}" src="moriatk${b - 1}.png" onmouseover="buy_over_introduce(${b})" onmouseout="buy_out_introduce()">
                        `
            }
            shop_skill4.innerHTML += `
                        <p id="shop_skill_all${b}">${all_lvl_shop[or - 1].atkNum3}<span id="shop_skill_span"> /999</span></p>
                        `
        }
        if (b == 5) {
            if (or == 1) {
                shop_skill5.innerHTML += `
                <img draggable="false" id="shop_skill_img${b}" src="gurashop${b}.png" onmouseover="buy_over_introduce(${b})" onmouseout="buy_out_introduce()">
                        `
            }
            if (or == 5) {
                shop_skill5.innerHTML += `
                <img draggable="false" id="shop_skill_img${b}" src="moriatk${b - 1}.png" onmouseover="buy_over_introduce(${b})" onmouseout="buy_out_introduce()">
                        `
            }
            shop_skill5.innerHTML += `
                        <p id="shop_skill_all${b}">${all_lvl_shop[or - 1].atkNum4}<span id="shop_skill_span"> /999</span></p>
                        `
        }
    }

    for (a = 0; a < 5; a++) {
        shop_buy_add[a] = 1;
        shop_buy_button[a] = 100;
    }


}
let playAll_skill_ck = 0; //選擇人物開啟技能商店
function playAll_skill_click(ck) {
    playAll_skill_ck = ck;
    if (ck == 1) {
        playAll_skill_img1.style.transform = `scale(1.0)`;
    }
    if (ck == 2) {
        playAll_skill_img2.style.transform = `scale(1.0)`;
    }
    if (ck == 3) {
        playAll_skill_img3.style.transform = `scale(1.0)`;
    }
    if (ck == 4) {
        playAll_skill_img4.style.transform = `scale(1.0)`;
    }
    if (ck == 5) {
        playAll_skill_img5.style.transform = `scale(1.0)`;
    }
    for (a = 0; a < 5; a++) {
        shop_buy_add[a] = 1;
        shop_buy_button[a] = 100;
    }
}
function playAll_skill_out() {
    if (playAll_skill_ck == 0) {
        shop_Skill_ul.innerHTML = ``;
    }
    playAll_skill_img1.style.transform = `scale(2.0)`;
    playAll_skill_img2.style.transform = `scale(2.0)`;
    playAll_skill_img3.style.transform = `scale(2.0)`;
    playAll_skill_img4.style.transform = `scale(2.0)`;
    playAll_skill_img5.style.transform = `scale(2.0)`;

    if (playAll_skill_ck == 1) {
        playAll_skill_img1.style.transform = `scale(1.0)`;
    }
    if (playAll_skill_ck == 2) {
        playAll_skill_img2.style.transform = `scale(1.0)`;
    }
    if (playAll_skill_ck == 3) {
        playAll_skill_img3.style.transform = `scale(1.0)`;
    }
    if (playAll_skill_ck == 4) {
        playAll_skill_img4.style.transform = `scale(1.0)`;
    }
    if (playAll_skill_ck == 5) {
        playAll_skill_img5.style.transform = `scale(1.0)`;
    }
    if (playAll_skill_ck > 0) {
        playAll_skill_over(playAll_skill_ck);
        let shop_skill_num1 = document.getElementById("shop_skill_num1");
        let shop_skill_num2 = document.getElementById("shop_skill_num2");
        let shop_skill_num3 = document.getElementById("shop_skill_num3");
        let shop_skill_num4 = document.getElementById("shop_skill_num4");
        let shop_skill_num5 = document.getElementById("shop_skill_num5");
        let shop_skill_buyMoney1 = document.getElementById("shop_skill_buyMoney1");
        let shop_skill_buyMoney2 = document.getElementById("shop_skill_buyMoney2");
        let shop_skill_buyMoney3 = document.getElementById("shop_skill_buyMoney3");
        let shop_skill_buyMoney4 = document.getElementById("shop_skill_buyMoney4");
        let shop_skill_buyMoney5 = document.getElementById("shop_skill_buyMoney5");
    }
}
function openShop() {
    shopPlay_money_play.innerHTML = `${money}`;
    shopPlay_money_skill.innerHTML = `${money}`;
    shopList.style.display = "block";
    shopAll.style.display = "block";
    shopHome.style.display = "block";
    shopPlay.style.display = "block";
    shopSkill.style.display = "block";
    homeShop.style.display = "block";
    btn_choose.style.display = "none";
    playShop.style.display = "none";
    skillShop.style.display = "none";
    btn_shop.style.display = "none";
    shopMark.style.top = 35 + "px";
    smallMark.style.top = 60 + "px";
    setTimeout(function () {
        shopHome.style.top = 50 + "px";
        shopAll.style.left = 500 + "px";
    }, 10)
    setTimeout(function () {
        shopPlay.style.top = 170 + "px";
    }, 500)
    setTimeout(function () {
        shopSkill.style.top = 290 + "px";
        smallMark.style.display = "block";
        shopMark.style.display = "block";
        carousel();
    }, 1000)


}
function esc_shop() {
    setTimeout(function () {
        shopAll.style.left = 2500 + "px";
        shopSkill.style.top = 1000 + "px";

        smallMark.style.display = "none";
        shopMark.style.display = "none";
        buyCk.style.display = "none";
        buy_err.style.display = "none";
        buyplay1.innerHTML = ``;
        buyplay2.innerHTML = ``;
        buyplay3.innerHTML = ``;
        buyplay4.innerHTML = ``;
        buyplay5.innerHTML = ``;
        imgPlay1.style.top = 160 + "px";
        imgPlay2.style.top = 160 + "px";
        imgPlay3.style.top = 160 + "px";
        imgPlay4.style.top = 160 + "px";
        imgPlay5.style.top = 160 + "px";
        shopShow_skill.innerHTML = ``;
        downShop = 0;
        chooseShop = 0;
        playAll_skill_img1.style.transform = `scale(2.0)`;
        playAll_skill_img2.style.transform = `scale(2.0)`;
        playAll_skill_img3.style.transform = `scale(2.0)`;
        playAll_skill_img4.style.transform = `scale(2.0)`;
        playAll_skill_img5.style.transform = `scale(2.0)`;
        playAll_skill_ck = 0;
        shop_Skill_ul.innerHTML = ``;
    }, 5)
    setTimeout(function () {
        shopPlay.style.top = 1000 + "px";
    }, 500)
    setTimeout(function () {
        shopHome.style.top = 1000 + "px";
    }, 1000)
    setTimeout(() => {
        shopAll.style.left = -1500 + "px";
        shopAll.style.display = "none";
        shopHome.style.display = "none";
        shopPlay.style.display = "none";
        shopSkill.style.display = "none";
        shopList.style.display = "none";
        btn_shop.style.display = "block";
        btn_choose.style.display = "block";
    }, 1500);
}

function onHome() {
    shopMark.style.top = 35 + "px";
    smallMark.style.top = 60 + "px";
    homeShop.style.display = "block";
    playShop.style.display = "none";
    skillShop.style.display = "none";
    buyCk.style.display = "none";
    buy_err.style.display = "none";
}
function onPlay() {
    shopMark.style.top = 155 + "px";
    smallMark.style.top = 180 + "px";
    homeShop.style.display = "none";
    playShop.style.display = "block";
    skillShop.style.display = "none";
    buyCk.style.display = "none";
    buy_err.style.display = "none";
}
function onSkill() {
    shopPlay_money_play.innerHTML = `${money}`;
    shopPlay_money_skill.innerHTML = `${money}`;
    shopMark.style.top = 275 + "px";
    smallMark.style.top = 300 + "px";
    homeShop.style.display = "none";
    playShop.style.display = "none";
    skillShop.style.display = "block";
    buyCk.style.display = "none";
    buy_err.style.display = "none";
}
