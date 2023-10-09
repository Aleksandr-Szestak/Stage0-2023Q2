//------------------------------------------------
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const stepGrid = 30;
const gapBorder = 3;
const amountX = Math.trunc(canvas.width / stepGrid);
const amountY = Math.trunc(canvas.height / stepGrid);

let i;

ctx.strokeStyle = 'red';
ctx.setLineDash([2,1]);
//------------------------------------------------
ctx.beginPath();
//вертикальная линия
// ctx.moveTo(10, 50);  
// ctx.lineTo(10, 500); //вниз

//горизонтальная линия
// ctx.moveTo(10, 50);  
// ctx.lineTo(500, 50); //вправо
//
//console.log(amountX);
for(i=0; i<=amountX; i++){
    ctx.moveTo(stepGrid * (i+1), gapBorder);  
    ctx.lineTo(stepGrid * (i+1), canvas.height - gapBorder);
}

for(i=0; i<=amountY; i++){
    ctx.moveTo(gapBorder, stepGrid * (i+1));  
    ctx.lineTo(canvas.width - gapBorder, stepGrid * (i+1));
}

ctx.stroke();
//------------------------------------------------
const starImg = new Image();
starImg.src = './assets/star.png';

console.log(starImg);

let star = {
	x: Math.floor((Math.random() * amountX)) * stepGrid,
	y: Math.floor((Math.random() * amountY)) * stepGrid,
};

let snake = [];
snake[0] = {
	x: Math.trunc(amountX / 2) * stepGrid,
	y: Math.trunc(amountY / 2) * stepGrid
};

//------------------------------------------------
let gameProcess = setInterval(gameSnake,300);




//------------------------------------------------
function gameSnake(){
    // let i;
    // for(i=0; i<=amountX; i++){
    //     ctx.moveTo(stepGrid * (i+1), gapBorder);  
    //     ctx.lineTo(stepGrid * (i+1), canvas.height - gapBorder);
    // }
    
    // for(i=0; i<=amountY; i++){
    //     ctx.moveTo(gapBorder, stepGrid * (i+1));  
    //     ctx.lineTo(canvas.width - gapBorder, stepGrid * (i+1));
    // }

    ctx.drawImage(starImg, star.x, star.y);

    for(let i = 0; i < snake.length; i++) {
		// ctx.fillStyle = i == 0 ? "green" : "red";
        ctx.fillStyle = "green";
		ctx.fillRect(snake[i].x, snake[i].y, stepGrid, stepGrid);
	}

}
