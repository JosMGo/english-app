// ========================================
// LÓGICA PRINCIPAL
// ========================================

let perfil = null;
let leccionActual = null;
let respuestas = {};
let resultadoActual = null;

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    perfil = cargarPerfil();
    actualizarMostrador(perfil);
    document.getElementById('nivel-select').value = perfil.nivel;
});

// ========================================
// 1. CARGAR LECCIÓN
// ========================================

function cargarLeccion() {
    const nivel = document.getElementById('nivel-select').value;
    const categoria = document.getElementById('categoria-select').value;

    perfil.nivel = nivel;
    guardarPerfil(perfil);

    // Obtener lección
    leccionActual = obtenerLeccion(nivel, categoria, perfil.debilidades_actuales);
    respuestas = {};

    console.log('Lección cargada:', leccionActual);
    mostrarLeccion();
    mostrarStep('step-respondiendo');
}

// ========================================
// 2. MOSTRAR LECCIÓN
// ========================================

function mostrarLeccion() {
    if (!leccionActual) return;

    // Header
    document.getElementById('leccion-emoji').textContent = leccionActual.emoji;
    document.getElementById('leccion-titulo').textContent = leccionActual.titulo;
    document.getElementById('leccion-info').textContent = `${leccionActual.conteo_palabras} palabras`;

    // Texto
    document.getElementById('leccion-texto').textContent = leccionActual.texto;

    // Traducción
    document.getElementById('leccion-traduccion').textContent = leccionActual.traduccion;

    // Vocabulario
    const vocabHtml = leccionActual.vocab.map(word => `
        <div class="vocab-item">
            <div class="vocab-item-en">${word.en}</div>
            <div class="vocab-item-es">${word.es}</div>
        </div>
    `).join('');
    document.getElementById('leccion-vocab').innerHTML = vocabHtml;

    // Ejercicios
    let ejerciciosHtml = '';

    // Comprensión
    if (leccionActual.ejercicios.comprension?.length > 0) {
        ejerciciosHtml += '<h4>Comprensión (Sí/No)</h4>';
        leccionActual.ejercicios.comprension.forEach(ej => {
            ejerciciosHtml += renderEjercicio(ej, 'Sí/No');
        });
    }

    // Preguntas
    if (leccionActual.ejercicios.preguntas?.length > 0) {
        ejerciciosHtml += '<h4 style="margin-top: 16px;">Palabras Interrogativas</h4>';
        leccionActual.ejercicios.preguntas.forEach(ej => {
            ejerciciosHtml += renderEjercicio(ej, 'Pregunta');
        });
    }

    // Gramática
    if (leccionActual.ejercicios.gramatica?.length > 0) {
        ejerciciosHtml += '<h4 style="margin-top: 16px;">Gramática (Completa)</h4>';
        leccionActual.ejercicios.gramatica.forEach(ej => {
            ejerciciosHtml += renderEjercicio(ej, 'Gramática');
        });
    }

    // Match
    if (leccionActual.ejercicios.match?.length > 0) {
        ejerciciosHtml += '<h4 style="margin-top: 16px;">Vocabulario (Empareja)</h4>';
        leccionActual.ejercicios.match.forEach(ej => {
            ejerciciosHtml += renderEjercicio(ej, 'Match');
        });
    }

    document.getElementById('leccion-ejercicios').innerHTML = ejerciciosHtml;

    // Agregar event listeners
    document.querySelectorAll('.ejercicio-input').forEach(input => {
        input.addEventListener('input', (e) => {
            respuestas[input.id] = e.target.value;
        });
    });
}

// ========================================
// 3. PROCESAR LECCIÓN
// ========================================

