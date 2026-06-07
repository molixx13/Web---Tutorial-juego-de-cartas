/**
 * ============================================================
 * ECOS: UMBRAL DE LOS ETERNOS — Script principal
 *
 * Funcionalidades:
 *   1. Marcar el enlace activo en el header según la página actual
 *   2. Scroll suave a secciones
 *   3. Animación de entrada (IntersectionObserver)
 *   4. Lógica de subnavegación de la Tienda
 *   5. Lógica de selección de rol en Instrucciones (imagen + audio por tribu/rol)
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
   * Resalta el rol dentro de su grid y actualiza la imagen a la derecha
   * según la tribu (data-inst-tribu en <article>) y data-rol en cada ítem.
   * Archivos en Imagenes/SIKUANI y Imagenes/NUKAK (convenciones de nombre reales).
   */
  const MAPA_TEXTOS = {
    sikuani: {
      cazador: "“I am the Sikuani Hunter, responsible for bringing food to my people. I know this forest like no one else, I know where to find the best fruits, how to hunt the most elusive animals, and how to use the right tools. My experience and skills are key to our survival. I am proud of my role and will do whatever it takes to protect my family and community.”",
      chaman: "Based on the spiritual knowledge present in various Indigenous communities, including the Sikuani, I serve as a guide, spiritual protector, and mediator with the beings of the invisible world. My knowledge includes ritual chants, the use of ceremonial plants, dream interpretation, and communication with the spirits of the territory.\nFunction: I am a spiritual mediator, a guide in rituals, a communicator with spirits, and responsible for leading ceremonies.\nAppearance: I wear ritual adornments (feathers, bones, symbols), intricate body paint, and carry a ritual staff.\nMain tool: I use a decorated ritual staff or wand, as well as sound instruments such as a rattle or maraca",
      guardian: "Guardian of the Territory \nI represent the figure of those who care for the camp, watch the surroundings, and warn of possible dangers. My role is based on real practices of territorial protection, community defense, and deep knowledge of the environment. Among the Nukak, for example, monitoring paths and transit areas is essential due to their constant mobility.\nFunction: I monitor the boundaries of the shelter, carry out security patrols, and protect against dangerous animals or external incursions.\nAppearance: I wear resistant clothing, protective ornaments and body paint, and maintain an alert posture.\nMain tool: I use a spear, a strong machete, or a local defensive weapon.",
      medico: "I am the Forest Sage.\nI carry the knowledge of medicinal plants, learned from the jungle itself and passed down through ancestral wisdom. From leaves, roots, resins, and infusions, I prepare remedies that heal and restore.\nI wear the clothing of a gatherer, adorned with seeds and herbs. At my side, I carry bags of plants, natural containers, and a wooden mortar—tools of care and balance."
    },
    nukak: {
      cazador: "“I am the Master Tracker. I learned from my grandfather, and he learned from his grandfather. I know every sound, every smell, every footprint in this forest. My job is to take care of my people, provide food, and protect our home. I teach young people to respect the land and listen to its secrets. My knowledge is our legacy.”",
      chaman: "I am a Supreme Traditional shaman.\nMy wisdom is rooted in the spiritual knowledge of various Indigenous communities, including the Sikuani people. I serve as a guide, spiritual protector, and mediator with the beings of the unseen world. My knowledge includes ritual chants, the use of ceremonial plants, dream interpretation, and communication with the spirits of the territory.\nMy role is to be a spiritual guide, ritual leader, traditional healer, and mediator between humans and spirits.\nMy appearance reflects my path: I wear ceremonial attire with elaborate ornaments, feathers, ritual symbols, and intricate face paint.\nMy main tools are ritual instruments, yopo or tobacco leaves, and a ceremonial staff.",
      guardian: "Guardian of the Territory nukak\nI represent the figure of those who care for the camp, watch the surroundings, and warn of possible dangers. My role is based on real practices of territorial protection, community defense, and deep knowledge of the environment. Among the Nukak, for example, monitoring paths and transit areas is essential due to their constant mobility.\nFunction: I monitor the boundaries of the shelter, carry out security patrols, and protect against dangerous animals or external incursions.\nAppearance: I wear resistant clothing, protective ornaments and body paint, and maintain an alert posture.\nMain tool: I use a spear, a strong machete, or a local defensive weapon.",
      medico: "I am the Supreme Traditional Healer.\nI am a spiritual guide and mediator between humans and the invisible world. Through ancestral knowledge, ritual chants, ceremonial plants, and dreams, I listen to the spirits of the land and restore balance.\nDressed in sacred symbols and ritual paint, I carry ritual instruments, sacred leaves, and a ceremonial staff.\nI am the bridge between worlds and the guardian of ancient wisdom."
    }
  };

  const MAPA_IMAGEN = {
    sikuani: {
      cazador: 'Imagenes/SIKUANI/CAZADOR SIKUANI.png',
      chaman: 'Imagenes/SIKUANI/CHAMAN SIKUANI.png',
      medico: 'Imagenes/SIKUANI/MEDICO SIKUANI.png',
      guardian: 'Imagenes/SIKUANI/GUARDIAN SIKUANI.png',
    },
    nukak: {
      cazador: 'Imagenes/NUKAK/CAZADOR_NUKAK.png',
      chaman: 'Imagenes/NUKAK/CHAMAN_NUKAK.png',
      medico: 'Imagenes/NUKAK/MEDICO NUKAK.png',
      guardian: 'Imagenes/NUKAK/GUARDIAN_NUKAK.png',
    },
  };

  const ETIQUETA_ROL = {
    cazador: 'Cazador',
    chaman: 'Chamán',
    medico: 'Médico',
    guardian: 'Guardian',
  };

  function aplicarRol(rolEl) {
    const grid = rolEl.closest('.inst-roles-grid');
    if (!grid) return;

    const article = rolEl.closest('article');
    const tribu = article && article.getAttribute('data-inst-tribu');
    const rolKey = rolEl.getAttribute('data-rol');
    if (!tribu || !rolKey) return;

    const mapaTribu = MAPA_IMAGEN[tribu];
    if (!mapaTribu || !mapaTribu[rolKey]) return;

    grid.querySelectorAll('.inst-rol-item').forEach(function(r) {
      r.classList.remove('rol-activo');
    });
    rolEl.classList.add('rol-activo');

    const img = grid.querySelector('.inst-imagen-panel__img');
    if (!img) return;

    img.src = encodeURI(mapaTribu[rolKey]);
    const nombreTribu = tribu === 'sikuani' ? 'Sikuani' : 'Nukak';
    const nombreRol = ETIQUETA_ROL[rolKey] || rolKey;
    img.alt = nombreRol + ' — representación visual ' + nombreTribu;

    const textoPanel = article.querySelector('.inst-texto-panel-rol');
    if (textoPanel && MAPA_TEXTOS[tribu] && MAPA_TEXTOS[tribu][rolKey]) {
      textoPanel.innerHTML = '<p>' + MAPA_TEXTOS[tribu][rolKey].replace(/\n/g, '</p><p>') + '</p>';
    }
  }

  document.querySelectorAll('.inst-rol-item[data-rol]').forEach(function(rol) {
    rol.addEventListener('click', function(e) {
      if (e.target.closest('.inst-rol-audio-btn')) return;
      aplicarRol(this);
    });
    rol.addEventListener('keydown', function(e) {
      if (e.target.closest && e.target.closest('.inst-rol-audio-btn')) return;
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        aplicarRol(this);
      }
    });
  });

  document.querySelectorAll('article[data-inst-tribu] .inst-roles-grid').forEach(function(grid) {
    const activo = grid.querySelector('.inst-rol-item.rol-activo[data-rol]');
    const primero = grid.querySelector('.inst-rol-item[data-rol]');
    if (activo) {
      aplicarRol(activo);
    } else if (primero) {
      aplicarRol(primero);
    }
  });
})();


