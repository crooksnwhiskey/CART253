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

let skyChange = 1;//sky change variable
let skyDirection = 1;//I need this to make the sky colour loop change directions
/**
 
*/

let pauseButton;
let playButton;

let song;
function preload() {
    song = loadSound("assets/sounds/bird.wav");
};

let creature = {
    x: 370,
    y: 130,
    width: 30,
    height: 20,
    direction: 1
};

let from;
let to;
let interA;
let interB;

function setup() {

    createCanvas(640, 480);

    pauseButton = createButton("||"); // this Is new, I got it from p5.js
    pauseButton.size(25, 25);//size of buttons
    pauseButton.mousePressed(pauseSong);
    pauseButton.position(145, -80, 'relative');// makes buttons move with canvas (help from michael)



    playButton = createButton("I>"); // this Is new, I got it from p5.js
    playButton.size(25, 25);
    playButton.mousePressed(playSong);
    playButton.position(115, -105, 'relative');


    from = color(140, 190, 255); // sets starting sky colour
    to = color(10, 20, 100);//ending sky colour

    //creates intermediate colours
    interA = lerpColor(from, to, 0.33);
    interB = lerpColor(from, to, 0.66);


}



/**
 * draws myself in a room at a desk
*/
function draw() {
    background(240, 235, 235);//wall colour




    drawOutside();//draws the outside world changing
    drawWindow(); // draws the window frame
    drawBackgroundHair();//draws the hair behind my head
    drawMe();//draws me
    drawFace();//draws face s
    drawHair();//draws my lucious hair
    drawDesk(); // draws the desk
    drawWindowBars();//keeps me locked up
    boomBox();//music box
    drawShelf();//draws shelf
    drawCreature();//draws interactive mouse

    moveCreature(); //moves the creature away from user input




}

