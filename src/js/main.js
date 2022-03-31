const toggleMenu = document.querySelector('.toggle');
const menu = document.querySelector('.menu__list');

function toggleFunction(elem) {
	if (this) menu.classList.toggle('menu__list-is-active');
}

toggleMenu.addEventListener('click', toggleFunction);
