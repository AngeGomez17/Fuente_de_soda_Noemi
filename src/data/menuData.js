export const menuData = [
  // CATEGORY: PROMOCIONES
  {
    id: 1,
    nombre: "Dúo Hamburguesas Clásicas",
    precio: 8.00,
    descripcion: "Llevate dos deliciosas hamburguesas clásicas por solo S/ 8.00. ¡Los primeros 6 pedidos del día se llevan una Coca-Cola o Inca Kola Junior GRATIS!",
    imagen: "/comida/Duo_burger.png",
    categoria: "promociones",
    popular: true
  },
  {
    id: 2,
    nombre: "Doble Alita Broaster",
    precio: 14.00,
    descripcion: "Porción doble de alitas broaster crocantes servidas con una generosa porción de papas fritas y todas nuestras cremas caseras.",
    imagen: "/comida/Doble_alita.png",
    categoria: "promociones",
    popular: false
  },
  {
    id: 3,
    nombre: "Trío Burger (3ra a Mitad de Precio)",
    precio: 12.50,
    descripcion: "Compra 2 hamburguesas clásicas y llévate la tercera a mitad de precio (descuento ya aplicado en esta oferta).",
    imagen: "/comida/Trio_burger.png",
    categoria: "promociones",
    popular: true
  },

  // CATEGORY: HAMBURGUESAS
  {
    id: 4,
    nombre: "Hamburguesa Clásica",
    precio: 5.00,
    descripcion: "Carne jugosa con papas fritas o al hilo (al gusto), con ensalada si desea y cremas caseras.",
    imagen: "/comida/Burger_clasica.png",
    categoria: "hamburguesas",
    popular: false
  },
  {
    id: 5,
    nombre: "Hamburguesa Royal",
    precio: 8.00,
    descripcion: "Nuestra clásica hamburguesa potenciada con jamón, queso cheddar fundido y huevo frito de yema perfecta.",
    imagen: "/comida/Royale_burger.png",
    categoria: "hamburguesas",
    popular: true
  },
  {
    id: 6,
    nombre: "Hamburguesa Casera Especial",
    precio: 10.00,
    descripcion: "Exquisita carne de la casa con doble porción de queso, lechuga, tomate fresco, servida con papas fritas o al hilo (al gusto del cliente) y cremas.",
    imagen: "/comida/Burger_casera.png",
    categoria: "hamburguesas",
    popular: false
  },

  // CATEGORY: BROASTER
  {
    id: 7,
    nombre: "Pierna Broaster",
    precio: 9.00,
    descripcion: "Jugosa pierna de pollo con un empanizado extra crujiente, papas fritas calientes, ensalada y cremas.",
    imagen: "/comida/Pierna_broaster.png",
    categoria: "broaster",
    popular: false
  },
  {
    id: 8,
    nombre: "Alita Broaster",
    precio: 9.00,
    descripcion: "Deliciosas y crocantes alitas de pollo broaster servidas con papas fritas crocantes y ensalada fresca.",
    imagen: "/comida/Alita_broaster.png",
    categoria: "broaster",
    popular: false
  },
  {
    id: 9,
    nombre: "Encuentro Broaster",
    precio: 13.00,
    descripcion: "Contundente pieza de encuentro broaster dorada a la perfección, servida con crujientes papas fritas y ensalada.",
    imagen: "/comida/Encuentro_broaster.png",
    categoria: "broaster",
    popular: true
  },
  {
    id: 10,
    nombre: "Pecho Broaster",
    precio: 15.00,
    descripcion: "La porción más grande y suculenta de pollo broaster con una cubierta super crujiente, servida con papas y cremas.",
    imagen: "/comida/Pecho_broaster.png",
    categoria: "broaster",
    popular: false
  },

  // CATEGORY: SALCHIPAPAS
  {
    id: 11,
    nombre: "Salchipapa Clásica",
    precio: 7.00,
    descripcion: "Papas fritas crujientes con rodajas de hot dog de primera calidad y toda la variedad de cremas caseras.",
    imagen: "/comida/Salchipapa.png",
    categoria: "salchipapas",
    popular: false
  },
  {
    id: 12,
    nombre: "Salchipollo",
    precio: 12.00,
    descripcion: "Fusión espectacular de papas fritas crujientes con deliciosos trozos de pollo broaster y cremas.",
    imagen: "/comida/Salchipollo.png",
    categoria: "salchipapas",
    popular: true
  },
  {
    id: 13,
    nombre: "Salchi Salvaje",
    precio: 15.00,
    descripcion: "Salchipapa gigante con chorizo parrillero, hot dog, huevo frito, plátano frito y jugosos trozos de pollo broaster.",
    imagen: "/comida/Salchi_salvaje.png",
    categoria: "salchipapas",
    popular: false
  },
  // CATEGORY: JUGOS
  {
    id: 14,
    nombre: "Jugo de Fresa",
    precio: 10.00,
    descripcion: "Refrescante jugo natural elaborado con fresas seleccionadas licuadas al momento.",
    imagen: "/jugos/fresa.png",
    categoria: "jugos",
    popular: false
  },
  {
    id: 15,
    nombre: "Jugo de Fresa con Leche",
    precio: 12.00,
    descripcion: "Clásica y cremosa combinación de fresas frescas con leche evaporada de primera calidad.",
    imagen: "/jugos/fresa_con_leche.png",
    categoria: "jugos",
    popular: true
  },
  {
    id: 16,
    nombre: "Jugo de Piña",
    precio: 9.00,
    descripcion: "Jugo refrescante de piña dorada y dulce, 100% natural y lleno de energía.",
    imagen: "/jugos/Piña.png",
    categoria: "jugos",
    popular: false
  },
  {
    id: 17,
    nombre: "Jugo de Papaya",
    precio: 9.00,
    descripcion: "Nutritivo y digestivo jugo natural de papaya madura seleccionada.",
    imagen: "/jugos/Papaya.png",
    categoria: "jugos",
    popular: false
  },
  {
    id: 18,
    nombre: "Jugo Surtido",
    precio: 10.00,
    descripcion: "La mezcla perfecta de frutas de la estación (papaya, piña, plátano, fresa) licuadas juntas con el toque de la casa.",
    imagen: "/jugos/jugo-surtido.png",
    categoria: "jugos",
    popular: true
  }
];

export const CATEGORIES = [
  { id: "todos", name: "Todos" },
  { id: "promociones", name: "Promociones 🔥" },
  { id: "broaster", name: "Pollo Broaster" },
  { id: "hamburguesas", name: "Hamburguesas" },
  { id: "salchipapas", name: "Salchipapas" },
  { id: "jugos", name: "Jugos 🍹" }
];
