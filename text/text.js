var canvas = document.getElementById("can");
var ctx = canvas.getContext("2d");

can.width = 1500;
can.height = 1500;
// var aaaa = 0;
CCC = new Image();
CCC.src = "../tako.png";
CCC.onload - function () {
    this.onload = null;
    ctx.drawImage(CCC, 50, 50);
}
// setInterval(function(){
//     if (aaaa >= 5136){
//         aaaa = 0;
//     }
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     ctx.drawImage(CCC, aaaa, 0, 670, 179,  100, 100, 1000, 179);

//     aaaa+=644;
// },50)
// setInterval(function(){
//     if (aaaa >= 5136){
//         aaaa = 0;
//     }
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     ctx.drawImage(CCC, aaaa, 0, 600, 180,  100, 100, 1000, 179);

//     aaaa+=642;
// },50)

// var pppp = 0;
// setInterval(function(){
//     if (aaaa >= 2655){
//         pppp +=1;
//     }
//     if (pppp == 100){
//         pppp = -1;
//     }
//     if (pppp == -1){
//         aaaa -=446;
//         if (aaaa == 0){
//             pppp = 0;
//         }
//     }
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     ctx.drawImage(CCC, aaaa, 0, 446, 601,  100, 100, 443, 601);
//     if (pppp == 0){
//         aaaa+=446;
//     }

// },50)
// var aaaa = 2655;
// var pppp = 0;
// setInterval(function(){
//     if (aaaa <= 0){
//         pppp +=1;
//     }
//     if (pppp == 100){
//         pppp = -1;
//     }
//     if (pppp == -1){
//         aaaa +=446;
//         if (aaaa == 2655){
//             pppp = 0;
//         }
//     }
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     ctx.drawImage(CCC, aaaa, 0, 446, 601,  100, 100, 443, 601);
//     if (pppp == 0){
//         aaaa-=446;
//     }

// },50)
// var aaaa = 1425;
// var pppp = 0;
// setInterval(function(){
//     if (aaaa <= 0){
//         pppp +=1;
//     }
//     if (pppp == 100){
//         pppp = -1;
//     }
//     if (pppp == -1){
//         aaaa +=475;
//         if (aaaa == 1425){
//             pppp = 0;
//         }
//     }
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     ctx.drawImage(CCC, aaaa, 0, 475, 600,  100, 100, 475, 600);
//     if (pppp == 0){
//         aaaa-=475;
//     }

// },50)
// let ballX = [];
// let ballY = [];
// let ballVX = [];
// let ballVY = [];
// let ballColor = [];
// let ballRadius = [];
// let ballTime_x = [];
// let ballTime_y = [];
// let a = 0;
// let c = 0;
// for (a = 0; a < 500; a++) {
//     ballX.push(Math.floor(Math.random() * 1000));
//     ballY.push(1000);
//     ballVX.push(Math.floor(Math.random() * 10)-3.8);
//     ballVY.push(Math.floor(Math.random() * 10)+2);
//     ballColor.push(`rgb(255,255,255)`);
//     ballRadius.push(20);
// }
// setInterval(function () {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for (a = 0; a < ballX.length; a++) {
//         q = Math.floor(Math.random() * 255);
//         w = Math.floor(Math.random() * 255);
//         e = Math.floor(Math.random() * 255);
//         ballVX[a] = Math.floor(Math.random() * 10) - 3.8;
//         if (ballX[a] < 0) {
//             X = Math.abs(ballVX[a]);
//             ballVX[a] = X;
//         }
//         if (ballX[a] > 1000) {
//             X = Math.abs(ballVX[a]);
//             ballVX[a] = -X;
//         }
//         ballX[a] += ballVX[a];
//         ballY[a] -= ballVY[a];

//         if (ballY[a] < 50) {
//             ballY[a] = 1000;
//             ballVY[a] = Math.floor(Math.random() * 10)+2;
//         }
//     }
//     for (a = 0; a < ballX.length; a++) {
//         ctx.beginPath();
//         ctx.arc(ballX[a], ballY[a], ballRadius[a], 0, Math.PI * 2, true);
//         ctx.closePath();
//         ctx.fillStyle = ballColor[a];
//         ctx.fill();
//     }

