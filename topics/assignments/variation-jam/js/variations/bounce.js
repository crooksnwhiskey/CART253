/**
 * This file contains the code to run *only* the bounce variation part of the program.
 * Note how it has its own draw, bounceDraw(), and its own keyPressed, bounceKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

/**
 * This will be called just before the bounce variation starts
 */
let bounceBallx;
let bounceBally;
const bounceBall = {
    x: 320,
    y: 240,
    size: 100,
    fill: "#ffffffff",
    velocityX: 0,
    velocityY: 0

};

let bounceScore = 0;
let bounceOverlap = false;


function bounceSetup() {
    createCanvas(640, 480);

}

/**
 * This will be called every frame when the bounce variation is active
 */
function bounceDraw() {
    background("#8a6b8aff");

    const d = dist(mouseX, mouseY, bounceBall.x, bounceBall.y);//checks distance between mouse and ball
    bounceOverlap = d < bounceBall.size / 2;

    if (bounceOverlap) {
        let accelerationX = (bounceBall.x - mouseX) * 0.2;
        let accelerationY = (bounceBall.y - mouseY) * 0.2;
        bounceBall.velocityX += accelerationX;
        bounceBall.velocityY += accelerationY;
    }
    else {

    }
    bounceDrawBall();
    bounceShowScore();
    bounceBallHit();


}
/**
 * This will be called whenever a key is pressed while the bounce variation is active
 */
function bounceKeyPressed(event) {
    if (event.keyCode === 27) {
        state = "menu";
    }
}

/**
 * This will be called whenever the mouse is pressed while the bounce variation is active
 */
function bounceMousePressed() {

}
function bounceDrawBall() {
    push();
    fill(bounceBall.fill);
    noStroke();
    ellipse(bounceBall.x, bounceBall.y, bounceBall.size);
    pop();
}
function bounceShowScore() {
    if (bounceBall.x <= bounceBall.size / 2 || bounceBall.x >= width - bounceBall.size / 2) {
        bounceScore += 1
    }
    else if (bounceBall.y <= bounceBall.size / 2 || bounceBall.y >= height - bounceBall.size / 2) {
        bounceScore += 1
    }
    push();
    textAlign(LEFT, TOP);
    textSize(15);
    text("score: " + bounceScore.toFixed(0), 10, 10);
    pop();

}
function bounceBallHit() {
    bounceBall.x += bounceBall.velocityX;
    bounceBall.y += bounceBall.velocityY;
    bounceBall.velocityX *= 0.97;
    bounceBall.velocityY *= 0.97;

    bounceBall.x = constrain(bounceBall.x, 0 + bounceBall.size / 2, width - bounceBall.size / 2)
    bounceBall.y = constrain(bounceBall.y, 0 + bounceBall.size / 2, height - bounceBall.size / 2)

    if (bounceBall.x <= bounceBall.size / 2 || bounceBall.x >= width - bounceBall.size / 2) {
        bounceBall.velocityX *= -1
    }
    if (bounceBall.y <= 0 + bounceBall.size / 2 || bounceBall.y >= height - bounceBall.size / 2) {
        bounceBall.velocityY *= -1
    }
}