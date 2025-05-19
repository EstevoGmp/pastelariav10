const btn = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Dados do Menu
const menuData = [
  // Tradicionais
  {
    name: "Pastel de Carne",
    category: "tradicional",
    sizes: {
      pequeno: 12.0,
      grande: 16.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Pastel de Frango",
    category: "tradicional",
    sizes: {
      pequeno: 12.0,
      grande: 16.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Pastel de Queijo",
    category: "tradicional",
    sizes: {
      pequeno: 12.0,
      grande: 16.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Pastel de Banana",
    category: "tradicional",
    sizes: {
      pequeno: 12.0,
      grande: 16.0,
    },
    flavors: {
      polvilhar: "Polvilhado no Açúcar e canela",
      "sem polvilhar": "Sem polvilhar no açúcar e canela",
    },
    flavorPrices: {
      "sem polvilhar": 0.0,
      polvilhar: 0.0,
    },
    description: "Polvilhado com açúcar e canela",
    hasImage: false,
    acceptsObservation: true,
  },

  // Especiais
  {
    name: "Carne com Bacon",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Carne com Queijo",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Portuguesa",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    description: "Carne, ovo e azeitona",
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Calabresa",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    description: "c/ tomate, orégano e Requeijão",
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Frango com Palmito",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Frango com Requeijão",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Frango com Calabresa",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Frango com Queijo",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Queijo com Milho",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Queijo com Bacon",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Queijo, Ovo, Tomate Seco e Orégano",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Pastel De Pizza",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    description: "Queijo, presunto, tomate e orégano",
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Palmito",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    description: "c/ alho Poró e Requeijão",
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Brócolis",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    description: "c/ ilho e tomate seco",
    hasImage: false,
    acceptsObservation: true,
  },

  // Doces
  {
    name: "Chocolate Preto",
    category: "doce",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Chocolate Branco",
    category: "doce",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Prestígio",
    category: "doce",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    description: "Coco ralado com chocolate",
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Chocolate Preto com Morango",
    category: "doce",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Chocolate Branco com Morango",
    category: "doce",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Chocolate Preto e Branco",
    category: "doce",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Romeu e Julieta",
    category: "doce",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    description: "Goiabada com Queijo",
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Banana com Chocolate Preto",
    category: "doce",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    flavors: {
      polvilhar: "Polvilhado no Açúcar e canela",
      "sem polvilhar": "Sem polvilhar no açúcar e canela",
    },
    flavorPrices: {
      "sem polvilhar": 0.0,
      polvilhar: 0.0,
    },
    description: "Polvilhado com açúcar e canela",
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Banana com Chocolate Branco",
    category: "doce",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    flavors: {
      polvilhar: "Polvilhado no Açúcar e canela",
      "sem polvilhar": "Sem polvilhar no açúcar e canela",
    },
    flavorPrices: {
      "sem polvilhar": 0.0,
      polvilhar: 0.0,
    },
    description: "Polvilhado com açúcar e canela",
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Banoff",
    category: "doce",
    sizes: {
      pequeno: 13.0,
      grande: 20.0,
    },
    flavors: {
      polvilhar: "Polvilhado no Açúcar e canela",
      "sem polvilhar": "Sem polvilhar no açúcar e canela",
    },
    flavorPrices: {
      "sem polvilhar": 0.0,
      polvilhar: 0.0,
    },
    description: "Banana, canela e doce de leite",
    hasImage: false,
    acceptsObservation: true,
  },

  // Gourmets
  {
    name: "Berbigão",
    category: "gourmet",
    sizes: {
      pequeno: 15.0,
      grande: 24.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Camarão",
    category: "gourmet",
    sizes: {
      pequeno: 15.0,
      grande: 24.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Camarão com Requeijão",
    category: "gourmet",
    sizes: {
      pequeno: 15.0,
      grande: 24.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Camarão com Palmito",
    category: "gourmet",
    sizes: {
      pequeno: 15.0,
      grande: 24.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Linguiça Blumenau",
    category: "gourmet",
    sizes: {
      pequeno: 15.0,
      grande: 24.0,
    },
    description: "C/ requeijão e vinagrete",
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Quatro Queijos",
    category: "gourmet",
    sizes: {
      pequeno: 15.0,
      grande: 24.0,
    },
    description: "Mussarela, gorgonzola, parmesão e cheddar",
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Paçoca de Pinhão",
    category: "gourmet",
    sizes: {
      pequeno: 15.0,
      grande: 24.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Siri",
    category: "gourmet",
    sizes: {
      pequeno: 15.0,
      grande: 24.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },

  // Porções
  {
    name: "Mini Pasteis Tradicionais (4 un.)",
    category: "porcao",
    sizes: {
      unico: 19.0,
    },
    description: "Até 2 sabores tradicionais",
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Mini Pasteis Especiais/Gourmet (4 un.)",
    category: "porcao",
    sizes: {
      unico: 24.0,
    },
    description: "Até 2 sabores especiais ou gourmets",
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Mini Pasteis Tradicionais (8 un.)",
    category: "porcao",
    sizes: {
      unico: 30.0,
    },
    description: "Até 4 sabores Tradicionais",
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Mini Pasteis Especiais/Gourmet (8 un.)",
    category: "porcao",
    sizes: {
      unico: 37.0,
    },
    description: "Até 4 sabores especiais ou gourmets",
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Bolinho de Feijão (5 un.)",
    category: "porcao",
    sizes: {
      unico: 20.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Mini Pão de Queijo (10 un.)",
    category: "porcao",
    sizes: {
      unico: 16.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Raquete de Frango (500g)",
    category: "porcao",
    sizes: {
      unico: 24.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },
  {
    name: "Fritas (500g)",
    category: "porcao",
    sizes: {
      unico: 20.0,
    },
    hasImage: false,
    acceptsObservation: true,
  },

  // Diferentes
  {
    name: "Pastel de Vento",
    category: "diferente",
    sizes: {
      pequeno: 6.0,
      grande: 8.0,
    },
    description: "Pastel sem recheio",
    hasImage: true,
    image: "assets/pastel.png",
    acceptsObservation: true,
  },
  {
    name: "BomBom sonho de Valsa",
    category: "diferente",
    sizes: {
      unico: 3.0,
    },
    description: "BomBom sonho de Valsa",
    hasImage: true,
    image: "assets/bombom.png",
    acceptsObservation: true,
  },
  {
    name: "Halls",
    category: "diferente",
    basePrice: 3.0,
    flavors: {
      "extra forte": "Extra forte",
      menta: "Menta",
      cereja: "Cereja",
      melancia: "Melancia",
    },
    flavorPrices: {
      "extra forte": 0.0,
      menta: 0.0,
      cereja: 0.0,
      melancia: 0.0,
    },
    description: "Halls - Extra forte, Menta, Cereja e Melancia",
    hasImage: true,
    image: "assets/halls.png",
    acceptsObservation: true,
  },
  {
    name: "Trident",
    category: "diferente",
    basePrice: 3.0,
    flavors: {
      menta: "Menta",
      hortelã: "Hortelã",
      canela: "Canela",
      morango: "Morango",
    },
    flavorPrices: {
      menta: 0.0,
      hortelã: 0.0,
      canela: 0.0,
      morango: 0.0,
    },
    description: "Trident - Morango, Canela, Hortelã e Menta",
    hasImage: true,
    image: "assets/trident.png",
    acceptsObservation: true,
  },

  // Bebidas
  {
    name: "Caldo de Cana",
    category: "bebida",
    sizes: {
      "300ml": 10.0,
      "500ml": 12.0,
    },
    flavors: {
      "c/ limão e gelo": "c/ Limão e Gelo",
      "c/ limão": "c/ Limão",
      "c/ gelo": "c/ Gelo",
    },
    flavorPrices: {
      // Altera o valor final caso o sabor aumente o preço
      "c/ limão e gelo": 0.0,
      "c/ limão": 0.0,
      "c/ gelo": 0.0,
    },
    description: "Limão, Gengibre e Gelo a escolha",
    hasImage: true,
    image: "assets/caldo-de-cana.svg",
    acceptsObservation: true,
  },
  {
    name: "Caipirinha de Caldo de Cana 500ml",
    category: "bebida",
    basePrice: 19.0, // Preço base para itens com sabores e sem tamanho
    flavors: {
      gin: "Gin",
      wodka: "Wodka",
      cachaça: "Cachaça",
    },
    flavorPrices: {
      // Altera o valor final caso o sabor aumente o preço
      gin: 0.0,
      wodka: 0.0,
      cachaça: 0.0,
    },
    hasImage: true,
    image: "assets/caipirinha.svg",
    acceptsObservation: true,
  },

  {
    name: "Água s/ Gás",
    category: "bebida",
    sizes: {
      unico: 4.0,
    },
    hasImage: true,
    image: "assets/agua.svg",
    acceptsObservation: false,
  },
  {
    name: "Água c/ Gás",
    category: "bebida",
    sizes: {
      unico: 4.0,
    },
    hasImage: true,
    image: "assets/agua-com-gas.svg",
    acceptsObservation: false,
  },
  {
    name: "Coca-Cola",
    category: "bebida",
    sizes: {
      unico: 7.0,
    },
    hasImage: true,
    image: "assets/coca-cola.svg",
    acceptsObservation: false,
  },
  {
    name: "Coca-Cola Zero",
    category: "bebida",
    sizes: {
      unico: 7.0,
    },
    hasImage: true,
    image: "assets/coca-cola-0.svg",
    acceptsObservation: false,
  },
  {
    name: "Laranjinha",
    category: "bebida",
    sizes: {
      unico: 7.0,
    },
    hasImage: true,
    image: "assets/laranjinha.svg",
    acceptsObservation: false,
  },
  {
    name: "Fanta Laranja",
    category: "bebida",
    sizes: {
      unico: 7.0,
    },
    hasImage: true,
    image: "assets/fanta-laranja.svg",
    acceptsObservation: false,
  },
  {
    name: "Guaraná Zero",
    category: "bebida",
    sizes: {
      unico: 7.0,
    },
    hasImage: true,
    image: "assets/guarana.svg",
    acceptsObservation: false,
  },
  {
    name: "Guaraná",
    category: "bebida",
    sizes: {
      unico: 7.0,
    },
    hasImage: true,
    image: "assets/guarana-normal.svg",
    acceptsObservation: false,
  },
  {
    name: "Pepsi",
    category: "bebida",
    sizes: {
      unico: 7.0,
    },
    hasImage: true,
    image: "assets/pepsi.svg",
    acceptsObservation: false,
  },
  {
    name: "Schweppes",
    category: "bebida",
    sizes: {
      unico: 7.0,
    },
    hasImage: true,
    image: "assets/schweppes.svg",
    acceptsObservation: false,
  },
  {
    name: "Ice Tea Limão",
    category: "bebida",
    sizes: {
      unico: 8.0,
    },
    hasImage: true,
    image: "assets/icetea-limao.svg",
    acceptsObservation: false,
  },
  {
    name: "Ice Tea Pêssego",
    category: "bebida",
    sizes: {
      unico: 8.0,
    },
    hasImage: true,
    image: "assets/icetea-pessego.svg",
    acceptsObservation: false,
  },
  {
    name: "Del Valle Pêssego",
    category: "bebida",
    sizes: {
      unico: 8.0,
    },
    hasImage: true,
    image: "assets/dell-pessego.svg",
    acceptsObservation: false,
  },
  {
    name: "Del Valle Uva",
    category: "bebida",
    sizes: {
      unico: 8.0,
    },
    hasImage: true,
    image: "assets/dell-uva.svg",
    acceptsObservation: false,
  },
  {
    name: "Choco-Leite",
    category: "bebida",
    sizes: {
      unico: 8.0,
    },
    hasImage: true,
    image: "assets/chocoleite.svg",
    acceptsObservation: false,
  },
  {
    name: "Amstel Lata",
    category: "bebida",
    sizes: {
      unico: 8.0,
    },
    hasImage: true,
    image: "assets/amstel-lata.svg",
    acceptsObservation: false,
  },
  {
    name: "Brahma Lata",
    category: "bebida",
    sizes: {
      unico: 8.0,
    },
    hasImage: true,
    image: "assets/brahma-lata.svg",
    acceptsObservation: false,
  },
  {
    name: "Amstel Long Neck",
    category: "bebida",
    sizes: {
      unico: 12.0,
    },
    hasImage: true,
    image: "assets/amstel-long.svg",
    acceptsObservation: false,
  },
  {
    name: "Amstel Ultra Long Neck",
    category: "bebida",
    sizes: {
      unico: 12.0,
    },
    hasImage: true,
    image: "assets/amstel-ultra-long.svg",
    acceptsObservation: false,
  },
  {
    name: "Budweiser Long Neck",
    category: "bebida",
    sizes: {
      unico: 12.0,
    },
    hasImage: true,
    image: "assets/budweiser-long.svg",
    acceptsObservation: false,
  },
  {
    name: "Eisenbahn Long Neck",
    category: "bebida",
    sizes: {
      unico: 12.0,
    },
    hasImage: true,
    image: "assets/eisenbahn-long.svg",
    acceptsObservation: false,
  },
  {
    name: "Heineken Long Neck",
    category: "bebida",
    sizes: {
      unico: 14.0,
    },
    hasImage: true,
    image: "assets/heineken-long.svg",
    acceptsObservation: false,
  },
  {
    name: "Heineken Long Neck Zero",
    category: "bebida",
    sizes: {
      unico: 14.0,
    },
    hasImage: true,
    image: "assets/heineken-long-0.svg",
    acceptsObservation: false,
  },
  {
    name: "Michelob Long Neck",
    category: "bebida",
    sizes: {
      unico: 14.0,
    },
    hasImage: true,
    image: "assets/michelob-long.svg",
    acceptsObservation: false,
  },
  {
    name: "Sol Long Neck",
    category: "bebida",
    sizes: {
      unico: 12.0,
    },
    hasImage: true,
    image: "assets/sol-long.svg",
    acceptsObservation: false,
  },
  {
    name: "Stella Long Neck",
    category: "bebida",
    sizes: {
      unico: 14.0,
    },
    hasImage: true,
    image: "assets/stella-long.svg",
    acceptsObservation: false,
  },
];

// Categorias
const categories = [
  {
    id: "tradicional",
    name: "Tradicionais",
    icon: "fa-bread-slice",
  },
  {
    id: "especial",
    name: "Especiais",
    icon: "fa-star",
  },
  {
    id: "doce",
    name: "Doces",
    icon: "fa-ice-cream",
  },
  {
    id: "gourmet",
    name: "Gourmets",
    icon: "fa-gem",
  },
  {
    id: "porcao",
    name: "Porções",
    icon: "fa-drumstick-bite",
  },
  {
    id: "bebida",
    name: "Bebidas",
    icon: "fa-wine-glass-alt",
  },
  {
    id: "diferente",
    name: "Diferentes",
    icon: "fa-solid fa-cookie",
  },
];
let increaseInterval;
let decreaseInterval;
let isMouseDown = false;

// Variáveis globais para controle
let holdInterval = null;
let holdTimeout = null;
const HOLD_DELAY = 300;
const HOLD_INTERVAL = 100;

let state = {
  cart: [],
  currentItem: null,
  selectedCategory: null,
};

// Elementos DOM
const DOM = {
  loadingScreen: document.querySelector(".loading-screen"),
  categoryButtons: document.querySelector(".category-buttons"),
  menuGrid: document.querySelector(".menu-grid"),
  menuTitle: document.getElementById("menu-title"),
  cartBtn: document.querySelector(".cart-btn"),
  cartCount: document.querySelector(".cart-count"),
  cartModal: document.querySelector(".cart-modal"),
  closeCart: document.querySelector(".close-cart"),
  cartItems: document.querySelector(".cart-items"),
  cartTotal: document.querySelector(".total-price"),
  checkoutBtn: document.querySelector(".checkout-btn"),
  observationModal: document.querySelector(".observation-modal"),
  closeObservation: document.querySelector(".close-observation"),
  observationContent: document.querySelector(".observation-content"),
  sizeSelect: document.getElementById("size"),
  flavorSelect: document.getElementById("flavor"),
  notesTextarea: document.getElementById("notes"),
  quantityValue: document.querySelector(".quantity-value"),
  decreaseQty: document.querySelector(".decrease-qty"),
  increaseQty: document.querySelector(".increase-qty"),
  addToCartFinal: document.querySelector(".add-to-cart-final"),
  overlay: document.querySelector(".overlay"),
  orderBtn: document.querySelector(".order-btn"),
};
// Inicialização
function init() {
  setTimeout(() => {
    DOM.loadingScreen.style.display = "none";
  }, 500);

  loadCategories();

  loadMenuItems();

  setupEventListeners();

  updateCart();

  loadCart();

  DOM.increaseQty.onclick = null;
  DOM.decreaseQty.onclick = null;
  document.addEventListener("mouseup", stopHold);
  document.addEventListener("touchend", stopHold);
  window.addEventListener("blur", stopHold);

  DOM.observationModal.addEventListener("open", () => {
    setupModalButtonListeners();
  });
}

function performQuantityAction(action, index = null) {
  if (index !== null) {
    const item = state.cart[index];
    if (!item) return;

    if (action === "increase") {
      if (item.quantity >= 100) {
        mostrarToast(
          `O item ${item.name} atingiu o limite máximo de 100 unidades!`
        );
        stopHold();
        return;
      }
      item.quantity += 1;
    } else if (action === "decrease") {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cart.splice(index, 1);
      }
    }
    updateCart();
    saveCart();
  } else {
    let quantity = parseInt(DOM.quantityValue.textContent);
    if (action === "increase") {
      if (quantity < 100) {
        DOM.quantityValue.textContent = quantity + 1;
      } else {
        mostrarToast("Quantidade máxima de 100 unidades atingida!");
        stopHold();
      }
    } else if (quantity > 1) {
      DOM.quantityValue.textContent = quantity - 1;
    }
  }
}

function startHold(action, index = null) {
  // Cancela qualquer intervalo existente
  stopHold();

  // Executa a ação imediatamente apenas se for um hold (não click simples)
  if (!this.isClick) {
    performQuantityAction(action, index);
  }

  // Configura o intervalo para repetição
  holdTimeout = setTimeout(() => {
    this.isHold = true;
    holdInterval = setInterval(() => {
      performQuantityAction(action, index);
    }, HOLD_INTERVAL);
  }, HOLD_DELAY);
}

function stopHold() {
  if (holdTimeout) clearTimeout(holdTimeout);
  if (holdInterval) clearInterval(holdInterval);
  holdTimeout = null;
  holdInterval = null;
}

function increaseQuantity() {
  let quantity = parseInt(DOM.quantityValue.textContent);
  if (quantity < 100) {
    quantity += 1;
    DOM.quantityValue.textContent = quantity;
  } else {
    mostrarToast("Quantidade máxima de 100 unidades atingida!");
    stopHold();
  }
}

function decreaseQuantity() {
  let quantity = parseInt(DOM.quantityValue.textContent);
  if (quantity > 1) {
    quantity -= 1;
    DOM.quantityValue.textContent = quantity;
  } else {
    stopHold();
  }
}

function setupModalButtonListeners() {
  const setupButton = (element, action) => {
    // Remove event listeners antigos para evitar duplicação
    element.replaceWith(element.cloneNode(true));
    const newElement = element;

    // Mouse events
    newElement.addEventListener("mousedown", (e) => {
      e.preventDefault();
      startHold(action);
    });

    newElement.addEventListener("mouseup", stopHold);
    newElement.addEventListener("mouseleave", stopHold);

    // Touch events
    newElement.addEventListener("touchstart", (e) => {
      e.preventDefault();
      startHold(action);
    });

    newElement.addEventListener("touchend", stopHold);
    newElement.addEventListener("touchcancel", stopHold);

    // Remove qualquer listener de click existente
    newElement.onclick = null;
  };

  setupButton(DOM.increaseQty, "increase");
  setupButton(DOM.decreaseQty, "decrease");
}

function saveCart() {
  localStorage.setItem("carrinhoPastelaria", JSON.stringify(state.cart));
}

function loadCart() {
  const carrinhoSalvo = localStorage.getItem("carrinhoPastelaria");
  if (carrinhoSalvo) {
    state.cart = JSON.parse(carrinhoSalvo);
    updateCart();
  }
}

function loadCategories() {
  DOM.categoryButtons.innerHTML = "";

  const allButton = document.createElement("button");
  allButton.className = "category-btn active";
  allButton.innerHTML = '<i class="fas fa-utensils"></i> Todos';
  allButton.addEventListener("click", () => {
    document
      .querySelectorAll(".category-btn")
      .forEach((btn) => btn.classList.remove("active"));
    allButton.classList.add("active");
    state.selectedCategory = null;
    DOM.menuTitle.textContent = "Cardápio";
    loadMenuItems();
  });
  DOM.categoryButtons.appendChild(allButton);

  categories.forEach((category) => {
    const button = document.createElement("button");
    button.className = "category-btn";
    button.innerHTML = `<i class="fas ${category.icon}"></i> ${category.name}`;
    button.addEventListener("click", () => {
      document
        .querySelectorAll(".category-btn")
        .forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      state.selectedCategory = category.id;
      DOM.menuTitle.textContent = category.name;
      loadMenuItems();
    });
    DOM.categoryButtons.appendChild(button);
  });
}

function loadMenuItems() {
  DOM.menuGrid.innerHTML = "";

  let filteredItems = menuData;

  if (state.selectedCategory) {
    filteredItems = menuData.filter(
      (item) => item.category === state.selectedCategory
    );
  }

  if (filteredItems.length === 0) {
    DOM.menuGrid.innerHTML =
      '<p style="grid-column: 1 / -1; text-align: center;">Nenhum item encontrado nesta categoria.</p>';
    return;
  }

  filteredItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item fade-in";

    let menuItemHTML = "";

    // Adiciona a descrição se existir
    const descriptionHTML = item.description
      ? `<div class="menu-item-description">${item.description}</div>`
      : "";

    if (item.hasImage) {
      menuItemHTML = `
        <div class="menu-item-image">
          <img src="${item.image}" alt="${item.name} © 2023 Estevão Marques.">
        </div>
        <div class="menu-item-content">
          <h3 class="menu-item-title">${item.name}</h3>
          ${descriptionHTML}
          <div class="menu-item-prices">
          ${generateSizesHTML(item.sizes, item)}
          </div>
          <button class="add-to-cart-btn" data-id="${item.name
            .toLowerCase()
            .replace(/ /g, "-")}">
            <i class="fas fa-cart-plus"></i>
            Adicionar
          </button>
        </div>
      `;
    } else {
      menuItemHTML = `
        <div class="menu-item-content" style="padding: 1.5rem;">
          <h3 class="menu-item-title">${item.name}</h3>
          ${descriptionHTML}
          <div class="menu-item-prices">
          ${generateSizesHTML(item.sizes, item)}
          </div>
          <button class="add-to-cart-btn" data-id="${item.name
            .toLowerCase()
            .replace(/ /g, "-")}">
            <i class="fas fa-cart-plus"></i>
            Adicionar
          </button>
        </div>
      `;
    }

    menuItem.innerHTML = menuItemHTML;
    DOM.menuGrid.appendChild(menuItem);

    const addToCartBtn = menuItem.querySelector(".add-to-cart-btn");
    addToCartBtn.addEventListener("click", () => {
      handleAddToCart(item);
    });
  });
}

function generateSizesHTML(sizes, item) {
  let sizesHTML = "";

  if ((!sizes || Object.keys(sizes).length === 0) && item.flavors) {
    sizesHTML += `
      <div class="price">
        <span class="price-label">Preço:</span>
        <span class="price-value">R$ ${item.basePrice
          .toFixed(2)
          .replace(".", ",")}</span>
      </div>
    `;
  } else if (sizes && Object.keys(sizes).length > 0) {
    for (const [size, price] of Object.entries(sizes)) {
      const sizeName =
        size === "pequeno"
          ? "Pequeno"
          : size === "grande"
          ? "Grande"
          : size === "unico"
          ? "Preço"
          : size === "300ml"
          ? "300ml"
          : size === "500ml"
          ? "500ml"
          : size;
      sizesHTML += `
        <div class="price">
          <span class="price-label">${sizeName}:</span>
          <span class="price-value">R$ ${price
            .toFixed(2)
            .replace(".", ",")}</span>
        </div>
      `;
    }
  }

  return sizesHTML;
}

function handleAddToCart(item) {
  state.currentItem = item;

  if (item.acceptsObservation) {
    openObservationModal();
  } else {
    addToCart({
      ...item,
      selectedSize: Object.keys(item.sizes)[0],
      quantity: 1,
      notes: "",
    });
  }
}

function openObservationModal() {
  DOM.sizeSelect.value = "";
  DOM.flavorSelect.value = "";
  DOM.notesTextarea.value = "";
  DOM.quantityValue.textContent = "1";

  DOM.sizeSelect.style.display = "none";
  DOM.flavorSelect.style.display = "none";

  if (state.currentItem.flavors) {
    DOM.flavorSelect.style.display = "block";
    DOM.flavorSelect.innerHTML = '<option value="">Selecione um sabor</option>';

    const flavors = state.currentItem.flavors;
    for (const [flavorKey, flavorName] of Object.entries(flavors)) {
      DOM.flavorSelect.innerHTML += `<option value="${flavorKey}">${flavorName}</option>`;
    }
  }

  if (
    state.currentItem.sizes &&
    Object.keys(state.currentItem.sizes).length > 0
  ) {
    DOM.sizeSelect.style.display = "block";
    DOM.sizeSelect.innerHTML = '<option value="">Selecione um tamanho</option>';

    for (const size of Object.keys(state.currentItem.sizes)) {
      const sizeName =
        size === "pequeno"
          ? "Pequeno"
          : size === "grande"
          ? "Grande"
          : size === "unico"
          ? "Único"
          : size === "300ml"
          ? "300ml"
          : size === "500ml"
          ? "500ml"
          : size;
      DOM.sizeSelect.innerHTML += `<option value="${size}">${sizeName}</option>`;
    }
  }

  DOM.observationModal.classList.add("open");
  DOM.overlay.classList.add("open");
}

function closeObservationModal() {
  DOM.observationModal.classList.remove("open");
  DOM.overlay.classList.remove("open");
  state.currentItem = null;
}

function addToCart(itemData) {
  const {
    name,
    selectedSize,
    selectedFlavor,
    quantity,
    notes,
    sizes,
    flavors,
    flavorPrices,
    basePrice,
  } = itemData;

  if (quantity > 100) {
    mostrarToast(`O item ${name} atingiu a quantidade máxima de 100 unidades!`);
    return;
  }

  let price = 0;
  if (selectedSize) {
    price = sizes[selectedSize];
  } else if (basePrice !== undefined) {
    price = basePrice;
    if (
      selectedFlavor &&
      flavorPrices &&
      flavorPrices[selectedFlavor] !== undefined
    ) {
      price += flavorPrices[selectedFlavor];
    }
  } else if (sizes && Object.keys(sizes).length > 0) {
    price = sizes[Object.keys(sizes)[0]];
  }

  const existingItemIndex = state.cart.findIndex(
    (item) =>
      item.name === name &&
      item.selectedSize === selectedSize &&
      item.selectedFlavor === selectedFlavor &&
      item.notes === notes
  );

  if (existingItemIndex !== -1) {
    const newQuantity = state.cart[existingItemIndex].quantity + quantity;
    if (newQuantity > 100) {
      mostrarToast(
        `O item ${name} atingiu a quantidade máxima de 100 unidades!`
      );
      return;
    }
    state.cart[existingItemIndex].quantity = newQuantity;
  } else {
    state.cart.push({
      ...itemData,
      price: price,
      selectedSize: selectedSize,
      selectedFlavor: selectedFlavor,
    });
  }

  closeObservationModal();
  updateCart();
  saveCart();

  mostrarToast(`${quantity}x ${name} adicionado ao carrinho!`);
}

function updateCart() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  DOM.cartCount.textContent = totalItems;

  if (state.cart.length === 0) {
    if (!DOM.cartItems.querySelector(".empty-cart")) {
      DOM.cartItems.innerHTML = `
        <div class="empty-cart">
          <i class="fas fa-shopping-basket"></i>
          <p>Seu carrinho está vazio</p>
        </div>
      `;
    }
    DOM.cartTotal.textContent = "R$ 0,00";
    return;
  }

  const emptyCart = DOM.cartItems.querySelector(".empty-cart");
  if (emptyCart) {
    emptyCart.remove();
  }

  let totalPrice = 0;

  state.cart.forEach((item, index) => {
    totalPrice += item.price * item.quantity;

    let cartItem = DOM.cartItems.querySelector(`[data-index="${index}"]`);

    if (!cartItem) {
      cartItem = createCartItem(item, index);
      DOM.cartItems.appendChild(cartItem);
    } else {
      updateCartItem(cartItem, item, index);
    }
  });

  const existingIndices = state.cart.map((_, i) => i.toString());
  document.querySelectorAll(".cart-item[data-index]").forEach((item) => {
    if (!existingIndices.includes(item.dataset.index)) {
      item.remove();
    }
  });

  DOM.cartTotal.textContent = `R$ ${totalPrice.toFixed(2).replace(".", ",")}`;
}

function createCartItem(item, index) {
  const cartItem = document.createElement("div");
  cartItem.className = "cart-item slide-up";
  cartItem.dataset.index = index;

  const itemPrice = item.price * item.quantity;

  let optionText = "";
  if (item.selectedSize) {
    optionText =
      item.selectedSize === "pequeno"
        ? "Pequeno"
        : item.selectedSize === "grande"
        ? "Grande"
        : item.selectedSize === "unico"
        ? "Único"
        : item.selectedSize === "300ml"
        ? "300ml"
        : item.selectedSize === "500ml"
        ? "500ml"
        : item.selectedSize;
  }
  if (item.selectedFlavor) {
    if (optionText) optionText += " - ";
    optionText += item.flavors
      ? item.flavors[item.selectedFlavor]
      : item.selectedFlavor;
  }

  cartItem.innerHTML = `
    <div class="cart-item-info">
      <div class="cart-item-name">${item.name}</div>
      ${optionText ? `<div class="cart-item-size">${optionText}</div>` : ""}
      ${
        item.notes
          ? `<div class="cart-item-notes break-word">Obs: ${item.notes}</div>`
          : ""
      }
    </div>
    <div class="cart-item-controls">
      <div class="cart-item-price">R$ ${itemPrice
        .toFixed(2)
        .replace(".", ",")}</div>
      <div class="cart-item-quantity">
        <button class="quantity-btn ${item.quantity === 1 ? "remove" : ""}" 
                data-index="${index}" data-action="decrease">
          <i class="fas ${item.quantity === 1 ? "fa-trash" : "fa-minus"}"></i>
        </button>
        <span class="cart-item-quantity-value">${item.quantity}</span>
        <button class="quantity-btn" data-index="${index}" data-action="increase">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  `;

  addQuantityButtonListeners(cartItem, index);
  return cartItem;
}

function updateCartItem(cartItem, item, index) {
  const itemPrice = item.price * item.quantity;

  cartItem.querySelector(".cart-item-quantity-value").textContent =
    item.quantity;
  cartItem.querySelector(".cart-item-price").textContent = `R$ ${itemPrice
    .toFixed(2)
    .replace(".", ",")}`;

  const decreaseBtn = cartItem.querySelector('[data-action="decrease"]');
  decreaseBtn.className = `quantity-btn ${item.quantity === 1 ? "remove" : ""}`;
  decreaseBtn.innerHTML = `<i class="fas ${
    item.quantity === 1 ? "fa-trash" : "fa-minus"
  }"></i>`;
}

function addQuantityButtonListeners(element, index) {
  const increaseBtn = element.querySelector('[data-action="increase"]');
  const decreaseBtn = element.querySelector('[data-action="decrease"]');

  const setupButton = (btn, action) => {
    btn.addEventListener("mousedown", () => startHold(action, index));
    btn.addEventListener("mouseup", stopHold);
    btn.addEventListener("mouseleave", stopHold);

    btn.addEventListener("touchstart", (e) => {
      e.preventDefault();
      startHold(action, index);
    });
    btn.addEventListener("touchend", stopHold);
    btn.addEventListener("touchcancel", stopHold);
  };

  setupButton(increaseBtn, "increase");
  setupButton(decreaseBtn, "decrease");
}

function handleQuantityClick(index, action) {
  const item = state.cart[index];

  if (action === "increase") {
    if (item.quantity >= 100) {
      mostrarToast(
        `O item ${item.name} atingiu a quantidade máxima de 100 unidades!`
      );
      return;
    }
    item.quantity += 1;
  } else if (action === "decrease") {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      state.cart.splice(index, 1);
    }
  }

  updateCart();
  saveCart();
}

function setupEventListeners() {
  DOM.cartBtn.addEventListener("click", () => {
    DOM.cartModal.classList.add("open");
    DOM.overlay.classList.add("open");
  });

  DOM.closeCart.addEventListener("click", () => {
    DOM.cartModal.classList.remove("open");
    DOM.overlay.classList.remove("open");
  });

  DOM.closeObservation.addEventListener("click", closeObservationModal);
  DOM.overlay.addEventListener("click", () => {
    DOM.cartModal.classList.remove("open");
    DOM.observationModal.classList.remove("open");
    DOM.overlay.classList.remove("open");
  });

  DOM.decreaseQty.addEventListener("mousedown", () => {
    startHold("decrease");
  });

  DOM.decreaseQty.addEventListener("touchstart", () => {
    startHold("decrease");
  });

  DOM.increaseQty.addEventListener("mousedown", () => {
    startHold("increase");
  });

  DOM.increaseQty.addEventListener("touchstart", () => {
    startHold("increase");
  });

  DOM.decreaseQty.addEventListener("mouseleave", stopHold);
  DOM.increaseQty.addEventListener("mouseleave", stopHold);

  DOM.addToCartFinal.addEventListener("click", () => {
    if (state.currentItem.sizes && !DOM.sizeSelect.value) {
      mostrarToast("Por favor, selecione um tamanho");
      return;
    }

    if (state.currentItem.flavors && !DOM.flavorSelect.value) {
      mostrarToast("Por favor, selecione um sabor");
      return;
    }

    addToCart({
      ...state.currentItem,
      selectedSize: DOM.sizeSelect.value || null,
      selectedFlavor: DOM.flavorSelect.value || null,
      quantity: parseInt(DOM.quantityValue.textContent),
      notes: DOM.notesTextarea.value,
    });
  });
  DOM.checkoutBtn.addEventListener("click", () => {
    if (state.cart.length === 0) {
      mostrarToast("Seu carrinho está vazio!");
      return;
    }

    sendWhatsAppOrder();
  });

  DOM.orderBtn.addEventListener("click", () => {
    document.querySelector(".menu").scrollIntoView({
      behavior: "smooth",
    });
  });
}

function mostrarToast(mensagem) {
  Toastify({
    text: mensagem,
    duration: 1300,
    gravity: "top",
    position: "left",
    style: {
      background:
        "linear-gradient(to right,rgb(45, 155, 128),rgb(33, 100, 100))",
    },
  }).showToast();
}

function sendWhatsAppOrder() {
  const phoneNumber = "47996870409";
  let message =
    "Olá Pastelaria Berbigão! Gostaria de fazer o seguinte pedido:\n\n";

  let totalPrice = 0;

  state.cart.forEach((item) => {
    let optionText = "";
    if (item.selectedSize) {
      optionText =
        item.selectedSize === "pequeno"
          ? "Pequeno"
          : item.selectedSize === "grande"
          ? "Grande"
          : item.selectedSize === "unico"
          ? "Único"
          : item.selectedSize === "300ml"
          ? "300ml"
          : item.selectedSize === "500ml"
          ? "500ml"
          : item.selectedSize;
    }
    if (item.selectedFlavor) {
      if (optionText) optionText += " - ";
      optionText += item.flavors
        ? item.flavors[item.selectedFlavor]
        : item.selectedFlavor;
    }

    const itemPrice = item.price * item.quantity;
    totalPrice += itemPrice;

    message += `- *${item.quantity}*x *${item.name}*`;
    if (optionText) {
      message += ` (${optionText})`;
    }
    if (item.notes) {
      message += `\n  Obs: ${item.notes}`;
    }
    message += ` - R$ ${itemPrice.toFixed(2).replace(".", ",")}\n`;
  });

  message += `\n*Total: R$ ${totalPrice.toFixed(2).replace(".", ",")}*`;
  message +=
    "\n\nPor favor, confirmem o pedido e informem as formas de pagamento disponíveis. Obrigado!";

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
}

document.addEventListener("DOMContentLoaded", init);
