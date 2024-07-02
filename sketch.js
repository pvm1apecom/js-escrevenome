function setup() {
  createCanvas(600, 600);
  background("red");
}

function draw() {
  

  stroke("purple");
  fill("yellow");

  // console.log(mouseIsPressed)

  if (mouseIsPressed) {
    rect(mouseX, mouseY, 20, 45);
  }
}
