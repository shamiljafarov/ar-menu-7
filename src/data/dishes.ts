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
];
