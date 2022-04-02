const toggleMenu = document.querySelector('.toggle');
const menu = document.querySelector('.menu__list');
toggleMenu.addEventListener('click', toggleFunction);
function toggleFunction() {
	if (this) menu.classList.toggle('menu__list-is-active');
}

const selectedSructure = document.querySelectorAll('.active');
const targetItem = document.querySelectorAll('.item');
targetItem.forEach(elem => {
	elem.addEventListener('click', selectContent);
});
function selectContent() {
	selectedSructure.forEach(elem => {
		if (this.dataset.title === elem.dataset.content) {
			elem.classList.toggle('active-selected');
		}
	});
}
