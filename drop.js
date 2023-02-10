const ground = 1100;

class Drop {
  x = 0;
  y = 600;
  vx = 0;
  vy = 0;
  ax = 0;
  ay = 0;
  s = 10;
  constructor() {}

  update() {
    this.vx += this.ax;
    this.vy += this.ay;
    this.x += this.vx;
    this.y += this.vy;
    if (this.y >= ground) {
      this.vx = 0;
      this.vy = 0;
      this.x = Math.random() * 4096;
      this.y = -100;
    }
    this.draw();
  }

  draw() {
    console.log("I AM RUNNING");
    push();
    translate(this.x, this.y);
    noStroke();
    beginShape();
    vertex(0, -1.5 * this.s);
    bezierVertex(0, -this.s, 0.5 * this.s, -this.s, 0.5 * this.s, 0);
    vertex(-0.5 * this.s, 0);
    //bezierVertex(0, 0.5*this.s, 0, 0.5*this.s, -0.5*this.s, 0);
    bezierVertex(-0.5 * this.s, -this.s, 0, -this.s, 0, -1.5 * this.s);
    endShape(CLOSE);
    circle(0, 0, this.s);
    pop();
  }
}
