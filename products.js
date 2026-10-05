/* ============================================================
   TUS PRODUCTOS
   ============================================================
   Generado automaticamente desde las fotos de  img/ultimas.
   El nombre de cada producto es el nombre del archivo de la foto.

   Para agregar un producto: copia un bloque { ... } y pegalo abajo.
   Para sacar uno del catalogo: borra su bloque.

   LOS PRECIOS SI VAN ACA (en ESTA web los ve el cliente). El campo es
   `precio: 9999,` y lo completa el programa  _cargar-precios.py  a partir de
   los precios que confirma el dueño. Un producto SIN `precio:` muestra
   "Consultar precio", asi que se puede cargar de a poco.

   OJO: los precios de mas de $1.000 terminan siempre en 999 (la regla del
   dueño), asi que este archivo NO coincide con los numeros redondos de la
   planilla. Es a proposito.

   LO QUE NUNCA VA ACA: lo que te sale a vos cada producto (el precio de
   compra) ni lo que ganas. Solo el precio de venta. Si aparece algo de eso en
   este archivo es un error grave: el control de  preparar-web.ps1  corta la
   subida si lo encuentra.
   ============================================================ */

const CONFIG = {
  nombreNegocio: "Tienda de Dulce de Leche",

  // PONE TU NUMERO DE WHATSAPP (con codigo de pais, sin + ni espacios)
  whatsapp: "5492616068278",

  ubicacion: "Terminal Mendoza - Ala Este",

  // Horario de atencion, el que se muestra en Contacto (vacio = no se muestra)
  horario: "Lunes a lunes, de 9 a 23 hs",

  // Instagram, el que se muestra en Contacto (vacio = no se muestra).
  // Vale la direccion completa (https://www.instagram.com/tiendadedulcedeleche/)
  // o el usuario solo (@tiendadedulcedeleche).
  instagram: "https://www.instagram.com/tiendadedulcedeleche/",

  // El enlace de Google Maps que abre el boton "Ver en el mapa" de la seccion
  // "Donde estamos" (vacio = el boton no se muestra).
  mapa: "https://maps.app.goo.gl/1RmwJ1qQzdseTwmq7?g_st=aw",
  moneda: "$",
  mensajePedido: "Hola! Quiero hacer este pedido:",
};

