/**
 * This file contains the code to run *only* the movement variation part of the program.
 * Note how it has its own draw, movementDraw(), and its own keyPressed, movementKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

/**
 * This will be called just before the movement variation starts
 */

let movementBall = {
    x: undefined,
    y: undefined,
    size: 70,
    speed: undefined,
    fill: "#ffffffff",
    fills: {
        noOverlap: "#fefffbff",
        overlap: "#a4a4a3ff"
    }
};

let movementScore = 0;
let movementOverlap = false;

/**
 * creates the canvas
 */
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
    //visual cue to see overlaps
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
/**
 * draws this games ball
 */
function movementDrawBall() {
    push();
    fill(movementBall.fill);
    ellipse(movementBall.x, movementBall.y, movementBall.size);
    pop();


}
/**
 * shwos the score for this game
 */
function movementShowScore() {
    push();
    textAlign(LEFT, TOP);
    textSize(15);
    text("score: " + movementScore.toFixed(0), 10, 10);
    pop();
    //if it overlaps, the score goes up
    if (movementOverlap) {
        movementScore += deltaTime / 100;
    }

}
/**
 * controls the smooth movement of the ball with noise
 */
function movementBallMove() {
    let noiseLevel = 100000;
    let noiseScale = 0.007;

    let nt = noiseScale * frameCount;
    //makes the movement random and smooth with noise
    movementBall.x = width * noise(nt);
    movementBall.y = height * noise(nt + 10000);
    //constrains the ball to canvas
    movementBall.x = constrain(movementBall.x, movementBall.size / 2, width - movementBall.size / 2);
    movementBall.y = constrain(movementBall.y, movementBall.size / 2, height - movementBall.size / 2);

}


