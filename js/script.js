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


//evento que carrega a pagina antes de ser analisada pelo css
document.addEventListener('DOMContentLoaded',()=>{
    const gridItems = document.querySelectorAll('.energy-grid-item');
    const modalContainer = document.getElementById('modal-container');
    const modalImage = document.getElementById('modal-image');
    const modalText = document.getElementById('modal-text');
    const closeButton = document.querySelector('.close-btn');

    gridItems.forEach(item=>{ 
        const link =item.querySelector('a');
        link?.addEventListener('click',(e)=>{
            e.preventDefault(); //impedir que o link navegue antes de executar
            const img =item.querySelector('img');
            const text =item.querySelector('p');
            if(img && text){
            modalImage.src=img.src;
            modalImage.alt=img.alt;
            modalText.textContent = text.textContent;
            modalContainer.style.display='flex'; //mostra o modal na tela
            }
        });
    });
    const closeModal =() =>{
        modalContainer.style.display='none' //esconde o modaL
    };
    //fechar ao clicar no botao
    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click',(e)=>{
        if(e.target === modalContainer){
            closeModal();
        }
    });
});
