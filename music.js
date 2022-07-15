// var BGMTime = 0;
// addEventListener("mousedown", BGM);
// function BGM() {
//     BGMTime++;
//     if (BGMTime == 1) {
//         var BGM1 = document.createElement("video");
//         BGM1.src = "Gawr Gura 30 Minute BGM-Loop.mp3";
//         BGM1.loop = true;
//         BGM1.play();
//     }
// }

// let ATKIN_num = 0;
// let TRIDENT_num = 0;
// let BLOOP_num = 0;
// function ATKIN_() {
//     if (aa.length < 20 ||
//         (ATKIN_num % 1 == 0 && aa.length < 50) ||
//         (ATKIN_num % 5 == 0 && aa.length < 100) ||
//         (ATKIN_num % 10 == 0 && aa.length < 200)) {
//         const ATKIN = document.createElement("audio");
//         ATKIN.src = "A_ATK.mp3";
//         ATKIN.play();
//         ATKIN.onended = function () {
//             this.currentSrc = null;
//             this.src = "";
//             this.srcObject = null;
//             this.remove();
//         }
//     }
//     ATKIN_num++;
//     if (ATKIN_num >= 100) {
//         ATKIN_num = 0;
//     }
// }

// function TRIDENT_() {
//     if (aa.length < 20 ||
//         (TRIDENT_num % 5 == 0 && aa.length < 50) ||
//         (TRIDENT_num % 10 == 0 && aa.length < 100) ||
//         (TRIDENT_num % 20 == 0 && aa.length < 200)) {
//         const TRIDENT = document.createElement("audio");
//         TRIDENT.src = "stabbing.mp3";
//         TRIDENT.play();
//         TRIDENT.onended = function () {
//             this.currentSrc = null;
//             this.src = "";
//             this.srcObject = null;
//             this.remove();
//         }
//     }
//     TRIDENT_num++;
//     if (TRIDENT_num >= 100) {
//         TRIDENT_num = 0;
//     }
// }

// function BLOOP_() {
//     if (aa.length < 20 ||
//         (BLOOP_num % 5 == 0 && aa.length < 50) ||
//         (BLOOP_num % 10 == 0 && aa.length < 100) ||
//         (BLOOP_num % 20 == 0 && aa.length < 200)) {
//         const BLOOP = document.createElement("audio");
//         BLOOP.src = "short_punch1.mp3";
//         BLOOP.play();
//         BLOOP.onended = function () {
//             this.currentSrc = null;
//             this.src = "";
//             this.srcObject = null;
//             this.remove();
//         }
//     }
//     BLOOP_num++;
//     if (BLOOP_num >= 100) {
//         BLOOP_num = 0;
//     }
// }
