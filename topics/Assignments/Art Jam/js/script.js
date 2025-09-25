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

*/

let pauseButton;
let playButton;

let song;
function preload() {
    song = loadSound("assets/sounds/bird.wav");
}



function setup() {

    createCanvas(640, 480);
    background(240, 235, 235);//wall colour

    pauseButton = createButton("||"); // this Is new, I got it from p5.js
    pauseButton.size(25, 25);//size of buttons
    pauseButton.mousePressed(pauseSong);
    pauseButton.position(145, -80, 'relative');// makes buttons move with canvas (help from michael)



    playButton = createButton("I>"); // this Is new, I got it from p5.js
    playButton.size(25, 25);
    playButton.mousePressed(playSong);
    playButton.position(115, -105, 'relative');




}



/**
 * draws myself in a room at a desk
*/
function draw() {

    drawOutside();//draws the outside world changing
    drawWindow(); // draws the window frame
    drawMe();//draws me
    drawFace();//draws face
    drawHair();//draws my lucious hair
    drawDesk(); // draws the desk
    drawWindowBars();//keeps me locked up
    boomBox();//music box



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
function drawMe() { // draws me

    drawBody();//draws my body
    drawHead();//draws neck and head
    drawArms();//draws arms

    function drawBody() {

        push();
        noStroke();
        fill("#122f02ff");
        rect(380, 270, 145, 200, 30);
        pop();

    }
    function drawHead() {
        //draws neck
        push();
        noStroke();
        fill("#c6ad8bff");
        rect(435, 240, 40, 50, 40);
        pop();

        push();// draws head shape
        noStroke();
        fill("#e6caa3ff");
        ellipse(455, 220, 90, 110)
        pop();


    }
    function drawArms() {//draws the black lines as my arms
        push();
        noStroke();
        fill("#000000ff");
        rect(415, 320, 2, 200);
        pop();
        push();
        noStroke();
        fill("#000000ff");
        rect(490, 320, 2, 200);
        pop();

    }

}
function drawFace() {
    let eyes = {
        x: 440,
        y: 220,
        width: 25,
        height: 20

    }
    drawEyes();
    drawNose();
    drawMouth();

    function drawEyes() {
        push();//draws eyebag L
        noStroke();
        fill("#947557ff")
        arc(eyes.x, eyes.y + 3, eyes.width, eyes.height + 5, 0, PI);
        pop();

        push();//draws eyebag R
        noStroke();
        fill("#947557ff")
        arc(eyes.x + 30, eyes.y + 3, eyes.width, eyes.height + 5, 0, PI);
        pop();

        push();//draws eye L
        arc(eyes.x, eyes.y, eyes.width, eyes.height, 0, PI)
        pop();

        push();//draws pupil L
        fill(0);
        arc(eyes.x, eyes.y, eyes.width / 2, eyes.height / 2, 0, PI);
        pop();

        push();//draws eye R
        arc(eyes.x + 30, eyes.y, eyes.width, eyes.height, 0, PI);
        pop();

        push();//draws pupil R
        fill(0);
        arc(eyes.x + 30, eyes.y, eyes.width / 2, eyes.height / 2, 0, PI);
        pop();
    }
    function drawNose() {//draws nose
        push();
        fill("#e6caa3ff");
        arc(455, 230, 30, 10, QUARTER_PI * 2, QUARTER_PI * 5);
        pop();
    }
    function drawMouth() {
        line(440, 250, 470, 250)
    }
}
function drawHair() {

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

    push();//draws the frame
    strokeWeight(2);
    fill(70);
    rect(box.x, box.y, box.width, box.height, 6,);
    pop();

    push();//left speaker outer
    strokeWeight(2);
    fill(10);
    ellipse(110, 377, 50)
    pop();

    push();//right speaker outer
    strokeWeight(2);
    fill(10);
    ellipse(180, 377, 50)
    pop();

    push();//right speaker inner
    strokeWeight(2);
    fill(200);
    ellipse(180, 377, 30)
    pop();

    push();//right speaker outer
    strokeWeight(2);
    fill(200);
    ellipse(110, 377, 30)
    pop();

    push();//draws handel
    strokeWeight(2);
    fill(100);
    rect(105, 321, 10, 30, 15,)
    pop();

    push();//draws handel
    strokeWeight(2);
    fill(100);
    rect(175, 321, 10, 30, 15,)
    pop();

    push();//draws handel
    strokeWeight(2);
    fill(100);
    rect(105, 320, 80, 10, 15,)
    pop();
}
function playSong() {
    if (!song.isPlaying()) {//checks if the song isnt playing
        song.loop();//if its not, it plays the song
    }
}
function pauseSong() {
    //checks if song is playing
    if (song.isPlaying()) {
        song.pause()// pauses song if playing
    }
}


//https://p5js.org/examples/shapes-and-color-shape-primitives/