// Dados do Menu
const menuData = [
  // Tradicionais
  {
    id: "pastel-de-carne",
    name: "Pastel de Carne",
    category: "tradicional",
    sizes: {
      pequeno: 12.0,
      grande: 16.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "pastel-de-frango",
    name: "Pastel de Frango",
    category: "tradicional",
    sizes: {
      pequeno: 12.0,
      grande: 16.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "pastel-de-queijo",
    name: "Pastel de Queijo",
    category: "tradicional",
    sizes: {
      pequeno: 12.0,
      grande: 16.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "pastel-de-banana",
    name: "Pastel de Banana",
    category: "tradicional",
    sizes: {
      pequeno: 12.0,
      grande: 16.0
    },
    flavors: {
      polvilhar: "Polvilhado no Açúcar e canela",
      "sem polvilhar": "Sem polvilhar no açúcar e canela"
    },
    flavorPrices: {
      "sem polvilhar": 0.0,
      polvilhar: 0.0
    },
    description: "Polvilhado com açúcar e canela",
    hasImage: false,
    acceptsObservation: true
  },

  // Especiais
  {
    id: "carne-com-bacon",
    name: "Carne com Bacon",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "carne-com-queijo",
    name: "Carne com Queijo",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "portuguesa",
    name: "Portuguesa",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    description: "Carne, ovo e azeitona",
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "calabresa",
    name: "Calabresa",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    description: "c/ tomate, orégano e Requeijão",
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "frango-com-palmito",
    name: "Frango com Palmito",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "frango-com-requeijao",
    name: "Frango com Requeijão",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "frango-com-calabresa",
    name: "Frango com Calabresa",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "frango-com-queijo",
    name: "Frango com Queijo",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "queijo-com-milho",
    name: "Queijo com Milho",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "queijo-com-bacon",
    name: "Queijo com Bacon",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "queijo-ovo-tomate-seco-oregano",
    name: "Queijo, Ovo, Tomate Seco e Orégano",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "pastel-de-pizza",
    name: "Pastel De Pizza",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    description: "Queijo, presunto, tomate e orégano",
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "palmito",
    name: "Palmito",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    description: "c/ alho Poró e Requeijão",
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "brocolis",
    name: "Brócolis",
    category: "especial",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    description: "c/ alho e tomate seco",
    hasImage: false,
    acceptsObservation: true
  },

  // Doces
  {
    id: "chocolate-preto",
    name: "Chocolate Preto",
    category: "doce",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "chocolate-branco",
    name: "Chocolate Branco",
    category: "doce",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "prestigio",
    name: "Prestígio",
    category: "doce",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    description: "Coco ralado com chocolate",
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "chocolate-preto-com-morango",
    name: "Chocolate Preto com Morango",
    category: "doce",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "chocolate-branco-com-morango",
    name: "Chocolate Branco com Morango",
    category: "doce",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "chocolate-preto-e-branco",
    name: "Chocolate Preto e Branco",
    category: "doce",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "romeu-e-julieta",
    name: "Romeu e Julieta",
    category: "doce",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    description: "Goiabada com Queijo",
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "banana-com-chocolate-preto",
    name: "Banana com Chocolate Preto",
    category: "doce",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    flavors: {
      polvilhar: "Polvilhado no Açúcar e canela",
      "sem polvilhar": "Sem polvilhar no açúcar e canela"
    },
    flavorPrices: {
      "sem polvilhar": 0.0,
      polvilhar: 0.0
    },
    description: "Polvilhado com açúcar e canela",
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "banana-com-chocolate-branco",
    name: "Banana com Chocolate Branco",
    category: "doce",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    flavors: {
      polvilhar: "Polvilhado no Açúcar e canela",
      "sem polvilhar": "Sem polvilhar no açúcar e canela"
    },
    flavorPrices: {
      "sem polvilhar": 0.0,
      polvilhar: 0.0
    },
    description: "Polvilhado com açúcar e canela",
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "banoff",
    name: "Banoff",
    category: "doce",
    sizes: {
      pequeno: 13.0,
      grande: 20.0
    },
    flavors: {
      polvilhar: "Polvilhado no Açúcar e canela",
      "sem polvilhar": "Sem polvilhar no açúcar e canela"
    },
    flavorPrices: {
      "sem polvilhar": 0.0,
      polvilhar: 0.0
    },
    description: "Banana, canela e doce de leite",
    hasImage: false,
    acceptsObservation: true
  },

  // Gourmets
  {
    id: "berbigao",
    name: "Berbigão",
    category: "gourmet",
    sizes: {
      pequeno: 15.0,
      grande: 24.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "camarao",
    name: "Camarão",
    category: "gourmet",
    sizes: {
      pequeno: 15.0,
      grande: 24.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "camarao-com-requeijao",
    name: "Camarão com Requeijão",
    category: "gourmet",
    sizes: {
      pequeno: 15.0,
      grande: 24.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "camarao-com-palmito",
    name: "Camarão com Palmito",
    category: "gourmet",
    sizes: {
      pequeno: 15.0,
      grande: 24.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "linguica-blumenau",
    name: "Linguiça Blumenau",
    category: "gourmet",
    sizes: {
      pequeno: 15.0,
      grande: 24.0
    },
    description: "C/ requeijão e vinagrete",
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "quatro-queijos",
    name: "Quatro Queijos",
    category: "gourmet",
    sizes: {
      pequeno: 15.0,
      grande: 24.0
    },
    description: "Mussarela, gorgonzola, parmesão e cheddar",
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "pacoca-de-pinhao",
    name: "Paçoca de Pinhão",
    category: "gourmet",
    sizes: {
      pequeno: 15.0,
      grande: 24.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "siri",
    name: "Siri",
    category: "gourmet",
    sizes: {
      pequeno: 15.0,
      grande: 24.0
    },
    hasImage: false,
    acceptsObservation: true
  },

  // Porções
  {
    id: "mini-pasteis-tradicionais-4un",
    name: "Mini Pasteis Tradicionais (4 un.)",
    category: "porcao",
    sizes: {
      unico: 19.0
    },
    description: "Até 2 sabores tradicionais",
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "mini-pasteis-especiais-gourmet-4un",
    name: "Mini Pasteis Especiais/Gourmet (4 un.)",
    category: "porcao",
    sizes: {
      unico: 24.0
    },
    description: "Até 2 sabores especiais ou gourmets",
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "mini-pasteis-tradicionais-8un",
    name: "Mini Pasteis Tradicionais (8 un.)",
    category: "porcao",
    sizes: {
      unico: 30.0
    },
    description: "Até 4 sabores Tradicionais",
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "mini-pasteis-especiais-gourmet-8un",
    name: "Mini Pasteis Especiais/Gourmet (8 un.)",
    category: "porcao",
    sizes: {
      unico: 37.0
    },
    description: "Até 4 sabores especiais ou gourmets",
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "bolinho-de-feijao-5un",
    name: "Bolinho de Feijão (5 un.)",
    category: "porcao",
    sizes: {
      unico: 20.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "mini-pao-de-queijo-10un",
    name: "Mini Pão de Queijo (10 un.)",
    category: "porcao",
    sizes: {
      unico: 16.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "raquete-de-frango-500g",
    name: "Raquete de Frango (500g)",
    category: "porcao",
    sizes: {
      unico: 24.0
    },
    hasImage: false,
    acceptsObservation: true
  },
  {
    id: "fritas-500g",
    name: "Fritas (500g)",
    category: "porcao",
    sizes: {
      unico: 20.0
    },
    hasImage: false,
    acceptsObservation: true
  },

  // Diferentes
  {
    id: "pastel-de-vento",
    name: "Pastel de Vento",
    category: "diferente",
    sizes: {
      pequeno: 6.0,
      grande: 8.0
    },
    description: "Pastel sem recheio",
    hasImage: true,
    image: "assets/pastel.png",
    acceptsObservation: true
  },
  {
    id: "bombom-sonho-de-valsa",
    name: "BomBom sonho de Valsa",
    category: "diferente",
    sizes: {
      unico: 3.0
    },
    description: "BomBom sonho de Valsa",
    hasImage: true,
    image: "assets/bombom.png",
    acceptsObservation: true
  },
  {
    id: "halls",
    name: "Halls",
    category: "diferente",
    basePrice: 3.0,
    flavors: {
      "extra forte": "Extra forte",
      menta: "Menta",
      cereja: "Cereja",
      melancia: "Melancia"
    },
    flavorPrices: {
      "extra forte": 0.0,
      menta: 0.0,
      cereja: 0.0,
      melancia: 0.0
    },
    description: "Halls - Extra forte, Menta, Cereja e Melancia",
    hasImage: true,
    image: "assets/halls.png",
    acceptsObservation: true
  },
  {
    id: "trident",
    name: "Trident",
    category: "diferente",
    basePrice: 3.0,
    flavors: {
      menta: "Menta",
      hortelã: "Hortelã",
      canela: "Canela",
      morango: "Morango"
    },
    flavorPrices: {
      menta: 0.0,
      hortelã: 0.0,
      canela: 0.0,
      morango: 0.0
    },
    description: "Trident - Morango, Canela, Hortelã e Menta",
    hasImage: true,
    image: "assets/trident.png",
    acceptsObservation: true
  },

  // Bebidas
  {
    id: "caldo-de-cana",
    name: "Caldo de Cana",
    category: "bebida",
    sizes: {
      "300ml": 10.0,
      "500ml": 12.0
    },
    flavors: {
      "c/ limão e gelo": "c/ Limão e Gelo",
      "c/ limão": "c/ Limão",
      "c/ gelo": "c/ Gelo"
    },
    flavorPrices: {
      "c/ limão e gelo": 0.0,
      "c/ limão": 0.0,
      "c/ gelo": 0.0
    },
    description: "Limão, Gengibre e Gelo a escolha",
    hasImage: true,
    image: "assets/caldo-de-cana.svg",
    acceptsObservation: true
  },
  {
    id: "caipirinha-de-caldo-de-cana-500ml",
    name: "Caipirinha de Caldo de Cana 500ml",
    category: "bebida",
    basePrice: 19.0,
    flavors: {
      gin: "Gin",
      wodka: "Wodka",
      cachaça: "Cachaça"
    },
    flavorPrices: {
      gin: 0.0,
      wodka: 0.0,
      cachaça: 0.0
    },
    hasImage: true,
    image: "assets/caipirinha.svg",
    acceptsObservation: true
  },
  {
    id: "agua-sem-gas",
    name: "Água s/ Gás",
    category: "bebida",
    sizes: {
      unico: 4.0
    },
    hasImage: true,
    image: "assets/agua.svg",
    acceptsObservation: false
  },
  {
    id: "agua-com-gas",
    name: "Água c/ Gás",
    category: "bebida",
    sizes: {
      unico: 4.0
    },
    hasImage: true,
    image: "assets/agua-com-gas.svg",
    acceptsObservation: false
  },
  {
    id: "coca-cola",
    name: "Coca-Cola",
    category: "bebida",
    sizes: {
      unico: 7.0
    },
    hasImage: true,
    image: "assets/coca-cola.svg",
    acceptsObservation: false
  },
  {
    id: "coca-cola-zero",
    name: "Coca-Cola Zero",
    category: "bebida",
    sizes: {
      unico: 7.0
    },
    hasImage: true,
    image: "assets/coca-cola-0.svg",
    acceptsObservation: false
  },
  {
    id: "laranjinha",
    name: "Laranjinha",
    category: "bebida",
    sizes: {
      unico: 7.0
    },
    hasImage: true,
    image: "assets/laranjinha.svg",
    acceptsObservation: false
  },
  {
    id: "fanta-laranja",
    name: "Fanta Laranja",
    category: "bebida",
    sizes: {
      unico: 7.0
    },
    hasImage: true,
    image: "assets/fanta-laranja.svg",
    acceptsObservation: false
  },
  {
    id: "guarana-zero",
    name: "Guaraná Zero",
    category: "bebida",
    sizes: {
      unico: 7.0
    },
    hasImage: true,
    image: "assets/guarana.svg",
    acceptsObservation: false
  },
  {
    id: "guarana",
    name: "Guaraná",
    category: "bebida",
    sizes: {
      unico: 7.0
    },
    hasImage: true,
    image: "assets/guarana-normal.svg",
    acceptsObservation: false
  },
  {
    id: "pepsi",
    name: "Pepsi",
    category: "bebida",
    sizes: {
      unico: 7.0
    },
    hasImage: true,
    image: "assets/pepsi.svg",
    acceptsObservation: false
  },
  {
    id: "schweppes",
    name: "Schweppes",
    category: "bebida",
    sizes: {
      unico: 7.0
    },
    hasImage: true,
    image: "assets/schweppes.svg",
    acceptsObservation: false
  },
  {
    id: "ice-tea-limao",
    name: "Ice Tea Limão",
    category: "bebida",
    sizes: {
      unico: 8.0
    },
    hasImage: true,
    image: "assets/icetea-limao.svg",
    acceptsObservation: false
  },
  {
    id: "ice-tea-pessego",
    name: "Ice Tea Pêssego",
    category: "bebida",
    sizes: {
      unico: 8.0
    },
    hasImage: true,
    image: "assets/icetea-pessego.svg",
    acceptsObservation: false
  },
  {
    id: "del-valle-pessego",
    name: "Del Valle Pêssego",
    category: "bebida",
    sizes: {
      unico: 8.0
    },
    hasImage: true,
    image: "assets/dell-pessego.svg",
    acceptsObservation: false
  },
  {
    id: "del-valle-uva",
    name: "Del Valle Uva",
    category: "bebida",
    sizes: {
      unico: 8.0
    },
    hasImage: true,
    image: "assets/dell-uva.svg",
    acceptsObservation: false
  },
  {
    id: "choco-leite",
    name: "Choco-Leite",
    category: "bebida",
    sizes: {
      unico: 8.0
    },
    hasImage: true,
    image: "assets/chocoleite.svg",
    acceptsObservation: false
  },
  {
    id: "amstel-lata",
    name: "Amstel Lata",
    category: "bebida",
    sizes: {
      unico: 8.0
    },
    hasImage: true,
    image: "assets/amstel-lata.svg",
    acceptsObservation: false
  },
  {
    id: "brahma-lata",
    name: "Brahma Lata",
    category: "bebida",
    sizes: {
      unico: 8.0
    },
    hasImage: true,
    image: "assets/brahma-lata.svg",
    acceptsObservation: false
  },
  {
    id: "amstel-long-neck",
    name: "Amstel Long Neck",
    category: "bebida",
    sizes: {
      unico: 12.0
    },
    hasImage: true,
    image: "assets/amstel-long.svg",
    acceptsObservation: false
  },
  {
    id: "amstel-ultra-long-neck",
    name: "Amstel Ultra Long Neck",
    category: "bebida",
    sizes: {
      unico: 12.0
    },
    hasImage: true,
    image: "assets/amstel-ultra-long.svg",
    acceptsObservation: false
  },
  {
    id: "budweiser-long-neck",
    name: "Budweiser Long Neck",
    category: "bebida",
    sizes: {
      unico: 12.0
    },
    hasImage: true,
    image: "assets/budweiser-long.svg",
    acceptsObservation: false
  },
  {
    id: "eisenbahn-long-neck",
    name: "Eisenbahn Long Neck",
    category: "bebida",
    sizes: {
      unico: 12.0
    },
    hasImage: true,
    image: "assets/eisenbahn-long.svg",
    acceptsObservation: false
  },
  {
    id: "heineken-long-neck",
    name: "Heineken Long Neck",
    category: "bebida",
    sizes: {
      unico: 14.0
    },
    hasImage: true,
    image: "assets/heineken-long.svg",
    acceptsObservation: false
  },
  {
    id: "heineken-long-neck-zero",
    name: "Heineken Long Neck Zero",
    category: "bebida",
    sizes: {
      unico: 14.0
    },
    hasImage: true,
    image: "assets/heineken-long-0.svg",
    acceptsObservation: false
  },
  {
    id: "michelob-long-neck",
    name: "Michelob Long Neck",
    category: "bebida",
    sizes: {
      unico: 14.0
    },
    hasImage: true,
    image: "assets/michelob-long.svg",
    acceptsObservation: false
  },
  {
    id: "sol-long-neck",
    name: "Sol Long Neck",
    category: "bebida",
    sizes: {
      unico: 12.0
    },
    hasImage: true,
    image: "assets/sol-long.svg",
    acceptsObservation: false
  },
  {
    id: "stella-long-neck",
    name: "Stella Long Neck",
    category: "bebida",
    sizes: {
      unico: 14.0
    },
    hasImage: true,
    image: "assets/stella-long.svg",
    acceptsObservation: false
  }
];

// Button to scroll to top
const btn = document.getElementById("btnTopo");

// Show/hide scroll-to-top button based on scroll position
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    btn.classList.add("show");
  } else {
    btn.classList.remove("show");
  }
});

// Smooth scroll to top when button is clicked
btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Categories configuration
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

// Global variables for state management
let holdInterval = null;
let holdTimeout = null;
const HOLD_DELAY = 150;
const HOLD_INTERVAL = 100;

let isScrollLocked = false;
let scrollPosition = 0;

// DOM elements
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

// Application state
let state = {
  cart: [],
  currentItem: null,
  selectedCategory: null,
  modalOpen: false,
  cartItemId: 0, // Contador para IDs únicos no carrinho
};

// Scroll control functions
function lockBodyScroll() {
  if (isScrollLocked) return;

  scrollPosition = window.pageYOffset;
  document.body.style.overflow = "hidden";
  document.body.style.position = "fixed";
  document.body.style.top = `-${scrollPosition}px`;
  document.body.style.width = "100%";
  isScrollLocked = true;
}

function unlockBodyScroll() {
  if (!isScrollLocked) return;

  document.body.style.overflow = "";
  document.body.style.position = "";
  document.body.style.top = "";
  document.body.style.width = "";
  window.scrollTo(0, scrollPosition);
  isScrollLocked = false;
}

function performQuantityAction(action, cartItemId = null, event = null) {
  if (cartItemId !== null) {
    const itemIndex = state.cart.findIndex(item => item.cartItemId === cartItemId);
    if (itemIndex === -1) {
      stopHold();
      return;
    }

    const item = state.cart[itemIndex];
    if (!item) {
      stopHold();
      return;
    }

    if (action === "increase") {
      if (item.quantity >= 100) {
        mostrarToast(`O item ${item.name} atingiu o limite máximo de 100 unidades!`);
        stopHold();
        return;
      }
      item.quantity += 1;
    } else if (action === "decrease") {
      // Verifica se foi um clique no ícone de lixeira
      const isTrashClick = event && 
                          event.target && 
                          event.target.classList && 
                          event.target.classList.contains('fa-trash');
      
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else if (isTrashClick) {
        // Só remove se foi um clique explícito no ícone de lixeira
        removeCartItemWithAnimation(cartItemId);
        stopHold();
        return;
      }
    }
    updateCartItem(item);
    updateCartTotal();
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
function removeCartItemWithAnimation(cartItemId) {
  const cartItem = DOM.cartItems.querySelector(`[data-id="${cartItemId}"]`);
  if (cartItem) {
    cartItem.classList.add("removing");
    cartItem.addEventListener("transitionend", () => {
      const itemIndex = state.cart.findIndex(item => item.cartItemId === cartItemId);
      if (itemIndex !== -1) {
        state.cart.splice(itemIndex, 1);
        updateCart();
        saveCart();
      }
    }, { once: true });
  }
}

function stopHold() {
  clearTimeout(holdTimeout);
  clearInterval(holdInterval);
  holdTimeout = null;
  holdInterval = null;
}

function setupQuantityControls(element, action, cartItemId = null) {
  const newElement = element.cloneNode(true);
  element.replaceWith(newElement);

  // Adicione um listener para clique simples
  newElement.addEventListener("click", (e) => {
    e.preventDefault();
    performQuantityAction(action, cartItemId, e);
  });

  const startAction = (e) => {
    e.preventDefault();
    performQuantityAction(action, cartItemId, e);
    holdTimeout = setTimeout(() => {
      holdInterval = setInterval(
        () => performQuantityAction(action, cartItemId, e),
        HOLD_INTERVAL
      );
    }, HOLD_DELAY);
  };

  newElement.addEventListener("mousedown", startAction);
  newElement.addEventListener("touchstart", startAction);

  const stopEvents = ["mouseup", "mouseleave", "touchend", "touchcancel"];
  stopEvents.forEach((event) => {
    newElement.addEventListener(event, stopHold);
  });

  return newElement;
}

// Cart management functions
function saveCart() {
  localStorage.setItem("carrinhoPastelaria", JSON.stringify(state.cart));
}

function loadCart() {
  const carrinhoSalvo = localStorage.getItem("carrinhoPastelaria");
  if (carrinhoSalvo) {
    state.cart = JSON.parse(carrinhoSalvo);
    // Garantir que cada item no carrinho tenha um ID único
    if (state.cart.length > 0 && !state.cart[0].cartItemId) {
      state.cart.forEach((item, index) => {
        item.cartItemId = `cart-${index}`;
      });
      state.cartItemId = state.cart.length;
    }
    updateCart();
  }
}

function updateCartTotal() {
  const totalPrice = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  DOM.cartTotal.textContent = `R$ ${totalPrice.toFixed(2).replace(".", ",")}`;
}

// E modificar a função updateCart para usar essa função:
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
    updateCartTotal(); // Atualiza o total mesmo quando vazio
    return;
  }

  const emptyCart = DOM.cartItems.querySelector(".empty-cart");
  if (emptyCart) {
    emptyCart.remove();
  }

  // Mapear itens existentes por ID
  const existingItemsMap = new Map();
  Array.from(DOM.cartItems.querySelectorAll(".cart-item")).forEach(item => {
    existingItemsMap.set(item.dataset.id, item);
  });

  const fragment = document.createDocumentFragment();
  let totalPrice = 0;

  state.cart.forEach((item) => {
    totalPrice += item.price * item.quantity;
    const existingItem = existingItemsMap.get(item.cartItemId);
    
    if (!existingItem) {
      const cartItem = createCartItem(item);
      fragment.appendChild(cartItem);
    } else {
      updateCartItem(item);
    }
  });

  // Remover itens que não estão mais no carrinho
  const currentCartIds = new Set(state.cart.map(item => item.cartItemId));
  existingItemsMap.forEach((item, id) => {
    if (!currentCartIds.has(id)) {
      item.classList.add("removing");
      item.addEventListener("transitionend", () => item.remove(), { once: true });
    }
  });

  if (fragment.childNodes.length > 0) {
    DOM.cartItems.appendChild(fragment);
  }

 updateCartTotal();
}

function updateCartItem(item) {
  const cartItem = DOM.cartItems.querySelector(`[data-id="${item.cartItemId}"]`);
  if (!cartItem) return;

  const itemPrice = item.price * item.quantity;
  const priceElement = cartItem.querySelector(".cart-item-price");
  const quantityValue = cartItem.querySelector(".cart-item-quantity-value");
  const decreaseBtn = cartItem.querySelector(".quantity-btn");

  priceElement.textContent = `R$ ${itemPrice.toFixed(2).replace(".", ",")}`;
  quantityValue.textContent = item.quantity;

  const newClass = `quantity-btn ${item.quantity === 1 ? "remove" : ""}`;
  if (decreaseBtn.className !== newClass) {
    decreaseBtn.className = newClass;
    decreaseBtn.innerHTML = `<i class="fas ${item.quantity === 1 ? "fa-trash" : "fa-minus"}"></i>`;
    
    // Reconfigura os controles
    const increaseBtn = cartItem.querySelectorAll(".quantity-btn")[1];
    setupQuantityControls(decreaseBtn, "decrease", item.cartItemId);
    setupQuantityControls(increaseBtn, "increase", item.cartItemId);
  }
  
  updateCartTotal(); // Adicionado para atualizar o total quando um item é modificado
}

function createCartItem(item) {
  const cartItem = document.createElement("div");
  cartItem.className = "cart-item";
  cartItem.dataset.id = item.cartItemId;

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
        <button class="quantity-btn ${item.quantity === 1 ? "remove" : ""}">
          <i class="fas ${item.quantity === 1 ? "fa-trash" : "fa-minus"}"></i>
        </button>
        <span class="cart-item-quantity-value">${item.quantity}</span>
        <button class="quantity-btn">
          <i class="fas fa-plus"></i>
        </button>
      </div>
    </div>
  `;

  const decreaseBtn = cartItem.querySelectorAll(".quantity-btn")[0];
  const increaseBtn = cartItem.querySelectorAll(".quantity-btn")[1];

  setupQuantityControls(decreaseBtn, "decrease", item.cartItemId);
  setupQuantityControls(increaseBtn, "increase", item.cartItemId);

  setTimeout(() => {
    cartItem.classList.add("slide-up");
  }, 10);

  return cartItem;
}

// Menu display functions
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

    const descriptionHTML = item.description
      ? `<div class="menu-item-description">${item.description}</div>`
      : "";

    if (item.hasImage) {
      menuItemHTML = `
        <div class="menu-item-image">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="menu-item-content">
          <h3 class="menu-item-title">${item.name}</h3>
          ${descriptionHTML}
          <div class="menu-item-prices">
          ${generateSizesHTML(item.sizes, item)}
          </div>
          <button class="add-to-cart-btn" data-id="${item.id}">
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
          <button class="add-to-cart-btn" data-id="${item.id}">
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

// Cart item handling functions
function handleAddToCart(item) {
  if (state.modalOpen) return;
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
  lockBodyScroll();
  state.modalOpen = true;

  DOM.sizeSelect.value = "";
  DOM.flavorSelect.value = "";
  DOM.notesTextarea.value = "";
  DOM.quantityValue.textContent = "1";

  DOM.sizeSelect.style.display = "none";
  DOM.flavorSelect.style.display = "none";

  if (state.currentItem.flavors) {
    DOM.flavorSelect.style.display = "flex";
    DOM.flavorSelect.innerHTML = '<option value="">Selecione um sabor</option>';

    const flavors = state.currentItem.flavors;
    for (const [flavorKey, flavorName] of Object.entries(flavors)) {
      DOM.flavorSelect.innerHTML += `<option value="${flavorKey}">${flavorName}</option>`;
    }
  }

  if (state.currentItem.sizes && Object.keys(state.currentItem.sizes).length > 0) {
    DOM.sizeSelect.style.display = "flex";
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
  DOM.observationModal.style.display = "flex";
  DOM.overlay.style.display = "flex";

  setTimeout(() => {
    DOM.observationModal.classList.add("open");
    DOM.overlay.classList.add("open");
  }, 10);

  DOM.increaseQty = setupQuantityControls(DOM.increaseQty, "increase");
  DOM.decreaseQty = setupQuantityControls(DOM.decreaseQty, "decrease");
}

function closeObservationModal() {
  DOM.observationModal.classList.remove("open");
  DOM.overlay.classList.remove("open");

  setTimeout(() => {
    DOM.observationModal.style.display = "none";
    DOM.overlay.style.display = "none";

    state.modalOpen = false;
    state.currentItem = null;

    unlockBodyScroll();
  }, 300);
}

function addToCart(itemData) {
  const {
    id,
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
    if (selectedFlavor && flavorPrices && flavorPrices[selectedFlavor] !== undefined) {
      price += flavorPrices[selectedFlavor];
    }
  } else if (sizes && Object.keys(sizes).length > 0) {
    price = sizes[Object.keys(sizes)[0]];
  }

  // Gerar um ID único para o item no carrinho
  const cartItemId = `cart-${state.cartItemId++}`;
  
  const existingItemIndex = state.cart.findIndex(
    (item) =>
      item.id === id &&
      item.selectedSize === selectedSize &&
      item.selectedFlavor === selectedFlavor &&
      item.notes === notes
  );

  if (existingItemIndex !== -1) {
    const newQuantity = state.cart[existingItemIndex].quantity + quantity;
    if (newQuantity > 100) {
      mostrarToast(`O item ${name} atingiu a quantidade máxima de 100 unidades!`);
      return;
    }
    state.cart[existingItemIndex].quantity = newQuantity;
  } else {
    state.cart.push({
      ...itemData,
      cartItemId,
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

// Event listeners setup
function setupEventListeners() {
  DOM.cartBtn.addEventListener("click", () => {
    if (state.modalOpen) return;
    state.modalOpen = true;
    DOM.cartModal.style.display = "flex";
    DOM.overlay.style.display = "flex";
    lockBodyScroll();
    setTimeout(() => {
      DOM.cartModal.classList.add("open");
      DOM.overlay.classList.add("open");
    }, 10);
  });

  DOM.closeCart.addEventListener("click", () => {
    DOM.cartModal.classList.remove("open");
    DOM.overlay.classList.remove("open");
    setTimeout(() => {
      DOM.cartModal.style.display = "none";
      DOM.overlay.style.display = "none";
      state.modalOpen = false;
      unlockBodyScroll();
    }, 300);
  });

  DOM.closeObservation.addEventListener("click", closeObservationModal);

  DOM.overlay.addEventListener("click", () => {
    DOM.cartModal.classList.remove("open");
    DOM.observationModal.classList.remove("open");
    DOM.overlay.classList.remove("open");
    setTimeout(() => {
      DOM.cartModal.style.display = "none";
      DOM.observationModal.style.display = "none";
      DOM.overlay.style.display = "none";
      state.modalOpen = false;
      unlockBodyScroll();
    }, 300);
  });

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

// Notification function
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

// WhatsApp order function
function sendWhatsAppOrder() {
  const phoneNumber = "47996870409";
  let message = "🍟 *Olá Pastelaria Berbigão!* 🍔\n";
  message += "Gostaria de fazer o seguinte pedido:\n\n";
  message += "════════════════════════\n\n";

  let totalPrice = 0;

  state.cart.forEach((item) => {
    let options = [];

    if (item.selectedSize && item.selectedSize !== "unico") {
      const sizeMap = {
        pequeno: "P",
        grande: "G",
        "300ml": "300ml",
        "500ml": "500ml",
      };
      options.push(`*${sizeMap[item.selectedSize] || item.selectedSize}*`);
    }

    if (item.selectedFlavor) {
      const flavor = item.flavors
        ? item.flavors[item.selectedFlavor]
        : item.selectedFlavor;
      options.push(flavor);
    }

    const itemPrice = item.price * item.quantity;
    totalPrice += itemPrice;

    message += `➤ *${item.quantity}x ${item.name}*`;

    if (options.length > 0) {
      message += ` (${options.join(" - ")})`;
    }

    if (item.notes) {
      message += `\n   ✏ *Obs:* ${item.notes} \n`;
    }

    message += "\n";
  });

  message += "\n════════════════════════\n";
  message += `💰 *TOTAL: R$ ${totalPrice.toFixed(2).replace(".", ",")}*\n\n`;
  message += "Por favor, poderiam confirmar este pedido e me informar:\n";
  message += "As formas de pagamento disponíveis\n\n";
  message += "Muito obrigado!";

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
}

// Initialization function
function init() {
  // Adiciona estilos CSS dinamicamente para as animações
  const style = document.createElement("style");
  style.textContent = `
    .cart-item {
      transition: all 0.3s ease;
      opacity: 1;
      transform: translateY(0);
    }
    .cart-item.removing {
      opacity: 0;
      transform: translateY(-20px);
      height: 0;
      padding-top: 0;
      padding-bottom: 0;
      margin-top: 0;
      margin-bottom: 0;
      overflow: hidden;
    }
    .cart-item.slide-up {
      animation: slideUp 0.3s ease forwards;
    }
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);

  setTimeout(() => {
    DOM.loadingScreen.style.display = "none";
  }, 500);

  loadCategories();
  loadMenuItems();
  setupEventListeners();
  loadCart();
  updateCart();

  DOM.increaseQty = setupQuantityControls(DOM.increaseQty, "increase");
  DOM.decreaseQty = setupQuantityControls(DOM.decreaseQty, "decrease");

  document.addEventListener("mouseup", () => {
    [DOM.increaseQty, DOM.decreaseQty].forEach((btn) => {
      btn.blur();
      btn.style.transform = "none";
      btn.style.boxShadow = "none";
    });
  });

  document.addEventListener("touchend", () => {
    [DOM.increaseQty, DOM.decreaseQty].forEach((btn) => {
      btn.blur();
      btn.style.transform = "none";
      btn.style.boxShadow = "none";
    });
  });
}

// Start the application when DOM is loaded
document.addEventListener("DOMContentLoaded", init);
