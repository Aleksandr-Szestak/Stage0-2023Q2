let burger = document.querySelector(".burger");

burger.addEventListener('click', ()=>{
    document.querySelector('ul').classList.toggle('burger-menu-open');
    document.querySelector('.burger').classList.toggle('burger-open');
});

// Получаем slide1, slide2, slide3
let btnSlide1 = document.getElementById("slide1");
let btnSlide2 = document.getElementById("slide2");
let btnSlide3 = document.getElementById("slide3");

if (btnSlide1.checked) {
      console.log('Checkbox1 is checked');
    } 
else if (btnSlide2.checked){
      console.log('Checkbox2 is not checked');
    }
else if (btnSlide3.checked){
      console.log('Checkbox3 is not checked');
    }   





/*
console.log('Вёрстка:');
console.log('1) соответствует макету 24/26');
console.log('2) не появл.полоса прокрутки 12/12');
console.log('3) бургер-меню 0/12');
console.log('всего баллов - 36/50');
*/
