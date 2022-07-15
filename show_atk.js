var show_atk = document.getElementById("show_atk");
var sh_atk = show_atk.getContext("2d");

show_atk.width = window.innerWidth;
show_atk.height = window.innerHeight;
sh_atk.font = "50px Arial";
sh_atk.textAlign = "center";
sh_atk.fillStyle = "blue";
var show_atk_x = [];
var show_atk_y = [];
var show_atkx = [];
var show_atky = [];
var show_atk_ch = [];
var atk_gun_ch = [];
function show_atk_(atk_en, atk_num, atk_gun) {
    show_atkx.push(aa[atk_en]);
    show_atky.push(bb[atk_en]);
    show_atk_x.push(show_atkx[show_atkx.length - 1]);
    show_atk_y.push(show_atky[show_atky.length - 1]);
    show_atk_ch.push(atk_num);
    atk_gun_ch.push(atk_gun);
}
function showAtk() {
    var show_atk_time = setInterval(function () {
        if (stopCh == 1 || gura_hp <= 0 || mori_hp <= 0) {
            clearInterval(show_atk_time);
        }
        if (show_atk_x.length > 0) {
            for (a = 0; a < show_atk_x.length; a++) {
                if (atk_gun_ch[a] == 0) {
                    show_atk_y[a] -= 2;
                    if (show_atky[a] - 60 > show_atk_y[a]) {
                        show_atk_end(a);
                    }
                }
                if (atk_gun_ch[a] == 1) {
                    show_atk_y[a] -= 6;
                    if (show_atky[a] - 200 > show_atk_y[a]) {
                        show_atk_end(a);
                    }
                }
                if (atk_gun_ch[a] == 2) {
                    show_atk_y[a] -= 20;
                    if (show_atky[a] - 600 > show_atk_y[a]) {
                        show_atk_end(a);
                    }
                }
            }
        }
    }, 15)
    var showDraw = setInterval(function () {
        if (stopCh == 1 || gura_hp <= 0 || mori_hp <= 0) {
            clearInterval(showDraw);
        }
        sh_atk.clearRect(0, 0, show_atk.width, show_atk.height);
        for (a = 0; a < show_atk_x.length; a++) {
            if (show_atk_x.length > 0 && (atk_gun_ch[a] >= 0)) {
                sh_atk.fillText(show_atk_ch[a], show_atk_x[a], show_atk_y[a]);
            }
        }
    }, 10)
}

function show_atk_end(nn) {
    show_atk_x.splice(nn, 1);
    show_atk_y.splice(nn, 1);
    show_atkx.splice(nn, 1);
    show_atky.splice(nn, 1);
    show_atk_ch.splice(nn, 1);
    atk_gun_ch.splice(nn, 1);
}