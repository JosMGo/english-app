# 📥 Descargar y cargar en Visual Studio Code

## PASO 1: Crear la carpeta "english-app"

1. Abre tu explorador de archivos
2. Crea una carpeta nueva llamada: **english-app**
3. Dentro de esa carpeta, crea 2 subcarpetas:
   - **css**
   - **js**

**Estructura final:**
```
english-app/
├── index.html
├── css/
│   └── styles.css
└── js/
    ├── leciones.js
    ├── utils.js
    └── app.js
```

---

## PASO 2: Descargar los archivos

### Archivos a descargar:

| Archivo | Destino |
|---------|---------|
| `index.html` | english-app/ (raíz) |
| `styles.css` | english-app/css/ |
| `leciones.js` | english-app/js/ |
| `utils.js` | english-app/js/ |
| `app.js` | english-app/js/ |

---

## PASO 3: Abrir en Visual Studio Code

### Opción A: Arrastra y suelta
1. Abre Visual Studio Code
2. Arrastra la carpeta **english-app** al VS Code
3. ¡Listo! Verás la estructura en el panel izquierdo

### Opción B: Menú File
1. VS Code → File → Open Folder
2. Selecciona la carpeta **english-app**
3. Clica "Select Folder"

---

## PASO 4: Verifica que todo está en su lugar

En VS Code deberías ver:

```
📁 english-app
  📄 index.html
  📁 css
    📄 styles.css
  📁 js
    📄 leciones.js
    📄 utils.js
    📄 app.js
```

---

## PASO 5: Prueba la app

### Opción A: Con Live Server (recomendado)
1. Instala la extensión "Live Server" en VS Code
2. Click derecho en `index.html` → "Open with Live Server"
3. Se abre en navegador automáticamente

### Opción B: Sin extensión
1. Arrastra `index.html` a un navegador
2. O haz doble click en `index.html`

---

## ✅ Todo listo

La app está funcionando. Puedes:
- ✅ Seleccionar nivel y categoría
- ✅ Cargar lecciones
- ✅ Responder ejercicios
- ✅ Ver corrección automática
- ✅ Los datos se guardan automáticamente

---

## Editar la app

Ahora que tienes todo en VS Code, puedes:

### Agregar más lecciones
1. Abre `js/leciones.js`
2. Copia una lección existente
3. Modifica el contenido
4. Guarda el archivo (Ctrl+S)
5. Recarga el navegador (F5)

### Cambiar estilos
1. Abre `css/styles.css`
2. Modifica los colores, tamaños, etc.
3. Guarda y recarga

### Cambiar la lógica
1. Abre `js/app.js`
2. Modifica el código
3. Guarda y recarga

---

## 🚀 Para desplegar (después)

Cuando quieras compartir tu app:

```bash
cd english-app
git init
git add .
git commit -m "primera version"
git remote add origin https://github.com/TU_USUARIO/english-app.git
git push -u origin main
```

Luego conecta a Netlify y ¡compartir el link!

---

¡Listo para desarrollar! 💻
