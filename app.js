/* ============================================================
   LÓGICA DE LA PÁGINA
   No necesitás tocar este archivo para nada.
   Todo lo que querés cambiar está en products.js
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     Utilidades
     ---------------------------------------------------------- */

  const $ = (sel) => document.querySelector(sel);

  // Genera un color estable a partir del nombre del producto
  // (así cada producto sin foto tiene su propio color)
  function colorDeTexto(texto) {
    let hash = 0;
    for (let i = 0; i < texto.length; i++) {
      hash = texto.charCodeAt(i) + ((hash << 5) - hash);
    }
    return 'hsl(' + (Math.abs(hash) % 360) + ', 62%, 52%)';
  }

  // Evita que un texto rompa el HTML
  function escapar(texto) {
    return String(texto)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  // El precio con el punto de los miles: 9999 -> "$9.999".
  // Se arma a mano y no con toLocaleString para que salga igual en cualquier
  // navegador (algunos no conocen el formato argentino y lo muestran distinto).
  function plata(numero) {
    const soloDigitos = String(Math.round(Number(numero)));
    return '$' + soloDigitos.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  // Un producto "tiene precio" solo si es un numero de verdad. Si no, la ficha
  // sigue diciendo "Consultar precio" como siempre.
  function tienePrecio(producto) {
    return typeof producto.precio === 'number' && producto.precio > 0;
  }

  // Las iniciales para el cuadradito del logo, salteando las palabras cortas:
  // "Tienda de Dulce de Leche" -> "TDL"
  function siglaDe(nombre) {
    const cortas = ['de', 'del', 'la', 'las', 'los', 'el', 'y', 'e', 'o'];
    return String(nombre)
      .split(/\s+/)
      .filter((p) => p && cortas.indexOf(p.toLowerCase()) === -1)
      .slice(0, 3)
      .map((p) => p[0].toUpperCase())
      .join('');
  }

  /* ----------------------------------------------------------
     Estado del carrito
     ---------------------------------------------------------- */

  // El carrito se guarda en el navegador del cliente, así si
  // recarga la página no pierde lo que había elegido.
  const CLAVE_CARRITO = 'carrito_v1';

  let carrito = cargarCarrito();

  function cargarCarrito() {
    try {
      const guardado = localStorage.getItem(CLAVE_CARRITO);
      const datos = guardado ? JSON.parse(guardado) : [];
      return Array.isArray(datos) ? datos : [];
    } catch (e) {
      return [];
    }
  }

  function guardarCarrito() {
    try {
      localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
    } catch (e) {
      /* modo incógnito o storage lleno: seguimos igual */
    }
  }

  function buscarProducto(id) {
    return PRODUCTOS.find((p) => p.id === id);
  }

  function totalItems() {
    return carrito.reduce((suma, item) => suma + item.cantidad, 0);
  }

  /* ----------------------------------------------------------
     Render de productos
     ---------------------------------------------------------- */

  let filtroActual = 'Todos';

  // "Con Estevia Sin Azúcar" no es una categoría: es un grupo que junta
  // productos de varias categorías (chocolates, alfajores, mermeladas...). Por
  // eso se agrega al final de la barra y con otro color, para que se note que
  // es distinto de las categorías de verdad.
  // El nombre lo pidió el dueño así, tal cual.
  const ESTEVIA = 'Con Estevia Sin Azúcar';

  // Lo mismo, pero para el cartelito chico que sale arriba de cada ficha.
  // Está acá una sola vez para que el botón y los carteles digan siempre lo mismo.
  const ETIQUETA_ESTEVIA = 'Con Estevia Sin Azúcar';

  function renderFiltros() {
    const contenedor = $('#filters');
    if (!contenedor) return;

    const categorias = ['Todos', ...new Set(PRODUCTOS.map((p) => p.categoria))];

    // El filtro solo aparece si hay algún producto con estevia
    if (PRODUCTOS.some((p) => p.conEstevia)) categorias.push(ESTEVIA);

    // Si no hay categorías reales, no mostramos la barra
    if (categorias.length <= 1) {
      contenedor.innerHTML = '';
      return;
    }

    contenedor.innerHTML = categorias
      .map((cat) =>
        '<button class="filter' +
        (cat === ESTEVIA ? ' filter--esp' : '') +
        (cat === filtroActual ? ' is-active' : '') +
        '" data-categoria="' + escapar(cat) + '">' +
        escapar(cat) +
        '</button>'
      )
      .join('');

    contenedor.querySelectorAll('.filter').forEach((btn) => {
      btn.addEventListener('click', () => {
        filtroActual = btn.dataset.categoria;
        renderFiltros();
        renderProductos();
      });
    });
  }

  function mediaDeProducto(producto) {
    if (producto.imagen) {
      return (
        '<img src="' + escapar(producto.imagen) + '" alt="' + escapar(producto.nombre) +
        '" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'grid\';">' +
        '<span class="card__placeholder" style="display:none;background:' +
        colorDeTexto(producto.nombre) + '">' + inicialesDe(producto.nombre) + '</span>'
      );
    }
    return (
      '<span class="card__placeholder" style="background:' +
      colorDeTexto(producto.nombre) + '">' + inicialesDe(producto.nombre) + '</span>'
    );
  }

  function inicialesDe(nombre) {
    return nombre
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((palabra) => palabra[0].toUpperCase())
      .join('');
  }

  function renderProductos() {
    const contenedor = $('#products');
    if (!contenedor) return;

    const lista =
      filtroActual === 'Todos'
        ? PRODUCTOS
        : filtroActual === ESTEVIA
          ? PRODUCTOS.filter((p) => p.conEstevia)
          : PRODUCTOS.filter((p) => p.categoria === filtroActual);

    if (!lista.length) {
      contenedor.innerHTML =
        '<p class="empty">No hay productos en esta categoría todavía.</p>';
      return;
    }

    contenedor.innerHTML = lista
      .map((producto, indice) => {
        const agotado = producto.sinStock === true;

        let etiqueta = '';
        if (agotado) {
          etiqueta = '<span class="card__tag card__tag--out">Agotado</span>';
        } else if (producto.destacado) {
          etiqueta = '<span class="card__tag">Nuevo</span>';
        }

        return (
          '<article class="card" style="animation-delay:' + indice * 45 + 'ms">' +
            '<div class="card__media">' +
              mediaDeProducto(producto) +
              etiqueta +
            '</div>' +
            '<div class="card__body">' +
              '<div class="card__tags">' +
                '<span class="card__cat">' + escapar(producto.categoria) + '</span>' +
                (producto.conEstevia ? '<span class="card__este">' + ETIQUETA_ESTEVIA + '</span>' : '') +
              '</div>' +
              '<h3 class="card__title">' + escapar(producto.nombre) + '</h3>' +
              '<p class="card__desc">' + escapar(producto.descripcion) + '</p>' +
              '<div class="card__foot">' +
                '<div class="card__price' +
                  (tienePrecio(producto) ? '' : ' card__price--consultar') + '">' +
                  (tienePrecio(producto) ? plata(producto.precio) : 'Consultar precio') +
                '</div>' +
                '<button class="card__add" data-id="' + producto.id + '"' +
                  (agotado ? ' disabled' : '') +
                  ' aria-label="Agregar ' + escapar(producto.nombre) + ' al pedido">' +
                  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">' +
                    '<line x1="12" y1="5" x2="12" y2="19"></line>' +
                    '<line x1="5" y1="12" x2="19" y2="12"></line>' +
                  '</svg>' +
                '</button>' +
              '</div>' +
            '</div>' +
          '</article>'
        );
      })
      .join('');

    contenedor.querySelectorAll('.card__add').forEach((btn) => {
      btn.addEventListener('click', () => {
        agregarAlCarrito(Number(btn.dataset.id));
      });
    });
  }

  /* ----------------------------------------------------------
     Acciones del carrito
     ---------------------------------------------------------- */

  function agregarAlCarrito(id) {
    const producto = buscarProducto(id);
    if (!producto || producto.sinStock) return;

    const existente = carrito.find((item) => item.id === id);
    if (existente) {
      existente.cantidad += 1;
    } else {
      carrito.push({ id: id, cantidad: 1 });
    }

    guardarCarrito();
    renderCarrito();
    mostrarToast('"' + producto.nombre + '" se agregó al pedido');
    animarContador();
  }

  function cambiarCantidad(id, delta) {
    const item = carrito.find((i) => i.id === id);
    if (!item) return;

    item.cantidad += delta;

    if (item.cantidad <= 0) {
      carrito = carrito.filter((i) => i.id !== id);
    }

    guardarCarrito();
    renderCarrito();
  }

  function renderCarrito() {
    const cuerpo = $('#cartBody');
    const total = $('#cartTotal');
    const contador = $('#cartCount');
    const botonCheckout = $('#checkoutBtn');
    if (!cuerpo) return;

    // Contador del header
    const cantidad = totalItems();
    if (contador) {
      contador.textContent = cantidad;
      contador.classList.toggle('is-visible', cantidad > 0);
    }

    // Carrito vacío
    if (!carrito.length) {
      cuerpo.innerHTML =
        '<div class="cart__empty"><span>🛒</span>Todavía no agregaste nada.<br>Mirá los productos y elegí el tuyo.</div>';
      if (total) total.textContent = '0 productos';
      if (botonCheckout) {
        botonCheckout.style.pointerEvents = 'none';
        botonCheckout.style.opacity = '.45';
      }
      return;
    }

    if (botonCheckout) {
      botonCheckout.style.pointerEvents = '';
      botonCheckout.style.opacity = '';
    }

    cuerpo.innerHTML = carrito
      .map((item) => {
        const producto = buscarProducto(item.id);
        if (!producto) return '';

        const miniatura = producto.imagen
          ? '<img src="' + escapar(producto.imagen) + '" alt="">'
          : inicialesDe(producto.nombre);

        return (
          '<div class="cart-item">' +
            '<div class="cart-item__thumb" style="background:' +
              colorDeTexto(producto.nombre) + '">' + miniatura + '</div>' +
            '<div>' +
              '<div class="cart-item__title">' + escapar(producto.nombre) + '</div>' +
              '<div class="cart-item__price">' +
                escapar(producto.categoria) +
              '</div>' +
            '</div>' +
            '<div class="cart-item__right">' +
              '<div class="qty">' +
                '<button data-id="' + producto.id + '" data-delta="-1" aria-label="Quitar uno">−</button>' +
                '<span>' + item.cantidad + '</span>' +
                '<button data-id="' + producto.id + '" data-delta="1" aria-label="Agregar uno">+</button>' +
              '</div>' +
            '</div>' +
          '</div>'
        );
      })
      .join('');

    cuerpo.querySelectorAll('.qty button').forEach((btn) => {
      btn.addEventListener('click', () => {
        cambiarCantidad(Number(btn.dataset.id), Number(btn.dataset.delta));
      });
    });

    if (total) total.textContent = cantidad + (cantidad === 1 ? ' producto' : ' productos');

    actualizarLinkWhatsApp();
  }

  /* ----------------------------------------------------------
     Envío del pedido por WhatsApp
     ---------------------------------------------------------- */

  function construirMensaje() {
    const lineas = [CONFIG.mensajePedido, ''];

    let total = 0;
    let productosEnLaLista = 0;
    let faltaAlgunPrecio = false;

    carrito.forEach((item) => {
      const producto = buscarProducto(item.id);
      if (!producto) return;

      productosEnLaLista += 1;
      let linea = '• ' + item.cantidad + 'x ' + producto.nombre;

      // Al lado de cada producto va lo que sale esa linea (el precio por la
      // cantidad), asi el cliente ve lo que va a gastar antes de escribir.
      if (tienePrecio(producto)) {
        const subtotal = producto.precio * item.cantidad;
        total += subtotal;
        linea += ' — ' + plata(subtotal);
      } else {
        // Si algun producto quedara sin precio cargado, se avisa: es preferible
        // eso a mostrar un total que no es el total.
        faltaAlgunPrecio = true;
        linea += ' — a consultar';
      }

      lineas.push(linea);
    });

    // El total va solo cuando hay mas de un producto distinto: con uno solo el
    // numero ya esta arriba y repetirlo no aporta nada.
    if (productosEnLaLista > 1) {
      lineas.push('');
      lineas.push(
        'Total' + (faltaAlgunPrecio ? ' (sin los que hay que consultar)' : '') + ': ' + plata(total)
      );
    }

    lineas.push('');
    lineas.push('¿Me confirman disponibilidad? ¡Gracias!');

    return lineas.join('\n');
  }

  function actualizarLinkWhatsApp() {
    const boton = $('#checkoutBtn');
    if (!boton) return;

    const url =
      'https://wa.me/' + CONFIG.whatsapp +
      '?text=' + encodeURIComponent(construirMensaje());

    boton.href = url;
  }

  // Muestra el número lindo, para que se lea y se pueda copiar a mano:
  // 5492616068278  ->  +54 9 261 606-8278
  function formatoTelefono(numero) {
    const d = String(numero).replace(/\D/g, '');
    // Celular de Argentina: 54 + 9 + area de 3 + numero de 7
    if (d.length === 13 && d.indexOf('549') === 0) {
      return '+54 9 ' + d.slice(3, 6) + ' ' + d.slice(6, 9) + '-' + d.slice(9);
    }
    // Cualquier otro país: se muestra tal cual, con el + adelante
    return '+' + d;
  }

  // Instagram: acepta la dirección completa o el usuario solo, y devuelve
  // siempre el @usuario (para mostrar) y el enlace (para el botón).
  function usuarioDeInstagram(dato) {
    return String(dato).trim()
      .replace(/^https?:\/\/(www\.)?instagram\.com\//i, '')
      .replace(/[/?#].*$/, '')
      .replace(/^@/, '');
  }

  function urlDeInstagram(dato) {
    return 'https://www.instagram.com/' + usuarioDeInstagram(dato) + '/';
  }

  function configurarLinksDeContacto() {
    const numero = $('#whatsappNumber');
    if (numero) {
      numero.textContent = formatoTelefono(CONFIG.whatsapp);
    }

    // La dirección se muestra una sola vez, en la sección "Dónde estamos"
    // (antes también estaba repetida en Contacto y se sacó). Al lado va el
    // botón que abre el enlace de Google Maps cargado en CONFIG: si no hay
    // enlace cargado, el botón no se muestra.
    const ubicacionSeccion = $('#ubicacionSeccion');
    if (ubicacionSeccion) ubicacionSeccion.textContent = CONFIG.ubicacion;

    const mapaBtn = $('#mapaBtn');
    if (mapaBtn) {
      const mapa = String(CONFIG.mapa || '').trim();
      if (mapa) {
        mapaBtn.href = mapa;
      } else {
        mapaBtn.style.display = 'none';
      }
    }

    // El horario también. Si no hay ninguno cargado, se esconde el bloque
    // entero en vez de mostrar un horario vacío.
    const horario = $('#horario');
    if (horario) {
      const h = String(CONFIG.horario || '').trim();
      const item = $('#horarioItem');
      if (h) {
        horario.textContent = h;
      } else if (item) {
        item.style.display = 'none';
      }
    }

    // Instagram. Si no hay ninguno cargado, se esconde el bloque entero en
    // vez de mostrar un enlace vacío.
    const instaLink = $('#instagramLink');
    const instaUser = $('#instagramUser');
    if (instaLink && instaUser) {
      const ig = String(CONFIG.instagram || '').trim();
      if (ig) {
        instaLink.href = urlDeInstagram(ig);
        instaUser.textContent = '@' + usuarioDeInstagram(ig);
      } else {
        instaLink.style.display = 'none';
      }
    }

    const texto = encodeURIComponent(
      '¡Hola! Vi la página y quería hacerte una consulta.'
    );
    const url = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + texto;

    const flotante = $('#whatsappFloat');
    if (flotante) flotante.href = url;

    const enlaceContacto = $('#whatsappLink');
    if (enlaceContacto) enlaceContacto.href = url;
  }

  /* ----------------------------------------------------------
     Abrir / cerrar el carrito
     ---------------------------------------------------------- */

  function abrirCarrito() {
    $('#cart').classList.add('is-open');
    $('#cart').setAttribute('aria-hidden', 'false');
    $('#cartOverlay').classList.add('is-open');
    document.body.style.overflow = 'hidden';
    actualizarLinkWhatsApp();

    // Paso del medio para saber la tasa: de los que entran, cuantos abren el
    // carrito. Si el contador de visitas todavia no esta cargado, no pasa nada.
    if (window.umami && typeof window.umami.track === 'function') {
      window.umami.track('Abrió el carrito');
    }
  }

  function cerrarCarrito() {
    $('#cart').classList.remove('is-open');
    $('#cart').setAttribute('aria-hidden', 'true');
    $('#cartOverlay').classList.remove('is-open');
    document.body.style.overflow = '';
  }

  /* ----------------------------------------------------------
     Aviso flotante (toast)
     ---------------------------------------------------------- */

  let temporizadorToast = null;

  function mostrarToast(mensaje) {
    const toast = $('#toast');
    if (!toast) return;

    toast.textContent = mensaje;
    toast.classList.add('is-visible');

    clearTimeout(temporizadorToast);
    temporizadorToast = setTimeout(() => {
      toast.classList.remove('is-visible');
    }, 2600);
  }

  // Pequeño rebote en el contador al agregar algo
  function animarContador() {
    const contador = $('#cartCount');
    if (!contador) return;
    contador.style.transform = 'scale(1.35)';
    setTimeout(() => { contador.style.transform = ''; }, 160);
  }

  /* ----------------------------------------------------------
     Menú mobile y header
     ---------------------------------------------------------- */

  function configurarMenu() {
    const burger = $('#burger');
    const nav = $('#nav');
    if (!burger || !nav) return;

    burger.addEventListener('click', () => {
      nav.classList.toggle('is-open');
    });

    nav.querySelectorAll('.nav__link').forEach((link) => {
      link.addEventListener('click', () => nav.classList.remove('is-open'));
    });
  }

  function configurarHeader() {
    const header = $('#header');
    if (!header) return;

    const alScrollear = () => {
      header.classList.toggle('is-scrolled', window.scrollY > 10);
    };

    alScrollear();
    window.addEventListener('scroll', alScrollear, { passive: true });
  }

  function configurarTeclado() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') cerrarCarrito();
    });
  }

  /* ----------------------------------------------------------
     Arranque
     ---------------------------------------------------------- */

  function iniciar() {
    // El nombre del negocio sale de CONFIG y se escribe en todos lados:
    // la pestaña, el logo, y el pie de página.
    document.title = CONFIG.nombreNegocio + ' | Productos de calidad';
    document.querySelectorAll('.logo__text, .nombre-negocio').forEach((el) => {
      el.textContent = CONFIG.nombreNegocio;
    });

    // El circulito del logo ahora es la imagen de la marca
    // (img/logo/logo-tdl.jpg), asi que se lo deja como esta. Si algun dia
    // vuelve a ser texto, se le ponen las iniciales.
    const marca = document.querySelector('.logo__mark');
    if (marca && marca.tagName !== 'IMG') marca.textContent = siglaDe(CONFIG.nombreNegocio);

    const anio = $('#year');
    if (anio) anio.textContent = new Date().getFullYear();

    configurarLinksDeContacto();
    configurarMenu();
    configurarHeader();
    configurarTeclado();

    renderFiltros();
    renderProductos();
    renderCarrito();

    const cartBtn = $('#cartBtn');
    if (cartBtn) cartBtn.addEventListener('click', abrirCarrito);

    const cartClose = $('#cartClose');
    if (cartClose) cartClose.addEventListener('click', cerrarCarrito);

    const overlay = $('#cartOverlay');
    if (overlay) overlay.addEventListener('click', cerrarCarrito);

    // Aviso si el número de WhatsApp no parece un número de verdad
    if (String(CONFIG.whatsapp).replace(/\D/g, '').length < 10) {
      console.warn(
        '⚠️  El WhatsApp de CONFIG.whatsapp no parece un número válido.\n' +
        'Abrí products.js y ponelo con código de país, sin + ni espacios ' +
        '(ejemplo: 5492616711790).'
      );
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
