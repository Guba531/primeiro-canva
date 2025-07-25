const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const clearButton = document.getElementById('clearButton');
const shapeBtns = document.querySelectorAll('.shape-btn')// MODIFICADO: Agora pegamos todos os botões de forma para poder "ouvir" quando você clica neles.

let selectedShapeType = null;

// MODIFICADO: Isso é muito importante! Fazemos o tamanho real da área de desenho do canvas
// ser igual ao tamanho que ele aparece na sua tela. Assim, quando você clica,
// a forma aparece exatamente onde o seu dedo ou mouse está, e não um pouco para o lado!
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;

console.log('Canvas inicializado com dimensões:', canvas.width, 'x', canvas.height);

const shapeDrawMap = {
    'square': drawSquare,
    'circle': drawCircle
    'Triangle': drawTriangle
    'diamond': drawDiamond
    'star': drawStar
    'rectangle': drawRectangle
    'ReverseTriangle': drawReverseTriangle
    'Hexagon': drawHexagon
}