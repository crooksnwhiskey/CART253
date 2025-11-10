/**
 * This file contains the code to run *only* the original variation part of the program.
 * Note how it has its own draw, originalDraw(), and its own keyPressed, originalKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

/**
 * This will be called just before the original variation starts
 */
let originalBallx;
let originalBally;
const originalBall = {
    x: 320,
    y: 240,
    size: 100,
    fill: "#ffffffff",
    fills: {
        noOverlap: "#fefffbff",
        overlap: "#a4a4a3ff"
    }
};

let originalScore = 0;
let originalOverlap = false;


function originalSetup() {
    createCanvas(640, 480);

}

/**
 * This will be called every frame when the original variation is active
 */
function originalDraw() {
    background("#8a6b8aff");

    const d = dist(mouseX, mouseY, originalBall.x, originalBall.y);//checks distance between mouse and ball
    originalOverlap = d < originalBall.size / 2;

    if (originalOverlap) {
        originalBall.fill = originalBall.fills.overlap
    }
    else {
        originalBall.fill = originalBall.fills.noOverlap
    }
    originalDrawBall();
    originalShowScore();
}

/**
 * This will be called whenever a key is pressed while the original variation is active
 */
function originalKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the original variation is active
 */
function originalMousePressed() {

}
function originalDrawBall() {
    push();
    fill(originalBall.fill);
    ellipse(originalBall.x, originalBall.y, originalBall.size);
    pop();
}
function originalShowScore() {
    push();
    textAlign(LEFT, TOP);
    textSize(15);
    text("score: " + originalScore.toFixed(0), 10, 10);
    pop();
    if (originalOverlap) {
        originalScore += deltaTime / 100;
    }

}