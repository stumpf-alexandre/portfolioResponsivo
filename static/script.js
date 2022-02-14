/*abre e fecha menu lateral em modo mobile*/

const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

/*criando um evento de click com uma função de callback*/
menuMobile.addEventListener('click', () => {
    /*o menuMobile verifica se a classList contem a classe bi-list em modo mobile*/
    menuMobile.classList.contains("bi-list") ? menuMobile.classList.replace("bi-list", "bi-x") : menuMobile.classList.replace("bi-x", "bi-list");
    /*caso a classe esteja em bi-list (icone amburguer) é transformado para bi-x (icone X), se caso esteja em bi-x (icone X) transforma em bi-list (icone amburguer) em modo mobile*/

    body.classList.toggle("menu-nav-active"); /*adiciona uma nova class nova a tag body*/
});

/*fecha o menu quando clicar em algum item e muda o icone para amburguer*/
const navItem = document.querySelectorAll('.nav-item');

navItem.forEach((item) => {
    item.addEventListener("click", () => {
        if(body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active");
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    });
});