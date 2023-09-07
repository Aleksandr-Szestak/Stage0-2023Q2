/* ----------- burger --------------- */
let burger = document.querySelector(".burger");

burger.addEventListener('click', ()=>{
    document.querySelector('ul').classList.toggle('burger-menu-open');
    document.querySelector('.burger').classList.toggle('burger-open');
});


/* ----------- slider --------------- */
let button_wrapper = document.querySelectorAll('.button-wrapper');
let slider_images = document.querySelector('.images');
var left_pos = 0;
// var left_pos = (screen.width >= 1440) ? 930 : 880;
// console.log(button_wrapper.length, left_pos);

/*
button_wrapper.forEach((butt, idx) => {
	butt.addEventListener('click', () => {
		const image_width = 450;
		const image_gap = 25;

		let lpp;
		if (screen.width >= 1440) {
			lpp=left_pos;
			// left_pos = (image_width + 25 + 1) * idx;
			left_pos = (image_width + image_gap) * idx;
			slider_images.style.left = -left_pos + 'px';
			console.log('>=1440', lpp, left_pos);
		} 
		else {
			lpp=left_pos;
			// left_pos = -(image_width * (idx - 2)) - 20;
			left_pos = (image_width + image_gap) * idx;
			console.log('<1440',lpp,left_pos);
			slider_images.style.left = -left_pos + 'px';
		}
	})
})
*/

button_wrapper.forEach((butt, idx) => {
	butt.addEventListener('click', () => {
		const image_width = 450;
		const image_gap = 25;

		left_pos = (image_width + image_gap) * idx;
		slider_images.style.left = -left_pos + 'px';
		console.log(left_pos);
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
