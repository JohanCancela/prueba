const watch = document.querySelector('.botton-watch');
const uno = document.querySelector('.uno');
const dos = document.querySelector('.dos');
const trailer = document.querySelector('.trailer');
const episodeUno = document.querySelector('.episode-uno');
const episodeDos = document.querySelector('.episode-dos');
const close = document.querySelector('.close');
const closeUno = document.querySelector('.close-uno')
const closeDos = document.querySelector('.close-dos')


watch.addEventListener('click', (e)=>{
    e.preventDefault();
    trailer.classList.add('active');
});

close.addEventListener('click', (e)=>{
    e.preventDefault();
    trailer.classList.remove('active');
});

uno.addEventListener('click', (e)=>{
    e.preventDefault();
    episodeUno.classList.add('active');
});

closeUno.addEventListener('click', (e)=>{
    e.preventDefault();
    episodeUno.classList.remove('active');
});

dos.addEventListener('click', (e)=>{
    e.preventDefault();
    episodeDos.classList.add('active');
});

closeDos.addEventListener('click', (e)=>{
    e.preventDefault();
    episodeDos.classList.remove('active');
});