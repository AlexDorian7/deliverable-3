const fillColor = "#BFBFFF";

let drop = [];

let time = 0;

function setup() {
  createCanvas(4096, 1000);
  for (let i = 0; i < 100; i++) {
    drop[i] = new Drop();
    drop[i].ay = Math.random() / 8 + 0.001;
  }
}

function draw() {
  background(255);
  noStroke();
  fill(fillColor);
  //translate(width/2, height/2);

  push();
  beginShape();
  vertex(0, 0);
  for (let i = 0; i < 4096; i++) {
    vertex(i, (sin(i / 10) + noise(i / 20 + time) * 3) * 10 + 50);
  }
  vertex(4096, 0);
  endShape(CLOSE);
  //rect(0,0,10000,100);
  pop();
  for (let i = 0; i < 25; i++) {
    drop[i].update();
  }
  time += 0.01;
}
