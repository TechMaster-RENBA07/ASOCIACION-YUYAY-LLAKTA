/* =========================================================
   CATÁLOGO — ASOCIACIÓN DE ARTESANOS YUYAY LLAKTA
   ========================================================= */

const PRODUCTOS = [
  /* ============ CERÁMICA ============ */
  {
    id: 1,
    nombre: "Tinaja Yacutera (Aguatera)",
    categoria: "ceramica",
    precio: 70.00,
    materiales: "Greda, yunguna, cáscara de plátano o maduro, tierra amarilla y blanca, pinceles de pluma de gallina y cabello humano, acabado con piedra yanarrumi.",
    dimensiones: { alto: "35 cm", boca: "17 cm", cuello: "9 cm", barriga: "107 cm", base: "10 cm" },
    uso: "Sirve para poner agua, maíz, chicha y como florero.",
    imagen: "img/ceramica/tinaja-yacutera-lateral-derecho.jpg",
    vistas: {
      frontal:          "img/ceramica/tinaja-yacutera-frontal.jpg",
      trasera:          "img/ceramica/tinaja-yacutera-trasera.jpg",
      lateralDerecho:   "img/ceramica/tinaja-yacutera-lateral-derecho.jpg",
      lateralIzquierdo: "img/ceramica/tinaja-yacutera-lateral-izquierdo.jpg",
      superior:         "img/ceramica/tinaja-yacutera-superior.jpg",
      inferior:         "img/ceramica/tinaja-yacutera-inferior.jpg"
    }
  },
  {
    id: 2,
    nombre: "Gallina Huevera",
    categoria: "ceramica",
    precio: 35.00,
    materiales: "Greda, yunguna, tierra amarilla y blanca, pincel de pluma de gallina y cabello, piedra yanarrumi, cáscara de plátano o maduro.",
    dimensiones: { alto: "19 cm", boca: "21 cm", cuello: "9 cm", barriga: "77 cm", base: "11 cm" },
    uso: "Se usa para poner huevos, frutas, panes y para otras cosas.",
    imagen: "img/ceramica/gallina-huevera-frontal.jpg",
    vistas: {
      frontal:          "img/ceramica/gallina-huevera-frontal.jpg",
      trasera:          "img/ceramica/gallina-huevera-trasera.jpg",
      lateralDerecho:   "img/ceramica/gallina-huevera-lateral-derecho.jpg",
      lateralIzquierdo: "img/ceramica/gallina-huevera-lateral-izquierdo.jpg",
      superior:         "img/ceramica/gallina-huevera-superior.jpg",
      inferior:         "img/ceramica/gallina-huevera-inferior.jpg"
    }
  },
  {
    id: 3,
    nombre: "Tiesto Floreado Sopero",
    categoria: "ceramica",
    precio: 10.00,
    materiales: "Greda, chunchulli, yunguna, cáscara de plátano o maduro, tierra blanca y piedra yanarrumi.",
    dimensiones: { alto: "9 cm", boca: "18 cm", base: "8 cm" },
    uso: "Se usa para servir sopa, segundo y para recoger agua.",
    imagen: "img/ceramica/tiesto-floreado-sopero-superior.jpg",
    vistas: {
      frontal:          "img/ceramica/tiesto-floreado-sopero-frontal.jpg",
      // trasera:          "img/ceramica/tiesto-floreado-sopero-trasera.jpg",
      // lateralDerecho:   "img/ceramica/tiesto-floreado-sopero-lateral-derecho.jpg",
      lateralIzquierdo: "img/ceramica/tiesto-floreado-sopero-lateral-izquierdo.jpg",
      superior:         "img/ceramica/tiesto-floreado-sopero-superior.jpg",
      inferior:         "img/ceramica/tiesto-floreado-sopero-inferior.jpg"
    }
  },
  {
    id: 4,
    nombre: "Tiesto Floreado para Almuerzo",
    categoria: "ceramica",
    precio: 10.00,
    materiales: "Greda, chunchulli, yunguna, cáscara de plátano o maduro, tierra blanca y piedra yanarrumi.",
    dimensiones: { alto: "8 cm", boca: "21 cm", base: "9 cm" },
    uso: "Se usa para servir almuerzo, segundo y para poner caramelos o dulces en los cumpleaños.",
    imagen: "img/ceramica/tiesto-floreado-almuerzo-frontal.jpg",
    vistas: {
      frontal:          "img/ceramica/tiesto-floreado-almuerzo-frontal.jpg",
      trasera:          "img/ceramica/tiesto-floreado-almuerzo-trasera.jpg",
      // lateralDerecho:   "img/ceramica/tiesto-floreado-almuerzo-lateral-derecho.jpg",
      lateralIzquierdo: "img/ceramica/tiesto-floreado-almuerzo-lateral-izquierdo.jpg",
      superior:         "img/ceramica/tiesto-floreado-almuerzo-superior.jpg",
      inferior:         "img/ceramica/tiesto-floreado-almuerzo-inferior.jpg"
    }
  },
  {
    id: 5,
    nombre: "Mocahua floreada para servir masato ",
    categoria: "ceramica",
    precio: 25.00,
    materiales: "Greda, chunchulli, yunguna, tierra blanca y piedra yanarrumi.",
    dimensiones: { alto: "10 cm", boca: "16 cm", barriga: "54 cm", base: "7 cm" },
    uso: "Se usa para tomar chicha, masato, para poner plátanos entre otros.",
    imagen: "img/ceramica/Mocahua-floreada-pequeno-superior.jpg",
    vistas: {
      // frontal:          "img/ceramica/Mocahua-floreada-pequeno-frontal.jpg",
      // trasera:          "img/ceramica/Mocahua-floreada-pequeno-trasera.jpg",
      lateralDerecho:   "img/ceramica/Mocahua-floreada-pequeno-lateral-derecho.jpg",
      lateralIzquierdo: "img/ceramica/Mocahua-floreada-pequeno-lateral-izquierdo.jpg",
      superior:         "img/ceramica/Mocahua-floreada-pequeno-superior.jpg",
      inferior:         "img/ceramica/Mocahua-floreada-pequeno-inferior.jpg"
    }
  },
  {
    id: 6,
    nombre: "Tinajón Floreado Chichero",
    categoria: "ceramica",
    precio: 100.00,
    materiales: "Greda, saño, agua, manta, tierra amarilla y piedra negra.",
    dimensiones: { alto: "51 cm", boca: "26 cm", cuello: "17 cm", barriga: "126 cm", base: "17 cm" },
    uso: "Se usa para guardar chicha, masato y como maleta para guardar ropa.",
    imagen: "img/ceramica/tinajon-floreado-chichero-trasera.jpg",
    vistas: {
      frontal:          "img/ceramica/tinajon-floreado-chichero-frontal.jpg",
      trasera:          "img/ceramica/tinajon-floreado-chichero-trasera.jpg",
      lateralDerecho:   "img/ceramica/tinajon-floreado-chichero-lateral-derecho.jpg",
      lateralIzquierdo: "img/ceramica/tinajon-floreado-chichero-lateral-izquierdo.jpg",
      superior:         "img/ceramica/tinajon-floreado-chichero-superior.jpg",
      inferior:         "img/ceramica/tinajon-floreado-chichero-inferior.jpg"
    }
  },
  {
    id: 7,
    nombre: "Olla de Barro Frijolera",
    categoria: "ceramica",
    precio: 15.00,
    materiales: "Arcilla mezclada con sheño, yunguna, agua, batea, cáscara de plátano.",
    dimensiones: { alto: "20 cm", boca: "20 cm", cuello: "6 cm", barriga: "69 cm", base: "8 cm" },
    uso: "Se usa para cocinar frijol, mingado y otras comidas.",
    imagen: "img/ceramica/olla-barro-frijolera-frontal.jpg",
    vistas: {
      frontal:          "img/ceramica/olla-barro-frijolera-frontal.jpg",
      trasera:          "img/ceramica/olla-barro-frijolera-trasera.jpg",
      lateralDerecho:   "img/ceramica/olla-barro-frijolera-lateral-derecho.jpg",
      lateralIzquierdo: "img/ceramica/olla-barro-frijolera-lateral-izquierdo.jpg",
      superior:         "img/ceramica/olla-barro-frijolera-superior.jpg",
      inferior:         "img/ceramica/olla-barro-frijolera-inferior.jpg"
    }
  },
  {
    id: 8,
    nombre: "Plato Ovalado para Yuca e Inguirí",
    categoria: "ceramica",
    precio: 20.00,
    materiales: "Yunguna, cáscara de plátano o maduro, arcilla blanca y roja, pincel de pelo y pluma de gallina, pintura piedra blanca.",
    dimensiones: { alto: "6 cm", boca: "30 cm", largo: "22 cm", base: "8 cm" },
    uso: "Se usa para vender comida, para decoración del hogar.",
    imagen: "img/ceramica/plato-ovalado-yuca-frontal.jpg",
    vistas: {
      frontal:          "img/ceramica/plato-ovalado-yuca-frontal.jpg",
      trasera:          "img/ceramica/plato-ovalado-yuca-trasera.jpg",
      // lateralDerecho:   "img/ceramica/plato-ovalado-yuca-lateral-derecho.jpg",
      // lateralIzquierdo: "img/ceramica/plato-ovalado-yuca-lateral-izquierdo.jpg",
      // superior:         "img/ceramica/plato-ovalado-yuca-superior.jpg",
      // inferior:         "img/ceramica/plato-ovalado-yuca-inferior.jpg"
    }
  },
  {
    id: 9,
    nombre: "Jarrón Grande Floreado",
    categoria: "ceramica",
    precio: 50.00,
    materiales: "Arcilla para tinajas, piedra negra, tierra amarilla, lacre y copal.",
    dimensiones: { alto: "40 cm", boca: "17 cm", cuello: "8 cm", barriga: "70 cm" },
    uso: "Se usa para guardar chicha y agua o masato.",
    imagen: "img/ceramica/jarron-grande-floreado-frontal.jpg",
    vistas: {
      frontal:          "img/ceramica/jarron-grande-floreado-frontal.jpg",
      trasera:          "img/ceramica/jarron-grande-floreado-trasera.jpg",
      lateralDerecho:   "img/ceramica/jarron-grande-floreado-lateral-derecho.jpg",
      lateralIzquierdo: "img/ceramica/jarron-grande-floreado-lateral-izquierdo.jpg",
      superior:         "img/ceramica/jarron-grande-floreado-superior.jpg",
      inferior:         "img/ceramica/jarron-grande-floreado-inferior.jpg"
    }
  },
  {
    id: 10,
    nombre: "Recipiente en Forma de Cacao",
    categoria: "ceramica",
    precio: 15.00,
    materiales: "Yunguna, cáscara de plátano o maduro, piedra blanca, pincel de pluma de gallina y cabello.",
    dimensiones: { alto: "3 cm", base: "20 cm" },
    uso: "Se usa para poner dulces, frutas o maduro asado.",
    imagen: "img/ceramica/recipiente-cacao-lateral-izquierdo.jpg",
    vistas: {
      frontal:          "img/ceramica/recipiente-cacao-frontal.jpg",
      // trasera:          "img/ceramica/recipiente-cacao-trasera.jpg",
      lateralDerecho:   "img/ceramica/recipiente-cacao-lateral-derecho.jpg",
      lateralIzquierdo: "img/ceramica/recipiente-cacao-lateral-izquierdo.jpg",
      // superior:         "img/ceramica/recipiente-cacao-superior.jpg",
      inferior:         "img/ceramica/recipiente-cacao-inferior.jpg"
    }
  },

  /* ============ TEXTILERÍA ============ */
  {
    id: 11,
    nombre: "Morral",
    categoria: "textileria",
    precio: 45.00,
    materiales: "Hilos.",
    dimensiones: { alto: "23 cm", largo: "25 cm" },
    uso: "Accesorio de vestir tradicional de uso diario masculino, empleado para transportar herramientas ligeras de labranza, provisiones o botellas de agua durante las jornadas del campo.",
    imagen: "img/textileria/morral-frontal.jpg",
    vistas: {
      frontal:          "img/textileria/morral-frontal.jpg",
      trasera:          "img/textileria/morral-trasera.jpg",
      lateralDerecho:   "img/textileria/morral-lateral-derecho.jpg",
      lateralIzquierdo: "img/textileria/morral-lateral-izquierdo.jpg",
      detalle:          "img/textileria/morral-detalle.jpg"
    }
  },
  {
    id: 12,
    nombre: "Bolso de Dama Rojo",
    categoria: "textileria",
    precio: 55.00,
    materiales: "Hilos.",
    dimensiones: { alto: "30 cm", largo: "18 cm", base: "10 cm" },
    uso: "Bolso de mano diseñado para guardar y transportar cualquier objeto de uso personal.",
    imagen: "img/textileria/bolso-dama-rojo-frontal.jpg",
    vistas: {
      frontal:          "img/textileria/bolso-dama-rojo-frontal.jpg",
      trasera:          "img/textileria/bolso-dama-rojo-trasera.jpg",
      lateralDerecho:   "img/textileria/bolso-dama-rojo-lateral-derecho.jpg",
      lateralIzquierdo: "img/textileria/bolso-dama-rojo-lateral-izquierdo.jpg",
      detalle:          "img/textileria/bolso-dama-rojo-detalle.jpg"
    }
  },
  {
    id: 13,
    nombre: "Bolso de Dama Verde",
    categoria: "textileria",
    precio: 35.00,
    materiales: "Hilos.",
    dimensiones: { alto: "20 cm", largo: "12 cm", base: "6 cm" },
    uso: "Bolso de mano diseñado para guardar y transportar objetos de uso personal.",
    imagen: "img/textileria/bolso-dama-verde-frontal.jpg",
    vistas: {
      frontal:          "img/textileria/bolso-dama-verde-frontal.jpg",
      trasera:          "img/textileria/bolso-dama-verde-trasera.jpg",
      lateralDerecho:   "img/textileria/bolso-dama-verde-lateral-derecho.jpg",
      lateralIzquierdo: "img/textileria/bolso-dama-verde-lateral-izquierdo.jpg",
      detalle:          "img/textileria/bolso-dama-verde-detalle.jpg"
    }
  },

  /* ============ BISUTERÍA ============ */
  {
    id: 14,
    nombre: "Llaveros",
    categoria: "bisuteria",
    precio: 10.00,
    materiales: "Huayruro, ojo de vaca, alambre, mostacillas.",
    dimensiones: { alto: "9 cm" },
    uso: "Adorno utilitario para llevar llaves, decorar bolsos y mochilas, o como recuerdo en festividades tradicionales.",
    imagen: "img/bisuteria/llaveros-frontal.jpg",
    vistas: {
      frontal: "img/bisuteria/llaveros-frontal.jpg",
      trasera: "img/bisuteria/llaveros-trasera.jpg",
      detalle: "img/bisuteria/llaveros-detalle.jpg"
    }
  },
  {
    id: 15,
    nombre: "Aretes de Mariposa",
    categoria: "bisuteria",
    precio: 10.00,
    materiales: "Escama de paiche, alambre, mostacillas.",
    dimensiones: { alto: "12 cm" },
    uso: "Accesorio de vestir femenino utilizado como joyería artesanal en celebraciones o en el día a día.",
    imagen: "img/bisuteria/aretes-mariposa-verde.jpg",
    vistas: {
    
      trasera: "img/bisuteria/aretes-mariposa-verde.jpg",
      frontal: "img/bisuteria/aretes-mariposa-rojo.jpg",
      detalle: "img/bisuteria/aretes-mariposa-celeste.jpg"
    }
  },
  {
    id: 16,
    nombre: "Collar",
    categoria: "bisuteria",
    precio: 150.00,
    materiales: "Huayruro, hilo fose, mostacillas.",
    dimensiones: { alto: "41 cm", cuello: "50 cm" },
    uso: "Joyería artesanal empleada como adorno complementario en festividades tradicionales o eventos especiales de la comunidad.",
    imagen: "img/bisuteria/collar-frontal.jpg",
    vistas: {
      frontal: "img/bisuteria/collar-frontal.jpg",
      trasera: "img/bisuteria/collar-trasera.jpg",
      detalle: "img/bisuteria/collar-detalle.jpg"
    }
  }
];