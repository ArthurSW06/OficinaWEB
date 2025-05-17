// Declarando variaveis com o DON
const headerMenu = document.querySelector('.header-menu');
const sanduiche = document.querySelector('.sanduiche');

//criando a função

function toggleMenu(){
    sanduiche.classList.toggle('active');
    headerMenu.classList.toggle('active');
    //pega o elemento e adiciona a classe no css, ou remove se existir
}
sanduiche.addEventListener('click',toggleMenu);
headerMenu.addEventListener('click', (e)=>{
    if(e.target.classList.contains('item-menu')){
        toggleMenu();
    }
})
//criar evento que ao clicar executa a função togglemenu

let imagens=[
    'oficina-front/images/index/banner.jpg',
    'oficina-front/images/index/energia1.jpg',
    'oficina-front/images/index/energia2.jpg',
    'oficina-front/images/index/energia3.jpg',
];
//DECLARANDO AS VARIAVEIS
let i=0;
let tempo =3000;
const hero = document.querySelector('.hero');
 
//CRIANDO A FUNÇÃO DO SLIDESHOW
 
function slideShow(){
    if(hero){
        hero.style.backgroundImage=`var(--gradient), url('${imagens[i]}')`
    }
    i++;
    if(i == imagens.length){
        i = 0;
    }
    setTimeout('slideShow()',tempo);
}
slideShow();