function procesarLeccion() {
    const respuestasCorregidas = [];
    let totalPuntos = 0;
    let totalEjercicios = 0;

    // Corregir cada tipo de ejercicio
    Object.keys(leccionActual.ejercicios).forEach(tipo => {
        leccionActual.ejercicios[tipo].forEach(ej => {
            const respuesta = respuestas[ej.id];
            if (respuesta !== undefined && respuesta !== '') {
                const corregida = corregirRespuesta(ej, respuesta, tipo);
                respuestasCorregidas.push(corregida);
                totalPuntos += corregida.puntos;
                totalEjercicios += 1;
            }
        });
    });

    // Si no respondió nada
    if (totalEjercicios === 0) {
        alert('Debes responder al menos un ejercicio');
        return;
    }

    // Calcular puntuación
    const puntuacion = Math.round((totalPuntos / totalEjercicios) * 100);

    // Detectar debilidades
    const debilidades = {};
    respuestasCorregidas.forEach(r => {
        if (r.debilidad) {
            if (!debilidades[r.debilidad]) {
                debilidades[r.debilidad] = { ocurrencias: 0 };
            }
            debilidades[r.debilidad].ocurrencias += 1;
        }
    });

    const nuevasDebilidades = Object.entries(debilidades)
        .map(([tema, data]) => ({ tema, ocurrencias: data.ocurrencias }))
        .sort((a, b) => b.ocurrencias - a.ocurrencias);

    // Actualizar historial
    const nuevoHistorial = [
        ...perfil.historialDebilidades,
        {
            fecha: new Date().toISOString(),
            leccionId: leccionActual.id,
            leccionTitulo: leccionActual.titulo,
            debilidades: nuevasDebilidades,
            puntuacion: (totalPuntos / totalEjercicios).toFixed(2)
        }
    ];

    if (nuevoHistorial.length > 5) nuevoHistorial.shift();

    // Promediar debilidades
    const debilidades_promediadas = {};
    nuevoHistorial.forEach(entrada => {
        entrada.debilidades.forEach(d => {
            if (!debilidades_promediadas[d.tema]) {
                debilidades_promediadas[d.tema] = 0;
            }
            debilidades_promediadas[d.tema] += d.ocurrencias;
        });
    });

    const debilidades_finales = Object.entries(debilidades_promediadas)
        .map(([tema, ocurrencias]) => ({
            tema,
            ocurrencias: (ocurrencias / nuevoHistorial.length).toFixed(1)
        }))
        .sort((a, b) => b.ocurrencias - a.ocurrencias);

    // Guardar perfil
    perfil.historialDebilidades = nuevoHistorial;
    perfil.debilidades_actuales = debilidades_finales;
    guardarPerfil(perfil);

    resultadoActual = {
        respuestasCorregidas,
        puntuacion,
        totalEjercicios,
        nuevasDebilidades
    };

    mostrarResultado();
    mostrarStep('step-resultado');
}

// ========================================
// 4. MOSTRAR RESULTADO
// ========================================

function mostrarResultado() {
    // Puntuación
    document.getElementById('resultado-puntuacion').textContent = `${resultadoActual.puntuacion}%`;
    document.getElementById('resultado-info').textContent = `${resultadoActual.totalEjercicios} ejercicios respondidos`;

    // Respuestas
    const respuestasHtml = resultadoActual.respuestasCorregidas.map(r => {
        const clase = r.correcto ? 'respuesta-correcta' : 'respuesta-incorrecta';
        const icono = r.correcto ? '✓' : '✗';
        return `
            <div class="respuesta ${clase}">
                ${icono} ${r.feedback}
                <div class="respuesta-texto">Tu respuesta: "${r.respuestaAlumno}"</div>
            </div>
        `;
    }).join('');
    document.getElementById('resultado-respuestas').innerHTML = respuestasHtml;

    // Debilidades
    if (resultadoActual.nuevasDebilidades.length > 0) {
        document.getElementById('resultado-debilidades-container').style.display = 'block';
        const debilidades = resultadoActual.nuevasDebilidades.map(d => `
            <div class="debilidad-item">
                ⚠️ <span class="debilidad-tema">${d.tema}</span> 
                (${d.ocurrencias} error${d.ocurrencias > 1 ? 'es' : ''})
            </div>
        `).join('');
        document.getElementById('resultado-debilidades').innerHTML = debilidades;
    } else {
        document.getElementById('resultado-debilidades-container').style.display = 'none';
    }

    // Mostrar perfil actualizado
    console.log('Perfil actualizado:', perfil);
}

// ========================================
// NAVEGACIÓN
// ========================================

function volverAlInicio() {
    document.getElementById('nivel-select').value = perfil.nivel;
    actualizarMostrador(perfil);
    mostrarStep('step-inicio');
}

function cargarLeccionSiguiente() {
    cargarLeccion();
}
