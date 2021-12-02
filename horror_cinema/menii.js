const menu = document.querySelector('#mobie-menu');
const menuLinks = document.querySelector('.nav-meni');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
