/**
 * Phraug
 * Alex Chardon
 * 
 * A game of catching flies with your Phraug-tongue
 * 
 * Instructions:
 * The goal of Phraug is to stay alive as long as possible while getting the highest score possible. Click your mouse button to extend tongue and try to catch flies.

There are 3 ways to die in this game:

First, if you let your eyes (controlled with a & d) touch the ground, you die. 

Second, if the frog touches the edges of the screen, you die. 
To move the frog, place your cursor on either the left of the screen to go right, or place your cursor on the right side of the screen to go left

Third, if your score reaches 0, you die.
Your score is always going down, BUT: if you catch a fly, your score goes up, if you let a fly reach the end, your score goes down.
 * 
 * Made with p5
 * https://p5js.org/
 */

"use strict";
const particles = [];
let font;
let score = 50;
let timer = 0;
let titleScreen = true;
let instructionScreen = false;
let gameOn = false;
let endScreen = false;
let song;
let flySound;
let startButton = {
    x: 300,
    y: 300,
    width: 200,
    height: 100,
    speed: 6

};
let retryButton = {
    x: 300,
    y: 400,
    width: 200,
    height: 100
};
let instructionButton = {
    x: 570,
    y: 60,
    width: 90,
    height: 50
};
let backButton = {
    x: 570,
    y: 60,
    width: 90,
    height: 50
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
    rotation: 0.01,//makes it not completely centered so it is affected by gravity
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
    speed: undefined
};

/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);
    frog.tongue.y = frog.body.y - 60;
    frameRate(60);
    // Give the fly its first random position
    resetFly();
    //counts to 10000
    for (let i = 0; i < 10000; i++) {
        //creates particles
        const particle = createParticles();
        //adds to empty array
        particles.push(particle);
    }
}
/**
 * handles the game state
 */
function draw() {
    if (instructionScreen) {
        drawInstructionPage();

    }
    else if (titleScreen) {
        drawTitleScreen();
    }
    else if (gameOn) {
        runGame();
    }
    else if (endScreen) {
        drawEndScreen();
    }

}

/**
 * Moves the fly 
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Moves the fly at a random pace to the right
    fly.x += random(1, 5);
    //moves fly up and down erraticly
    fly.y = fly.y + sin(frameCount * random(0.1, 0.5)) * 7
    fly.y = constrain(fly.y, 10, 310);
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
        score -= 5// if fly reaches end, -5 score
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
    fly.y = random(10, 300);
}

/**
 * moves the frog the opposite direction of your mouse
 */
function moveFrog() {
    if (mouseX < width / 2) {
        frog.body.x += 3;
    }
    else {
        frog.body.x -= 3;
    }
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
    fill("#8d5d5dff");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#bd7676ff");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    push();
    translate(frog.body.x, frog.body.y)
    rotate(frog.rotation)
    // Draw the frog's body
    push();
    fill("#2f5c2fff");
    noStroke();
    ellipse(0, 0, frog.body.size);
    pop();
    //draw frog eyes
    push();
    fill("#ffffffff");
    noStroke();
    ellipse(10, - 60, frog.body.size - 130);
    pop();

    push();
    fill("#ffffffff");
    noStroke();
    ellipse(-10, - 60, frog.body.size - 130);
    pop();

    push();
    fill("#000000ff");
    noStroke();
    ellipse(-10, - 65, frog.body.size - 140);
    pop();

    push();
    fill("#000000ff");
    noStroke();
    ellipse(10, - 65, frog.body.size - 140);
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
        score += 3//if a fly is eaten, score goes up by three
        // Bring back the tongue
        frog.tongue.state = "inbound";
        flySound.setVolume(2);
        flySound.play();
    }
}


/**
 * Launch the tongue on click (if it's not launched yet)
 * also makes all the buttons work
 */
function mousePressed() {
    if (gameOn && frog.tongue.state === "idle") {
        frog.tongue.state = "outbound";
    }
    //handles all screen button interactivity
    else if (instructionScreen) {
        if (mouseX < backButton.x + backButton.width / 2 && mouseY < backButton.y + backButton.height / 2
            && mouseX > backButton.x - backButton.width / 2 && mouseY > backButton.y - backButton.height / 2
        ) {
            instructionScreen = false;
            titleScreen = true;
            gameOn = false;

        }
    }
    else if (titleScreen) {
        if (mouseX < startButton.x + startButton.width / 2 && mouseY < startButton.y + startButton.height / 2
            && mouseX > startButton.x - startButton.width / 2 && mouseY > startButton.y - startButton.height / 2
        ) {
            titleScreen = false;
            gameOn = true;
        }
        else if (mouseX < instructionButton.x + instructionButton.width / 2 && mouseY < instructionButton.y + instructionButton.height / 2
            && mouseX > instructionButton.x - instructionButton.width / 2 && mouseY > instructionButton.y - instructionButton.height / 2
        ) {
            titleScreen = false;
            instructionScreen = true;
            gameOn = false;
        }

    }

    else if (endScreen) {
        if (mouseX < retryButton.x + retryButton.width / 2 && mouseY < retryButton.y + retryButton.height / 2
            && mouseX > retryButton.x - retryButton.width / 2 && mouseY > retryButton.y - retryButton.height / 2) {
            endScreen = false;
            gameOn = true;
            resetGame();
        }
    }

}

