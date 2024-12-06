const costos = {
    nat: {
        box: document.getElementById('box_costo_nat'),
        text: document.getElementById('text_costo_nat')
    },
    tea: {
        box: document.getElementById('box_costo_tea'),
        text: document.getElementById('text_costo_tea')
    },
    bal: {
        box: document.getElementById('box_costo_bal'),
        text: document.getElementById('text_costo_bal')
    }
};

// Función para mostrar el texto de detalle
function verDetalle(elementoTexto) {
    elementoTexto.dataset.originalText = elementoTexto.textContent; // Guarda el texto original
    if (elementoTexto.textContent == "NATACIÓN") {
        elementoTexto.textContent = 'Ver Detalles';
    } else {
        elementoTexto.textContent = 'Ver Detalles';
    }
}

// Función para restaurar el texto original
function restaurarTexto(elementoTexto) {
    elementoTexto.textContent = elementoTexto.dataset.originalText;
}

// Añade los eventos para cada box
for (let index in costos) {
    const { box, text } = costos[index];
    box.addEventListener('mouseover', () => verDetalle(text));
    box.addEventListener('mouseout', () => restaurarTexto(text));
}
