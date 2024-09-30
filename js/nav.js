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

/* Altura del slider */
const sliders = document.getElementById('sliders');
const alto_slider = window.innerHeight;
document.addEventListener('DOMContentLoaded', ()=>{
    if (alto_slider < 824) {
        sliders.classList.remove('1360px:h-screen');
        sliders.classList.add('1360px:h-823px')
    }
});

/* Color del fondo del nav al momento de hacer el scrool */

const nav_cabecera = document.getElementById('nav_cabecera');
const opcion_nav0 = document.getElementById('opcion_nav0');
const opcion_nav1 = document.getElementById('opcion_nav1');
const opcion_nav2 = document.getElementById('opcion_nav2');
const opcion_nav3 = document.getElementById('opcion_nav3');
const opcion_nav4 = document.getElementById('opcion_nav4');

document.addEventListener('scroll', ()=>{
    if (window.scrollY === 0) {
        nav_cabecera.classList.add('820px:bg-transparent');
        nav_cabecera.classList.remove('820px:bg-white');
        nav_cabecera.classList.remove('shadow-lg')
        opcion_nav0.classList.add('text-white');
        opcion_nav1.classList.add('text-white');
        opcion_nav2.classList.add('text-white');
        opcion_nav3.classList.add('text-white');
        opcion_nav4.classList.add('text-white');
        opcion_nav0.classList.remove('text-black');
        opcion_nav1.classList.remove('text-black');
        opcion_nav2.classList.remove('text-black');
        opcion_nav3.classList.remove('text-black');
        opcion_nav4.classList.remove('text-black');
    } else {
        nav_cabecera.classList.remove('820px:bg-transparent');
        nav_cabecera.classList.add('820px:bg-white');
        nav_cabecera.classList.add('shadow-lg')
        opcion_nav0.classList.remove('text-white');
        opcion_nav1.classList.remove('text-white');
        opcion_nav2.classList.remove('text-white');
        opcion_nav3.classList.remove('text-white');
        opcion_nav4.classList.remove('text-white');
        opcion_nav0.classList.add('text-black');
        opcion_nav1.classList.add('text-black');
        opcion_nav2.classList.add('text-black');
        opcion_nav3.classList.add('text-black');
        opcion_nav4.classList.add('text-black');
    }
});