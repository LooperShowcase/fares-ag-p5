function setup() {
  // The size of our starting canvas: 400px width, 400px height
  let cnv = createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  // The same as doing: background(220); or --> background(220,220,220);
  background("black");
  translate(width / 2, height / 2);
  rotate(-90);
  let days = day();
  let hours = hour();
  let minutes = minute();
  let seconds = second();
  let milliseconds = millis();

  console.log(`${hours}:${minutes}:${seconds}`);

  stroke("white");
  strokeWeight(2);
  noFill();
  ellipse(0, 0, 300, 300);

  let millisAngle = map(milliseconds, 0, 1000, 0, 360);
  stroke("#240046");
  arc(0, 0, 275, 275, 0, millisAngle);

  let secondAngle = map(seconds, 0, 60, 0, 360);
  stroke("#e0aaff");
  fill(20);
  arc(0, 0, 250, 250, 0, secondAngle);

  let minuteAngle = map(minutes, 0, 60, 0, 360) + map(seconds, 0, 60, 0, 6);
  stroke("#5a189a");
  arc(0, 0, 220, 220, 0, minuteAngle);

  let hourAngle = map(hours % 12, 0, 12, 0, 360);
  stroke("#7b77bf");
  arc(0, 0, 170, 180, 0, hourAngle);

  push();
  noFill();
  rotate(90);
  strokeWeight(1);
  text(days, 50, 5);
  rect(44, -9, 20, 20, 5);
  pop();

  push();
  rotate(secondAngle);
  stroke("#e0aaff");
  strokeWeight(5);
  line(0, 0, 125, 0);
  pop();

  push();
  rotate(minuteAngle);
  stroke("#5a189a");
  strokeWeight(5);
  line(0, 0, 110, 0);
  pop();

  push();
  rotate(hourAngle);
  stroke("#7b77bf");
  strokeWeight(5);
  line(0, 0, 85, 0);
  pop();
}

function windowResize() {
  resizeCanva(windowWidth, windowHeight);
}
