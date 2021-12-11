class Cell {
  constructor() {
    this.pos1 = createVector(random(width), random(height));
    this.pos2 = createVector(random(width), random(height));
    this.pos3 = createVector(random(width), random(height));
    this.vel = createVector();
    this.acc = createVector();
    this.speed = 1.3;
    this.s = random(10, 25);
    this.r = this.s / 2;
    this.isThem = false;
  }

  update() {
    let person = createVector(mouseX, mouseY);
    this.acc = p5.Vector.random2D();
    this.acc.setMag(0.1);

    if (this.isThem) {
      this.acc = p5.Vector.sub(this.pos1, person);
      this.acc = p5.Vector.sub(this.pos2, person);
      this.acc = p5.Vector.sub(this.pos3, person);
    }

    this.vel.add(this.acc);
    this.vel.limit(this.speed);
    this.pos1.add(this.vel);
    this.pos2.add(this.vel);
    this.pos3.add(this.vel);
  }

  display() {
    fill(20, 225, 80);
    noStroke();

    ellipse(this.pos1.x, this.pos1.y, this.s, this.s);
    ellipse(this.pos2.x, this.pos2.y, this.s, this.s);
    ellipse(this.pos3.x, this.pos3.y, this.s, this.s);
    stroke(255, 10);
    line(this.pos1.x, this.pos1.y, this.pos2.x, this.pos2.y);
    line(this.pos1.x, this.pos1.y, this.pos3.x, this.pos3.y);
    line(this.pos2.x, this.pos2.y, this.pos3.x, this.pos3.y);
  }

  checkEdges() {
    if (this.pos1.y > height - this.r) {
      this.vel.y *= -1;
      this.pos1.y = height - this.r;
    }

    if (this.pos1.y < this.r) {
      this.vel.y *= -1;
      this.pos1.y = this.r;
    }

    if (this.pos1.x > width - this.r) {
      this.vel.x *= -1;
      this.pos1.x = width - this.r;
    }

    if (this.pos1.x < this.r) {
      this.vel.x *= -1;
      this.pos1.x = this.r;
    }
    if (this.pos2.y > height - this.r) {
      this.vel.y *= -1;
      this.pos2.y = height - this.r;
    }

    if (this.pos2.y < this.r) {
      this.vel.y *= -1;
      this.pos2.y = this.r;
    }

    if (this.pos2.x > width - this.r) {
      this.vel.x *= -1;
      this.pos2.x = width - this.r;
    }

    if (this.pos2.x < this.r) {
      this.vel.x *= -1;
      this.pos2.x = this.r;
    }

    if (this.pos3.y > height - this.r) {
      this.vel.y *= -1;
      this.pos3.y = height - this.r;
    }

    if (this.pos3.y < this.r) {
      this.vel.y *= -1;
      this.pos3.y = this.r;
    }

    if (this.pos3.x > width - this.r) {
      this.vel.x *= -1;
      this.pos3.x = width - this.r;
    }

    if (this.pos3.x < this.r) {
      this.vel.x *= -1;
      this.pos3.x = this.r;
    }
  }

  mousePressed() {
    this.isThem = true;
  }

  mouseReleased() {
    this.isThem = false;
  }
}
