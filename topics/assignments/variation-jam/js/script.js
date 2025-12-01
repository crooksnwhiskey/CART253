/**
 * Variation Menu
 * Pippin Barr
 * 
 * A relatively simple example of a set of variations within a single
 * project. (When we learn Object-Oriented Programming this will be a
 * LOT easier.)
 */

"use strict";

let state = "menu";

/**
 * Create the canvas
*/
function setup() {
    createCanvas(500, 500);
}


/**
 * Display the menu or the current variation
*/
function draw() {
    switch (state) {
        case "menu":
            menuDraw();
            break;
        case "original":
            originalDraw();
            break
        case "starwars":
            starwarsDraw();
            break;
        case "movement":
            movementDraw();
            break;
        case "avoid":
            avoidDraw();
            break;
    }
}

/**
 * Listen for mouse pressed and call the function for it in the
 * current state
 */
function mousePressed() {
    switch (state) {
        case "menu":
            menuMousePressed();
            break;
        case "original":
            originalMousePressed();
            break
        case "starwars-variation":
            starwarsMousePressed();
            break;
        case "movement":
            movementMousePressed();
            break;
        case "movement":
            avoidMousePressed();
            break;
    }
}

/**
 * Listen for keypressed and call the function for it in the
 * current state
 */
function keyPressed(event) {
    switch (state) {
        case "menu":
            menuKeyPressed(event);
            break;
        case "original":
            originalKeyPressed(event);
            break
        case "starwars-variation":
            starwarsKeyPressed(event);
            break;
        case "movement":
            movementKeyPressed(event);
            break;
        case "movement":
            avoidKeyPressed(event);
            break;
    }
}