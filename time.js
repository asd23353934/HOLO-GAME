var ti_s = document.getElementById("time_s");
var ti_m = document.getElementById("time_m");
var ti_h = document.getElementById("time_h");
let sd = 0;
var s = 0;//秒
var m = 0;//分
var h = 0;//時
function time() {
    var time_num = setInterval(function () {
        if (stopCh == 1 || gura_hp <= 0 || mori_hp <= 0)
            clearInterval(time_num);
        if (degreeOf_money == 0)
            sd++;
        if (degreeOf_money == 1)
            sd += 10;
        if (sd >= 60) {
            s++;
            sd = 0;
        }
        if (s < 10) 
            ti_s.innerHTML = "0" + s;
        if (s >= 10) 
            ti_s.innerHTML = s;
        if (s >= 60) {
            m++;
            s = 0;
            ti_s.innerHTML = "0" + s;
        }
        if (m >= 60) {
            h++;
            m = 0;
            ti_m.innerHTML = "0" + m;
        }
        if (m < 10)
            ti_m.innerHTML = "0" + m;
        if (m >= 10) 
            ti_m.innerHTML = m;
        if (h < 10) 
            ti_h.innerHTML = "0" + h;
        if (h >= 10)
            ti_h.innerHTML = h;
    }, 16.667)
}