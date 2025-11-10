/**
 * This file contains the code to run *only* the movement variation part of the program.
 * Note how it has its own draw, movementDraw(), and its own keyPressed, movementKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

/**
 * This will be called just before the movement variation starts
 */
let movementBallx;
let movementBally;
const movementBall = {
    x: 320,
    y: 240,
    size: 100,
    speed: undefined,
    fill: "#ffffffff",
    fills: {
        noOverlap: "#fefffbff",
        overlap: "#a4a4a3ff"
    }
};

let movementScore = 0;
let movementOverlap = false;


function movementSetup() {
    createCanvas(640, 480);

}

/**
 * This will be called every frame when the movement variation is active
 */
function movementDraw() {
    background("#8a6b8aff");

    const d = dist(mouseX, mouseY, movementBall.x, movementBall.y);//checks distance between mouse and ball
    movementOverlap = d < movementBall.size / 2;

    if (movementOverlap) {
        movementBall.fill = movementBall.fills.overlap
    }
    else {
        movementBall.fill = movementBall.fills.noOverlap
    }
    movementDrawBall();
    movementShowScore();
    movementBallMove();
}

/**
 * This will be called whenever a key is pressed while the movement variation is active
 */
function movementKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the movement variation is active
 */
function movementMousePressed() {

}
function movementDrawBall() {
    push();
    fill(movementBall.fill);
    ellipse(movementBall.x, movementBall.y, movementBall.size);
    pop();
}
function movementShowScore() {
    push();
    textAlign(LEFT, TOP);
    textSize(15);
    text("score: " + movementScore.toFixed(0), 10, 10);
    pop();
    if (movementOverlap) {
        movementScore += deltaTime / 100;
    }

}
function movementBallMove() {
    movementBall.x += random(1, 5);

    movementBall.y += sin(60);

    if (movementBall.x / 2 > width) {
        movementBall.x -= random(1, 5);
    }
}