const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const clearButton = document.getElementById('clearButton');
const shapeBtns = document.querySelectorAll('.shape-btn');

canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

const colorBtns = document.querySelectorAll('.color-btn')
let selectedColor = 'red';
let selectedShapeType = null;

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
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y - size / 2);
    ctx.lineTo(x + size / 2, y);
    ctx.lineTo(x, y + size / 2);
    ctx.lineTo(x - size / 2, y);
    ctx.closePath();
    ctx.fill();
}

function drawReverseTriangle(ctx, x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x - size / 2, y - size / 2);
    ctx.lineTo(x + size / 2, y - size / 2);
    ctx.lineTo(x, y + size / 2);
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

const shapeDrawMap = {
    'square': drawSquare,
    'circle': drawCircle,
    'Triangle': drawTriangle,
    'diamond': drawDiamond,
    'star': drawStar,
    'rectangle': drawRectangle,
    'ReverseTriangle': drawReverseTriangle,
    'Hexagon': drawHexagon,
};

clearButton.addEventListener('click', function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    console.log('Canvas limpo!');
});

//Armazenando as formas
shapeBtns.forEach(button => {
    button.addEventListener('click', function() {
        shapeBtns.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        selectedShapeType = this.dataset.shape;
        console.log(`Forma selecionada: ${selectedShapeType}`);
    });
});

colorBtns.forEach(button => {
    button.addEventListener('click', function () {
        colorBtns.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        selectedColor = this.dataset.color;
        console.log(`Cor selecionada: ${selectedColor}`);
    });
});

colorBtns[0].classList.add('active');


canvas.addEventListener('click', function (event) {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const shapeSize = 30;

    if (selectedShapeType && shapeDrawMap[selectedShapeType]) {
        const drawFunction = shapeDrawMap[selectedShapeType];
        drawFunction(ctx, x, y, shapeSize, selectedColor);
} else {
    console.log('Nenhuma forma selecionada. Clique em um botão de forma primeiro.');
}
});
