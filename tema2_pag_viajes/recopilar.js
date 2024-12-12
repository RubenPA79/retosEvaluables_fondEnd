const solicitudes = [];

function solicitarInformacion() {
    // Captura los campos del formulario
    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const origen = document.getElementById("origen").value.trim();
    const destino = document.getElementById("destino").value.trim();
    const personas = document.getElementById("personas").value.trim();
    const fecha = document.getElementById("fecha").value;

    

    // Crea un objeto literal con los datos
    const solicitud = {
        nombre: nombre,
        correo: correo,
        origen: origen,
        destino: destino,
        personas: parseInt(personas, 10), // Convierte personas a número
        fecha: fecha,
    };

    // Añade el objeto al array
    solicitudes.push(solicitud);

    // Muestra los resultados en pantalla
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `
        <p>Información recopilada:</p>
        <pre>${JSON.stringify(solicitudes, null, 2)}</pre>
    `;

    // Limpia el formulario
    const formulario = document.getElementById("formulario");
    if (formulario) {
        formulario.reset();
    }
}

// Función para limpiar el formulario y los resultados
function limpiarFormulario() {
    const formulario = document.getElementById("formulario");
    const resultado = document.getElementById("resultado");

    if (formulario) {
        formulario.reset(); // Limpia el formulario
    }

    if (resultado) {
        resultado.innerHTML = ""; // Limpia los resultados
    }
}

