const icono_menu = document.getElementById('barra_menu');
const icono_cerrar = document.getElementById('icono_cerrar_nav');
const nav_movil = document.getElementById('nav_movil');

icono_menu.addEventListener('click', ()=>{
    nav_movil.classList.remove('bottom-full');
    nav_movil.classList.add('top-0');
});

icono_cerrar.addEventListener('click', ()=>{
    nav_movil.classList.remove('top-0');
    nav_movil.classList.add('bottom-full')
});