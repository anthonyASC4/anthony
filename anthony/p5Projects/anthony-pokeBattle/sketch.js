var button;
function setup(){
    createCanvas(500, 500);
    background(100);
    noStroke();
    fill("lime");
    rect(300, 100, 30, 15);
    rect(330, 100, 30, 15);
    rect(360, 100, 30, 15);
    rect(390, 100, 30, 15);
    rect(420, 100, 30, 15);
    fill("white");
    rect(300, 125, 150, 100);
    fill("lime");
    rect(50, 195, 30, 15);
    rect(80, 195, 30, 15);
    rect(110, 195, 30, 15);
    rect(140, 195, 30, 15);
    rect(170, 195, 30, 15);
    fill("white");
    rect(50, 220, 150, 100);
    rect(10, 330, 480, 160);
    button = createButton("Fire Attack");
    // button.position(19,19);
    // button.mousePressed(changeBG)
}
text(str, x, y, x2, y2)


// function pokemon(name, HP, Atk){
//     this.name = name;
//     this.HP = HP;
//     this.Atk = Atk;
// }

// function draw(){

// }


// function draw(){

// }









// var bg;
// var y = 0;

// function setup() {
//   // The background image must be the same size as the parameters
//   // into the createCanvas() method. In this program, the size of
//   // the image is 720x400 pixels.
//   bg = loadImage("pokemonBattleBackground");
//   createCanvas(500,500);
// }

// // function draw() {
// //   background(bg);

// //   stroke(226, 204, 0);
// //   line(0, y, width, y);

// //   y++;
// //   if (y > height) {
// //     y = 0;
// //   }
// // }
