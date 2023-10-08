var canvas = document.getElementById('snake');
var context = canvas.getContext('2d');
// console.log(context);

// context.fillRect(0, 0, canvas.width, canvas.height);
context.strokeRect(10, 10, 100, 100);
/*
context.beginPath();
context.strokeStyle = "green";
context.moveTo(10, 10); // Начало линии 
context.lineTo(100, 100); // Узел линии  
context.lineTo(150, 100); // Конец линии 
context.closePath();
*/
console.log(canvas.width, canvas.height);
