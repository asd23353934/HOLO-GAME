var fx = []; //紀錄鍵盤輸入的資料
let key1 = 1;
let key_all = 0;
let esc_open = 0;
document.onkeydown = function (event) {
    event = event || window.event;
    if (fx[1] != null) {
        fx.pop();
    }
    if (event.key == "ArrowDown" ||
        event.key == "ArrowUp" ||
        event.key == "ArrowLeft" ||
        event.key == "ArrowRight") {
        fx.push(event.key);
    }
    if (event.key == "q" && sk > 0) {
        skill_up1();
    }
    if (event.key == "w" && sk > 0) {
        skill_up2();
    }
    if (event.key == "e" && sk > 0) {
        skill_up3();
    }
    if (event.key == "r" && sk > 0) {
        skill_up4();
    }
    if (ranTime == 1 && stopCh == 1 && key1 == 0) {
        if (event.key == "1" ||
            event.key == "2" ||
            event.key == "3") {
            key_all = parseInt(event.key);
            key_all--;
            r1(randomBoost_num[key_all]);
        }
        
    }
    if (event.key == "Escape" && stop_esc.style.display == "block" && death.style.display != "block") {
        esc_open++;
        if (esc_open % 2 == 1) {
            stopCh = 1;
            showEsc.style.display = "block";
        }
        if (esc_open % 2 == 0) {
            if (ranTime == 0){
                stopCh = -1;
                stop();
            }
            showEsc.style.display = "none";
        }
    }

}

document.onkeyup = function (event) {
    event = event || window.event;
    for (a = 0; a < 2; a++) {
        if (fx[a] == event.key) {
            fx.splice(a, 1);
            a--;
        }
    }

};


