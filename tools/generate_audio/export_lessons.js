// Extrae {id, texto} de todas las lecciones en js/leciones.js y las vuelca a lessons.json.
// Uso: node tools/generate_audio/export_lessons.js

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const leccionesPath = path.join(__dirname, '..', '..', 'js', 'leciones.js');
const code = fs.readFileSync(leccionesPath, 'utf8');

const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(code, sandbox);

const LECCIONES = sandbox.LECCIONES;
const salida = [];

for (const nivel of Object.keys(LECCIONES)) {
    for (const categoria of Object.keys(LECCIONES[nivel])) {
        for (const leccion of LECCIONES[nivel][categoria]) {
            salida.push({ id: leccion.id, texto: leccion.texto });
        }
    }
}

const outPath = path.join(__dirname, 'lessons.json');
fs.writeFileSync(outPath, JSON.stringify(salida, null, 2), 'utf8');
console.log(`Exportadas ${salida.length} lecciones a ${outPath}`);
