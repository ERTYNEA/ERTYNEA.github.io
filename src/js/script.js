// Variables ventana
var ventanaInteriorAncho = window.innerWidth;
var ventanaInteriorAlto = window.innerHeight;
var canvas;

// Variables cuadrado
var posicionX = 0;
var posicionY = getRandomNumero(0, ventanaInteriorAlto);
var medidaAnc = 10;
var medidaAlt = 10;

// Preparacion del canvas (se autollama y se puede llamar manualmente)
function setup() {
	ventanaInteriorAncho = window.innerWidth;
	ventanaInteriorAlto = window.innerHeight;
	canvas = createCanvas(ventanaInteriorAncho, ventanaInteriorAlto);
}

// Redimensionamiento del canvas (se autollama)
window.onresize = function() {
	setup();
}

function draw() {
	background(255, 0, 0);
	noStroke();
	fill(0, 0, 255);
	rect(posicionX, posicionY, medidaAnc, medidaAlt);
	if (posicionX<ventanaInteriorAncho) {
		posicionX += 10;
	}
	else {
		posicionX = 0;
		posicionY = getRandomNumero(0, ventanaInteriorAlto);
	}
}

// Retorna un numero aleatorio entre minimo (incluido) y maximo (excluido)
function getRandomNumero(minimo, maximo) {
	return Math.random() * (maximo - minimo) + minimo;
}