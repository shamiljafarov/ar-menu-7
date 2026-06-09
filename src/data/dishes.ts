import type { Dish } from '../types/dish';

export const DISHES: Dish[] = [
  {
    id: 'dushbere',
    name: 'Düşbərə',
    description: 'Ətli xırda xəngəl, sirkə və sarımsaqla verilən ənənəvi Azərbaycan şorbası.',
    price: 9,
    currency: '₼',
    categoryId: 'starters',
    image: '/images/dushbere.jpg',
    model: {
      glb: '/models/dushbere.glb',
      usdz: '/models/dushbere.usdz',
      poster: '/images/dushbere.jpg',
    },
    video: '/videos/dushbere.mp4',
    ingredients: [],
    available: true,
    featured: true,
  },
  {
  id: 'burger',
  name: 'Burger',
  description: 'Mal əti kotleti, çeddar, marul və pomidor.',
  price: 13,
  currency: '₼',
  categoryId: 'mains',   
  image: '/images/burger.jpg',
  model: {
    glb: '/models/burger.glb',
    usdz: '/models/burger.usdz',
    poster: '/images/burger.jpg',
  },
  video: '/videos/burger.mp4',
  ingredients: [],
  available: true,
  featured: false,
},
];
