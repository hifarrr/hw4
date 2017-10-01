background(0);
var x=10;y=-10;
while(y<height){
	fill(255);
  y=y+20;
  while(x<width){
    ellipse(x,y,10,10);
    x=x+20
  } 
  if (x>=width){
    x=0;
  }
}
