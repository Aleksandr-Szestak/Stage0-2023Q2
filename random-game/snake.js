//===========================================================
const canvas = document.getElementById("snake")
const ctx = canvas.getContext('2d');

const stepGrid = 30;
const gapBorder = 3;
const amountX = Math.trunc(canvas.width / stepGrid);
const amountY = Math.trunc(canvas.height / stepGrid);
const speedGame = 250;
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
let gameProcess = setInterval(gameSnake,speedGame);
//end of program



//===========================================================
function gameSnake(){

    ctx.drawImage(starImg, star.x, star.y);
    drawSnake("#52d402");
    //-------------------------
    let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	if(snakeX == star.x && snakeY == star.y) {
		// score++;

        star = {
            x: Math.floor((Math.random() * amountX)) * stepGrid,
            y: Math.floor((Math.random() * amountY)) * stepGrid,
        };
	} 
    else{
        drawRect(snake.length-1,"white");
        snake.pop();
    }
    
    if(dir == "left")
        snakeX -= stepGrid;
	else if(dir == "right") 
        snakeX += stepGrid;
	else if(dir == "up") 
        snakeY -= stepGrid;
	else if(dir == "down") 
        snakeY += stepGrid;

    //--- выход за границы игрового поля ---
    if ( snakeX < 0 || snakeX >= stepGrid * amountX ||
	     snakeY < 0 || snakeY >= stepGrid * amountY ) {
        drawSnake("red");
		clearInterval(gameProcess);
    }
    //-------------------------
    let newHead = {
        x: snakeX,
        y: snakeY
    };

    if (! testTail(newHead, snake)) {
        snake.unshift(newHead);
        drawRect(0,"#2e7501");
    }
    //-------------------------

return;
}



//===========================================================
function testTail(head, arr) {
let rez = false;
	for(let i = 0; i < arr.length; i++) {
		if(head.x == arr[i].x && head.y == arr[i].y){
            drawSnake("red");
			clearInterval(gameProcess);
            rez = true;
        }
	}
 return rez;
}



//===========================================================
function drawSnake(clr){
    for(let i = 0; i < snake.length; i++) {
        drawRect(i,clr);
	}
return;
}



//===========================================================
function drawRect(idx,clr){
    ctx.fillStyle = clr;
    ctx.fillRect(snake[idx].x+1, snake[idx].y+1, stepGrid-2, stepGrid-2);    
return;
}



//===========================================================
function drawGameArea(){
let i;

ctx.strokeStyle = 'red';
ctx.setLineDash([2,1]);

ctx.beginPath();

for(i=0; i<amountX; i++){
    ctx.moveTo(stepGrid * (i+1), gapBorder);  
    ctx.lineTo(stepGrid * (i+1), canvas.height - gapBorder);
}

for(i=0; i<amountY; i++){
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
