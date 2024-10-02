const menuHamburguer = document.querySelector('.cabecalho__menu-hamburguer');

menuHamburguer.addEventListener("click", () => {
    alteraMenu();
});

function alteraMenu(){
    const nav = document.querySelector('.cabecalho__menu-responsiva');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')){
        nav.style.display = "block";
    }else{
        nav.style.display = "none";
    }
}