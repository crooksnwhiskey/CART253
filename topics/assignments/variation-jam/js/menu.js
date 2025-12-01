/**
 * This menu file contains the code to run *only* the menu part of the program.
 * Note how it has its own draw, menuDraw(), and its own keyPressed, menuKeyPressed().
 * This keeps the stuff the menu needs to do *separate* from the rest of the program.
 */

const menuText = `
(1) Original variation
(2) Starwars variation
(3) Movement variation
(4) Avoid variation
(5) Grow variation
`

/**
 * Display the main menu
 */
function menuDraw() {
    background(0);

    push();
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(menuText, width / 2, height / 2);
    pop();
}

/**
 * Listen to the keyboard
 */
function menuKeyPressed(event) {
    switch (event.keyCode) {
        case 49:
            state = "original";
            originalSetup();
            break;

        case 50:
            state = "starwars";
            starwarsSetup();
            break;

        case 51:
            state = "movement";
            movementSetup();
            break;

        case 52:
            state = "avoid";
            avoidSetup();
            break;
        case 53:
            state = "grow";
            growSetup();
            break;
    }
}

/**
 * This will be called whenever the mouse is pressed while the menu is active
 */
function menuMousePressed() {

}