
var raio = 150;
var raioDaHora = 130;
var raioDosNumeros = 100;
var cx, cy;
var px, py;
var destaque_theta;
var hora = 3;
var nl =0;


function setup() {
 createCanvas(400, 400);
 textAlign(CENTER, CENTER);
 // centro do desenho e do circulo
 cx = width / 2;
 cy = height / 2;
 // ângulo theta para arco de destaque
 // que é o mesmo theta para o ponto p
 destaque_theta = PI * 1,75;
 // coordenada do ponto p
 // transformado de coord polar para coord cartesiana
 // theta = PI * 1.75
 px = cos(destaque_theta) * raio;
 py = sin(destaque_theta) * raio;
  
 ppx = cos(destaque_theta) * raioDaHora;
 ppy = sin(destaque_theta) * raioDaHora;
  
 pppx = cos(destaque_theta) * raioDosNumeros;
 pppy = sin(destaque_theta) * raioDosNumeros;
 // corrige p(px,py) para p(px+cx,py+cy);
 px += cx;
 py += cy;
  
 ppx += cx;
 ppy += cy;
  
 pppx += cx;
 pppy += cy;
	
	noLoop();
  
}

function draw() {
	
 background(250);
 noFill();
 stroke(1);
	strokeWeight(4);
	fill(150, 150, 150);
 ellipse(cx, cy, 350);
	fill(255);
 ellipse(cx, cy, 305);
 fill(255);
 for (var angulo = 0; angulo <= 360; angulo += 30) {
   // transforma o angulo de
   // coord polar para coord cartesiana
   var x = cos(radians(angulo)) * raio;
   var y = sin(radians(angulo)) * raio;

   var xx = cos(radians(angulo)) * raioDaHora;
   var yy = sin(radians(angulo)) * raioDaHora;
   
   var xxx = cos(radians(angulo)) * raioDosNumeros;
   var yyy = sin(radians(angulo)) * raioDosNumeros;
   
   // desenha uma elipse na coord (x,y)
   // corrige (x,y) para (x+cx,y+cy)
	 line(x + cx, y + cy, xx+ cx, yy+cy);
   fill(0);
   textSize(40);

   text(hora, xxx + cx, yyy + cy);
	 noFill();
	 	if (hora<12){
			hora++;
			}
	 else{
	 	hora=1;
	 }
 }
	
 	// desenha uma elipse na coord (cx,cy)
  strokeWeight(1);
  fill(0);
 	ellipse(cx, cy, 20);
  noFill();
  fill(255);
  
  stroke(1);
  strokeWeight(5);
	stroke('red');
  line(cx, cy, cx + raioDosNumeros - 45, cy);
	stroke('black');
  line(cx, cy, pppx+30, pppy);  
  
  noStroke();
  fill(245,0,0);
  triangle(cx + raioDosNumeros - 30, cy, 250, cy + 10, 250, cy - 10);
	fill(0);
 	triangle(cx - raioDosNumeros + 10, cy, 130, cy + 10, 130, cy - 10);
}