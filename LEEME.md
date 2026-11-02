# Mis Audiolibros — app para el iPhone

## Archivos
| Archivo | Para qué sirve |
|---|---|
| `index.html` | La app entera: biblioteca, reproductor y base de datos |
| `manifest.webmanifest` | Nombre, colores e icono al instalarla en el iPhone |
| `sw.js` | Guarda la app en el móvil para que abra sin internet |
| `icon-180.png`, `icon-512.png` | Iconos |

## 1. Subirla a GitHub Pages (igual que Mi Radio)
1. En GitHub (usuario Tato1952) crea un repositorio nuevo llamado `audiolibros`, público.
2. *Add file → Upload files* y sube los 5 archivos de arriba (sin carpeta).
3. *Settings → Pages → Branch: main / (root) → Save*.
4. En 1–2 minutos estará en: `https://tato1952.github.io/audiolibros/`

> Tiene que ser **https** (GitHub Pages lo es). Desde el NAS por `http://` también funciona,
> pero el modo sin conexión no se activa.

## 2. Instalarla en el iPhone
1. Abre esa dirección en **Safari**.
2. Botón **Compartir** → **Añadir a pantalla de inicio** → Añadir.
3. Ábrela **siempre desde el icono** de la pantalla de inicio: ahí vive tu biblioteca.

## 3. Añadir un audiolibro
1. Pulsa **+** → *Elegir archivos de audio*. Se abre la app **Archivos**: puedes elegir de
   iCloud, de *En mi iPhone* o del NAS (Archivos → ⋯ → *Conectarse al servidor* → `smb://192.168.178.130`).
2. Puedes marcar **varios archivos a la vez** (un libro partido en capítulos): se ordenan solos
   por nombre (01, 02, … 10, 11).
3. Si los MP3 tienen etiquetas, el título, el autor y la carátula se rellenan solos.
4. *Guardar en la biblioteca*. El audio se **copia dentro de la app**, así que luego no
   necesitas el NAS ni internet para escucharlo.

Formatos: MP3, M4A, M4B, AAC, WAV.

## 4. Cómo recuerda el punto exacto
- Mientras suena, guarda la posición **cada 2 segundos**.
- Además guarda al instante al pausar, al saltar, al cambiar de capítulo, al bloquear el
  móvil, al cambiar de app y al cerrarla.
- La guarda en **dos sitios**: la base de datos (IndexedDB) y una copia rápida (localStorage).
  Al abrir, usa la más reciente.
- Al volver a abrir la app, el último libro aparece abajo listo en su sitio: pulsas ▶ y sigue.

## 5. Carátulas
- Si el archivo (MP3, M4B o M4A) lleva la carátula dentro, se usa esa.
- Si no, al guardar el libro **la busca sola en internet** (Apple Books, Google Books y Open Library).
- Para cambiarla: botón **⋯** del libro → **Buscar en internet** → toca la que te guste.
- Los libros que no tengan carátula la buscan solos al abrir la app (con internet).

## 6. Sonido (botón «Sonido» del reproductor)
- **Volumen** de 0 a 200 % (también en la barra bajo los botones). Por encima de 100 % sube las voces bajitas.
- **Ecualizador** de 5 bandas con ajustes listos: Normal, Voz clara, Más graves, Suave, Altavoz móvil, Noche.
- **Igualar volumen**: sube las partes bajas y baja las fuertes (coche, calle, ruido).
- En el iPhone, con volumen distinto de 100 % o ecualizador encendido, el audio pasa por un procesador
  y en algunos iPhone se para al bloquear la pantalla. Si pasa, pulsa **Restablecer**.

## 7. Marcadores, velocidad y ajustes
- **Marcadores**: guarda puntos del libro con una nota; tócalos para volver allí.
- **Velocidad**: de 0,5× a 3× en pasos de 0,05 (cada libro recuerda la suya).
- **Ajustes** (⚙️ arriba): segundos de los botones de saltar, rebobinado al reanudar,
  estadísticas (tiempo escuchado, espacio usado) y buscar carátulas que falten.
- **Ordenar** la biblioteca por recientes, título, autor o progreso (botón ↕).
- Deslizar el reproductor hacia abajo lo cierra.

## 8. Otras funciones
- Retroceder 15 s / avanzar 30 s, capítulo anterior / siguiente, lista de capítulos.
- Velocidad: 0,75× a 2× (se recuerda por libro).
- Temporizador para dormir: 5, 15, 30, 45, 60 min o al acabar el capítulo.
- Controles en la pantalla de bloqueo y en el Centro de control, con carátula.
- Botón **⋯** en cada libro: cambiar título, autor o portada, empezar de nuevo o borrar.

## Avisos importantes
- **No borres el icono de la app** de la pantalla de inicio: el iPhone borraría con él la
  biblioteca guardada dentro.
- Los libros ocupan espacio en el iPhone; arriba ves cuánto lleva la app.
- Si cambias `index.html`, sube la versión en `sw.js` (`audiolibros-v2`…) para que el
  iPhone recoja la mejora.
