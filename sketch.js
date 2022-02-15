let j;
function setup() {
  // put setup code here
  createCanvas(400,200)
  j=0
}

function draw() {
  // put drawing code here
  background(220)
  strokeWeight(2)
  line(200,200,200,0)

  //Kiri
  fill(255,200,12)
  strokeJoin(ROUND)
  strokeWeight(10)
  //(Titik Ujung kiri, Panjang a, titik tengah, panjang tengah, titik kanan, panjang kanan )
  triangle(15,185,100,15,185,185)
  //
  strokeWeight(2)
  fill(0,0,0)
  rect(95,60,10,80)
  ellipse(100,160,15,15)

  //Perulangan (for)
  for (var i=1; i<=400; i++){
    x=i
    y=300+20*Math.sin(PI*x/40)
    point(x,y)
  }
  var g=200+200*Math.sin(PI*j/20)
  var b=30+10*Math.sin(PI*j/20)
  var y=160+5*Math.sin(PI*j/70)
  var a=60+5*Math.sin(PI*j/70)
  j+=1
  //Kanan
  fill(255,g,b)
  strokeWeight(10)
  triangle(215,185,300,15,385,185)
  //
  strokeWeight(2)
  fill(0,0,0)
  rect(295,a,10,80)
  ellipse(300,y,15,15)
  //
 

}