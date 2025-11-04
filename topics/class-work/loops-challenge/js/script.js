/**
 * loopsy daisy
 * alex chardon
 * 
 *
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
    frameRate(2)
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");


    let x = 0;
    let width = random(1, 500);
    let height = random(1, 500);
    while (x <= width) {
        stroke(random(0, 255));
        line(x, 0, 0, height);
        x += random(1, 5);
    }
    let y = 0;
    while (y <= height) {
        stroke(random(0, 255));
        line(0, y, width, 0);
        y += random(1, 5);
    }
}

