/**
 * Phraug
 * Alex Chardon
 * 
 * A game of catching flies with your Phraug-tongue
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Click to launch the tongue
 * - Catch flies
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";

let titleScreen = true;
let gameOn = false;
let endScreen = false;
let startButton = {
    x: 300,
    y: 300,
    width: 200,
    height: 100,
    speed: 6

};


// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 500,
        size: 150

    },
    // The frog's tongue has a position, size, speed, and state
    rotation: 0,
    tongue: {
        x: undefined,
        y: undefined,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    },
};

// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 200, // Will be random
    size: 10,
    speed: 3
};

/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);
    frog.tongue.y = frog.body.y - 60;

    // Give the fly its first random position
    resetFly();
}

function draw() {
    if (titleScreen) {
        drawTitleScreen();
    }
    else if (gameOn) {
        runGame();
    }

}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Move the fly
    fly.x += fly.speed;
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
    }
}

/**
 * Draws the fly as a black circle
 */
function drawFly() {
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(0, 300);
}

/**
 * keeps the frog shacklcaed
 */
function moveFrog() {
    frog.body.x = width / 2;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        frog.tongue.y = frog.body.y - 60;
        // set tongue to mouth?
    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y -= frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= frog.body.y - 500) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= frog.body.y - 60) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {

    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    push();
    translate(frog.body.x, frog.body.y)
    rotate(frog.rotation)
    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    ellipse(0, 0, frog.body.size);
    pop();
    //draw frog mouth
    push();
    fill("#2f1528ff");
    noStroke();
    ellipse(0, - 60, frog.body.size - 120);
    pop();

    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size / 2 + fly.size / 2);
    if (eaten) {
        // Reset the fly
        resetFly();
        // Bring back the tongue
        frog.tongue.state = "inbound";
    }
}

/**
 * Launch the tongue on click (if it's not launched yet)
 * also makes the start button clickable
 */
function mousePressed() {
    if (frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
    if (titleScreen) {
        if (mouseX < startButton.x + startButton.width / 2 && mouseY < startButton.y + startButton.height / 2
            && mouseX > startButton.x - startButton.width / 2 && mouseY > startButton.y - startButton.height / 2
        ) {
            titleScreen = false;
            gameOn = true;
        }
    }

}
/**
 * adds a title screen to the game
 */
function drawTitleScreen() {
    push();
    background("rgba(44, 103, 41, 1)");//sets background
    textAlign(CENTER, CENTER);
    textSize(50);
    fill("#bff370ff");
    text("Phraug", width / 2, height / 8);
    pop();

    drawStartButton();
    moveStartButton();
}
/**draws interactive start button */
function drawStartButton() {
    push();
    rectMode(CENTER); //so useful, makes things relative to the senter of the rect
    strokeWeight(4);
    fill("#bff370ff");
    rect(startButton.x, startButton.y, startButton.width, startButton.height, 30);
    pop();
    push();
    fill("black");
    textAlign(CENTER, CENTER);
    textSize(30)
    text("START", startButton.x, startButton.y);
    pop();
}
/** 
 * controls the start button running away from cursor
 */
function moveStartButton() {
    const d = dist(mouseX, mouseY, startButton.x, startButton.y);

    if (d < 150) {
        if (mouseX < startButton.x) {
            startButton.x += startButton.speed;
        }
        if (mouseY < startButton.y) {
            startButton.y += startButton.speed;
        }
        if (mouseX > startButton.x) {
            startButton.x -= startButton.speed;
        }
        if (mouseY > startButton.y) {
            startButton.y -= startButton.speed;
        }

        startButton.x = constrain(startButton.x, startButton.width / 2, width - startButton.width / 2);
        startButton.y = constrain(startButton.y, startButton.height / 2, height - startButton.height / 2);
    }
}
/**
 * draws the entire gameplay
 */
function runGame() {
    background("#87ceeb");
    moveFly();
    drawFly();
    moveFrog();
    moveTongue();
    drawFrog();
    checkTongueFlyOverlap();

    //rotates the frog depending on the key that is pressed 
    if (keyIsDown(65)) {
        frog.rotation -= .05
    }
    if (keyIsDown(68)) {
        frog.rotation += .05
    }
    frog.rotation = constrain(frog.rotation, -PI / 3, PI / 3);
}