const PRODUCTOS = [
  {
    id: 1,
    nombre: "Aceite de Oliva Doña Juana 250ml Clásico-Ajo-Tomate y albahaca",
    categoria: "Aceites",
    precio: 9999,
    descripcion: "",
    imagen: "img/finales/aceite-de-oliva-dona-juana-250ml-clasico-ajo-tomate-y-albahaca.jpg",
  },
  {
    id: 2,
    nombre: "Aceite de Oliva Doña Juana 500ml Clásico-Ajo-Tomate y albahaca",
    categoria: "Aceites",
    precio: 13999,
    descripcion: "",
    imagen: "img/finales/aceite-de-oliva-dona-juana-500ml-clasico-ajo-tomate-y-albahaca.jpg",
  },
  {
    id: 3,
    nombre: "Aceite de Oliva Mendoliva 900ml",
    categoria: "Aceites",
    precio: 9999,
    descripcion: "",
    imagen: "img/finales/aceite-de-oliva-mendoliva-900ml.jpg",
  },
  {
    // Producto NUEVO (2026-09-30): lo pidio el dueno. Va aca al lado del de
    // 900ml porque es el mismo aceite, en el envase chico.
    // El precio lo dicto el: primero dijo $8.500 y despues lo corrigio a
    // $8.499 (es la regla de los 999: al numero redondo se le resta uno,
    // como 1.500 -> 1.499). Manda el.
    id: 65,
    nombre: "Aceite de Oliva Mendoliva 250ml",
    categoria: "Aceites",
    precio: 8499,
    descripcion: "",
    imagen: "img/finales/aceite-de-oliva-mendoliva-250ml.jpg",
  },
  {
    id: 4,
    nombre: "Aceitunas Verdes, Negras y Rellenas con Morrón Casa de La Torre 300gr",
    categoria: "Conservas-Aceitunas-Pastas",
    precio: 6999,
    descripcion: "",
    imagen: "img/finales/aceitunas-verdes-negrasy-rellenas-con-morron-casa-de-la-torre-300gr.jpg",
  },
  {
    id: 5,
    nombre: "Cebollas Caramelizadas 200gr Doña Juana",
    categoria: "Conservas-Aceitunas-Pastas",
    precio: 5999,
    descripcion: "",
    imagen: "img/finales/cebollas-caramelizadas-200gr-casa-de-la-torre.jpg",
  },
  {
    id: 6,
    nombre: "Cerezas al Marrasquino Casa de La Torre 370gr",
    categoria: "Conservas-Aceitunas-Pastas",
    precio: 7999,
    descripcion: "",
    imagen: "img/finales/cerezas-al-marrasquino-casa-de-la-torre.jpg",
  },
  {
    id: 7,
    nombre: "Higos en Almíbar Casa de La Torre 370gr",
    categoria: "Conservas-Aceitunas-Pastas",
    precio: 7999,
    descripcion: "",
    imagen: "img/finales/higos-en-almibar-casa-de-la-torre.jpg",
  },
  {
    id: 8,
    nombre: "Hortalizas Asadas Casa de La Torre 260gr",
    categoria: "Conservas-Aceitunas-Pastas",
    precio: 6999,
    descripcion: "",
    imagen: "img/finales/hortalizas-asadas-casa-de-la-torre.jpg",
  },
  {
    id: 9,
    nombre: "Pasta de Aceitunas varias Casa de La Torre 300gr",
    categoria: "Conservas-Aceitunas-Pastas",
    precio: 6999,
    descripcion: "",
    imagen: "img/finales/pasta-de-aceitunas-varias-casa-de-la-torre-300gr.jpg",
  },
  {
    id: 10,
    nombre: "Peras al Malbec enteras 660gr",
    categoria: "Conservas-Aceitunas-Pastas",
    precio: 8999,
    descripcion: "",
    imagen: "img/finales/peras-al-malbec-enteras.jpg",
  },
  {
    id: 11,
    nombre: "Tomates Cherry Caramelizados con Malbec 200gr Doña Juana",
    categoria: "Conservas-Aceitunas-Pastas",
    precio: 5999,
    descripcion: "",
    imagen: "img/finales/tomates-cherry-caramelizados-con-malbec-200gr-casa-de-la-torre.jpg",
  },
  {
    id: 12,
    nombre: "Zapallitos en Almíbar Profecía 450gr",
    categoria: "Conservas-Aceitunas-Pastas",
    precio: 7999,
    descripcion: "",
    imagen: "img/finales/zapallitos-en-almibar-profecia.jpg",
  },
  {
    id: 13,
    nombre: "Arrope de Uva Mupay 450gr",
    categoria: "Dulces y mermeladas",
    precio: 6999,
    descripcion: "",
    imagen: "img/finales/arrope-de-uva-mupay-450gr.jpg",
  },
  {
    id: 14,
    nombre: "Batata Vainilla 500gr Profecía",
    categoria: "Dulces y mermeladas",
    precio: 3499,
    descripcion: "",
    imagen: "img/finales/batata-vainilla-500gr-profecia.jpg",
  },
  {
    id: 15,
    nombre: "Promo 2 bocaditos de Membrillo Profecía 30gr c/u",
    categoria: "Dulces y mermeladas",
    precio: 1199,
    descripcion: "",
    imagen: "img/finales/bocaditos-de-membrillo-profecia-30gr.jpg",
  },
  {
    id: 16,
    nombre: "Caja 28 Bocaditos de Membrillo Profecía 30grs c/u",
    categoria: "Dulces y mermeladas",
    precio: 16999,
    descripcion: "",
    imagen: "img/finales/cja-bocaditos-de-membrillo-profecia-28-uni-x-30gr.jpg",
  },
  {
    id: 17,
    nombre: "Dulce de Alcayota Profecía 450gr",
    categoria: "Dulces y mermeladas",
    precio: 6999,
    descripcion: "",
    imagen: "img/finales/dulce-de-alcayota-profecia.jpg",
  },
  {
    // Esta ficha juntaba los DOS tamanos (400 gr y 220 gr) en una sola foto.
    // El dueño la partió en dos el 2026-09-25 porque cada uno tiene su precio.
    // El id 61 NO sigue el orden de la lista a proposito: va aca al lado para
    // que las dos salgan juntas en la pagina, igual que el 58 y el 59/60.
    // La foto se cortó con _partir-ddl-estevia.py.
    id: 18,
    nombre: "Dulce de Leche con Estevia Doña Magdalena 400gr",
    categoria: "Dulces y mermeladas",
    precio: 8999,
    descripcion: "",
    imagen: "img/finales/ddl-con-estevia-magdalena-400gr.jpg",
    conEstevia: true,
  },
  {
    id: 61,
    nombre: "Dulce de Leche con Estevia Doña Magdalena 220gr",
    categoria: "Dulces y mermeladas",
    precio: 7499,
    descripcion: "",
    imagen: "img/finales/ddl-con-estevia-magdalena-220gr.jpg",
    conEstevia: true,
  },
  {
    id: 19,
    nombre: "Dulce de Leche Milagros del Sol 453gr (chocolate, clásico y con ron) c/u",
    categoria: "Dulces y mermeladas",
    precio: 7499,
    descripcion: "",
    imagen: "img/finales/ddl-m-sol-453gr-chocolate-clasico-ron.jpg",
  },
  {
    id: 20,
    nombre: "Dulce de Leche Milagros del Sol pote 500gr (clásico, ron, Baileys, chocolate, pistacho, frutos rojos, menta, café y banana) consultar stock",
    categoria: "Dulces y mermeladas",
    precio: 7499,
    descripcion: "",
    imagen: "img/finales/ddl-m-sol-pote-500gr.jpg",
  },
  {
    id: 21,
    nombre: "Dulce de Leche Milagros del Sol saborizados 280gr (clásico, ron, Baileys, chocolate, pistacho, frutos rojos, menta, café y banana) consultar stock",
    categoria: "Dulces y mermeladas",
    precio: 6499,
    descripcion: "",
    imagen: "img/finales/ddl-m-sol-saborizados-c-clasico-280gr.jpg",
  },
  {
    id: 22,
    nombre: "Dulce de Membrillo Profecía 500gr",
    categoria: "Dulces y mermeladas",
    precio: 5499,
    descripcion: "",
    imagen: "img/finales/dulce-de-membrillo-profecia-500gr.jpg",
  },
  {
    id: 23,
    nombre: "Dulce de Membrillo Profecía 900gr",
    categoria: "Dulces y mermeladas",
    precio: 7499,
    descripcion: "",
    imagen: "img/finales/dulce-de-membrillo-profecia-900gr.jpg",
  },
  {
    id: 24,
    nombre: "Dulce de Membrillo Profecía Pan 650gr",
    categoria: "Dulces y mermeladas",
    precio: 6999,
    descripcion: "",
    imagen: "img/finales/dulce-de-membrillo-profecia-pan-650gr.jpg",
  },
  {
    id: 25,
    nombre: "Mermelada de Higo Casa de La Torre 400gr",
    categoria: "Dulces y mermeladas",
    precio: 6999,
    descripcion: "",
    imagen: "img/finales/mermelada-de-higo-casa-de-la-torre-400gr.jpg",
  },
  {
    id: 26,
    nombre: "Mermelada Frutilla con Malbec La Casita de la Abueli 450gr",
    categoria: "Dulces y mermeladas",
    precio: 6999,
    descripcion: "",
    imagen: "img/finales/mermelada-frutilla-con-malbec-la-casita-de-la-abueli-450-gr.jpg",
  },
  {
    id: 27,
    nombre: "Mermelada Pera con Torrontés La Casita de la Abueli 450gr",
    categoria: "Dulces y mermeladas",
    precio: 6999,
    descripcion: "",
    imagen: "img/finales/mermelada-pera-con-torrontes-la-casita-de-la-abueli-450-gr.jpg",
  },
  {
    id: 28,
    nombre: "Mermeladas con Estevia Frutilla, Frutos Rojos, Arándanos y Durazno 400gr",
    categoria: "Dulces y mermeladas",
    precio: 8999,
    descripcion: "",
    imagen: "img/finales/mermeladas-con-estevia.jpg",
    conEstevia: true,
  },
  {
    id: 29,
    nombre: "Mermeladas Frutos del Bosque y Frutilla Casa de La Torre 400gr",
    categoria: "Dulces y mermeladas",
    precio: 6999,
    descripcion: "",
    imagen: "img/finales/mermeladas-frutos-del-bosque-frutilla-casa-de-la-torre.jpg",
  },
  {
    id: 30,
    nombre: "Mermeladas varias La Casita de la Abueli 250gr",
    categoria: "Dulces y mermeladas",
    precio: 4999,
    descripcion: "",
    imagen: "img/finales/mermeladas-varias-la-casita-de-la-abueli-250gr.jpg",
  },
  {
    id: 31,
    nombre: "Promo 2 Alfajores con Estevia y sin TACC Doña Magdalena 60gr",
    categoria: "Alfajores y galletas",
    precio: 4999,
    descripcion: "",
    imagen: "img/finales/alfajor-con-estevia-y-sin-tacc-dona-magdalena-60gr.jpg",
    conEstevia: true,
  },
  {
    id: 32,
    nombre: "Alfajor Maicena Churrico 75gr",
    categoria: "Alfajores y galletas",
    precio: 1999,
    descripcion: "",
    imagen: "img/finales/alfajor-maicena-churrico.jpg",
  },
  {
    id: 33,
    nombre: "Alfajores Churrico Clasicos Negro- Blanco y con Crocante de Maní 75gr",
    categoria: "Alfajores y galletas",
    precio: 1999,
    descripcion: "",
    imagen: "img/finales/alfajores-churrico-clasicos-negro-blanco-y-con-crocate-de-mani-75gr.jpg",
  },
  {
    id: 34,
    nombre: "Alfajores de Arroz Negro y Blanco Dulce de Leche 23gr y Pistacho 28gr",
    categoria: "Alfajores y galletas",
    precio: 1799,
    descripcion: "",
    imagen: "img/finales/alfajores-de-arroz-negro-blanco-ddl-y-pistacho.jpg",
  },
  {
    id: 35,
    nombre: "Almohaditas Avena Granix Frutilla- Chocolate con limon 60gr",
    categoria: "Alfajores y galletas",
    precio: 1499,
    descripcion: "",
    imagen: "img/finales/almohaditas-avena-granix-frutilla-chocolate-con-limon.jpg",
  },
  {
    id: 36,
    nombre: "Promo Caja 12 Alfajores con Estevia y sin TACC Doña Magdalena 60gr",
    categoria: "Alfajores y galletas",
    precio: 29999,
    descripcion: "",
    imagen: "img/finales/caja-alfajores-con-estevia-y-sin-tacc-dona-magdalena-60gr-x-12.jpg",
    conEstevia: true,
  },
  {
    id: 37,
    nombre: "Conitos Churrico",
    categoria: "Alfajores y galletas",
    precio: 1999,
    descripcion: "",
    imagen: "img/finales/conitos-churrico.jpg",
  },
  {
    id: 38,
    nombre: "Galletas YUKA sin TACC 150gr",
    categoria: "Alfajores y galletas",
    precio: 3499,
    descripcion: "",
    imagen: "img/finales/galletas-yuka-sin-tacc.jpg",
  },
  {
    id: 39,
    nombre: "Bombones de Fruta Abuela Mecha bolsas x 4",
    categoria: "Chocolates",
    precio: 1999,
    descripcion: "",
    imagen: "img/finales/bombones-de-fruta-abuela-mecha-bolsas-x-4.jpg",
  },
  {
    // Producto NUEVO (2026-09-28): lo pidio el dueno, con la foto que mando.
    // Va aca al lado de los bombones porque es la misma marca (Abuela Mecha).
    // El nombre y el precio los dicto el: "Caja Caramelos sin Azucar Abuela
    // Mecha Sabor Dulce de Leche 32 Unidades $ 29999".
    // OJO: la planilla NO tiene la caja de 32; lo mas parecido es la caja de
    // 12 sin azucar a 10.000 (Caja caramelos S/A x12). Manda el dueno.
    id: 63,
    nombre: "Caja 32 Caramelos sin Azúcar Abuela Mecha Sabor Dulce de Leche",
    categoria: "Chocolates",
    precio: 29999,
    descripcion: "",
    imagen: "img/finales/caramelos-sin-azucar-abuela-mecha-sabor-dulce-de-leche-32-unidades.jpg",
  },
  {
    // Esta era UNA sola ficha ("Chocolate Colonial con Estevia y Orgánico")
    // con los cuatro productos de la foto juntos. El dueño la partió en tres
    // el 2026-09-25 porque cada uno tiene su precio.
    // Los ids 59 y 60 no siguen el orden de la lista a proposito: van aca al
    // lado para que las tres salgan juntas en la pagina. La foto grande se
    // cortó en tres con _partir-chocolates.py.
    id: 40,
    nombre: "Chocolate Colonial 100gr 70% Cacao con Estevia",
    categoria: "Chocolates",
    precio: 6999,
    descripcion: "",
    imagen: "img/finales/chocolate-colonial-100gr-70-cacao-con-estevia.jpg",
    conEstevia: true,
  },
  {
    id: 59,
    nombre: "Chocolate Colonial Orgánico 16gr 60% Cacao",
    categoria: "Chocolates",
    precio: 1499,
    descripcion: "",
    imagen: "img/finales/chocolate-colonial-organico-16gr-60-cacao.jpg",
  },
  {
    id: 60,
    nombre: "Chocolatinas sin Azúcar con Estevia x 2 Colonial",
    categoria: "Chocolates",
    precio: 2499,
    descripcion: "",
    imagen: "img/finales/chocolatinas-sin-azucar-x-2-colonial.jpg",
    conEstevia: true,
  },
  {
    id: 41,
    nombre: "Tableta de Dulce de Leche con Estevia 25gr",
    categoria: "Chocolates",
    precio: 1199,
    descripcion: "",
    imagen: "img/finales/tableta-ddl-con-estevia.jpg",
    conEstevia: true,
  },
  {
    // Producto NUEVO (2026-09-28): lo pidio el dueno, con la foto que mando.
    // Va aca al lado de la tableta suelta (id 41) porque es lo mismo pero en
    // caja: la 41 es LA TABLETA suelta y esta es LA CAJA DE 18.
    // El nombre y el precio los dicto el: "CAJA TABLETAS DDL CON STEVIA SIN
    // AZUCAR X18 $19999" (la planilla tiene TABLETAS DDL CON STEVIA X18 a
    // 20.000, asi que 19.999 es el mismo numero con la regla de los 999).
    id: 64,
    nombre: "Caja 18 Tabletas DDL con Stevia sin Azúcar 450gr",
    categoria: "Chocolates",
    precio: 19999,
    descripcion: "",
    imagen: "img/finales/caja-tabletas-ddl-con-stevia-sin-azucar-x18.jpg",
    conEstevia: true,
  },
  {
    id: 42,
    nombre: "Almendras bolsa grande 80gr",
    categoria: "Frutos secos",
    precio: 2999,
    descripcion: "",
    imagen: "img/finales/almendras-bolsa-grande.jpg",
  },
  {
    // Esta ficha juntaba las CUATRO bolsas de la foto (almendras, cereales,
    // pasas y maní bañados). El dueño la partió en dos el 2026-09-27 porque
    // las almendras tienen otro precio que el resto.
    // El id 62 NO sigue el orden de la lista a proposito: va aca al lado para
    // que las dos salgan juntas en la pagina, igual que el 61 con el 18.
    // La foto se cortó con _partir-frutos-secos.py.
    id: 43,
    nombre: "Almendras bañadas en chocolate 45gr",
    categoria: "Frutos secos",
    precio: 2499,
    descripcion: "",
    imagen: "img/finales/almendras-banadas-en-chocolate.jpg",
  },
  {
    id: 62,
    nombre: "Cereales 40gr, maní 45gr y pasas 45gr bañadas en chocolate",
    categoria: "Frutos secos",
    precio: 1499,
    descripcion: "",
    imagen: "img/finales/cereales-mani-pasas-banadas-en-chocolate.jpg",
  },
  {
    id: 44,
    nombre: "Maní Varios: con y sin sal 65gr, saborizados 50gr y garrapiñadas 50gr",
    categoria: "Frutos secos",
    precio: 1000,
    descripcion: "",
    imagen: "img/finales/mani-varios-con-y-sin-sal-saborizados-y-garrapinadas.jpg",
  },
  {
    id: 45,
    nombre: "Mix Tropical 90gr bolsa grande",
    categoria: "Frutos secos",
    precio: 2999,
    descripcion: "",
    imagen: "img/finales/mix-tropical-bolsa-grande.jpg",
  },
  {
    id: 46,
    nombre: "Mix Tropical 45gr - Nuez Mariposa Extra Light 45gr - Almendras 40gr bolsas chicas",
    categoria: "Frutos secos",
    precio: 1499,
    descripcion: "",
    imagen: "img/finales/mix-nuez-almendras-bolsas-chicas.jpg",
  },
  {
    id: 47,
    nombre: "Nuez Mariposa bolsa grande 90gr",
    categoria: "Frutos secos",
    precio: 2999,
    descripcion: "",
    imagen: "img/finales/nuez-mariposa-bolsa-grande.jpg",
  },
  {
    id: 48,
    nombre: "Pasas Morenas 65gr",
    categoria: "Frutos secos",
    precio: 1000,
    descripcion: "",
    imagen: "img/finales/pasas-morenas.jpg",
  },
  {
    id: 49,
    nombre: "Pasas Rubias 65gr",
    categoria: "Frutos secos",
    precio: 1000,
    descripcion: "",
    imagen: "img/finales/pasas-rubias.jpg",
  },
  {
    id: 50,
    nombre: "Barra Bravísima Proteica Dátil y Cacao o Arándanos 15g - Energía Natural y Proteína de Alta Calidad",
    categoria: "Barras y snacks",
    precio: 2999,
    descripcion: "",
    imagen: "img/finales/barras-bravisima-y-proteica.jpg",
  },
  {
    id: 53,
    nombre: "Jugos Naturales Concentrados Casa de La Torre 500ml",
    categoria: "Bebidas",
    precio: 4499,
    descripcion: "",
    imagen: "img/finales/jugos-naturales-concentrados-casa-de-la-torre-500ml.jpg",
  },
  {
    // Sale de partir en dos la foto del grupo de botellas (era una sola ficha
    // con los jugos y las limonadas juntos, y tienen distinto precio).
    // El id 58 no sigue el orden de la lista a proposito: va aca al lado para
    // que en la pagina aparezcan juntos. Ver _partir-jugos.py.
    id: 58,
    nombre: "Limonadas Casa de La Torre 500ml",
    categoria: "Bebidas",
    precio: 3499,
    descripcion: "",
    imagen: "img/finales/limonadas-casa-de-la-torre-500ml.jpg",
  },
  {
    id: 54,
    nombre: "Mistela Crotta 75cl",
    categoria: "Bebidas",
    precio: 7999,
    descripcion: "",
    imagen: "img/finales/mistela-crotta-75cl.jpg",
  },
  {
    id: 55,
    nombre: "Miel Trasancos 500gr",
    categoria: "Miel",
    precio: 7999,
    descripcion: "",
    imagen: "img/finales/miel-trasancos-500gr.jpg",
  },
  {
    id: 56,
    nombre: "Sal Entrefina Saborizada Malbec, Finas Hierbas y Romero 200gr",
    categoria: "Sales",
    precio: 4999,
    descripcion: "",
    imagen: "img/finales/sal-entrefina-saborizada-malbec-finas-hierbas-romero-200gr.jpg",
  },
];
