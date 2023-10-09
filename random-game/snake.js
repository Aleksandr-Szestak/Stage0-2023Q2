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


console.log(amountX);
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
const star = new Image();
star.src = '/assets/star.png';


