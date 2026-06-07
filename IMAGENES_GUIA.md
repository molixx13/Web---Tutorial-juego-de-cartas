# Guía de Imágenes - ECOS Web

## Imágenes Ya Reemplazadas ✅

| Elemento | Archivo Local | Ubicación en HTML |
|----------|---------------|-------------------|
| Logo Dream Forge | `Fondos/DREAM_FORGE.png` | Header de todas las páginas |
| Hero Index | `Fondos/Home_ECOS.png` | `index.html` - Sección Hero |
| Hero Cartas | `Fondos/Imagen_cartas.png` | `cartas.html` - Sección Hero |
| Hero Instrucciones | `Fondos/Imagen_juego.png` | `instrucciones.html` - Sección Hero |
| Cultura Nukak Principal | `Fondos/Imagen_culturas_nukak.png` | `culturas.html` - Panel Nukak |
| Panel Sikuani | `Fondos/Imagen_culturas 2.png` | `culturas.html` - Panel Sikuani |
| Creencias Cultura | `Fondos/Imagen_creencias_cultura.png` | `culturas.html` - Ambas culturas |
| Características Cultura | `Fondos/imagen_culturas_caracteristicas.png` | `culturas.html` - Ambas culturas |
| Roles NUKAK | `Imagenes/NUKAK/*.png` | `instrucciones.html` - Grid de roles |
| Roles SIKUANI | `Imagenes/SIKUANI/*.png` | `instrucciones.html` - Grid de roles |

---

## Imágenes PENDIENTES (URLs de Figma) ⚠️

### Carrusel de Cartas (index.html)
Necesitas 5 imágenes de cartas para el carrusel:

```html
<!-- Reemplazar estas URLs en index.html -->
Carta 1 (Isaac):       https://www.figma.com/api/mcp/asset/a6ca27f6-d609-4254-b75a-f4a1af260ecb
Carta 2 (Dorso):        https://www.figma.com/api/mcp/asset/67ab132a-14be-43cc-a580-95bb94699979
Carta 3 (Eterno):       https://www.figma.com/api/mcp/asset/48058872-51bf-4500-90fe-8cf60337fcee
Carta 4 (Saqueo):       https://www.figma.com/api/mcp/asset/ec58585c-c8d1-49a5-be67-e4c553598ae9
Carta 5 (Monstruo):     https://www.figma.com/api/mcp/asset/994ad71a-57cb-4acc-9ce7-e4332084e795
```

**Sugerencia:** Crear carpeta `Imagenes/cartas/` y guardarlas como:
- `carta_isaac.png`
- `carta_dorso.png`
- `carta_eterno.png`
- `carta_saqueo.png`
- `carta_monstruo.png`

---

### Galería de Cartas (cartas.html)
Necesitas 15+ imágenes de cartas para las secciones:

**Tipos de cartas mostrados:**
1. Personajes: Isaac, Dorso personaje
2. Objetos únicos: Eternal Card Back, Dado D6, Harapos de Lázaro
3. Objetos de tienda: Treasure Card Back, Brimstone, Blank
4. Objetos de saqueo: Tres centavos, Loot Card Back
5. Enemigos: Monster Card Back, Araña grande, Daddy Long Legs
6. Rituales: Room Card Back, Battle Royale

**Sugerencia:** Crear carpeta `Imagenes/cartas/tipos/` y organizar por carpetas:
```
Imagenes/cartas/
├── personajes/
├── objetos_unicos/
├── objetos_tienda/
├── objetos_saqueo/
├── enemigos/
└── rituales/
```

---

### ✅ Productos de Tienda (tienda.html) - COMPLETADO

Todas las imágenes han sido reemplazadas con archivos locales de `imagenes_tienda/`:

| Producto | Imagen Local | Descripción |
|----------|--------------|-------------|
| **Hero Tienda** | `imagenes_tienda/Imagen_juego.png` | Fondo hero con overlay oscuro |
| **Producto Destacado (Juego)** | `imagenes_tienda/Tienda_juego.png` | Juego completo ECOS |
| **Cartas - Producto 1** | `imagenes_tienda/Tienda_cartas1.png` | Mazo de cartas producto 1 |
| **Cartas - Producto 2** | `imagenes_tienda/Tienda_cartas2.png` | Mazo de cartas producto 2 |
| **Cartas - Producto 3** | `imagenes_tienda/Tienda_cartas3.png` | Mazo de cartas producto 3 |
| **Fichas - Producto 1** | `imagenes_tienda/Tienda_cartas1.png` | Ficha producto 1 |
| **Fichas - Producto 2** | `imagenes_tienda/Tienda_cartas2.png` | Ficha producto 2 |
| **Fichas - Producto 3** | `imagenes_tienda/Tienda_cartas3.png` | Ficha producto 3 |
| **Ofertas - Producto 1** | `imagenes_tienda/Tienda_cartas1.png` | Pack cartas oferta -20% |
| **Ofertas - Producto 2** | `imagenes_tienda/Tienda_cartas2.png` | Pack cartas oferta -15% |
| **Ofertas - Producto 3** | `imagenes_tienda/Tienda_cartas3.png` | Pack cartas oferta -30% |

---

## Estructura de Carpetas Recomendada

```
Web Ramyx/
├── Fondos/              (Ya existe ✅)
│   ├── DREAM_FORGE.png
│   ├── Home_ECOS.png
│   ├── Imagen_cartas.png
│   ├── Imagen_creencias_cultura.png
│   ├── Imagen_culturas1.png
│   ├── Imagen_culturas 2.png
│   ├── imagen_culturas_caracteristicas.png
│   ├── Imagen_culturas_nukak.png
│   └── Imagen_juego.png
├── Imagenes/
│   ├── NUKAK/          (Ya existe ✅)
│   ├── SIKUANI/        (Ya existe ✅)
│   ├── cartas/         (Crear para imágenes de cartas)
│   └── tienda/         (Crear para productos de tienda)
└── Audios/             (Ya existe ✅)
```

---

## Cómo Exportar desde Figma

1. Abre el archivo Figma del proyecto
2. Selecciona el frame/imagen que necesitas
3. Clic derecho → "Export" (o Ctrl+Shift+E)
4. Selecciona formato: PNG para transparencia, JPG para fotos
5. Guarda en la carpeta correspondiente
6. Actualiza la ruta en el HTML

---

## Alternativa Temporal: Placeholders

Si necesitas ver el diseño mientras consigues las imágenes, puedes usar:
```html
<img src="https://via.placeholder.com/227x368?text=Carta+Isaac" alt="Carta Isaac" />
```

O crear un placeholder local en CSS.
