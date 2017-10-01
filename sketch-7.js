var x=0; a=0; step=0;
while(x<width/6*5){
	x=x+width/6;
	while(step<5){
    noFill();
    rectMode(CENTER);
    rect(x,height/2,a,a);
    a=a+10;
		step=step+1;
	}
  if(step>=5){
    step=0;
    a=0
  }
}

