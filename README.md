# Adivina los colores

Primera práctica de Front-end para Navegadores Web (UPM, 2026/27): juego de adivinar una combinación secreta de 4 colores con HTML, CSS y JavaScript, sin frameworks.

## Ejecutar

Abrir `index.html` con doble clic (versión compilada, carpeta `dist/`). No necesita servidor ni Node.

## Desarrollo

Requiere [Vite+](https://viteplus.dev) (`vp`).

```bash
vp install   # instalar dependencias
vp dev       # servidor de desarrollo
vp build     # genera dist/ para la entrega
```

## Estructura

- `src/main.js`: router por hash (`#inicio`, `#jugar`, `#records`, `#registro`, `#login`).
- `src/views/`: una vista por opción del menú.
- `src/score.js`: cálculo de pistas (🟢 color y posición, 🟡 solo color).
- `src/api.js`: cliente de la API REST (`http://fenw.etsisi.upm.es:4500`).

## Alcance

Registro solo muestra el formulario; Login guarda el token en `localStorage`. El resto llega en la segunda práctica.
