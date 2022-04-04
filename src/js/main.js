// const toggleMenu = document.querySelector('.toggle');
// const menu = document.querySelector('.menu__list');
// toggleMenu.addEventListener('click', toggleFunction);
// function toggleFunction() {
// 	if (this) menu.classList.toggle('menu__list-is-active');
// }

// const selectedSructure = document.querySelectorAll('.active');
// const targetItem = document.querySelectorAll('.item');
// targetItem.forEach(elem => {
// 	elem.addEventListener('click', selectContent);
// });
// function selectContent() {
// 	selectedSructure.forEach(elem => {
// 		if (this.dataset.title === elem.dataset.content) {
// 			elem.classList.toggle('active-selected');
// 		}
// 	});
// }

const sliderBlock = document.querySelectorAll('.slider-block');
let count = 0;
document.querySelector('.btn-right').addEventListener('click', e => {
	if (count + 1 < sliderBlock.length) {
		count++;
	} else {
		count = 0;
	}
	activeBlock();
	sliderBlock[count].style.cssText = `animation: 1s ease-in-out 0s alternate slider-right`;
});
document.querySelector('.btn-left').addEventListener('click', e => {
	if (count > 0) {
		count--;
	} else {
		count = sliderBlock.length - 1;
	}
	activeBlock();
	sliderBlock[count].style.cssText = `animation: 1s ease-in-out 0s alternate slider-left`;
});
function activeBlock() {
	sliderBlock.forEach(elem => {
		elem.classList.remove('slider-block-active');
	});
	sliderBlock[count].classList.add('slider-block-active');
}
