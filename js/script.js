const acessibilidade = document.querySelector('.acessibilidade');
const html = document.querySelector('html');

acessibilidade.addEventListener('click', function(){
    html.classList.toggle('blackwhite');
});

const menu = document.querySelector('.menu');
menu.focus();