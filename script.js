let x = 0;

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(255, 0, 0);
	rect(x, 0, 10, 10);
	if (x<400)
		x++;
	else
		x = 0;
}