/**
 * Terrible New Car
 * Pippin Barr
 * 
 * adapted by Alex Chardon
 * 
 * A program to generate new car model names using dinosaurs.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

function preload() {
    carData = loadJSON("assets/cars.json");
    dinosaurData = loadJSON("assets/dinosaurs.json");
}

let carData = undefined;
let dinosaurData = undefined;
let langData = undefined;
let lang = "fr";

// Starts with the instruction
let carName = "Click to generate a car name.";

/**
 * Load the car and dinosaur data
 */



/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 400);
}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {
    background(0);

    push();
    fill("pink");
    textAlign(CENTER, CENTER);
    textSize(32);
    text(carName, width / 2, height / 2);
    pop();
}

/**
 * Generate a new car name
 */
function mousePressed() {

    let carRand = random(carData.cars);
    let dinoRand = random(dinosaurData.dinosaurs);

    carName = (carRand + " " + dinoRand);
}
