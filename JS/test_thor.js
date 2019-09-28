const initialTy = parseInt(inputs[3]); // Thor's starting Y position

let thorX = initialTx;
let thorY = initialTy;

// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    let directionY = '';
    let directionX = '';

    if (thorY > lightY) {
        directionY = 'N';
        thorY = thorY - 1
    } else if (thorY < lightY) {
        directionY = 'S';
        thorY = thorY + 1;
    }

    if (thorX > lightX) {
        directionX = 'W';
        thorX = thorX - 1;
    } else if (thorX < lightX) {
        directionX = 'E';
        thorX = thorX + 1;
    }
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
    // A single line providing the move to be made: N NE E SE S SW W or NW
    console.log(directionY + directionX)
}