// ========================================
// FUNCIONES AUXILIARES
// ========================================

// Local Storage
function cargarPerfil() {
    const perfilGuardado = localStorage.getItem('perfil_usuario');
    if (perfilGuardado) {
        return JSON.parse(perfilGuardado);
    } else {
        const perfilNuevo = {
            alumnoId: `user_${Date.now()}`,
            nivel: 'A1',
            historialDebilidades: [],
            debilidades_actuales: [],
            vocabulario_aprendido: []
        };
        guardarPerfil(perfilNuevo);
        return perfilNuevo;
    }
}

function guardarPerfil(perfil) {
    localStorage.setItem('perfil_usuario', JSON.stringify(perfil));
}

function limpiarDatos() {
    if (confirm('¿Estás seguro? Se eliminarán todos tus datos.')) {
        localStorage.removeItem('perfil_usuario');
        location.reload();
    }
}

// Corrección de respuestas
function corregirRespuesta(ejercicio, respuestaAlumno, tipo) {
    const respuestaEsperada = ejercicio.respuesta_esperada;
    const correcto = respuestaAlumno.toLowerCase().trim() === respuestaEsperada.toLowerCase();
    const puntos = correcto ? 1 : 0;
    const feedback = correcto ? '✓ Correcto' : `✗ Esperado: ${respuestaEsperada}`;

    return {
        id: ejercicio.id,
        tipo,
        respuestaAlumno,
        correcto,
        puntos,
        feedback,
        debilidad: !correcto && ejercicio.tema ? ejercicio.tema : null
    };
}

// Rendering
function renderEjercicio(ej, tipo) {
    const id = ej.id;
    const pregunta = ej.pregunta || ej.oracion || ej.en || '';

    return `
        <div class="ejercicio">
            <div class="ejercicio-tipo">${tipo}</div>
            <div class="ejercicio-pregunta">${pregunta}</div>
            <input 
                type="text" 
                id="${id}" 
                class="ejercicio-input" 
                placeholder="Tu respuesta..."
            />
        </div>
    `;
}

function mostrarStep(stepId) {
    document.querySelectorAll('.step').forEach(step => step.classList.remove('active'));
    document.getElementById(stepId).classList.add('active');
    window.scrollTo(0, 0);
}

// Utilidades
function actualizarMostrador(perfil) {
    document.getElementById('alumno-id').textContent = perfil.alumnoId;
    document.getElementById('nivel-actual').textContent = perfil.nivel;

    if (perfil.debilidades_actuales.length > 0) {
        document.getElementById('debilidades-display').style.display = 'block';
        const debilidades = perfil.debilidades_actuales.map(d => d.tema).join(', ');
        document.getElementById('debilidades-list').textContent = debilidades;
    } else {
        document.getElementById('debilidades-display').style.display = 'none';
    }
}
