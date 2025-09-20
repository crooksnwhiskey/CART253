/**
 * The Blank Page
 * Alex Chardon
 * 
 * A piece of paper on a brown desk
 * non-interactive
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    //once at the beginning of the program
    //create the canvas at normal resolution
    createCanvas(640, 480);
}

/**
 * Draws the desk ad paper
 */
function draw() {
    // Every frame
    //the brown desk
    background(73, 64, 58);
    //the blank sheet of paper
    rect(200, 80, 240, 320);
}