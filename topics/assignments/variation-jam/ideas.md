###Starry sky with movement... ask about pulse speed and flow field

let particles = [];
const num = 90;

function setup() {
  createCanvas(400, 400);
  
  for (let i = 0; i < num; i ++){
    particles.push(createVector(random(width),random(height)));
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
  ellipse(particle.x,particle.y,(random(0,3)));
  

}
function updateParticle(particle) {
  particle.x -= 1;
  // Wrap if needed
  if (particle.x < 0) {
    particle.x = width;
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