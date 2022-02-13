/*abre e fecha menu lateral em modo mobile*/

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

/*criando um evento de click com uma função de callback*/
menuMobile.addEventListener('click', () => {
    /*o menuMobile verifica se a classList contem a classe bi-list em modo mobile*/
    menuMobile.classList.contains("bi-list") ? menuMobile.classList.replace("bi-list", "bi-x") : menuMobile.classList.replace("bi-x", "bi-list");
    /*caso a classe esteja em bi-list é transformado para bi-x, se caso esteja em bi-x transforma em bi-list em modo mobile*/

    body.classList.toggle("menu-nav-active"); /*adiciona uma nova class nova a tag body*/
})