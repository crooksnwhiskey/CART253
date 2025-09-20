/**
 * Me Doing This Assignment
 * Alex Chardon
 * 
 * drawing a self portrait that accurately shows myself doing this assignment
 */

"use strict";

let sky = { //info for the sky
    x: 60,
    y: 50,
    width: 140,
    height: 200,
    r: 0,
    g: 0,
    b: 130


};
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
    fill("#8c8279ff");
    rect(30, 400, 580, 200);
    pop();
}
function drawOutside() {
    drawSky();

    function drawSky() {
        //draws the sky colour changing from night to day

        if (sky.b >= 130) {
            sky.b += -.2;

        }
        else if (sky.b <= 0) {
            sky.b += .2;
        }
        // draws the sky
        push();
        fill(sky.r, sky.g, sky.b);
        noStroke();
        rect(sky.x, sky.y, sky.width, sky.height);
        pop();


    }
}
function drawWindow() {

    //I realized after doing all this I couldve just drawn one rectangle

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
    rect(50, 40, 160, 10)
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

function drawBody() {

}
