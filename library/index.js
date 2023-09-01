/* ----------- burger --------------- */
let burger = document.querySelector(".burger");

burger.addEventListener('click', ()=>{
    document.querySelector('ul').classList.toggle('burger-menu-open');
    document.querySelector('.burger').classList.toggle('burger-open');
});


/* ----------- slider --------------- */
let button_wrapper = document.querySelectorAll('.button-wrapper');
let slider_images = document.querySelector('.images');
let left_pos = (screen.width >= 1440) ? 930 : 880;

button_wrapper.forEach((butt, idx) => {
	butt.addEventListener('click', () => {
		if (screen.width >= 1440) {
			left_pos = 476 * idx;
			slider_images.style.left = -left_pos + 'px';
		} else {
			left_pos = -(450 * (idx - 2)) - 20;
			slider_images.style.left = left_pos + 'px';
		}
	})
})


/* ----------- console --------------- */
/*
console.log('Вёрстка:');
console.log('1) соответствует макету 24/26');
console.log('2) не появл.полоса прокрутки 12/12');
console.log('3) бургер-меню 0/12');
console.log('всего баллов - 36/50');
*/
