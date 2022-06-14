const list = document.querySelector('.botton-list');
const listEpisodes = document.querySelector('.list-episodes');
const closeList = document.querySelector('.close-list');

list.addEventListener('click', (e)=>{
    e.preventDefault();
    listEpisodes.classList.add('list-show');
});

closeList.addEventListener('click', (e)=>{
    e.preventDefault();
    listEpisodes.classList.remove('list-show');
});