function drawOutside() {//draws the sky colour changing from night to day
    //I got help from Michael here
    drawSky();
    function drawSky() {

        skyChange += 0.005 * skyDirection;// each frame, im moving 0.005 up on a slider from 0-1 

        if (skyChange > 1 || skyChange < 0) {// if the skychange variable is bigger than 1 or less than 0 it triggers skyDirection,
            skyDirection *= -1// multiplies the direction by a negative, changing the direction
        }

        let bgColour = lerpColor(from, to, skyChange);
        // draws the sky
        push();
        fill(bgColour);
        console.log();
        noStroke();
        rect(sky.x, sky.y, sky.width, sky.height);
        pop();


    }
}
function drawWindow() {

    //I realized after doing all this I couldve just drawn one rectangle oops

    //left vertical
    push();
    fill("white");
    noStroke();
    rect(50, 50, 10, 200);
    pop();
    //right vertical
    push();
    fill("white");
    noStroke();
    rect(200, 50, 10, 200);
    pop();
    //top horizontal
    push();
    fill("white");
    noStroke();
    rect(50, 40, 160, 10);
    pop();
    //bottom top
    push();
    fill("white");
    noStroke();
    rect(30, 250, 200, 10);
    pop();
    //bottom bottom
    push();
    fill("white");
    noStroke();
    rect(50, 261, 160, 10);
    pop();


}
function drawMe() { // draws me

    drawBody();//draws my body
    drawHead();//draws neck and head
    drawArms();//draws arms

    function drawBody() {

        push();
        strokeWeight(2);
        fill("#122f02ff");
        rect(380, 270, 145, 200, 30);
        pop();

    }
    function drawHead() {
        //draws neck
        push();
        strokeWeight(2);
        fill("#b3a189ff");
        rect(435, 240, 40, 50, 40);
        pop();

        push();// draws head shape
        strokeWeight(1);
        fill("#e6caa3ff");
        ellipse(455, 220, 90, 110);
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
    drawEyes();//draws eyes
    drawNose();//draws nose
    drawMouth();//draws mouth line
    drawEyebrows();//draws eyebrows

    function drawEyes() {
        push();//draws eyebag L
        noStroke();
        fill("#947557ff");
        arc(eyes.x, eyes.y + 3, eyes.width, eyes.height + 5, 0, PI);
        pop();

        push();//draws eyebag R
        noStroke();
        fill("#947557ff");
        arc(eyes.x + 30, eyes.y + 3, eyes.width, eyes.height + 5, 0, PI);
        pop();

        push();//draws eye L
        arc(eyes.x, eyes.y, eyes.width, eyes.height, 0, PI);
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
function drawEyebrows() {

    push();
    strokeWeight(4);
    fill(0);
    line(425, 215, 450, 215);
    line(460, 215, 485, 215);
    pop();
}
function drawHair() {//draws my hair
    let hair = {
        x: 420,
        y: 195,
        size: 30
    }
    push();
    fill(0);
    ellipse(hair.x, hair.y, hair.size);
    pop();

    push();
    fill(0);
    ellipse(hair.x + 15, hair.y - 15, hair.size);
    pop();

    push();
    fill(0);
    ellipse(hair.x + 35, hair.y - 20, hair.size);
    pop();

    push();
    fill(0);
    ellipse(hair.x + 55, hair.y - 15, hair.size);
    pop();

    push();
    fill(0);
    ellipse(hair.x + 70, hair.y, hair.size);
    pop();

    push();
    fill(0);
    ellipse(hair.x + 35, hair.y - 5, hair.size);
    pop();

    push();
    fill(0);
    ellipse(hair.x + 50, hair.y - 5, hair.size);
    pop();

    push();
    fill(0);
    ellipse(hair.x + 20, hair.y - 5, hair.size);
    pop();

    push();
    fill(0);
    ellipse(hair.x - 7, hair.y + 15, hair.size / 2);
    pop();

    push();
    fill(0);
    ellipse(hair.x + 77, hair.y + 15, hair.size / 2);
    pop();


}

function drawDesk() {// draws the desk
    push();
    strokeWeight(2);
    fill("#8c8279ff");
    rect(30, 400, 580, 200);
    pop();
}
function drawWindowBars() {//draws the bars on the window
    push();
    strokeWeight(2);
    fill("#575757ff");
    rect(70, 50, 10, 200);
    pop();
    push();
    strokeWeight(2);
    fill("#575757ff");
    rect(105, 50, 10, 200);
    pop();
    push();
    strokeWeight(2);
    fill("#575757ff");
    rect(145, 50, 10, 200);
    pop();
    push();
    strokeWeight(2);
    fill("#575757ff");
    rect(180, 50, 10, 200);
    pop();

}
function boomBox() {// creates the music player that is interactive

    push();//draws the frame
    strokeWeight(2);
    fill(70);
    rect(box.x, box.y, box.width, box.height, 6,);
    pop();

    push();//left speaker outer
    strokeWeight(2);
    fill(10);
    ellipse(110, 377, 50);
    pop();

    push();//right speaker outer
    strokeWeight(2);
    fill(10);
    ellipse(180, 377, 50);
    pop();

    push();//right speaker inner
    strokeWeight(2);
    fill(200);
    ellipse(180, 377, 30);
    pop();

    push();//right speaker outer
    strokeWeight(2);
    fill(200);
    ellipse(110, 377, 30);
    pop();

    push();//draws handel
    strokeWeight(2);
    fill(100);
    rect(105, 321, 10, 30, 15,);
    pop();

    push();//draws handel
    strokeWeight(2);
    fill(100);
    rect(175, 321, 10, 30, 15,);
    pop();

    push();//draws handel
    strokeWeight(2);
    fill(100);
    rect(105, 320, 80, 10, 15,);
    pop();
}
function playSong() {
    if (!song.isPlaying()); {//checks if the song isnt playing
        song.loop();//if its not, it plays the song
    }
}
function pauseSong() {
    //checks if song is playing
    if (song.isPlaying()); {
        song.pause()// pauses song if playing
    }
}
function drawShelf() {//draws the floating shelf
    push();
    strokeWeight(2);
    fill("#bb6f48ff");
    rect(350, 130, 200, 10);
    pop();

}
function drawCreature() {//draws the little mouse

    push();// body
    fill("rgba(150, 150, 154, 1)");
    arc(creature.x, creature.y, creature.width, creature.height, PI, 0);
    pop();

    push();//eye
    ellipse(creature.x - 10, creature.y - 5, 5);
    pop();
    push();//eye PUPIL
    fill(0);
    ellipse(creature.x - 11, creature.y - 5, 3);
    pop();

    push();//nose
    strokeWeight(0.5);
    fill("pink");
    ellipse(creature.x - 15, creature.y - 2, 3);
    pop();

    push();//tail
    noFill();
    strokeWeight(1);
    bezier(creature.x + 15, creature.y - 2, creature.x + 30, creature.y - 5, creature.x - 20, creature.y - 20, creature.x + 15, creature.y - 15);
    pop();

    push();//ear
    strokeWeight(1);
    fill("rgba(150, 150, 154, 1)");
    ellipse(creature.x - 7, creature.y - 10, 5);
    pop();

    push();//ear
    strokeWeight(1);
    fill("rgba(150, 150, 154, 1)");
    ellipse(creature.x - 5, creature.y - 10, 5);
    pop();

}

function moveCreature() {// moves the mouse according to the users input
    const d = dist(mouseX, mouseY, creature.x, creature.y);


    if (d < 70) {
        if (mouseX < creature.x) {
            creature.x += 1;


        }
        else {
            creature.x -= 1;

        }
    }
    creature.x = constrain(creature.x, 370, 530);
}
function drawBackgroundHair() {
    // draws back of hair... I had to sneak this in somewhere
    push();
    fill(0)
    ellipse(455, 225, 100, 60);
    pop();
}
