const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
// 3. Pegar o botão de limpar pelo seu ID.
const clearButton = document.getElementById('clearButton');
console.log('Tamanha do canvas:', canvas.clientWidth, 'x', canvas.height);
// --- Desenho Inicial (para mostrar que o Canvas funciona!) ---

// Vamos desenhar um quadrado simples no meio da tela.
// Isso é só um exemplo para a primeira aula.

// Define a cor de preenchimento (fill) para a próxima forma.
ctx.fillStyle = 'red'; //Cor vermelha

// Desenha um quadrado preenchido.
//rect(x, y, width, height) - x,y é o canto superior esquerdo.
ctx.fillRect(10, 10, 40, 40);

//Vamos desenhar um circulo tambem!
ctx.fillStyle = 'blue'; //Cor azul

//Começa um novo "caminho" (path) para o desenho.
//E importante começar um novo caminho para cada forma complexa.
ctx.beginPath();

//Desenha um arco (que pode ser um circulo completo).
//arc(x, y, radius, startAngle, endAngle, antiClockwise)
//x, y e o centro do circulo.
//Math.PI * 2 e 360 graus em radianos, para fazer um circulo completo.
ctx.arc(80, 30, 20, 0, Math.PI * 2);

// Fecha o caminho (opcional para círculos completos, mas boa prática).
ctx.closePath();
ctx.fill();