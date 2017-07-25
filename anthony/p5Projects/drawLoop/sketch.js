function setup(){
    createCanvas(500, 500);
    background(100);
}
var x = 0;
function draw(){
    background(200)
    textSize(13);
    text("Type the words below before they hit the end of the wall.", 10, 20);
    fill(0,100,200);
    text("Your score increases when you complete a phrase and decreases if you fail to do so.", 10, 40)
    fill(0,102,153);
    textSize(20);
    text("Score:", 10, 400);
    fill(0,102,153);
}
function keyTyped() {
    console.log(typed);
    typed = typed + key;
    if (typed == sentence);
    alert("You Win");
}
// HERE
// var value = 0;
// function draw() {
//   fill();
//   text("");
// }
// function keyTyped() {
//   if (key === 'a') {
//     value = 255;
//     } else if (key === 'b') {
//     value = 1;
//     } else if (key === 'c') {
//     value = 0;
//     } else if (key === 'd') {
//     value = 0;
//     } else if (key === 'e') {
//     value = 0;
//     } else if (key === 'f') {
//     value = 0;
//     } else if (key === 'g') {
//     value = 0;
//     } else if (key === 'h') {
//     value = 0;
//     } else if (key === 'i') {
//     value = 0;
//     } else if (key === 'j') {
//     value = 0;
//     } else if (key === 'k') {
//     value = 0;
//     } else if (key === 'l') {
//     value = 0;
//     } else if (key === 'm') {
//     value = 0;
//     } else if (key === 'n') {
//     value = 0;
//     } else if (key === 'o') {
//     value = 0;
//     } else if (key === 'p') {
//     value = 0;
//     } else if (key === 'q') {
//     value = 0;
//     } else if (key === 'r') {
//     value = 0;
//     } else if (key === 's') {
//     value = 0;
//     } else if (key === 't') {
//     value = 0;
//     } else if (key === 'u') {
//     value = 0;
//     } else if (key === 'v') {
//     value = 0;
//     } else if (key === 'w') {
//     value = 0;
//     } else if (key === 'x') {
//     value = 0;
//     } else if (key === 'y') {
//     value = 0;
//     } else if (key === 'z') {
//     value = 0;



  // uncomment to prevent any default behavior
  // return false;
// }

// //display "user type the words below", "your score increases with every correct string and decreases with word hitting the edge"
// //display a number counter
// 
// background(200)
// text(x, //something, // something else)// display randomizedstring
// x++



//HOW TO ACTUALLY DO IT
// var sentence = "Hellow World";
// var typed = "";
// function setup(){
//     createCanvas(400,400);
//     background(50);
//     fill("white");
//     textSize(16);
//     text("please type in the sentence below", 50, 50);
//     text(sentence, 50, 100);
// }

function keyTyped() {
    console.log(typed);
    typed = typed + key;
    if (typed == sentence);
    alert("You Win");
}