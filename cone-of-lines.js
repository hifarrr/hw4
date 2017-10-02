function setup() { 
  createCanvas(400, 400);
	background(255);
}

function draw() {
	 background(255);
	 var x=0;
	 while( x <= width){
		x = x+10;								 
		line(x, 0, mouseX, mouseY);
	}	
}
