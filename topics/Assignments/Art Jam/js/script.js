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

let box = {//info for the music player base
    x: 70,
    y: 350,
    width: 150,
    height: 80,
    r: 0,
    g: 0,
    b: 0
};
let skyChange = 0.2;//sky change variable
/**
 * creates a canvas
*/

let pauseButton
let playButton

function setup() {

    createCanvas(640, 480);
    background(240, 235, 235);//wall colour

    pauseButton = createButton("||"); // this Is new, I got it from p5.js
    pauseButton.size(25, 25);
    pauseButton.mousePressed(pauseSong);
    pauseButton.position(150, -80, 'relative');



    playButton = createButton("I>"); // this Is new, I got it from p5.js
    playButton.size(25, 25);
    playButton.mousePressed(playSong);
    playButton.position(110, -105, 'relative');


}



/**
 * draws myself in a room at a desk
*/
function draw() {

    drawOutside();//draws the outside world changing
    drawWindow(); // draws the window frame
    drawHood();//draws hood
    drawFace();//draws void of a face
    drawDesk(); // draws the desk
    drawWindowBars();//keeps me locked up
    boomBox();



}

function drawOutside() {

    drawSky();
    function drawSky() {
        //draws the sky colour changing from night to day

        sky.b += skyChange;

        if (sky.b >= 130) {
            skyChange = -1;

        }
        else if (sky.b <= 0) {
            skyChange = 1;
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
function drawHood() { // draws green hood
    push();
    fill("#202f17f3")

    ellipse(450, 400, 200, 500);
    pop();
}
function drawFace() { // draws face
    push();
    fill("#000000f3")
    noStroke();
    ellipse(450, 400, 175, 475);
    pop();

    push();//left eye
    fill("#7a0000f3")
    noStroke();
    ellipse(425, 250, 10);
    pop();

    push();//right eye
    fill("#7a0000f3")
    noStroke();
    ellipse(475, 250, 10);
    pop();
}
function drawDesk() {// draws the desk
    push();
    fill("#8c8279ff");
    rect(30, 400, 580, 200);
    pop();
}
function drawWindowBars() {
    push();
    fill("#575757ff");
    rect(70, 50, 10, 200);
    pop();
    push();
    fill("#575757ff");
    rect(105, 50, 10, 200);
    pop();
    push();
    fill("#575757ff");
    rect(145, 50, 10, 200);
    pop();
    push();
    fill("#575757ff");
    rect(180, 50, 10, 200);
    pop();

}
function boomBox() {

    push();
    noStroke();
    fill(0);
    rect(box.x, box.y, box.width, box.height);
    pop();
}
function playSong() {

}
function pauseSong() {

}