// Variables ventana
var ventanaInteriorAncho = window.innerWidth;
var ventanaInteriorAlto = window.innerHeight;

// Variables cuadrado
var posicionX = 0;
var posicionY = getRandomNumero(0, ventanaInteriorAlto);
var medidaAnc = 10;
var medidaAlt = 10;

function setup() {
	canvas = createCanvas(ventanaInteriorAncho, ventanaInteriorAlto);
}

window.onresize = function() {
	ventanaInteriorAncho = window.innerWidth;
	ventanaInteriorAlto = window.innerHeight;
	canvas.size(ventanaInteriorAncho, ventanaInteriorAlto);
}

function draw() {
	background(255, 0, 0);
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