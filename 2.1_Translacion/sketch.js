let tx = 300;
let ty = 150;
let velocidad = 3;

function setup() {
  createCanvas(600, 300);
  rectMode(CENTER);
}

function draw() {
  background(220);

  moverPersonaje();
  dibujarPersonaje();
}

function moverPersonaje() {
  // WASD
  if (keyIsDown(65)) { // A
    tx -= velocidad;
  }
  if (keyIsDown(68)) { // D
    tx += velocidad;
  }
  if (keyIsDown(87)) { // W
    ty -= velocidad;
  }
  if (keyIsDown(83)) { // S
    ty += velocidad;
  }

  // Flechas
  if (keyIsDown(LEFT_ARROW)) {
    tx -= velocidad;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    tx += velocidad;
  }
  if (keyIsDown(UP_ARROW)) {
    ty -= velocidad;
  }
  if (keyIsDown(DOWN_ARROW)) {
    ty += velocidad;
  }
}

function dibujarPersonaje() {

  push();                 // 🔹 empieza transformación
  translate(tx, ty);      // 🔹 mueve TODO el personaje

  // 🟢 Cuerpo
  fill(100, 150, 255);
  rect(0, 40, 40, 80);

  // 🟡 Cabeza
  fill(255, 220, 180);
  circle(0, -20, 50);

  // ⚫ Ojos
  fill(0);
  circle(-10, -25, 8);
  circle(10, -25, 8);

  pop();                  // 🔹 termina transformación
}