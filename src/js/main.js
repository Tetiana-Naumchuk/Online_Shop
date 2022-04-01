const toggleMenu = document.querySelector('.toggle');
const menu = document.querySelector('.menu__list');

function toggleFunction() {
	if (this) menu.classList.toggle('menu__list-is-active');
}

toggleMenu.addEventListener('click', toggleFunction);

const selectedSructure = document.querySelectorAll('.active');
const targetItem = document.querySelectorAll('.item');

targetItem.forEach(elem => {
	elem.addEventListener('click', selectContent);
});

function selectContent() {
	//console.log(this.dataset.title);
	selectedSructure.forEach(elem => {
		if (this.dataset.title === elem.dataset.content) {
			elem.classList.toggle('active-selected');
		}
	});
}
