background(255);
while(true){
	var x1=random(width)/4; y1=random(width)/4;a=random(width)/4;
  var h=random(360); h2=random(360);h3=random(360);h4=random(360);
  stroke(255);
	colorMode(HSB);
  fill(h,20,100);
	rect(x1,y1,a,a);
  fill(h2,20,100);
	rect(x1+a,y1,a,a);
  fill(h3,20,100);
	rect(x1,y1+a,a,a);
  fill(h4,20,100);
	rect(x1+a,y1+a,a,a);
}
