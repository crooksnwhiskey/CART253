/**
 * The Only Move Is Not To Play
 * Alex Chardon
 *
 * A game where your score increases so long as you do nothing.
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Update the score and display the UI
 */
function draw() {
    background("#87ceeb");


    // Only increase the score if the game is not over
    if (!gameOver) {
        // Score increases relatively slowly
        score += 0.05;
    }
    displayUI();

    if (keyIsPressed) {
        gameOver
    }
    else if (mouseIsPressed) {
        gameOver
    }
    else if (mouseWheel) {
        gameOver
    }
    else if (mouseDragged) {
        gameOver
    }


}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
    if (gameOver) {
        push();
        textSize(48);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text("You lose!", width / 2, height / 3);
        pop();
    }
    displayScore();
}

/**
 * Display the score
 */
function displayScore() {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(floor(score), width / 2, height / 2);
    pop();
}
function lose() {
    gameOver = true
}
function mouseWheel() {
    gameOver = true
}
function mouseMoved(fxn) {
    gameOver = true
}