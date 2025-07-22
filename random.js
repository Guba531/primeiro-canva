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

const colors = ['violet', 'blue', 'green', 'red', 'orange', 'cyan', 'silver', 'gold', 'lime', 'brown'];

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr [randomIndex];
}

const drawFunctions = [
    drawSquare,
    drawCircle,
    drawTriangle,
    drawDiamond,
    //drawStar,
    drawRectangle,
    //drawInvertedTriangle
]

// --- Funcionalidade do Botão Limpar ---
// Vamos ensinar o botão 'Limpar' a fazer algo quando clicado.
// Adicionar um "ouvinte de evento" (event listener) ao botão.
// É como dizer: "Botão, preste atenção! Quando alguém 'clicar' em você,
// execute a função que vou te dar agora."
clearButton.addEventListener('click', function() {
// Esta função será executada SOMENTE quando o botão for clicado.
    // Limpar o conteúdo do canvas.
    // ctx.clearRect(x, y, width, height)
    // Limpa uma área retangular. Para limpar TUDO, usamos:
    // (0, 0): Começa a limpar do canto superior esquerdo.
    // canvas.width, canvas.height: Limpa até o final da largura e altura do canvas.
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log('Canvas limpo!');
});

// --- NOVO: Adicionando o Event Listener no canvas para cliques! ---
// Agora, vamos fazer o nosso canvas "escutar" quando alguém clica nele.
// canvas.addEventListener('click', function(event) { ... });
// Isso significa: "Canvas, preste atenção! Quando acontecer um 'click' em você,
// execute a função que está aqui dentro, e me dê informações sobre o 'evento' (o clique)."
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