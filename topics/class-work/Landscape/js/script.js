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
    drawBall();
    drawNet();
    drawMan();

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
function drawBall() {
    push();
    fill("orange");
    ellipse(700, 100, 30);
    pop();
}
function drawNet() {
    push();//pole
    fill("grey")
    rect(650, 400, 20, 150);
    pop();

    push();//back
    rect(550, 250, 200, 150);
    pop();

    push();//rim
    fill("red");
    rect(620, 375, 80, 10);
    pop();
}
function drawMan() {
    //left leg

    push();
    fill("black")
    rect(400, 450, 10, 60);
    pop();
    //right leg
    push();
    fill("black")
    rect(420, 450, 10, 60);
    pop();
    //torso
    push();
    fill("black")
    rect(400, 400, 30, 60);
    pop();
    //arm
    push();
    fill("black")
    rect(430, 350, 10, 60);
    pop();
    //hand
    push();
    fill("black")
    rect(440, 350, 15, 10);
    pop();
    //face
    push();
    fill("black");
    ellipse(410, 390, 30)
    pop();
}