/* ── 5b. AUDIO POR ROL (instrucciones.html, carpeta Audios/) ── */
(function configurarAudioRolesInstrucciones() {
  const MAPA_AUDIO = {
    sikuani: {
      cazador: 'Audios/CAZADOR SIKUANI.mp3',
      chaman: 'Audios/CHAMAN SIKUANI.mp3',
      medico: 'Audios/MEDICO SIKUANI.MP3',
      guardian: 'Audios/GUARDIAN SIKUANI.mp3',
    },
    nukak: {
      cazador: 'Audios/CAZADOR NUKAK.mp3',
      chaman: 'Audios/CHAMAN NUKAK.mp3',
      medico: 'Audios/MEDICO NUKAK.MP3',
      guardian: 'Audios/GUARDIAN NUKAK.mp3',
    },
  };

  const botones = document.querySelectorAll('.inst-rol-audio-btn');
  if (botones.length === 0) return;

  const audio = new Audio();
  audio.preload = 'metadata';
  let botonSonando = null;
  const etiquetasReproducir = new Map();

  botones.forEach(function(btn) {
    etiquetasReproducir.set(btn, btn.getAttribute('aria-label') || 'Reproducir audio');
  });

  function iconoPlay(btn) {
    const i = btn.querySelector('i');
    if (i) i.className = 'fas fa-play';
  }

  function iconoPause(btn) {
    const i = btn.querySelector('i');
    if (i) i.className = 'fas fa-pause';
  }

  function marcarReproduciendo(btn, on) {
    if (!btn) return;
    if (on) {
      btn.classList.add('inst-rol-audio-btn--playing');
      iconoPause(btn);
      btn.setAttribute('aria-label', 'Pausar audio');
    } else {
      btn.classList.remove('inst-rol-audio-btn--playing');
      iconoPlay(btn);
      var orig = etiquetasReproducir.get(btn);
      if (orig) btn.setAttribute('aria-label', orig);
    }
  }

  audio.addEventListener('ended', function() {
    marcarReproduciendo(botonSonando, false);
    botonSonando = null;
  });

  botones.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      var fila = btn.closest('.inst-rol-item');
      var article = btn.closest('article');
      var tribu = article && article.getAttribute('data-inst-tribu');
      var rol = fila && fila.getAttribute('data-rol');
      if (!tribu || !rol) return;

      var rel = MAPA_AUDIO[tribu] && MAPA_AUDIO[tribu][rol];
      if (!rel) return;

      var urlAbsoluta = new URL(encodeURI(rel), window.location.href).href;

      if (botonSonando === btn) {
        if (!audio.paused) {
          audio.pause();
          marcarReproduciendo(btn, false);
          botonSonando = null;
        } else {
          audio.play().catch(function() {});
          marcarReproduciendo(btn, true);
        }
        return;
      }

      if (botonSonando) {
        marcarReproduciendo(botonSonando, false);
      }

      botonSonando = btn;
      audio.src = urlAbsoluta;
      audio.play().then(function() {
        marcarReproduciendo(btn, true);
      }).catch(function() {
        marcarReproduciendo(btn, false);
        botonSonando = null;
      });
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
    .inst-rol-item.rol-activo .inst-rol-audio-btn {
      border-color: #2F455C;
      color: #2F455C;
      background: rgba(47, 69, 92, 0.1);
    }
    .inst-rol-item.rol-activo .inst-rol-audio-btn:hover {
      background: rgba(47, 69, 92, 0.18);
    }
    .inst-rol-item.rol-activo .inst-rol-audio-btn.inst-rol-audio-btn--playing {
      background: #2F455C;
      color: #FFDC4A;
      border-color: #2F455C;
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
