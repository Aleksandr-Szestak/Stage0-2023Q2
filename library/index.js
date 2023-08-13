const burger = document.querySelector(".burger");

burger.addEventListener('click', ()=>{
    document.querySelector('header').classList.toggle('menu-open')
});


/*
console.log('Вёрстка:');
console.log('1) валидная +10');
console.log('2) семантическая +16');
console.log('3) соответствие макету +50');
console.log('4) общие требования к макету +20');
console.log('итог - 96');
*/