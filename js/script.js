// Abrir/Fechar Menu Lateral
const btnMenu = document.getElementById('btn-menu');
const menuLateral = document.getElementById('menu-lateral');

btnMenu.addEventListener('click', () => {
    if (menuLateral.style.left === '0px') {
        menuLateral.style.left = '-250px';
    } else {
        menuLateral.style.left = '0px';
    }
});