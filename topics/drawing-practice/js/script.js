/**
 * Record Drawing
 * Alex Chardon
 * 
 * displays a simple record
 */

"use strict";

/**
 * creates a square background
*/
function setup() {
    createCanvas(640, 640);
}


/**
 * displays the record
*/
function draw() {
    //background of the record
    background(90, 12, 39);
    //main part of the record
    push();
    fill("#000000");
    stroke(25);
    ellipse(320, 320, 480);
    pop();
    //inner part of the record
    push();
    fill(50);
    noStroke();
    ellipse(320, 320, 140, 140);
    pop();
    //hole of the record
    push();
    fill("black");
    noStroke();
    ellipse(320, 320, 20);
    pop();
}