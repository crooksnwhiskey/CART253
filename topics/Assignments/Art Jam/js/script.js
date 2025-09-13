/**
 * Me Doing This Assignment
 * Alex Chardon
 * 
 * drawing a self portrait that accurately shows myself doing this assignment
 */

"use strict";

/**
 * creates a canvas
*/
function setup() {

    createCanvas(640, 480);

}


/**
 * draws myself in a room at a desk
*/
function draw() {

    background(240, 235, 235);//wall colour
    drawDesk(); // draws the desk

}
function drawDesk() {
    push();
    fill("#8e857c");
    rect(30, 400, 580, 200);
    pop();
}