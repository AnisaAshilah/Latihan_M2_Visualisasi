let j;
function setup() {
  // put setup code here
  createCanvas(400,200)
  j=0
}

function draw() {
  // put drawing code here
  background(233,236,235)
  strokeWeight(2)
  line(200,200,200,0)
  line(0,180,400,180)

  //jalann
  line(20,190,40,190)
  line(60,190,80,190)
  line(100,190,120,190)
  line(140,190,160,190)
  
  //Kiri
  strokeWeight(0)
  fill(255,255,255)
  rect(95,130,32,45)
  rect(95,150,50,25)
  triangle(125,130,125,150,145,150)
  fill(169,169,169)
  rect(35,125,80,50)
  
  //pala truk
  strokeWeight(2)
  line(115,130,127,130)
  line(127,130,145,150)
  line(127,150,145,150)
  line(127,135,127,150)
  line(145,150,145,175)
  line(115,175,145,175)

  //badan truk
  line(35,125,115,125)
  line(115,125,115,175)
  line(35,175,115,175)

  //buntut
  strokeWeight(2)
  stroke(255,0,0)
  line(20,165,40,165)
  line(10,165,15,165)
  line(25,155,45,155)
  line(25,145,35,145)
  line(20,145,15,145)
  line(22,135,42,135)
  line(18,135,20,135)

  strokeWeight(2)
  stroke(0,0,0)
  //roda
  strokeWeight(2)
  stroke(0,0,0)
  fill(255,255,255)
  ellipse(60,175,20,20)
  ellipse(130,175,20,20)
  //

  for (var i=1; i<=400; i++){
    x=i
    y=300+ 20*Math.sin(PI*x/20)
    point(x,y)
  }
  var y=265+5*Math.sin(PI*j/20)
  var r=230+10*Math.sin(PI*j/20)
  var a=230+15*Math.sin(PI*j/10)
  j+=1

  //Kanan
 
  strokeWeight(0)
  fill(255,255,255)
  rect(295,130,32,45)
  rect(295,150,50,25)
  triangle(325,130,325,150,345,150)
  fill(169,169,169)
  rect(235,125,80,50)
  
  //pala truk
  strokeWeight(2)
  line(315,130,327,130)
  line(327,130,345,150)
  line(327,150,345,150)
  line(327,135,327,150)
  line(345,150,345,175)
  line(315,175,345,175)

  //badan truk
  line(235,125,315,125)
  line(315,125,315,175)
  line(235,175,315,175)

  //jalann
  line(a,190,a+10,190)
  line(a+30,190,a+40,190)
  line(a+60,190,a+70,190)
  line(a+90,190,a+100,190)
  line(a+120,190,a+130,190)
  line(a+150,190,a+160,190)

  //buntut
  strokeWeight(2)
  stroke(255,0,0)
  line(r,165,240,165)
  line(r-10,165,215,165)
  line(r,155,245,155)
  line(r,145,235,145)
  line(r-10,145,215,145)
  line(r,135,242,135)
  line(r-10,135,220,135)

  strokeWeight(2)
  stroke(0,0,0)
  //roda
  strokeWeight(2)
  stroke(0,0,0)
  fill(255,255,255)
  ellipse(y,175,20,20)
  ellipse(y+60,175,20,20)
  //
 

}
