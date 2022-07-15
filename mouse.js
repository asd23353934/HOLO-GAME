var img_gura = document.getElementById("player_ch_00");
var img_ame = document.getElementById("player_ch_01");
var img_kiara = document.getElementById("player_ch_02");
var img_ina = document.getElementById("player_ch_03");
var img_mori = document.getElementById("player_ch_04");

var introduce_gura = document.getElementById("gura");
var introduce_ame = document.getElementById("ame");
var introduce_kiara = document.getElementById("kiara");
var introduce_ina = document.getElementById("ina");
var introduce_mori = document.getElementById("mori");

var introduce_gura_sp = document.getElementById("introduce_gura_sp");
var introduce_ame_sp = document.getElementById("introduce_ame_sp");
var introduce_kiara_sp = document.getElementById("introduce_kiara_sp");
var introduce_ina_sp = document.getElementById("introduce_ina_sp");
var introduce_mori_sp = document.getElementById("introduce_mori_sp");

var introduce_context_gura = document.getElementById("introduce_context_gura");
var introduce_context_ame = document.getElementById("introduce_context_ame");
var introduce_context_kiara = document.getElementById("introduce_context_kiara");
var introduce_context_ina = document.getElementById("introduce_context_ina");
var introduce_context_mori = document.getElementById("introduce_context_mori");

var play_err = document.getElementById("play_err");

var player_clear = document.getElementById("player_ch");
player_clear.addEventListener("mousedown", play_clear);
function play_clear() {
    if (img_gura_time == 1 ||
        img_ame_time == 1  ||
        img_kiara_time == 1||
        img_ina_time == 1  ||
        img_mori_time == 1) {
        img_gura_time = 0;
        introduce_gura.style.display = "none";
        out_1();
        img_ame_time = 0;
        introduce_ame.style.display = "none";
        out_2();
        img_kiara_time = 0;
        introduce_kiara.style.display = "none";
        out_3();
        img_ina_time = 0;
        introduce_ina.style.display = "none";
        out_4();
        img_mori_time = 0;
        introduce_mori.style.display = "none";
        out_5();
        play_err.style.display = "none";
        ok.style.pointerEvents = "none";
        ok.style.backgroundColor = "rgb(112, 111, 109)";
    }
}


img_gura.addEventListener("mouseover", over_1);
img_gura.addEventListener("mouseout", out_1);
// img_gura.addEventListener("mouseup", mouse_gura_up);
var img_gura_time = 0;
function over_1() {
    if (img_gura_time == 0) {
        introduce_gura.style.display = "block";
        introduce_gura_sp.innerHTML = "古拉";
        introduce_context_gura.innerHTML = "以A為著名開場迷因,小屁孩,擅長音游,幹話王"
        img_gura.style.zIndex = 3;
        introduce_gura.style.zIndex = 3;
        introduce_gura_sp.style.zIndex = 4;
        introduce_context_gura.style.zIndex = 3;
    }
}
function out_1() {
    if (img_gura_time == 0) {
        introduce_gura.style.display = "none";
        introduce_gura_sp.innerHTML = "";
        introduce_context_gura.innerHTML = "";
    }
}
function mouse_gura_up() {
    if (img_gura_time == 0) {
        img_gura_time = 1;
        img_ame_time = 0;
        out_2();
        img_kiara_time = 0;
        out_3();
        img_ina_time = 0;
        out_4();
        img_mori_time = 0;
        out_5();
        introduce_gura.style.display = "block";
        introduce_gura_sp.innerHTML = "古拉";
        introduce_context_gura.innerHTML = "以A為著名開場迷因,小屁孩,擅長音游,幹話王";
        img_gura.style.zIndex = 2;
        introduce_gura.style.zIndex = 2;
        introduce_gura_sp.style.zIndex = 3;
        introduce_context_gura.style.zIndex = 2;
    }
    if (gura_play == 1){
        ok.style.pointerEvents = "auto";
        ok.style.color = "rgb(255, 255, 255)";
        ok.style.backgroundColor = "black";
        play_err.style.display = "none";
        gura_play_ch = 1;
        ame_play_ch = 0;
        ina_play_ch = 0;
        kiara_play_ch = 0;
        mori_play_ch = 0;
    }
    if (gura_play == 0){
        ok.style.pointerEvents = "none";
        ok.style.color = "black";
        ok.style.backgroundColor = "rgb(112, 111, 109)";
        play_err.style.display = "block";
    }
}



