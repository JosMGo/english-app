# Generación de audio con VibeVoice (offline)

Estos scripts generan un `.mp3` por lección para que la app los reproduzca sin
conexión. VibeVoice no corre en el navegador, así que este paso se ejecuta
**una sola vez, en tu máquina**, y el resultado (los mp3) se queda dentro del
proyecto.

## Pasos

1. Clona VibeVoice como carpeta hermana de `english-app` (no adentro):
   ```bash
   git clone https://github.com/microsoft/VibeVoice ../VibeVoice
   cd ../VibeVoice
   pip install -e .
   ```
   Revisa el README de ese repo para requisitos de PyTorch/GPU y el nombre
   exacto de los checkpoints y voces disponibles — cambian entre versiones.

2. Exporta los textos de las lecciones a JSON:
   ```bash
   node tools/generate_audio/export_lessons.js
   ```
   Esto crea `tools/generate_audio/lessons.json` con `{id, texto}` de cada
   lección de `js/leciones.js`.

3. Ajusta `generate_audio.py`:
   - `MODEL_NAME` y `VOICE` según lo que ofrezca tu checkout de VibeVoice.
   - La llamada `VibeVoiceTTS.from_pretrained(...)` / `tts.synthesize(...)`
     es un placeholder — confirma la API real en los ejemplos del repo
     (`demo/`, `examples/`) antes de correrlo, porque puede variar.

4. Genera los audios:
   ```bash
   python tools/generate_audio/generate_audio.py
   ```
   Esto crea `audio/<leccion.id>.mp3` para cada lección (salta las que ya
   existen).

5. La app (`js/app.js`) ya busca `audio/<id>.mp3` automáticamente al mostrar
   una lección y muestra "⚠️ Audio no disponible" si el archivo no existe,
   así que puedes generar los audios de a poco.
