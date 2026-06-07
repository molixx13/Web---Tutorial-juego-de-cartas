/**
 * ============================================================
 * ECOS: UMBRAL DE LOS ETERNOS — Script principal
 *
 * Funcionalidades:
 *   1. Marcar el enlace activo en el header según la página actual
 *   2. Scroll suave a secciones
 *   3. Animación de entrada (IntersectionObserver)
 *   4. Lógica de subnavegación de la Tienda
 *   5. Lógica de selección de rol en Instrucciones
 * ============================================================
 */

/* ── 1. ACTIVAR EL NAV LINK CORRECTO SEGÚN LA PÁGINA ── */
(function marcarNavActivo() {
  /**
   * Lee la ruta del archivo actual (ej: "/cartas.html")
   * y agrega la clase "activo" al enlace correspondiente.
   * La clase "activo" aplica el fondo #B2296F según el CSS.
   */
  const rutaActual = window.location.pathname.split('/').pop() || 'index.html';

  // Mapa: nombre de archivo → id del enlace de nav
  const mapaRutas = {
    'index.html'           : 'nav-inicio',
    ''                     : 'nav-inicio',
    'nuestra-historia.html': 'nav-historia',
    'culturas.html'        : 'nav-culturas',
    'cartas.html'          : 'nav-cartas',
    'instrucciones.html'   : 'nav-instrucciones',
    'tienda.html'          : 'nav-tienda',
  };

  const idActivo = mapaRutas[rutaActual];
  if (idActivo) {
    const enlaceActivo = document.getElementById(idActivo);
    if (enlaceActivo) {
      enlaceActivo.classList.add('activo');
    }
  }
})();


/* ── 2. SCROLL SUAVE PARA ANCLAS INTERNAS ── */
document.querySelectorAll('a[href^="#"]').forEach(function(enlace) {
  enlace.addEventListener('click', function(e) {
    const objetivo = document.querySelector(this.getAttribute('href'));
    if (objetivo) {
      e.preventDefault();
      objetivo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});


/* ── 3. ANIMACIONES DE ENTRADA CON IntersectionObserver ── */
(function configurarAnimaciones() {
  /**
   * Observa los elementos con clase "animar" y agrega
   * "animado" cuando entran en el viewport, disparando
   * la animación fadeInUp definida en CSS.
   */
  if (!('IntersectionObserver' in window)) return; // fallback para browsers viejos

  const observer = new IntersectionObserver(
    function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animado');
          observer.unobserve(entry.target); // una sola vez
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll('.animar').forEach(function(el) {
    observer.observe(el);
  });
})();


/* ── 4. SUBNAVEGACIÓN DE TIENDA ── */
(function configurarTiendaSubnav() {
  /**
   * Resalta el botón de categoría activa en la subnavegación
   * de la página Tienda y hace scroll a la sección correspondiente.
   */
  const btnsTienda = document.querySelectorAll('.tienda-subnav__link');

  btnsTienda.forEach(function(btn) {
    btn.addEventListener('click', function() {
      // Quitar activo de todos
      btnsTienda.forEach(function(b) { b.classList.remove('activo-subnav'); });
      // Agregar activo al clickeado
      this.classList.add('activo-subnav');
    });
  });

  // Activar el primer botón por defecto
  if (btnsTienda.length > 0) {
    btnsTienda[0].classList.add('activo-subnav');
  }
})();


/* ── 5. SELECCIÓN DE ROL EN INSTRUCCIONES ── */
(function configurarSeleccionRol() {
  /**
   * Cuando el usuario hace clic en un rol (Cazador, Chamán, etc.),
   * resalta ese rol y muestra su descripción.
   * Los paneles de descripción están ocultos hasta que se seleccione un rol.
   */
  const roles = document.querySelectorAll('.inst-rol-item');

  roles.forEach(function(rol) {
    rol.addEventListener('click', function() {
      // Quitar selección previa dentro del mismo bloque cultura
      const bloquePadre = this.closest('.inst-roles-grid');
      if (bloquePadre) {
        bloquePadre.querySelectorAll('.inst-rol-item').forEach(function(r) {
          r.classList.remove('rol-activo');
        });
      }
      // Agregar selección al clickeado
      this.classList.add('rol-activo');
    });
  });
})();


/* ── 6. ESTILO DINÁMICO PARA ROL ACTIVO ── */
(function estilosRolActivo() {
  /**
   * Inyecta el estilo inline para el estado activo del rol,
   * ya que depende de --amarillo que puede no estar disponible
   * directamente en algunos contextos.
   */
  const style = document.createElement('style');
  style.textContent = `
    /* Rol seleccionado: fondo amarillo, texto oscuro */
    .inst-rol-item.rol-activo {
      background-color: #FFDC4A;
      border-radius: 4px;
      padding-left: 8px;
    }
    .inst-rol-item.rol-activo .inst-rol-item__nombre {
      color: #2F455C;
    }
    .inst-rol-item.rol-activo .inst-rol-item__flecha {
      color: #2F455C;
    }
  `;
  document.head.appendChild(style);
})();


/* ── 7. BOTÓN VER MÁS (index) ── */
(function configurarVerMas() {
  const btnVerMas = document.getElementById('btn-ver-mas');
  if (!btnVerMas) return;

  btnVerMas.addEventListener('click', function() {
    const seccionCartas = document.getElementById('seccion-cartas');
    if (seccionCartas) {
      seccionCartas.scrollIntoView({ behavior: 'smooth' });
    }
  });
})();


/* ── 8. SELECTOR DE CULTURA EN culturas.html ── */
(function configurarSelectorCultura() {
  /**
   * Muestra/oculta el contenido según la cultura seleccionada
   * (Nukak o Sikuani).
   */
  const btnsCultura = document.querySelectorAll('.cultura-nav__btn');
  const bloquesCultura = document.querySelectorAll('.cultura-contenido-bloque');

  btnsCultura.forEach(function(btn) {
    btn.addEventListener('click', function() {
      const idDestino = this.dataset.cultura;

      // Actualizar botones
      btnsCultura.forEach(function(b) { b.classList.remove('activo-cultura'); });
      this.classList.add('activo-cultura');

      // Mostrar/ocultar contenidos
      bloquesCultura.forEach(function(bloque) {
        if (bloque.id === idDestino) {
          bloque.style.display = 'block';
        } else {
          bloque.style.display = 'none';
        }
      });
    });
  });

  // Activar el primer botón por defecto
  if (btnsCultura.length > 0) {
    btnsCultura[0].click();
  }
})();
