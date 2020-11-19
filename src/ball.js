import {
    canvas
} from './canvas';
var ballRadius = 10;

function drawBall(ctx, x, y) {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

export {
    ballRadius,
    drawBall
}