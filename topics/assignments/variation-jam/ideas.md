###Starry sky with movement... ask about pulse speed and flow field
let particles = [];
const num = 90;

function setup() {
  createCanvas(400, 400);
  
  for (let i = 0; i < num; i ++){
    const particle = {
      x: random(width),
      y: random(height),
      size: random(0,3)
    }
    particles.push(particle);
  }
}

function draw() {
  background(22);
  for (let i = 0;i < num;i ++){
    let particle = particles[i];
    drawParticle(particle);
    updateParticle(particle);
  }
}
function drawParticle(particle){
  
  stroke("rgb(255,253,187)");
  ellipse(particle.x,particle.y,particle.size);
  

}
function updateParticle(particle) {
  if(random()<0.2)

     {
     particle.size = random(0,3);}
  particle.x -= 1;
  // Wrap if needed
  if (particle.x < 0) {
    particle.x = width;
    particle.y = random(height);
  }
  else if (particle.x > width) {
    particle.x = 0;
  }
  if (particle.y < 0) {
    particle.y = height;
  }
  else if (particle.y > height) {
    particle.y = 0;
  }
}





flow map but i kind of messed it up 

let particles = [];
const num = 3000;
const noiseScale = 0.005
;

function setup() {
  createCanvas(400, 400);
  
  for (let i = 0; i < num; i ++){
    particles.push(createVector(random(width),random(height)));
  }
}

function draw() {
  background(22,10);
  for (let i = 0;i < num;i ++){
    let particle = particles[i];
    drawParticle(particle);
    updateParticle(particle);
  }
}
function drawParticle(particle){
  
  stroke("rgb(255,253,187)");
  ellipse(particle.x,particle.y,(random(0,3)));
  

}
function updateParticle(particle) {
  let n = noise(particle.x*noiseScale,particle.y*noiseScale);
  
  let a = TAU * n;
  particle.x += cos(a);
  particle.y += sin(a);
  // Wrap if needed
  if (particle.x < 0) {
    particle.x = random(width);
    particle.y = random(height);
  }
  else if (particle.x > width) {
    particle.x = 0;
  }
  if (particle.y < 0) {
    particle.y = height;
  }
  else if (particle.y > height) {
    particle.y = 0;
  }
}




ideas for versions:

shrinking+growing circle(if it gets too small or too big game over)
red light green light
avoid the circle
