/**
 * Landscape Activity
 * Alex Chardon
 * 
 * using basic shapes to draw a landscape
 * 
 */

"use strict";

/**
 * creating a canvas
*/
function setup() {

    createCanvas(800, 600);
    frameRate(30)
}


/**
 * draws the landscape
*/
function draw() {

    background(100, 149, 237);
    drawSun();
    drawLand();


}
function drawSun() {
    push();
    fill("yellow");
    noStroke();
    ellipse(400, 500, 700);


    pop();
}
function drawLand() {
    push();
    fill("#a3c585");
    noStroke();
    rect(0, 500, 800, 200,);


    pop();
}