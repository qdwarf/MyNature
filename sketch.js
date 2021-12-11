let cells = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i++) {
    cells[i] = new Cell();
  }
}

function draw() {
  background(20,80);
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
