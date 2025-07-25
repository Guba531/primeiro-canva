const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const clearButton = document.getElementById('clearButton');
console.log('Tamanho do canvas:', canvas.clientWidth, 'x', canvas.height);

function drawSquare(ctx, x, y, size, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x - size / 2, y - size / 2, size, size);
}

function drawCircle(ctx, x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, size / 2, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
}

function drawTriangle(ctx, x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y - size / 2);
    ctx.lineTo(x - size / 2, y + size / 2);
    ctx.lineTo(x + size / 2, y + size / 2);
    ctx.closePath();
    ctx.fill();
}

function drawReverseTriangle(ctx, x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y - size / 2);
    ctx.lineTo(x - size / 2, y + size / 2);
    ctx.lineTo(x + size / 2, y + size / 2);
    ctx.closePath();
    ctx.fill();
}

function drawRectangle(ctx, x, y, size, color) {
    const width = size;
    const height = size / 2;
    ctx.fillStyle = color;
    ctx.fillRect(x - width / 2, y - height / 2, width, height);
}

function drawVRectangle(ctx, x, y, size, color) {
    const width = size / 2;
    const height = size;
    ctx.fillStyle = color;
    ctx.fillRect(x - width / 4, y - height / 2, width, height);
}

function drawDiamond(ctx, x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y - size / 2);
    ctx.lineTo(x + size / 2, y);
    ctx.lineTo(x, y + size / 2);
    ctx.lineTo(x - size / 2, y);
    ctx.closePath();
    ctx.fill();
}

function drawStar(ctx, y, x, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    const outerRadius = size / 2;
    const innerRadius = outerRadius / 2.5;
    const numPoints = 5;

    for (let i = 0; i < numPoints; i++) {
        const outerAngle = (i * 2 * Math.PI / numPoints) - (Math.PI / 2);
        const innerAngle = outerAngle + (Math.PI / numPoints);

        ctx.lineTo(x + outerRadius * Math.cos(outerAngle), y + outerRadius * Math.sin(outerAngle));
        ctx.lineTo(x + innerRadius * Math.cos(innerAngle), y + innerRadius * Math.sin(innerAngle));
    }
    ctx.closePath();
    ctx.fill();
}

function drawHexagon(ctx, x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    const angle = Math.PI * 2 / 6;
    for (let i = 0; i < 6; i++) {
        ctx.lineTo(x + size / 2 * Math.cos(angle * i), y + size / 2 * Math.sin(angle * i));
    }  
    ctx.closePath();
    ctx.fill();
}

function drawSpiral(ctx, x, y, size, color) {
    const loops = 5;
    const points = 100;
    for (let i = 0; i < points; i++) {
        let angle = (i / points) * loops * 2 * Math.PI;
        let radius = i * (size / 10);
        let px = x + Math.cos(angle) * radius;
        let py = y + Math.sin(angle) * radius;
        ctx.lineTo(px, py);
    }
    ctx.strokeStyle = color;
    ctx.stroke();
}

function drawFlower(ctx, x, y, size, color) {
    const radius = size;
    const petals = 8;
    for (let i = 0 ; i < petals; i++) {
        let angle = (i * 2 * Math.PI) / petals;
        let cx = x + Math.cos(angle) * radius;
        let cy = y + Math.sin(angle) * radius;
        ctx.beginPath();
        ctx.arc(cx, cy, radius / 3, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }
    
}

const colors = ['violet', 'blue', 'green', 'red', 'orange', 'cyan', 'silver', 'gold', 'lime', 'brown'];

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

const drawFunctions = [
    drawSquare,
    drawCircle,
    drawTriangle,
    drawDiamond,
    drawStar,
    drawRectangle,
    drawInvertedTriangle,
    drawHexagon,
    drawSpiral,
    drawFlower,
]

clearButton.addEventListener('click', function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log('Canvas limpo!');
});

canvas.addEventListener('click', function (event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    console.log(`Você clicou em: X=${x}, Y=${y}`);
    const randomColor = getRandomItem(colors);
    const randomDrawFunction = getRandomItem(drawFunctions);
    const shapeSize = 30;
    randomDrawFunction(ctx, x, y, shapeSize, randomColor);
});