//===========================================================
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const stepGrid = 30;
const gapBorder = 3;
const amountX = Math.trunc(canvas.width / stepGrid);
const amountY = Math.trunc(canvas.height / stepGrid);
//------------------------------------------------
drawGameArea();

const starImg = new Image();
starImg.src = './assets/star.png';
//------------------------------------------------
let star = {
	x: Math.floor((Math.random() * amountX)) * stepGrid,
	y: Math.floor((Math.random() * amountY)) * stepGrid,
};

let snake = [];
snake[0] = {
	x: (Math.trunc(amountX / 2)-1) * stepGrid,
	y: (Math.trunc(amountY / 2)-1) * stepGrid
};
//------------------------------------------------
let dir;

document.addEventListener("keydown", direction);
//------------------------------------------------
let gameProcess = setInterval(gameSnake,300);
//end of program



//===========================================================
function gameSnake(){

    // drawGameArea();

    ctx.drawImage(starImg, star.x, star.y);

    for(let i = 0; i < snake.length; i++) {
        console.log(i);
		// ctx.fillStyle = i == 0 ? "green" : "red";
        ctx.lineJoin = "round";
        ctx.fillStyle = "green";
		ctx.fillRect(snake[i].x+1, snake[i].y+1, stepGrid-2, stepGrid-2);
	}
    //-------------------------
    let snakeX = snake[0].x;
	let snakeY = snake[0].y;

    // ctx.fillStyle = "black";
    // ctx.fillRect(snake[0].x, snake[0].y, stepGrid, stepGrid);
 
    
    snake.pop();

    if(dir == "left")
        snakeX -= stepGrid;
	else if(dir == "right") 
        snakeX += stepGrid;
	else if(dir == "up") 
        snakeY -= stepGrid;
	else if(dir == "down") 
        snakeY += stepGrid;

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    snake.unshift(newHead);

    //-------------------------

return;
}



//===========================================================
function drawGameArea(){
let i;

ctx.strokeStyle = 'red';
ctx.setLineDash([2,1]);

ctx.beginPath();

for(i=0; i<=amountX; i++){
    ctx.moveTo(stepGrid * (i+1), gapBorder);  
    ctx.lineTo(stepGrid * (i+1), canvas.height - gapBorder);
}

for(i=0; i<=amountY; i++){
    ctx.moveTo(gapBorder, stepGrid * (i+1));  
    ctx.lineTo(canvas.width - gapBorder, stepGrid * (i+1));
}

ctx.stroke();

return;
}



//===========================================================
function direction(event) {
let key = event.keyCode;

if(key == 37 && dir != "right")
    dir = "left";
else if(key == 38 && dir != "down")
    dir = "up";
else if(key == 39 && dir != "left")
    dir = "right";
else if(key == 40 && dir != "up")
    dir = "down";

return;
}
