# ECOS: Umbral de los Eternos

Sitio web oficial de **ECOS: Umbral de los Eternos**, un juego de cartas inspirado en las culturas indígenas colombianas **Nukak** y **Sikuani**, donde la estrategia y el misticismo se unen en cada partida.

> *Adéntrate en el umbral entre el mundo de los vivos y el de los eternos.*

---

## 📖 Sobre el juego

ECOS es un juego de cartas que mezcla estrategia y narrativa, ambientado en la cosmovisión de dos pueblos indígenas de Colombia. Cada cultura aporta sus propios roles, habilidades y estilo de juego:

- **Nukak** — pueblo nómada de la Amazonía.
- **Sikuani** — pueblo de los Llanos Orientales.

Dentro de cada cultura existen distintos **roles** jugables, cada uno con su propia carta, ilustración y audio temático:

- 🪄 **Chamán**
- 🏹 **Cazador**
- 🛡️ **Guardián**
- 🌿 **Médico**

---

## 🌐 Estructura del sitio

La web es estática (HTML + CSS + JavaScript, sin frameworks) y está compuesta por las siguientes páginas:

| Página | Archivo | Descripción |
|---|---|---|
| Inicio | `index.html` | Portada con presentación del juego |
| Cartas | `cartas.html` | Carrusel/galería de las cartas |
| Culturas | `culturas.html` | Las culturas Nukak y Sikuani |
| Instrucciones | `instrucciones.html` | Cómo jugar, roles y audios por tribu |
| Nuestra Historia | `nuestra-historia.html` | Historia del proyecto |
| Tienda | `tienda.html` | Productos del juego |

---

## 📂 Organización del proyecto

```
.
├── index.html, cartas.html, culturas.html, ...   # Páginas del sitio
├── css/                # Hojas de estilo
├── js/                 # JavaScript (main.js: navegación, animaciones, roles/audio)
├── Imagenes/           # Imágenes generales
├── imagenesCartas/     # Ilustraciones de las cartas
├── imagenes_tienda/    # Imágenes de la tienda
├── Fondos/             # Fondos de las secciones
├── Audios/             # Audios temáticos por tribu y rol (.mp3)
├── CARTAS/, TEXTOS/    # Recursos del juego
├── MANUAL.pdf          # Manual del juego
└── ESQUEMA.pdf         # Esquema/diseño del juego
```

---

## 🚀 Cómo ver la web localmente

Al ser un sitio estático, no requiere instalación ni dependencias. Tienes dos opciones:

**Opción 1 — Abrir directamente**

Abre el archivo `index.html` en tu navegador.

**Opción 2 — Servidor local (recomendado)**

Para que los audios y rutas funcionen correctamente, sirve la carpeta con un servidor local. Por ejemplo, con Python:

```bash
# Dentro de la carpeta del proyecto
python -m http.server 8000
```

Luego abre tu navegador en: <http://localhost:8000>

O, si usas VS Code, puedes utilizar la extensión **Live Server**.

---

## 🛠️ Tecnologías

- HTML5
- CSS3
- JavaScript (vanilla)

---

## 📄 Créditos

Proyecto desarrollado por **Ramyx**.

Juego inspirado en las culturas indígenas colombianas Nukak y Sikuani.
