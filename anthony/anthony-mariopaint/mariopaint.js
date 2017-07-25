function setup(){
    createCanvas(500, 500);
    background(150);

}
    // ellipse(56, 46, 55, 55);

    // Drag the mouse across the page
    // to change its value
function mouseDragged() {
    noStroke();//makes it look cool
  ellipse(mouseX, mouseY, random(20,70), random(40,90));
  rect(mouseX, mouseY, random(55), random(55));
//   quad(mouseX, mouseY, random(50), random(50), random(50), random(60), random(55), random(60));
  fill(random (255), random(255), random(255), random(255));//this is transparency
  // prevent default
  return false
}

// MAKE ALL OF THIS REFERRED TO THE DOCUMENT***********
// var col = "black"
// // part 2
// function setup(){
//     createCanvas(500, 500);
//     background(245);
//     noStroke

//     fill("green");
//     rect(0, 0, 500, 30);
//     fill("blue");
//     rect(0, 30, 500, 30);
//     fill("yellow");
//     rect(0, 60, 500, 30);
// }
//     // ellipse(56, 46, 55, 55);

//     // Drag the mouse across the page
//     // to change its value
// function mouseDragged() {
//     noStroke();//makes it look cool
//   ellipse(mouseX, mouseY, random(20,70), random(40,90));
//   rect(mouseX, mouseY, random(55), random(55));
// //   quad(mouseX, mouseY, random(50), random(50), random(50), random(60), random(55), random(60));
//   fill(col);
//   // prevent default
//   return false
// }

// function mousePressed(){
//     if (mouseY <31){
//         col = "green"
//     } else if (mouseY > 60 && mouseY < 61){
//         col = "blue";
//     }else if (mouseY > 60 && mouseY < 91){
//         col = "yellow";
//     }

// }