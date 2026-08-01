"""
Genera un mp3 por lección usando VibeVoice (https://github.com/microsoft/VibeVoice)
y los guarda en la carpeta audio/ del proyecto, nombrados como <leccion.id>.mp3.

Requisitos previos:
  1. Clonar VibeVoice en una carpeta HERMANA de english-app (no dentro):
       git clone https://github.com/microsoft/VibeVoice
  2. Crear un entorno e instalar sus dependencias:
       cd VibeVoice
       pip install -e .
  3. Volver aqui y correr:
       node tools/generate_audio/export_lessons.js
       python tools/generate_audio/generate_audio.py

Ajusta VIBEVOICE_PATH y el nombre del modelo segun la version que hayas clonado.
"""

import json
import sys
from pathlib import Path

VIBEVOICE_PATH = Path(__file__).resolve().parents[2].parent / "VibeVoice"
MODEL_NAME = "microsoft/VibeVoice-1.5B"  # cambia por el checkpoint que quieras usar
VOICE = "en-US-woman-1"  # revisa en el repo de VibeVoice los nombres de voces disponibles

sys.path.insert(0, str(VIBEVOICE_PATH))

from vibevoice import VibeVoiceTTS  # provisto por el repo microsoft/VibeVoice

ROOT = Path(__file__).resolve().parents[2]
LESSONS_JSON = Path(__file__).resolve().parent / "lessons.json"
AUDIO_DIR = ROOT / "audio"


def main():
    if not LESSONS_JSON.exists():
        print("Falta lessons.json. Corre primero: node tools/generate_audio/export_lessons.js")
        sys.exit(1)

    AUDIO_DIR.mkdir(exist_ok=True)
    lessons = json.loads(LESSONS_JSON.read_text(encoding="utf-8"))

    tts = VibeVoiceTTS.from_pretrained(MODEL_NAME)

    for lesson in lessons:
        out_path = AUDIO_DIR / f"{lesson['id']}.mp3"
        if out_path.exists():
            print(f"Ya existe, saltando: {out_path.name}")
            continue

        print(f"Generando {out_path.name}...")
        tts.synthesize(text=lesson["texto"], voice=VOICE, output_path=str(out_path))

    print("Listo.")


if __name__ == "__main__":
    main()
