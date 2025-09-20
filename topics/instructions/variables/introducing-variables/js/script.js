/**
 * variables
 * Alex Chardon
 * learning variables
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500,);
}


/**
draws circle*/
function draw() {
    background(53, 74, 120,);

    push();
    fill(mouseX, mouseY, 1000);
    noStroke();
    ellipse(mouseX, mouseY, 100, 100);
    pop();

}