// }, 5)
// setInterval(function(){
//     for(a = 0 ; a <ballX.length ; a++){
//         c = 0;
//         for (b = 0; b < ballX.length - 1 ; b++) {
//             c++;
//             if (c == ballX.length) {
//                 c = 0 - a;
//             }
//             if (ballX[a] + 50 > ballX[a + c] &&
//                 ballX[a] - 50 < ballX[a + c] &&
//                 ballY[a] + 50 > ballY[a + c] &&
//                 ballY[a] - 50 < ballY[a + c]) {
//                 if (ballX[a] >= ballX[a + c]) {
//                     ballX[a + c] -= 1;
//                 }
//                 if (ballX[a] <= ballX[a + c]) {
//                     ballX[a + c] += 1;
//                 }
//                 if (ballX[a] >= ballX[a + c]) {
//                     ballX[a] += 1;
//                 }
//                 if (ballX[a] <= ballX[a + c]) {
//                     ballX[a] -= 1;
//                 }
//                 if (ballY[a] >= ballY[a + c]) {
//                     ballX[a + c] -= 1;
//                 }
//                 if (ballY[a] <= ballY[a + c]) {
//                     ballY[a + c] += 1;
//                 }
//                 if (ballY[a] >= ballY[a + c]) {
//                     ballY[a] += 1;
//                 }
//                 if (ballY[a] <= ballY[a + c]) {
//                     ballY[a] -= 1;
//                 }
//             }
//         }
//     }

// },1)
// let ballX = [];
// let ballY = [];
// let ballVX = [];
// let ballVY = [];
// let ballColor = [];
// let ballRadius = [];
// let ballTime_x = [];
// let ballTime_y = [];
// let a = 0;
// let c = 0;
// for (a = 0; a < 50; a++) {
//     ballX.push(Math.floor(Math.random() * 1000));
//     ballY.push(Math.floor(Math.random() * 1000));
//     ballVX.push(8);
//     ballVY.push(5);
//     ballColor.push(`rgb(255,255,255)`);
//     ballRadius.push(20);
//     ballTime_x.push(0);
//     ballTime_y.push(0);
// }
// let mouse = {
//     x: 0,
//     y: 0,
// }
// document.onmousedown = function (event) {
//     mouse.x = event.clientX;
//     mouse.y = event.clientY;
// }
// setInterval(() => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for (a = 0; a < ballX.length; a++) {
//         if (ballX[a] > mouse.x + 25) {
//             ballX[a] -= ballVX[a];
//         }
//         if (ballX[a] < mouse.x - 25) {
//             ballX[a] += ballVX[a];
//         }
//         if (ballY[a] > mouse.y + 25) {
//             ballY[a] -= ballVY[a];
//         }
//         if (ballY[a] < mouse.y - 25) {
//             ballY[a] += ballVY[a];
//         }
//         if (ballX[a] + 50 > mouse.x &&
//             ballX[a] - 50 < mouse.x &&
//             ballY[a] + 50 > mouse.y &&
//             ballY[a] - 50 < mouse.y) {
//             ballX[a] = Math.floor(Math.random() * 1000);
//             ballY[a] = Math.floor(Math.random() * 1000);
//         }
//     }
//     for (a = 0; a < ballX.length; a++) {
//         ctx.save();
//         ctx.beginPath();
//         ctx.arc(ballX[a], ballY[a], ballRadius[a], 0, Math.PI * 2, true);
//         ctx.closePath();
//         ctx.fillStyle = ballColor[a];
//         ctx.fill();
//         ctx.restore();
//     }
// }, 10)
// setInterval(function () {
//     for (a = 0; a < ballX.length; a++) {
//         c = 0;
//         for (b = 0; b < ballX.length - 1; b++) {
//             c++;
//             if (c == ballX.length) {
//                 c = 0 - a;
//             }
//             if (ballX[a] + 50 > ballX[a + c] &&
//                 ballX[a] - 50 < ballX[a + c] &&
//                 ballY[a] + 50 > ballY[a + c] &&
//                 ballY[a] - 50 < ballY[a + c]) {
//                 if (ballX[a] >= ballX[a + c]) {
//                     ballX[a + c] -= 1;
//                 }
//                 if (ballX[a] <= ballX[a + c]) {
//                     ballX[a + c] += 3;
//                 }
//                 if (ballX[a] >= ballX[a + c]) {
//                     ballX[a] += 3;
//                 }
//                 if (ballX[a] <= ballX[a + c]) {
//                     ballX[a] -= 1;
//                 }
//                 if (ballY[a] >= ballY[a + c]) {
//                     ballX[a + c] -= 2;
//                 }
//                 if (ballY[a] <= ballY[a + c]) {
//                     ballY[a + c] += 1;
//                 }
//                 if (ballY[a] >= ballY[a + c]) {
//                     ballY[a] += 1;
//                 }
//                 if (ballY[a] <= ballY[a + c]) {
//                     ballY[a] -= 2;
//                 }
//             }
//         }
//     }