img_ame.addEventListener("mouseover", over_2);
img_ame.addEventListener("mouseout", out_2);
var img_ame_time = 0;
function over_2() {
    if (img_ame_time == 0) {
        introduce_ame.style.display = "block";
        introduce_ame_sp.innerHTML = "華生";
        introduce_context_ame.innerHTML = "開場吃毒,喜歡FPS,跟古拉感情很好"
        img_ame.style.zIndex = 3;
        introduce_ame.style.zIndex = 3;
        introduce_ame_sp.style.zIndex = 4;
        introduce_context_ame.style.zIndex = 3;
    }
}
function out_2() {
    if (img_ame_time == 0) {
        introduce_ame.style.display = "none";
        introduce_ame_sp.innerHTML = "";
        introduce_context_ame.innerHTML = "";
    }
}

function mouse_ame_up() {
    if (img_ame_time == 0) {
        img_ame_time = 1;
        img_gura_time = 0;
        out_1();
        img_kiara_time = 0;
        out_3();
        img_ina_time = 0;
        out_4();
        img_mori_time = 0;
        out_5();
        introduce_ame.style.display = "block";
        introduce_ame_sp.innerHTML = "華生";
        introduce_context_ame.innerHTML = "開場吃毒,喜歡FPS,跟古拉感情很好"
        img_ame.style.zIndex = 2;
        introduce_ame.style.zIndex = 2;
        introduce_ame_sp.style.zIndex = 3;
        introduce_context_ame.style.zIndex = 2;
    }
    if (ame_play == 1){
        ok.style.pointerEvents = "auto";
        ok.style.color = "rgb(255, 255, 255)";
        ok.style.backgroundColor = "black";
        play_err.style.display = "none";
        ame_play_ch = 1;
        gura_play_ch = 0;
        kiara_play_ch = 0;
        ina_play_ch = 0;
        mori_play_ch = 0;
    }
    if (ame_play == 0){
        ok.style.pointerEvents = "none";
        ok.style.color = "black";
        ok.style.backgroundColor = "rgb(112, 111, 109)";
        play_err.style.display = "block";
    }
}


img_kiara.addEventListener("mouseover", over_3);
img_kiara.addEventListener("mouseout", out_3);
var img_kiara_time = 0;
function over_3() {
    if (img_kiara_time == 0) {
        introduce_kiara.style.display = "block";
        introduce_kiara_sp.innerHTML = "火雞";
        introduce_context_kiara.innerHTML = "精通日文與德文,與死神關係很好"
        img_kiara.style.zIndex = 3;
        introduce_kiara.style.zIndex = 3;
        introduce_kiara_sp.style.zIndex = 4;
        introduce_context_kiara.style.zIndex = 3;
    }
}
function out_3() {
    if (img_kiara_time == 0) {
        introduce_kiara.style.display = "none";
        introduce_kiara_sp.innerHTML = "";
        introduce_context_kiara.innerHTML = "";
    }
}
function mouse_kiara_up() {
    if (img_kiara_time == 0) {
        img_kiara_time = 1;
        img_ame_time = 0;
        out_2();
        img_gura_time = 0;
        out_1();
        img_ina_time = 0;
        out_4();
        img_mori_time = 0;
        out_5();
        introduce_kiara.style.display = "block";
        introduce_kiara_sp.innerHTML = "火雞";
        introduce_context_kiara.innerHTML = "精通日文與德文,與死神關係很好"
        img_kiara.style.zIndex = 2;
        introduce_kiara.style.zIndex = 2;
        introduce_kiara_sp.style.zIndex = 3;
        introduce_context_kiara.style.zIndex = 2;
    }
    if (kiara_play == 1){
        ok.style.pointerEvents = "auto";
        ok.style.color = "rgb(255, 255, 255)";
        ok.style.backgroundColor = "black";
        play_err.style.display = "none";
        kiara_play_ch = 1;
        gura_play_ch = 0;
        ame_play_ch = 0;
        ina_play_ch = 0;
        mori_play_ch = 0;
    }
    if (kiara_play == 0){
        ok.style.pointerEvents = "none";
        ok.style.color = "black";
        ok.style.backgroundColor = "rgb(112, 111, 109)";
        play_err.style.display = "block";
    }
}


