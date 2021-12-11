// let sound;
let cells = [];

// function preload(){
//   sound = loadSound(big_bubble.wav);
// }

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 20; i++) {
    cells[i] = new Cell();
  }
  // sound.play();
}

function draw() {
  background(255);
  for (let i = 0; i < cells.length; i++) {
    cells[i].update();
    cells[i].display();
    cells[i].checkEdges();
  }
}

function mousePressed() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].mousePressed();
 }
}

function mouseReleased() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].mouseReleased();
  }
}
