# Rubén Bravo García — Portfolio

Portfolio personal de ciberseguridad y ASIR.

## Estructura del proyecto

```
portfolio/
├── index.html              ← Punto de entrada principal
├── README.md               ← Este archivo
└── assets/
    ├── css/
    │   └── style.css       ← Todos los estilos (variables, componentes, responsive)
    └── js/
        ├── main.js         ← Entry point — importa y orquesta todos los módulos
        ├── theme.js        ← Toggle dark/light mode
        ├── cursor.js       ← Cursor personalizado con animación de seguimiento
        ├── typing.js       ← Efecto de escritura del hero prompt
        ├── particles.js    ← Canvas API — partículas de fondo (katakana, hex, símbolos)
        ├── scroll.js       ← Scroll reveal, nav activo, tilt en cards, skill bars
        └── terminal.js     ← Terminal interactiva (comandos reales + scroll a secciones)
```

## Terminal interactiva — comandos disponibles

| Comando        | Acción                                 |
|----------------|----------------------------------------|
| `help`         | Muestra la lista de comandos           |
| `whoami`       | Scroll a la sección "Sobre mí"         |
| `xp`           | Scroll a la sección "Experiencia"      |
| `projects`     | Scroll a la sección "Proyectos"        |
| `skills`       | Scroll a la sección "Habilidades"      |
| `contact`      | Scroll a la sección "Contacto"         |
| `ls`           | Lista las secciones del portfolio      |
| `cat rbg.json` | Muestra los datos en formato JSON      |
| `nmap`         | Simulación de escaneo de puertos       |
| `status`       | Estado de disponibilidad laboral       |
| `theme`        | Cambia entre modo oscuro/claro         |
| `clear`        | Limpia la terminal                     |
| `readme`       | Muestra el README del proyecto         |

### Funcionalidades extra de la terminal
- **Historial de comandos**: usa `↑` y `↓` para navegar
- **Autocompletado**: pulsa `Tab` para completar comandos
- **Sugerencias**: si escribes un comando incorrecto, sugiere el más parecido

## Stack

- HTML5 semántico
- CSS3 con custom properties, animaciones y diseño responsive
- JavaScript ES6+ modular (sin frameworks, sin dependencias)
- Canvas API para el fondo de partículas

---

© 2026 Rubén Bravo García
