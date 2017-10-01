while(true){
  var x=mouseX;x2=random(width);x3=random(width);
  background(255)
	noFill();
  stroke(0);
  rectMode(CENTER);
	rect(width/2, height/2, x, x);
  stroke(255,0,0);
  line(width/2-x2,height/2,width/2+x2,height/2);
  line(width/2+x3,height/2-x3,width/2-x3,width/2+x3);
}
