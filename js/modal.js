// Selecciona el body
const body = document.getElementById('body');

// Función para abrir un modal
function openModal(modal) {
    body.classList.add('overflow-hidden');  // Desactiva el scroll del body
    modal.classList.remove('hidden');       // Muestra el modal
    modal.classList.add('fixed', 'flex');   // Hace el modal fijo y visible
}

// Función para cerrar un modal
function closeModal(modal) {
    body.classList.remove('overflow-hidden'); // Reactiva el scroll del body
    modal.classList.add('hidden');            // Oculta el modal
    modal.classList.remove('fixed', 'flex');  // Quita las clases de posicionamiento y visibilidad
}

// Selección de botones y modales
const buttons = {
    nat: {
        button: document.getElementById('button_gal_nat'),
        modal: document.getElementById('nat_modal'),
        closeButton: document.getElementById('close_gal_nat')
    },
    tea: {
        button: document.getElementById('button_gal_tea'),
        modal: document.getElementById('tea_modal'),
        closeButton: document.getElementById('close_gal_tea')
    },
    bal: {
        button: document.getElementById('button_gal_bal'),
        modal: document.getElementById('bal_modal'),
        closeButton: document.getElementById('close_gal_bal')
    }
};

// Asigna eventos a cada botón y modal
for (let key in buttons) {
    const { button, modal, closeButton } = buttons[key];
    button.addEventListener('click', () => openModal(modal));        // Abre el modal
    closeButton.addEventListener('click', () => closeModal(modal));  // Cierra el modal
}
