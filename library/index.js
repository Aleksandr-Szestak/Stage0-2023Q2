/* ----------- burger --------------- */
let burger = document.querySelector(".burger");

burger.addEventListener('click', ()=>{
    document.querySelector('ul').classList.toggle('burger-menu-open');
    document.querySelector('.burger').classList.toggle('burger-open');
});


/* ----------- slider --------------- */
const image_width = 450;
const image_gap = 25;
const image_s = image_width + image_gap;

let button_wrapper = document.querySelectorAll('.button-wrapper');
let slider_images = document.querySelector('.images');

let l_arrow = document.querySelector('.l-arrow');
let r_arrow = document.querySelector('.r-arrow');

var left_pos = 0;

l_arrow.addEventListener('click', ()=>{
	if (left_pos >= image_s){
		left_pos -= image_s;
		slider_images.style.left = -left_pos + 'px';		
	}
	console.log(left_pos);
});

r_arrow.addEventListener('click', ()=>{
	if (left_pos < image_s * 4){
		left_pos += image_s;
		slider_images.style.left = -left_pos + 'px';		
	}
	console.log(left_pos);
});

button_wrapper.forEach((butt, idx) => {
	butt.addEventListener('click', () => {
		// const image_width = 450;
		// const image_gap = 25;

		// left_pos = (image_width + image_gap) * idx;
		left_pos = image_s * idx;

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