// }, 1)



// let x = [];
// let y = [];
// let size = [];
// let speed = [];
// let angle = [];
// let spin = [];
// CCC.src = "../gurashop2.png"
// for (a = 0; a < 200; a++) {
//     x.push(Math.floor(Math.random()*500 + 5));
//     y.push(Math.floor(Math.random()*500 + 5));
//     size.push(Math.floor(Math.random()*100 + 5));
//     angle.push(Math.floor(Math.random()*100 + 5));
// }
// setInterval(() => {
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     for (a = 0; a < x.length; a++) {
//         ctx.save();
//         ctx.translate(x[a], y[a]);
//         ctx.rotate(angle[a]*Math.PI/360);
//         ctx.fillStyle = "rgba(1, 208, 245, 0)";
//         ctx.fillRect(0,0,canvas.width,canvas.height);
//         ctx.drawImage(CCC,0 - size[a] / 2,0 - size[a] / 2,size[a],size[a]);
//         ctx.restore();
//     }
// }, 15);
// setInterval(() => {
//     for (a = 0 ; a < x.length ; a++){
//         angle[a]+=Math.floor(Math.random()*3)+10;
//         if (angle[a] >= 720){
//             angle[a] = 0;
//         }
//     }
// }, 15);


// let atk1 = 0;
// let atk_all = 0;
// let atkNum = 0;
// for (a = 0 ; a < 136 ; a++){
//     atk1++;
// }
// setInterval(()=>{
//     if (atk1 >= 40){
//         atk_all = atk1 % 40;
//     }
//     atk1 -= atk_all;
//     atkNum = atk1 / 40 ;
//     atk1 = atk_all;
//     console.log(atk1);
//     console.log(atkNum);
// },1)
// let test = document.getElementById("test");
// test.innerHTML = `
//     <div id="test1" style="
//     position: absolute;
//     top: 77%;
//     left: 50%;
//     width : 100px;
//     height:100px;
//     background-color:white;
//     z-index : 10">12313213213212313213213213</div>
// `
// let test1 =document.getElementById("test1");
// console.log(test1.offsetTop);
// let takoTime = 0;

// setInterval(() => {
//     ctx.clearRect(0,0,canvas.width,canvas.height);
//     ctx.drawImage(CCC , takoTime , 0 , 220 , 212 , 10 , 10 , 220 , 212)
//     takoTime+= 220;
//     if (takoTime >= 880){
//         takoTime = 0;
//     }
// }, 15);
// let ballX = [];
// let ballY = [];
// let ballVX = [];
// let ballVY = [];
// let ballColor = [];
// let ballRadius = [];
// let small_ballX = [];
// let small_ballY = [];
// let small_ballVX = [];
// let small_ballVY = [];
// let small_ballRadius = [];
// let small_ballColor = [];
// let small_ballNum = 7;
// let small_time = [];
// let TT = 0;
// for (a = 0; a < 10; a++) {
//     ballX.push(200);
//     ballY.push(200);
//     ballVX.push(4);
//     ballVY.push(4);
//     ballColor.push(`rgb(0,0,0)`);
//     ballRadius.push(30);
//     for (b = 0; b < small_ballNum; b++) {
//         small_time.push(50 - b * 10);
//     }
// }
// ballRun_();
// function ballRun_() {

//     let ballRun = setInterval(() => {
//         for (a = 0; a < ballX.length; a++) {
//             ballX[a] += ballVX[a];
//             ballY[a] += ballVY[a];
//             if (ballX[a] > 500) {
//                 ballVX[a] = -Math.floor(Math.random() * 10)+2;
//             }
//             if (ballX[a] < 0) {
//                 ballVX[a] = Math.floor(Math.random() * 10)+2;
//             }
//             if (ballY[a] > 500) {
//                 ballVY[a] = -Math.floor(Math.random() * 10)+2;
//             }
//             if (ballY[a] < 0) {
//                 ballVY[a] = Math.floor(Math.random() * 10)+2;
//             }
//         }
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//         for (a = 0; a < ballX.length; a++) {
//             for (b = a * small_ballNum; b < a * small_ballNum + small_ballNum; b++) {
//                 ctx.beginPath();
//                 ctx.arc(small_ballX[b], small_ballY[b], small_ballRadius[b], 0, Math.PI * 2, true);
//                 ctx.closePath();
//                 ctx.fillStyle = small_ballColor[b];
//                 ctx.fill();
//             }
//             ctx.beginPath();
//             ctx.arc(ballX[a], ballY[a], ballRadius[a], 0, Math.PI * 2, true);
//             ctx.closePath();
//             ctx.fillStyle = ballColor[a];
//             ctx.fill();

//         }
//     }, 15);
//     let smallRun = setInterval(() => {
//         for (a = 0; a < ballX.length; a++) {
//             for (b = a * small_ballNum; b < a * small_ballNum + small_ballNum; b++) {
//                 if (small_time[b] == 50){
//                     small_ballColor[b] =`rgb(0,0,0)`;
//                     small_ballX[b] = ballX[a];
//                     small_ballY[b] = ballY[a];
//                     small_ballRadius[b] = 25;
//                 }
//                 small_time[b]+= Math.floor(Math.random()*10);
//                 if (Math.abs(ballX[a]) >= Math.abs(ballX[a])){
//                     small_ballVX[b] = -ballVX[a];
//                     small_ballVY[b] = -ballVY[a] + Math.floor(Math.random()*40) - 19.5;
//                 }
//                 if (Math.abs(ballX[a]) < Math.abs(ballX[a])){
//                     small_ballVX[b] = -ballVX[a] + Math.floor(Math.random()*40) - 19.5;
//                     small_ballVY[b] = -ballVY[a] ;
//                 }
//                 small_ballX[b] += small_ballVX[b]*0.5;
//                 small_ballY[b] += small_ballVY[b]*0.5;
//                 if (small_time[b] > 90) {
//                     small_time[b] = 50;
//                 }
//                 if (small_time[b] > 50 && small_ballRadius[b] > 2){
//                     small_ballColor[b] = `rgb(168, 93, 93,${small_ballRadius[b]*0.4 - 4})`
//                     small_ballRadius[b] -= 1.5;
//                 }

//             }
//         }
//     }, 15);
// }
// let touch_x = 100;
// let touch_y = 100;
// let touchX = [];
// let touchY = [];
// let touchVX = [];
// let touchVY = [];
// let touchColor = [];
// let touchRadius = [];
// let touchTime = [];
// for (a = 0; a < 7; a++) {
//     touchX.push(touch_x + Math.floor(Math.random() * 5) - 2);
//     touchY.push(touch_y);
//     touchColor.push('rgb(1, 137, 255)');
//     touchRadius.push(10);
//     touchTime.push(0);
// }

// for (a = 0; a < 7; a++) {
//     touchVX[a] = Math.floor(Math.random() * 10)-4.5;
//     touchVY[a] = Math.floor(Math.random() * 5)+2.5;
// }


// setInterval(() => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for(a = 0 ; a < 7 ; a++){
//         touchX[a] += touchVX[a];
//         touchY[a] += touchVY[a];
//         touchColor[a] = `rgb(1, 137, 255,${1-touchTime[a]*0.05})`;
//         touchRadius[a] += touchTime[a]*0.02;
//         touchTime[a]++;
//         if (touchTime[a] > 10){
//             touchX.splice(a,7);
//             touchY.splice(a,7);
//             touchVX.splice(a,7);
//             touchVY.splice(a,7);
//             touchColor.splice(a,7);
//             touchRadius.splice(a,7);
//         }
//     }
//     for (a = 0; a < 7; a++) {
//         ctx.beginPath();
//         ctx.arc(touchX[a], touchY[a], touchRadius[a], 0, Math.PI * 2, true);
//         ctx.closePath();
//         ctx.fillStyle = touchColor[a];
//         ctx.fill();
//     }

// }, 15);
// let test = document.getElementById("test");
// let test1 = document.getElementById("test1");

// let b = 0;
// let n = 0;
// let a = 0;
// let c = [];
// let f = [];
// let m = [0, 0];
// let len = c.length;
// let touchX = [0, 0];
// let touchY = [200, 500];
// setInterval(() => {
//     for (q = 0; q < 2; q++) {
//         ctx.beginPath();
//         ctx.arc(touchX[q] + a * 1, touchY[q], 1, 0, Math.PI * 2, true);
//         ctx.closePath();
//         ctx.fillStyle = `rgb(255,255,255)`;
//         ctx.fill();
//     }
// }, 1);
// setInterval(() => {
//     if (a >= 1400) {
//         a = 0;

//     }
//     a++;
// }, 1);
// setInterval(() => {

// }, 1);


// setInterval(() => {
//     time(400);
//     time(700);
// }, 0);
// function time(aa) {
//     if (a > 0 && a % aa == 0) {
//         //輸出
//         n = aa;
//     }
// }


//     for (g = 0; g < c.length; g++) {
//         if (a >= c[g] * (f[g]-1) && a < c[g] * f[g] && aa == c[g]) {
//             f[g]++;
//             if (f[0] % 2 == 0) {
//                 touchY[0] = 200;
//             }
//             if (f[1] % 2 == 0) {
//                 touchY[1] = 500;
//             }
//             if (f[0] % 2 == 1) {
//                 touchY[0] = 390;
//             }
//             if (f[1] % 2 == 1) {
//                 touchY[1] = 690;
//             }
//             console.log(c);
//             console.log(aa);

//         }

//     }
// }
// let a = [];
// let aa = a.length;
// setInterval(() => {
//     a.push(1);
//     console.log(a.length);
// }, 100);
// setInterval(() => {
//     a.pop();
//     console.log(a.length);
// }, 1000);
// setInterval(() => {
//     aa = a.length;
//     console.log(aa,3)
// }, 1);

// let a = 123;
// let b = 321;
// a = a ^ b;
// console.log(a,b);
// b = a ^ b;
// console.log(a,b);
// a = a ^ b;
// console.log(a,b);

// let a =3;
// let b = c = 1;
// a-= b + c;
// console.log(a);




// console.log(Math.asin(1) * 180 / Math.PI)

// let xxx = 0;
// let yyy = 0;
// let x = [];
// let y = [];
// let size = [];
// let speed = [];
// let angle = [];
// let spin = [];
// CCC.src = "../gurashop2.png";
// let mouse = {
//     x: 0,
//     y: 0,
// }
// document.onmousemove = function (event) {
//     mouse.x = event.pageX;
//     mouse.y = event.pageY;
// }
// for (a = 0; a < 1; a++) {
//     x.push(Math.floor(Math.random() * 500 + 5));
//     y.push(Math.floor(Math.random() * 500 + 5));
//     size.push(Math.floor(Math.random() * 100 + 5));
//     angle.push(Math.floor(Math.random() * 100 + 5));
// }
// setInterval(() => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for (a = 0; a < x.length; a++) {
//         xxx = mouse.x - x;
//         yyy = mouse.y - y;
//         abc = Math.atan(yyy/xxx);
//         cba = abc * 180 / Math.PI;
//         if (xxx < 0){
//             cba = 180 + cba;
//         }
//         angle[a] = cba*2;
//         ctx.save();
//         ctx.beginPath();
//         ctx.translate(x[a], y[a]);
//         ctx.rotate(angle[a] * Math.PI / 360);
//         ctx.moveTo(0, -10);
//         ctx.lineTo(10, 0);
//         ctx.lineTo(0, 10);
//         ctx.lineTo(0, 5);
//         ctx.lineTo(-15, 5);
//         ctx.lineTo(-15,-5);
//         ctx.lineTo(0,-5);
//         ctx.lineTo(0,-10);
//         ctx.fillStyle = `rgb(255,255,255)`;
//         ctx.fill();
//         ctx.moveTo(0, -10);
//         ctx.lineTo(10, 0);
//         ctx.lineTo(0, 10);
//         ctx.lineTo(0, 5);
//         ctx.lineTo(-15, 5);
//         ctx.lineTo(-15,-5);
//         ctx.lineTo(0,-5);
//         ctx.lineTo(0,-10);
//         ctx.strokeStyle = `rgb(0,0,0)`;
//         ctx.stroke();
//         ctx.restore();
//     }
// }, 15);

// setInterval(() => {
//     for (a = 0 ; a < x.length ; a++){
//         if (x[a] > mouse.x){
//             x[a] -= 2;
//         }
//         if (x[a] < mouse.x){
//             x[a] += 2;
//         }
//         if (y[a] > mouse.y){
//             y[a] -= 2;
//         }
//         if (y[a] < mouse.y){
//             y[a] += 2;
//         }
//     }
// }, 15);

// CCC.src = "../rangeATK.png";
// let rangeAttack_x = [];
// let rangeAttack_y = [];
// let rangeAttack_vx = [];
// let rangeAttack_vy = [];
// let rangeAttack_time = [];
// let rangeAttack_draw = 0;

// let rangeAttack_small_x = [];
// let rangeAttack_small_y = [];
// let rangeAttack_small_vx = [];
// let rangeAttack_small_vy = [];
// let rangeAttack_small_Color = [];
// let rangeAttack_small_radius = [];


// rangeAttack_time.push(0);
// rangeAttack_x.push(200);
// rangeAttack_y.push(200);
// rangeAttack_vx.push(2);
// rangeAttack_vy.push(2);
// setInterval(() => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     for (a = 0; a < rangeAttack_x.length; a++) {
//         ctx.drawImage(CCC, rangeAttack_draw, 0, 400, 500, rangeAttack_x[a]-190, rangeAttack_y[a]-190, 400, 500);
//     }
//     for (b = 0; b < rangeAttack_small_x.length; b++) {
//         ctx.beginPath();
//         ctx.arc(rangeAttack_small_x[b], rangeAttack_small_y[b], rangeAttack_small_radius[b], 0, Math.PI * 2, true);
//         ctx.strokeStyle = `rgb(0, 89, 255,${rangeAttack_small_Color[b]})`;
//         ctx.lineWidth = 6;
//         ctx.stroke();
//         rangeAttack_small_radius[b] -= Math.floor(Math.random()*3)*0.1;
//         rangeAttack_small_Color[b] -= Math.floor(Math.random()*3)*0.02;
//     }
//     rangeAttack_draw += 400;
//     if (rangeAttack_draw >= 9600) {
//         rangeAttack_draw = 0;
//     }
// }, 15);
// setInterval(() => {
//     for (a = 0; a < rangeAttack_time.length; a++) {
//         for (b = a; b < a * 10 + 10; b++) {
//             if (rangeAttack_small_radius[b] < 1 || rangeAttack_small_Color[b] < 0 || rangeAttack_small_x[b] == undefined) {
//                 rangeAttack_small_Color[b] = 1;
//                 rangeAttack_small_radius[b] = Math.floor(Math.random() * 5) + 25;
//                 rangeAttack_small_x[b] = rangeAttack_x[a] + Math.floor(Math.random() * 100) - 49.5;
//                 rangeAttack_small_y[b] = rangeAttack_y[a] + Math.floor(Math.random() * 100) - 49.5;
//                 rangeAttack_small_vx[b] = 0;
//                 rangeAttack_small_vy[b] = 0;
//                 if (rangeAttack_small_x[b] > rangeAttack_x[a] + 2) {
//                     rangeAttack_small_vx[b] = Math.floor(Math.random() * 5) + 1;
//                 }
//                 if (rangeAttack_small_x[b] < rangeAttack_x[a] - 2) {
//                     rangeAttack_small_vx[b] = -Math.floor(Math.random() * 5) - 1;
//                 }
//                 if (rangeAttack_small_y[b] > rangeAttack_y[a] + 2) {
//                     rangeAttack_small_vy[b] = Math.floor(Math.random() * 5) + 1;
//                 }
//                 if (rangeAttack_small_y[b] < rangeAttack_y[a] - 2) {
//                     rangeAttack_small_vy[b] = -Math.floor(Math.random() * 5) - 1;
//                 }
//             }
//         }
//     }
//     for (b = 0; b < rangeAttack_small_x.length; b++) {
//         rangeAttack_small_x[b] += rangeAttack_small_vx[b];
//         rangeAttack_small_y[b] += rangeAttack_small_vy[b];
//     }
// }, 15);

// let a = 3;
// let b = 4;
// let c;
// c = a * a + b * b;
// console.log(Math.sqrt(c));

// let sickle_x = 200;
// let sickle_y = 200;
// let sickle_angle = 460;
// CCC.src = "../moriatk1left.png";
// setInterval(function () {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.save();
//     ctx.beginPath();
//     ctx.translate(sickle_x, sickle_y);
//     ctx.rotate(sickle_angle * Math.PI / 360);
//     ctx.drawImage(CCC, -62, -118, 300, 300);
//     ctx.strokeStyle = `rgb(0,0,0)`;
//     ctx.moveTo(0, 0);
//     ctx.lineTo(canvas.width, 0);
//     ctx.lineTo(canvas.width, canvas.height);
//     ctx.lineTo(0, canvas.height);
//     ctx.lineTo(0, 0);
//     ctx.stroke();
//     ctx.restore();
//     sickle_angle+=20;
//     if (sickle_angle >= 1010){
//         sickle_angle = 460
//     }
// }, 15)
// setInterval(function () {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.save();
//     ctx.beginPath();
//     ctx.translate(sickle_x, sickle_y);
//     ctx.rotate(-sickle_angle * Math.PI / 360);
//     ctx.drawImage(CCC, -280, -118, 300, 300);
//     ctx.strokeStyle = `rgb(0,0,0)`;
//     ctx.moveTo(0, 0);
//     ctx.lineTo(canvas.width, 0);
//     ctx.lineTo(canvas.width, canvas.height);
//     ctx.lineTo(0, canvas.height);
//     ctx.lineTo(0, 0);
//     ctx.stroke();
//     ctx.restore();
//     sickle_angle+=20;
//     if (sickle_angle >= 990){
//         sickle_angle = 460
//     }
// }, 15)
// x = 500;
// y = 500;
// CCC.src = "../mori_atk2.png";
// let dart_x = [];
// let dart_y = [];
// let dartXX = [];
// let dartYY = [];
// let dart_vx = [];
// let dart_vy = [];
// let dart_time = [];
// let dart_angle = 0;
// let dart_draw = 0;
// for (a = 0; a < 20; a++) {
//     dart_x.push(x);
//     dart_y.push(y);
//     dart_time.push(0);
// }
// setInterval(function () {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for (a = 0; a < dartXX.length; a++) {
//         ctx.save();
//         ctx.translate(dart_x[a], dart_y[a]);
//         ctx.rotate(dart_angle * Math.PI / 360);
//         ctx.drawImage(CCC, dart_draw, 0, 220, 212, -120, -120, 220, 212);
//         ctx.restore();
//     }
//     dart_draw += 240;
//     if (dart_draw == 1200) {
//         dart_draw = 0;
//     }
//     dart_angle += 40;
//     if (dart_angle >= 720) {
//         dart_angle = 0;
//     }
// }, 15)
// setInterval(() => {
//     for (a = 0; a < dart_time.length; a++) {
//         if (dart_time[a] == 0) {
//             dart_time[a] = 1;
//             dartXX[a] = x + 300 * Math.cos((Math.PI / 180) * a * 10);
//             dartYY[a] = y + 300 * Math.sin((Math.PI / 180) * a * 10);
//             dartX = x - dartXX[a];
//             dartY = y - dartYY[a];
//             dart_Length = dartX * dartX + dartY * dartY;
//             dart_vx[a] = 2 * (dartX / Math.sqrt(dart_Length));
//             dart_vy[a] = 2 * (dartY / Math.sqrt(dart_Length));
//         }

//     }
//     for (a = 0; a < dartXX.length; a++) {
//         if (dart_time[a] < 40) {
//             dart_x[a] += dart_vx[a];
//             dart_y[a] -= dart_vy[a];
//         }
//         console.log(dartXX[a],dart_x[a])

//         if (dart_time[a] > 0) {
//             dart_time[a]++;
//         }
//         if (dart_time[a] >= 1500) {
//             dart_x.splice(a, 1);
//             dart_y.splice(a, 1);
//             dartXX.splice(a, 1);
//             dartYY.splice(a, 1);
//             dart_vx.splice(a, 1);
//             dart_vy.splice(a, 1);
//             dart_time.splice(a, 1);
//         }
//     }
// }, 15);
// x = 300;
// y = 300;
// let mori_atk4_draw_x = -180;
// let mori_atk4_draw = 0
// let mori_atk4_draw_delay = 0;
// CCC.src = "../moriatk4.png";
// setInterval(() => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.save();
//     ctx.translate(x, y);
//     ctx.rotate(-30 * Math.PI / 180)
//     ctx.drawImage(CCC, mori_atk4_draw, 0, 498, 203, mori_atk4_draw_x, -200, 900, 400);
//     ctx.moveTo(0, 0)
//     ctx.lineTo(canvas.width, 0);
//     ctx.lineTo(canvas.width, canvas.height);
//     ctx.lineTo(0, canvas.height);
//     ctx.lineTo(0, 0);
//     ctx.stroke();
//     ctx.restore();
//     if (mori_atk4_draw_delay <= 4000){
//         mori_atk4_draw_delay += 100;
//     }
//     if (mori_atk4_draw_delay % 500 == 0) {
//         mori_atk4_draw_x-=40;
//         mori_atk4_draw += 498;
//     }
// }, 15);
// x = 300;
// y = 300;
// let mori_atk4_tocuh_x = [];
// let mori_atk4_tocuh_y = [];
// let mori_atk4_draw1 = 0;
// let mori_atk4_draw1_time = [];
// CCC.src = "../mori_atk4_1.png";

// for (a = 0; a < 10; a++) {
//     mori_atk4_tocuh_x.push(Math.floor(Math.random() * 1000));
//     mori_atk4_tocuh_y.push(Math.floor(Math.random() * 1000));
//     mori_atk4_draw1_time.push(0);
// }
// setInterval(() => {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     for (a = 0; a < mori_atk4_draw1_time.length; a++) {
//         ctx.drawImage(CCC, mori_atk4_draw1, 0, 180, 226, mori_atk4_tocuh_x[a] - 90, mori_atk4_tocuh_y[a] - 90, 180, 226);
//         mori_atk4_tocuh_x[a] += 0.5;
//         mori_atk4_tocuh_y[a] += 0.5;
//         mori_atk4_draw1_time[a]++;
//     }
//     for (a = 0; a < mori_atk4_draw1_time.length; a++) {
//         if (mori_atk4_draw1_time[a] > 50) {
//             mori_atk4_tocuh_x.splice(a,1);
//             mori_atk4_tocuh_y.splice(a,1);
//             mori_atk4_draw1_time.splice(a,1);
//         }
//     }
//     mori_atk4_draw1 += 180;

//     if (mori_atk4_draw1 >= 900) {
//         mori_atk4_draw1 = 0;
//     }
// }, 20);