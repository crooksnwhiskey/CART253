/**
 * This file contains the code to run *only* the starwars variation part of the program.
 * Note how it has its own draw, starwarsDraw(), and its own keyPressed, starwarsKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

/**
 * This will be called just before the starwars variation starts
 */


/**
 * This will be called whenever a key is pressed while the starwars variation is active
*/
let particles = [];
let ship = {
    x: 30,
    y: 200,
    size: 100,
    speed: 3
}
const num = 20;

function starwarsSetup() {
    createCanvas(400, 400);

    for (let i = 0; i < num; i++) {
        const particle = {
            x: random(width),
            y: random(height),
            size: random(0, 3)
        }
        particles.push(particle);
    }
}

function starwarsDraw() {
    background(22);
    starwarsDrawShip();
    starwarsMoveShip();


    for (let i = 0; i < num; i++) {
        let particle = particles[i];
        starwarsDrawParticle(particle);
        starwarsUpdateParticle(particle);
    }
}
function starwarsDrawParticle(particle) {

    stroke("rgb(255,253,187)");
    ellipse(particle.x, particle.y, particle.size);


}
function starwarsUpdateParticle(particle) {
    if (random() < 0.2) {
        particle.size = random(0, 3);
    }
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




function starwarsKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the starwars variation is active 
 */
function starwarsMousePressed() {

}

function starwarsDrawShip() {
    push();
    strokeWeight(2);
    stroke(0)
    fill("#4a4a4cff");
    ellipse(ship.x, ship.y, ship.size);
    pop();

}
function starwarsMoveShip() {
    if (keyIsDown(87)) {
        ship.y -= ship.speed
    }
    if (keyIsDown(83)) {
        ship.y += ship.speed
    }
    if (keyIsDown(65)) {
        ship.x -= ship.speed
    }
    if (keyIsDown(68)) {
        ship.x += ship.speed
    }
}