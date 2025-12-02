/**
 * This file contains the code to run *only* the avoid variation part of the program.
 * Note how it has its own draw, avoidDraw(), and its own keyPressed, avoidKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

/**
 * This will be called just before the avoid variation starts
 */
let avoidState = "avoidgameOn";
let avoidBallx;
let avoidBally;
let avoidScore = 0;
/**sets the info for the ball */
const avoidBall = {
    x: 800,
    y: 800,
    size: 100,
    fill: "#ffffffff",
    fills: {
        noOverlap: "#fefffbff",
        overlap: "#a4a4a3ff"
    }
};


let avoidOverlap = false;

/**setup for avoid, creates canvas */
function avoidSetup() {
    createCanvas(640, 480);
}
/**
 * This will be called every frame when the avoid variation is active
 */
function avoidDraw() {
    background("#8a6b8aff");

    if (avoidState === "avoidend") {
        avoidDrawEndscreen();
        avoidShowScore();
        return;
    }
    //this is what chases the ball by lerp position
    avoidBall.x = lerp(avoidBall.x, mouseX, 0.02);
    avoidBall.y = lerp(avoidBall.y, mouseY, 0.02);

    //checks distance between mouse and ball
    const d = dist(mouseX, mouseY, avoidBall.x, avoidBall.y);
    avoidOverlap = d < avoidBall.size / 2;
    //draws ball
    avoidDrawBall();

    //if overlap, game ends
    if (avoidOverlap) {
        avoidState = "avoidend";

    }
    //score is a timer
    if (avoidState === "avoidgameOn") {
        avoidScore += deltaTime / 1000;
    }
    avoidShowScore();
}

/**
 * This will be called whenever a key is pressed while the avoid variation is active
 */
function avoidKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the avoid variation is active
 */
function avoidMousePressed() {

}
/**
 * draws the ball for thisgame
 */
function avoidDrawBall() {
    push();
    fill(avoidBall.fill);
    ellipse(avoidBall.x, avoidBall.y, avoidBall.size);
    pop();
}
/**
 * handels the game states
 */
function avoidsGameStates() {
    //if the game ends, draws the endscreen
    if (avoidState === "avoidend") {
        avoidDrawEndscreen();
    }
}
/**
 * draws the endscreen
 */
function avoidDrawEndscreen() {
    background("rgba(0, 0, 0, 0.73)");
    push();
    fill("rgba(255, 255, 255, 0.73)")
    textAlign(CENTER, CENTER);
    textSize(40)
    text("GAME OVER", width / 2, height / 2);
    pop();

    push();
    textAlign(CENTER, CENTER);
    fill("rgba(255, 255, 255, 0.73)");
    textSize(20)
    text("Refresh to Restart", width / 2, 300);
    pop();
}
/**
 * draws the score
 */
function avoidShowScore() {

    push();
    textAlign(LEFT, TOP);
    stroke(255);
    textSize(15);
    text("score: " + avoidScore.toFixed(2), 10, 10);
    pop();

}