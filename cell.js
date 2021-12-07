class Cell {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.speed = 0.5;
    this.s = random(16, 22);
    this.r = this.s/2;
    this.isThem = false;
  }

  update() {
    let person = createVector(mouseX, mouseY);
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc = p5.Vector.random2D();
    this.acc.setMag(0.1);

    if (this.isThem) {
      this.vel.add(this.pos, person);
    }

    this.vel.add(this.acc);
    this.vel.mult(this.speed);
    this.pos.add(this.vel);
  }

  display() {
    fill(255);
    stroke(20);
    ellipse(this.pos.x, this.pos.y, this.s, this.s);
  }

  checkEdges() {
    if (this.pos.y > height - this.r) {
      this.vel.y *= -1;
      this.pos.y = height - this.r;
    }

    if (this.pos.y < this.r) {
      this.vel.y *= -1;
      this.pos.y = this.r;
    }

    if (this.pos.x > width - this.r) {
      this.vel.x *= -1;
      this.pos.x = width - this.r;
    }

    if (this.pos.x < this.r) {
      this.vel.x *= -1;
      this.pos.x = this.r;
    }
  }

  mousePressed() {
    this.isThem = true;
  }

  mouseReleased() {
    this.isThem = false;
  }
}