/**
 * adds a title screen to the game
 */
function drawTitleScreen() {
    push();
    background("rgba(149, 181, 246, 1)");//sets background
    for (const particle of particles) {
        moveParticle(particle);
        drawParticlesStart(particle)
    }
    textAlign(CENTER, CENTER);
    textSize(50);
    fill("#bff370ff");
    stroke(0);
    strokeWeight(8);
    textFont(font);
    text("Phraug", width / 2, height / 8);
    pop();

    drawStartButton();
    drawInstructionPageButton();
    moveStartButton();

}
/**draws interactive start button */
function drawStartButton() {
    push();
    rectMode(CENTER); //so useful, makes things relative to the center of the rect/update...it confuses me alot lol
    strokeWeight(4);
    fill("#bff370ff");
    rect(startButton.x, startButton.y, startButton.width, startButton.height, 30);
    pop();
    push();
    fill("black");
    textAlign(CENTER, CENTER);
    textSize(30);
    textFont(font);
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
        startButton.y = constrain(startButton.y, startButton.height / 0.7, height - startButton.height / 2);
    }
}
/**
 * draws the entire gameplay
 */
function runGame() {
    background("#a8cbd9ff");
    //draws vertical line for cursor placement help.
    push();
    stroke("#75b2a7ff");
    line(320, 480, 320, 0);
    pop();

    moveFly();
    drawFly();
    moveFrog();
    moveTongue();
    drawFrog();
    checkTongueFlyOverlap();
    rotateFrog();
    showScore();
    drawTimer();
    frogOverlap();
    songPlaying();
}
/*
takes care of the frog eye rotation mechanics
*/function rotateFrog() {
    if (frog.rotation >= 0) {
        frog.rotation += 0.01
    }
    else {
        frog.rotation -= 0.01

    }
    //rotates the frog depending on the key that is pressed 
    if (keyIsDown(65)) {// a key
        frog.rotation -= .05
    }
    if (keyIsDown(68)) {//d key
        frog.rotation += .05
    }
    frog.rotation = constrain(frog.rotation, -PI / 3, PI / 3);

    if (frog.rotation >= PI / 3 || frog.rotation <= -PI / 3) {// if rotation reaches a certain point, game ends
        gameOn = false;
        endScreen = true;
    }
}
/**
 * draws the endscreen
 */
function drawEndScreen() {
    //draws end game text and background
    push();
    background("#ff6745ff");
    for (const particle of particles) {
        moveParticle(particle);
        drawParticlesEnd(particle)
    }
    textAlign(CENTER, CENTER);
    textSize(50);
    strokeWeight(5);
    fill("#7d0000ff");
    stroke(4)
    textFont(font);
    text("GAME OVER", width / 2, height / 2);
    pop();

    drawRetry();
    drawTimer();
    showScore();

}
/**
 * draws the restart button
 */
function drawRetry() {
    push();
    rectMode(CENTER);
    strokeWeight(4);
    fill("#ff0000ff");
    rect(retryButton.x, retryButton.y, retryButton.width, retryButton.height, 30);
    pop();
    push();
    fill("black");
    textAlign(CENTER, CENTER);
    textSize(20);
    textFont(font);
    text("Try Again", retryButton.x, retryButton.y);
    pop();
}
/**
 * displays the score on the endscreen and game
 */
function showScore() {
    if (gameOn === true) {
        score -= deltaTime / 1000;
        push();
        textAlign(LEFT, TOP);
        textSize(15);
        textFont(font);
        text("score:" + score.toFixed(0), 10, 10);
        pop();
    }
    if (score <= 0) {
        gameOn = false;
        endScreen = true;
    }
    else {
        push();
        textAlign(LEFT, TOP);
        textSize(15);
        textFont(font);
        text("score:" + score.toFixed(0), 10, 10);
        pop();
    }

}


/**
 * draws the timer that counts up to keep track of how long you are playing
 */
function drawTimer() {
    if (gameOn === true) {
        timer += deltaTime / 1000;
        push();
        textAlign(CENTER, TOP);
        textSize(15);
        textFont(font);
        text("time survived:" + timer.toFixed(1), 470, 10);
        pop();
    }
    else {
        push();
        textAlign(CENTER, TOP);
        textSize(15);
        textFont(font);
        text("time survived:" + timer.toFixed(1) + "s", 470, 10);
        pop();
    }
}
/**
 * if the frog touches the edges of the canvas, the game ends
 */
