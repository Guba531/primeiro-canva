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
    ctx.fillStyle = color; // Define a cor para o losango
    ctx.beginPath(); // Começa um novo caminho
    // Desenha as quatro pontas do losango (diamante), centralizada em (x,y).
    ctx.moveTo(x, y - size / 2); // Ponta de cima
    ctx.lineTo(x + size / 2, y); // Ponta da direita
    ctx.lineTo(x, y + size / 2); //Ponta de baixo
    ctx.lineTo(x - size / 2, y); // Ponta da esquerda
    ctx.closePath(); // Fecha o losango
    ctx.fill(); // Preenche o losango
}

drawSquare(ctx, 30, 30, 40, 'blue');
drawCircle(ctx, 80, 30, 45, 'red');
drawTriangle(ctx, 130, 30, 40, 'green');
drawRectangle(ctx, 180, 30, 50, 'yellow');
drawVRectangle(ctx, 230, 30, 50, 'orange');
drawDiamond(ctx, 280, 30, 45, 'cyan');