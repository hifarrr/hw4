background(255);
var y=0;
while(y<height){
	line(0,y,width,y);
  y=y+10;
}
fill(255);
noStroke();
triangle(0,0,width/2,0,0,height/2);
triangle(width/2,0,width,0,width,height/2);
triangle(0,height/2,0,height,width/2,height);
triangle(width/2,height,width,height/2,width,height);
