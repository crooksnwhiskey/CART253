/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let bird = {
    x: 120,
    y: 480,
    size: 50,
    velocity: {
        x: 1,
        y: -2
    },
    minVelocity: {
        x: -3,
        y: -2
    },
    maxVelocity: {
        x: 3,
        y: 2
    },
    acceleration: {
        x: 0.025,
        y: -0.025
    }
};

function setup() {
    createCanvas(640, 480)
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);

    bird.velocity.x += bird.acceleration.x;
    bird.velocity.y += bird.acceleration.y;

    bird.velocity.x = constrain(bird.velocity.x, bird.minVelocity.x, bird.maxVelocity.x);
    bird.velocity.y = constrain(bird.velocity.y, bird.minVelocity.y, bird.maxVelocity.y);

    bird.x += bird.velocity.x;
    bird.y += bird.velocity.y;

    push();
    fill(255, 98, 99);
    noStroke();
    ellipse(bird.x, bird.y, bird.size);
    pop();
}