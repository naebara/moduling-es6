var bricks = [];
var brickRowCount = 5;
var brickColumnCount = 3;
for (var c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (var r = 0; r < brickRowCount; r++) {
        bricks[c][r] = {
            x: 0,
            y: 0,
            status: 1
        };
    }
}

export {
    bricks,
    brickRowCount,
    brickColumnCount
}