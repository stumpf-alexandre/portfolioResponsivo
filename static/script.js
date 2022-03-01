/*abre e fecha menu lateral em modo mobile*/
const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

/*criando um evento de click com uma função de callback*/
menuMobile.addEventListener('click', () => {
    /*o menuMobile verifica se a classList contem a classe bi-list em modo mobile*/
    menuMobile.classList.contains("bi-list") ? menuMobile.classList.replace("bi-list", "bi-x") : menuMobile.classList.replace("bi-x", "bi-list");
    /*caso a classe esteja em bi-list (icone amburguer) é transformado para bi-x (icone X), se caso esteja em bi-x (icone X) transforma em bi-list (icone amburguer) em modo mobile*/

    body.classList.toggle("menu-nav-active"); /*adiciona uma class nova a tag body*/
});

/*fecha o menu quando clicar em algum item e muda o icone para amburguer*/
const navItem = document.querySelectorAll('.nav-item');

navItem.forEach((item) => {
    item.addEventListener("click", () => {
        if(body.classList.contains("menu-nav-active")) {
            body.classList.remove("menu-nav-active")
            menuMobile.classList.replace("bi-x", "bi-list");
        }
    })
})

//animar todos os items na tela que tiverem o atributo data-anime
const item = document.querySelectorAll("[data-anime]");

const animeScroll = () => {
    const windowTop = window.pageYOffset + window.innerHeight * 0.85;

    item.forEach((element) => {
        if(windowTop > element.offsetTop) {
            element.classList.add("animate");
        }
        else {
            element.classList.remove("animate");
        }
    });
};

animeScroll();

window.addEventListener("scroll", () =>{
    animeScroll();
})

//ativar o botão enviar loader quando o botão enviar for clicado
const btnEnviar = document.querySelector('#btn-enviar')
const btnEnviarLoader = document.querySelector('#btn-enviar-loader')
const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const mensagem = document.querySelector('#mensagem')

btnEnviar.addEventListener("click", () =>{
    if (nome.value.length != 0 && email.value.length != 0 && mensagem.value.length != 0){
        btnEnviarLoader.style.display = "block";
        btnEnviar.style.display = "none";
    }
})

//tirar a menssagem flash apos 5 segundos
setTimeout(() =>{
    document.querySelector('#alerta').style.display='none';
}, 5000)