function frogOverlap() {
    if (frog.body.x >= width || frog.body.x <= 0) {
        gameOn = false;
        endScreen = true;
    }
}
/**
 * resets the game state if you press retry
 */
function resetGame() {
    score = 50;
    timer = 0;
    frog.body.x = width / 2;
    frog.rotation = 0.01;
    frog.tongue.state = "idle";
    resetFly();
    endScreen = false;
    gameOn = true;
} a
/**
 * loads assets
 */
function preload() {
    song = loadSound("assets/sounds/gamefrog.wav");// song I made for this game
    flySound = loadSound('assets/sounds/gamefrogfly.wav');//sound effect sampled and altered from a chinese record
    font = loadFont("assets/fonts/PressStart2P-Regular.ttf")//font from google fonts

}
/**
 * controls when the song plays
 */
function songPlaying() {
    if (gameOn === true || endScreen === true || titleScreen === true) {
        if (!song.isPlaying()) {
            song.loop();
        }
    }
    if (gameOn === true) {
        song.setVolume(1);
    }
    else if (endScreen === true) {
        song.setVolume(0.3);

    }
}
/**
 * draws the instruction page button on title screen
 */
function drawInstructionPageButton() {

    push();
    rectMode(CENTER);
    strokeWeight(4);
    fill("#bff370ff");
    rect(instructionButton.x, instructionButton.y, instructionButton.width, instructionButton.height, 10);
    pop();
    push();
    fill("black");
    textAlign(CENTER, CENTER);
    textSize(7);
    textFont(font);
    text("INSTRUCTIONS", instructionButton.x, instructionButton.y);
    pop();

}
/**
 * draws the text on the instruction screen and the back button
 */
function drawInstructionPage() {
    push();
    background("rgba(44, 103, 41, 1)");//sets background
    textAlign(CENTER, CENTER);
    textSize(6);
    textFont(font);
    fill("#000000ff");
    text("The goal of Phraug is to stay alive as long as possible while getting the highest score possible. ", width / 2, height - 370);
    text("Click your mouse button to extend tongue and try to catch flies. ", width / 2, height - 350);
    text("There are 3 ways to die in this game:", width / 2, height - 300);
    text("First, if you let your eyes (controlled with a & d) touch the ground, you die.", width / 2, height - 250);
    text("Second, if the frog touches the edges of the screen, you die.", width / 2, height - 200);
    text("To move the frog, place your cursor on either the left of the screen to go right, ", width / 2, height - 180);
    text("or place your cursor on the right side of the screen to go left", width / 2, height - 160);
    text("Third, if your score reaches 0, you die.", width / 2, height - 110);
    text("Your score is always going down, BUT:", width / 2, height - 90);
    text("if you catch a fly, your score goes up, if you let a fly reach the end, your score goes down.", width / 2, height - 40);

    pop();
    drawBackButton();


}
/**
 * draws the back button
 */
function drawBackButton() {

    push();
    rectMode(CENTER);
    strokeWeight(4);
    fill("#bff370ff");
    rect(backButton.x, backButton.y, backButton.width, backButton.height, 10);
    pop();
    push();
    fill("black");
    textAlign(CENTER, CENTER);
    textSize(10);
    textFont(font);
    text("BACK", backButton.x, backButton.y);
    pop();

}
/**
 * draws one particle
 */
function createParticles() {
    const oneParticle = {
        x: random(0, width),
        y: random(0, height),
        size: random(20, 50),
        velocity: {
            x: random(0.5, -0.5),
            y: random(0.5, -0.5)
        }
    };
    return oneParticle;
}
/**
 * moves the aformentioned particle
 */
function moveParticle(particle) {
    particle.x += particle.velocity.x;
    particle.y += particle.velocity.y;
    //wrap if needed
    if (particle.x < 0) {
        particle.x = width;
    }
    else if (particle.x > width) {
        particle.x = 0;
    }
    if (particle.y < 0) {
        particle.y = height;
    }
    else if (particle.y > height) {
        particle.y = 0;
    }
}
/**
 * this is so I can change the colour of the particles on the start screen
 */
function drawParticlesStart(particle) {
    push();
    fill(30, 30, 100, 23);
    noStroke();
    ellipse(particle.x, particle.y, particle.size);
    pop();

}
/**
 * this is so I can change the colour of the particles on the end screen
 */
function drawParticlesEnd(particle) {
    push();
    fill(100, 10, 10, 23);
    noStroke();
    ellipse(particle.x, particle.y, particle.size);
    pop();

}
