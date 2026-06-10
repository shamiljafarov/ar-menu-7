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
  categoryId: 'starters',   
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
{
  id: 'tort',
  name: 'Çiyələkli tort',
  description: 'Təbəqəli, çiyələkli tort.', 
  price: 8,
  currency: '₼',
  categoryId: 'starters',       
  image: '/images/tort.jpg',
  model: {
    glb: '/models/tort.glb',
    usdz: '/models/tort.usdz',
    poster: '/images/tort.jpg',
  },
  // video: '/videos/tort.mp4',     // videosu varsa aç, yoxdursa bu sətri sil
  ingredients: [],
  available: true,
  featured: false,
},
];
