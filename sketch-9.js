var rate = 0.1;
var x = 0;
var y = 0;
while (true) {
  background(255);
  ellipse(x, y, 15, 15);
  x = mouseX*rate + x*(1-rate);
  y = mouseY*rate + y*(1-rate);
}
