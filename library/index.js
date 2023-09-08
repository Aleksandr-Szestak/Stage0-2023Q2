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

let radio_about = document.getElementsByName('point');

var left_pos = 0;
document.querySelector('.l-arrow').classList.add('cursor-off');

//--------------------------------------------------------------
l_arrow.addEventListener('click', ()=>{
	if (left_pos >= image_s){
		left_pos -= image_s;
		slider_images.style.left = -left_pos + 'px';		
		radio_about[left_pos / image_s].checked = true;
		document.querySelector('.r-arrow').classList.remove('cursor-off');
		if (left_pos == 0){
			document.querySelector('.l-arrow').classList.add('cursor-off');
		}
	}
	console.log(left_pos);
});

//--------------------------------------------------------------
r_arrow.addEventListener('click', ()=>{
	if (left_pos < image_s * 4){
		left_pos += image_s;
		slider_images.style.left = -left_pos + 'px';		
		radio_about[left_pos / image_s].checked = true;
		document.querySelector('.l-arrow').classList.remove('cursor-off');
		if (left_pos == image_s * 4){
			document.querySelector('.r-arrow').classList.add('cursor-off');
		}
	}
	console.log(left_pos);
});

//--------------------------------------------------------------
button_wrapper.forEach((butt, idx) => {
	butt.addEventListener('click', () => {
		left_pos = image_s * idx;
		slider_images.style.left = -left_pos + 'px';

		if (idx == 0){
			document.querySelector('.l-arrow').classList.add('cursor-off');
		}
		else{
			document.querySelector('.l-arrow').classList.remove('cursor-off');
		}

		if (idx == 4){
			document.querySelector('.r-arrow').classList.add('cursor-off');
		}
		else{
			document.querySelector('.r-arrow').classList.remove('cursor-off');
		}

		console.log(left_pos);
	})
})

/* ----------- fade --------------- */
let all_books = document.querySelectorAll('.book-item');


/* ----------- console --------------- */
/*
console.log('Вёрстка:');
console.log('1) соответствует макету 24/26');
console.log('2) не появл.полоса прокрутки 12/12');
console.log('3) бургер-меню 0/12');
console.log('всего баллов - 36/50');
*/