img_ina.addEventListener("mouseover", over_4);
img_ina.addEventListener("mouseout", out_4);
var img_ina_time = 0;
function over_4() {
    if (img_ina_time == 0) {
        introduce_ina.style.display = "block";
        introduce_ina_sp.innerHTML = "伊那";
        introduce_context_ina.innerHTML = "冷笑話王,畫畫非常好";
        img_ina.style.zIndex = 3;
        introduce_ina.style.zIndex = 3;
        introduce_ina_sp.style.zIndex = 4;
        introduce_context_ina.style.zIndex = 3;
    }
}
function out_4() {
    if (img_ina_time == 0) {
        introduce_ina.style.display = "none";
        introduce_ina_sp.innerHTML = "";
        introduce_context_ina.innerHTML = "";
    }
}
function mouse_ina_up() {
    if (img_ina_time == 0) {
        img_ina_time = 1;
        img_ame_time = 0;
        out_2();
        img_gura_time = 0;
        out_1();
        img_kiara_time = 0;
        out_3();
        img_mori_time = 0;
        out_5();
        introduce_ina.style.display = "block";
        introduce_ina_sp.innerHTML = "伊那";
        introduce_context_ina.innerHTML = "冷笑話王,畫畫非常好";
        img_ina.style.zIndex = 2;
        introduce_ina.style.zIndex = 2;
        introduce_ina_sp.style.zIndex = 3;
        introduce_context_ina.style.zIndex = 2;
    }
    if (ina_play == 1){
        ok.style.pointerEvents = "auto";
        ok.style.color = "rgb(255, 255, 255)";
        ok.style.backgroundColor = "black";
        play_err.style.display = "none";
        ina_play_ch = 1;
        kiara_play_ch = 0;
        gura_play_ch = 0;
        ame_play_ch = 0;
        mori_play_ch = 0;
    }
    if (ina_play == 0){
        ok.style.pointerEvents = "none";
        ok.style.color = "black";
        ok.style.backgroundColor = "rgb(112, 111, 109)";
        play_err.style.display = "block";
    }
}


img_mori.addEventListener("mouseover", over_5);
img_mori.addEventListener("mouseout", out_5);
var img_mori_time = 0;
function over_5() {
    if (img_mori_time == 0) {
        introduce_mori.style.display = "block";
        introduce_mori_sp.innerHTML = "死神";
        introduce_context_mori.innerHTML = "Rap之神,愛喝酒";
        img_mori.style.zIndex = 3;
        introduce_mori.style.zIndex = 3;
        introduce_mori_sp.style.zIndex = 4;
        introduce_context_mori.style.zIndex = 3;
    }
}
function out_5() {
    if (img_mori_time == 0) {
        introduce_mori.style.display = "none";
        introduce_mori_sp.innerHTML = "";
        introduce_context_mori.innerHTML = "";
    }
}
function mouse_mori_up() {
    if (img_mori_time == 0) {
        img_mori_time = 1;
        img_ame_time = 0;
        out_2();
        img_gura_time = 0;
        out_1();
        img_kiara_time = 0;
        out_3();
        img_ina_time = 0;
        out_4();
        introduce_mori.style.display = "block";
        introduce_mori_sp.innerHTML = "死神";
        introduce_context_mori.innerHTML = "Rap之神,愛喝酒";
        img_mori.style.zIndex = 2;
        introduce_mori.style.zIndex = 2;
        introduce_mori_sp.style.zIndex = 3;
        introduce_context_mori.style.zIndex = 2;
    }
    if (mori_play == 1){
        ok.style.pointerEvents = "auto";
        ok.style.color = "rgb(255, 255, 255)";
        ok.style.backgroundColor = "black";
        play_err.style.display = "none";
        kiara_play_ch = 0;
        gura_play_ch = 0;
        ame_play_ch = 0;
        ina_play_ch = 0;
        mori_play_ch = 1;
    }
    if (mori_play == 0){
        ok.style.pointerEvents = "none";
        ok.style.color = "black";
        ok.style.backgroundColor = "rgb(112, 111, 109)";
        play_err.style.display = "block";
    }
}