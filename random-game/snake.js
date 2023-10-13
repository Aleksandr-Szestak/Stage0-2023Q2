//===========================================================
const canvas1 = document.getElementById("snake")
const ctx1 = canvas1.getContext('2d');

const canvas2 = document.getElementById("score")
const ctx2 = canvas2.getContext('2d');

const stepGrid = 30;
const gapBorder = 3;
const amountX = Math.trunc(canvas1.width / stepGrid);
const amountY = Math.trunc(canvas1.height / stepGrid);
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
let score = 0;

let tableScores = {
    scores: [0,0,0,0,0, 0,0,0,0,0],
}
//------------------------------------------------
let dir="";

document.addEventListener("keydown", direction);
//------------------------------------------------
let gameProcess = setInterval(gameSnake,speedGame);
//end of program



//===========================================================
function gameSnake(){

    ctx1.drawImage(starImg, star.x, star.y);
    drawSnake("#52d402");
    //-------------------------
    let snakeX = snake[0].x;
	let snakeY = snake[0].y;

	if(snakeX == star.x && snakeY == star.y) {
		score++;

        star = {
            x: Math.floor((Math.random() * amountX)) * stepGrid,
            y: Math.floor((Math.random() * amountY)) * stepGrid,
        };
	} 
    else{
        drawRect(snake.length-1,"white");
        snake.pop();
    }
    
    ctx2.clearRect(10, 10, stepGrid*9, stepGrid);
    ctx2.fillStyle = "white";
	ctx2.font = "30px Pixelify Sans";
	ctx2.fillText('Score '+String(score).padStart(3, '0') , stepGrid, stepGrid);
    
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
    ctx1.fillStyle = clr;
    ctx1.fillRect(snake[idx].x+1, snake[idx].y+1, stepGrid-2, stepGrid-2);    
return;
}



//===========================================================
function drawGameArea(){
let i;

ctx1.strokeStyle = 'red';
ctx1.setLineDash([2,1]);

ctx1.beginPath();

for(i=0; i<amountX-1; i++){
    ctx1.moveTo(stepGrid * (i+1), gapBorder);  
    ctx1.lineTo(stepGrid * (i+1), canvas1.height - gapBorder);
}

for(i=0; i<amountY-1; i++){
    ctx1.moveTo(gapBorder, stepGrid * (i+1));  
    ctx1.lineTo(canvas1.width - gapBorder, stepGrid * (i+1));
}

ctx1.stroke();

return;
}



//===========================================================
function direction(event) {
let key = event.keyCode;

if (dir == ""){
    if (key == 32){
        dir = ['up','right','down','left'][Math.ceil(Math.random() / 0.25)];
    }
}
else{
    if(key == 37  && dir != "right")
        dir = "left";
    else if(key == 38 && dir != "down")
        dir = "up";
    else if(key == 39 && dir != "left")
        dir = "right";
    else if(key == 40 && dir != "up")
        dir = "down";
}

return;
}
