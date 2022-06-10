var w = window.innerWidth;
var h = window.innerHeight;
var x = 0;

function setup() {
	canvas = createCanvas(w, h);
}

window.onresize = function() {
	w = window.innerWidth;
	h = window.innerHeight;
	canvas.size(w,h);
}

function draw() {
	background(255, 0, 0);
	rect(x, 0, 10, 10);
	if (x<400)
		x++;
	else
		x = 0;
}