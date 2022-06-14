document.querySelector('.navbar-menu-icon').addEventListener('click', mostrarMenu);
document.querySelector('.close-menu').addEventListener('click', ocultarMenu);

navbar = document.querySelector('.navbar-menu');

function mostrarMenu() {

    navbar.style.right = '0px';
};

function ocultarMenu() {

    navbar.style.right = '-250px';
};