
while(true){
  var a=random(width); x=mouseX;x2=random(width);x3=random(width);
  background(255)
	noFill();
  stroke(0);
  var b =random(width-a);
	rect(a, a, b, b);
  stroke(255,0,0);
  line(width/2-x2,height/2-x2,width/2+x2,height/2+x2);
  line(width/2+x3,height/2-x3,width/2-x3,width/2+x3);
}
