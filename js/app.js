/* =========================================================
   APP — Render del catálogo, filtros, buscador y modal
   ========================================================= */

const grid = document.getElementById("gridProductos");
const botonesFiltro = document.querySelectorAll(".filtro");
const inputBuscador = document.getElementById("buscador");
const sinResultados = document.getElementById("sinResultados");
const anio = document.getElementById("anio");

// Modal
const modal = document.getElementById("modal");
const modalImagen = document.getElementById("modalImagen");
const modalCategoria = document.getElementById("modalCategoria");
const modalNombre = document.getElementById("modalNombre");
const modalPrecio = document.getElementById("modalPrecio");
const modalUso = document.getElementById("modalUso");
const modalDimensiones = document.getElementById("modalDimensiones");
const modalMateriales = document.getElementById("modalMateriales");
const modalWhatsapp = document.getElementById("modalWhatsapp");
const modalMiniaturas = document.getElementById("modalMiniaturas");

let categoriaActiva = "todos";
let textoBusqueda = "";

const NOMBRES_CATEGORIA = {
  ceramica: "Cerámica",
  textileria: "Textilería",
  bisuteria: "Bisutería"
};

const WHATSAPP_NUMERO = "51934615312";

/* =========================================================
   Render de productos
   ========================================================= */
function renderProductos() {
  const filtrados = PRODUCTOS.filter(p => {
    const coincideCategoria =
      categoriaActiva === "todos" || p.categoria === categoriaActiva;
    const coincideBusqueda = p.nombre
      .toLowerCase()
      .includes(textoBusqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  grid.innerHTML = "";

  if (filtrados.length === 0) {
    sinResultados.hidden = false;
    return;
  }
  sinResultados.hidden = true;

  filtrados.forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "producto";
    card.style.animationDelay = `${i * 0.05}s`;

    card.innerHTML = `
      <div class="producto__imagen">
        <span class="producto__categoria">${NOMBRES_CATEGORIA[p.categoria]}</span>
        <img src="${p.imagen}" alt="${p.nombre}" loading="lazy"
             onerror="this.src='https://via.placeholder.com/400x400/f3ebe0/b85c38?text=${encodeURIComponent(p.nombre)}'">
      </div>
      <div class="producto__cuerpo">
        <h3 class="producto__nombre">${p.nombre}</h3>
        <p class="producto__uso">${p.uso}</p>
        <div class="producto__footer">
          <span class="producto__precio">S/ ${p.precio.toFixed(2)}</span>
          <button class="producto__btn" data-id="${p.id}">Ver más →</button>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });

  document.querySelectorAll(".producto__btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      const producto = PRODUCTOS.find(x => x.id === id);
      abrirModal(producto);
    });
  });
}

/* =========================================================
   Modal
   ========================================================= */
function abrirModal(p) {
  if (!p) return;

  // Imagen y categoría
  const imagenPrincipal = p.imagen;
  modalImagen.src = imagenPrincipal;
  modalImagen.alt = p.nombre;
  modalImagen.onerror = () => {
    modalImagen.src = `https://via.placeholder.com/600x600/f3ebe0/b85c38?text=${encodeURIComponent(p.nombre)}`;
  };
  modalCategoria.textContent = NOMBRES_CATEGORIA[p.categoria];

  // Textos
  modalNombre.textContent = p.nombre;
  modalPrecio.textContent = `S/ ${p.precio.toFixed(2)}`;
  modalUso.textContent = p.uso;
  modalMateriales.textContent = p.materiales;

  // Dimensiones
  modalDimensiones.innerHTML = Object.entries(p.dimensiones)
    .map(([k, v]) =>
      `<li><strong>${k.charAt(0).toUpperCase() + k.slice(1)}:</strong> ${v}</li>`
    )
    .join("");

  // Miniaturas (si no hay vistas, se genera solo la principal)
  const vistas = p.vistas || { frontal: p.imagen };
  modalMiniaturas.innerHTML = Object.entries(vistas)
    .map(([vista, ruta], i) => `
      <div class="miniatura ${i === 0 ? "activa" : ""}" data-ruta="${ruta}">
        <img src="${ruta}" alt="${vista}" loading="lazy"
             onerror="this.parentElement.style.display='none'">
      </div>
    `)
    .join("");

  modalMiniaturas.querySelectorAll(".miniatura").forEach(mini => {
    mini.addEventListener("click", () => {
      modalMiniaturas.querySelectorAll(".miniatura")
        .forEach(m => m.classList.remove("activa"));
      mini.classList.add("activa");
      modalImagen.src = mini.dataset.ruta;
    });
  });

  // WhatsApp con mensaje prellenado
  const mensaje = encodeURIComponent(
    `Hola, estoy interesado(a) en la pieza "${p.nombre}" (S/ ${p.precio.toFixed(2)}) del catálogo de Yuyay Llakta.`
  );
  modalWhatsapp.href = `https://wa.me/${WHATSAPP_NUMERO}?text=${mensaje}`;

  // Abrir
  modal.classList.add("activo");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-abierto");
}

function cerrarModal() {
  modal.classList.remove("activo");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-abierto");
}

// Cerrar: click en backdrop, botón ✕ y botón "Cerrar"
document.querySelectorAll("[data-cerrar-modal]").forEach(el => {
  el.addEventListener("click", cerrarModal);
});

// Cerrar con tecla Escape
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && modal.classList.contains("activo")) {
    cerrarModal();
  }
});

/* =========================================================
   Filtros y buscador
   ========================================================= */
botonesFiltro.forEach(btn => {
  btn.addEventListener("click", () => {
    botonesFiltro.forEach(b => b.classList.remove("activo"));
    btn.classList.add("activo");
    categoriaActiva = btn.dataset.categoria;
    renderProductos();
  });
});

inputBuscador.addEventListener("input", e => {
  textoBusqueda = e.target.value;
  renderProductos();
});

document.querySelectorAll(".categoria-card").forEach(card => {
  card.addEventListener("click", () => {
    const cat = card.dataset.filtro;
    categoriaActiva = cat;
    botonesFiltro.forEach(b => {
      b.classList.toggle("activo", b.dataset.categoria === cat);
    });
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
    renderProductos();
  });
});

/* =========================================================
   Año dinámico
   ========================================================= */
anio.textContent = new Date().getFullYear();

/* =========================================================
   Init
   ========================================================= */
renderProductos();