window.addEventListener('scroll', function() {
    var header = document.querySelector('.header-container');
    var scrollPosition = window.scrollY;
    
    if (scrollPosition > 30) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
        header.style.padding = '5px 15px'; // Ajusta el padding según lo deseado
    } else {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.33)';
        header.style.padding = '15px'; // Restablece el padding original
    }
});

document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.menu-items').classList.toggle('active');
});

// Obtener el icono del menú
const menuIcon = document.getElementById('menuIcon');

// Agregar evento de clic al icono del menú
menuIcon.addEventListener('click', function() {
    // Alternar entre las clases fa-bars y fa-times
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
});