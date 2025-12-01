/**
 * This file contains the code to run *only* the grow variation part of the program.
 * Note how it has its own draw, growDraw(), and its own keyPressed, growKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

/**
 * This will be called just before the grow variation starts
 */
let growBallx;
let growBally;
const growBall = {
    x: 320,
    y: 240,
    size: 100,
    fill: "#ffffffff",
    fills: {
        noOverlap: "#fefffbff",
        overlap: "#a4a4a3ff"
    }
};

let growScore = 0;
let growOverlap = false;


function growSetup() {
    createCanvas(640, 480);

}

/**
 * This will be called every frame when the grow variation is active
 */
function growDraw() {
    background("#8a6b8aff");

    const d = dist(mouseX, mouseY, growBall.x, growBall.y);//checks distance between mouse and ball
    growOverlap = d < growBall.size / 2;

    if (growOverlap) {
        growBall.fill = growBall.fills.overlap
    }
    else {
        growBall.fill = growBall.fills.noOverlap
    }
    growDrawBall();
    growShowScore();
}

/**
 * This will be called whenever a key is pressed while the grow variation is active
 */
function growKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the grow variation is active
 */
function growMousePressed() {

}
function growDrawBall() {
    push();
    fill(growBall.fill);
    ellipse(growBall.x, growBall.y, growBall.size);
    pop();
}
function growShowScore() {
    push();
    textAlign(LEFT, TOP);
    textSize(15);
    text("score: " + growScore.toFixed(0), 10, 10);
    pop();
    if (growOverlap) {
        growScore += deltaTime / 100;
    }

}