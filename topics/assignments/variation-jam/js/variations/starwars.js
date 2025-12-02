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
    height: 20,
    width: 40,
    speed: 3
};
let weakspot = {
    offsetX: 0,
    offsetY: 30,
    size: 20

};
let lives = 3;

let starwarsState = "gameOn";

const num = 20;

function starwarsGameStates() {

    if (starwarsState === "end") {
        starwarsDrawEndscreen();
    }

}

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

    if (starwarsState === "end") {
        starwarsDrawEndscreen();
        return;

    }
    background(22, 45);
    starwarsDrawShip();
    starwarsMoveShip();
    starwarsDrawWeakspot();
    starwarsGameStates();


    for (let i = 0; i < num; i++) {
        let particle = particles[i];
        starwarsDrawParticle(particle);
        starwarsUpdateParticle(particle);
        starwarsCheckOverlap(particle);
    }
    push();
    text("Lives left: " + lives, 10, 20);
    pop();
}
function starwarsDrawParticle(particle) {

    stroke("rgba(111, 255, 0, 1)");
    ellipse(particle.x, particle.y, particle.size);


}
function starwarsUpdateParticle(particle) {
    if (random() < 0.2) {
        particle.size = random(0, 3);
    }
    particle.x -= 2;
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
    //base of ship
    noStroke();
    fill("#737373ff");
    ellipse(ship.x, ship.y, ship.size);
    pop();
    //lighter circle
    push();
    noStroke();
    fill(lerpColor(color("#4f4f4fff"), color("#2e2d2dff"), 0.7));
    ellipse(ship.x + 15, ship.y - 10, ship.size - 60);
    pop();
    //darker cirlce
    push();
    noStroke();
    fill(lerpColor(color("#4f4f4fff"), color("#2e2d2dff"), 0.3));
    ellipse(ship.x + 15, ship.y - 10, ship.size - 90);
    pop();


    ship.x = constrain(ship.x, 0, width);
    ship.y = constrain(ship.y, 0, height - 40);

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
function starwarsDrawWeakspot() {
    push();
    fill("#4a4a4aff");
    noStroke();
    ellipse(ship.x + weakspot.offsetX, ship.y + weakspot.offsetY, 10);
    pop();
}
/**
 * Handles the weakspot overlapping the fly
*/
function starwarsCheckOverlap(particle) {

    const weakspotX = ship.x + weakspot.offsetX;
    const weakspotY = ship.y + weakspot.offsetY;
    // Get distance from star to weakspot
    const d = dist(weakspotX, weakspotY, particle.x, particle.y);
    // Check if it's an overlap
    const damage = (d < weakspot.size / 2 + particle.size / 2);
    if (damage) {
        starReset(particle);
        lives = lives - 1
    }
    if (lives <= 0) {
        starwarsState = "end"
    }
}
function starReset(particle) {
    particle.x = width
    particle.y = random(height);

}
function starwarsDrawEndscreen() {

    background("rgba(0, 0, 0, 0.73)");
    push();
    textAlign(CENTER, CENTER);
    textSize(40)
    text("GAME OVER", width / 2, height / 2);
    pop();

    push();
    textAlign(CENTER, CENTER);
    textSize(20)
    text("Refresh to Restart", width / 2, 300);
    pop();
}