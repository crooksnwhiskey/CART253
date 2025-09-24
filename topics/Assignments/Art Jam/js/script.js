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
    song = loadSound("assets/sounds/bird.wav");// took forever to figure out how to load this sound

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

    function drawBody() {

        push();
        noStroke();
        fill("#122f02ff");
        rect(400, 270, 110, 200, 30);
        pop();

    }
    function drawHead() {
        //draws neck
        push();
        noStroke();
        fill("#c6ad8bff");
        rect(435, 240, 40, 50, 40);
        pop();

        push();
        noStroke();
        fill("#e6caa3ff");
        ellipse(455, 220, 90, 110)
        pop();


    }
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