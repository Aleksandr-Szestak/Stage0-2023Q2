const burger = document.querySelector(".burger");

burger.addEventListener('click', ()=>{
    document.querySelector('ul').classList.toggle('burger-menu-open');
    document.querySelector('.burger').classList.toggle('burger-open');
});

console.log('Вёрстка:');
console.log('1) соответствует макету 24/26');
console.log('2) не появл.полоса прокрутки 12/12');
console.log('3) бургер-меню 0/12');
console.log('всего баллов - 36/50');
