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
    drawOutside();//draws the outside world changing
    drawWindow(); // draws the window frame

}
function drawDesk() {
    push();
    fill("#8e857c");
    rect(30, 400, 580, 200);
    pop();
}
function drawOutside() {

}
function drawWindow() {
    //left vertical
    push();
    fill("white");
    noStroke();
    rect(50, 50, 10, 200)
    pop();
    //right vertical
    push();
    fill("white");
    noStroke();
    rect(200, 50, 10, 200)
    pop();
    //top horizontal
    push();
    fill("white");
    noStroke();
    rect(50, 39, 160, 10)
    pop();
    //bottom top
    push();
    fill("white");
    noStroke();
    rect(30, 250, 200, 10)
    pop();
    //bottom bottom
    push();
    fill("white");
    noStroke();
    rect(50, 261, 160, 10)
    pop();
}