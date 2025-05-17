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

