var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = 1200;
canvas.height = 500;
canvas.backgroundColor = "block";
AAA = new Image();
AAA.src = "guraDown.png"
AAA.onload - function (){
    this.onload = null;
    ctx.drawImage(AAA,0,0);
}

var guraTime = 0;
// setInterval(function(){
//     ctx.clearRect(0,0,canvas.width,canvas.height)
//     ctx.drawImage(AAA,guraTime,0,375,498,100,100,100,100);
//     guraTime+=375;
//     if (guraTime == 3000){
//         guraTime = 0;
//     }
// },50)
// setInterval(function(){
//     ctx.clearRect(0,0,canvas.width,canvas.height)
//     ctx.drawImage(AAA,guraTime,0,362,498,100,100,100,100);
//     guraTime+=362;
//     if (guraTime == 8326){
//         guraTime = 0;
//     }
// },70)
// setInterval(function(){
//     ctx.clearRect(0,0,canvas.width,canvas.height)
//     ctx.drawImage(AAA,guraTime,0,500,200,100,100,200,100);
//     guraTime+=500;
//     if (guraTime == 2500){
//         guraTime = 0;
//     }
// },70)

