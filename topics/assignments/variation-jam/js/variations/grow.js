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
let growState = "gameOn";
const growBall = {
    x: 320,
    y: 320,
    size: 200,
    fill: 200,
};

let growScore = 0;
let growOverlap = false;

function growGameStates() {

    if (growState === "end") {
        growDrawEndscreen();
        return;
    }

}

function growSetup() {
    createCanvas(640, 640);

}

/**
 * This will be called every frame when the grow variation is active
 */
function growDraw() {
    growGameStates();
    if (growState === "end")
        return;

    background("#8a6b8aff");

    const d = dist(mouseX, mouseY, growBall.x, growBall.y);//checks distance between mouse and ball
    growOverlap = d < growBall.size / 2;

    if (growOverlap) {
        growBall.fill -= 0.5
        growBall.size += 1
    }
    else {
        growBall.fill += 0.5
        growBall.size -= 1
    }
    growDrawBall();
    growWinCondition();
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
    if (growOverlap && growBall.size > 0 && growBall.size < 640) {
        growScore += deltaTime / 100;
    }

}
function growDrawEndscreen() {

    fill(255);
    textAlign(CENTER);
    textSize(50);
    text("GAME OVER", height / 2, width / 2);
    text("Refresh to restart", height / 2, width / 1.5);


}

function growWinCondition() {
    if (growBall.size >= 640 || growBall.size <= 0) {
        growState = "end"
    }
}