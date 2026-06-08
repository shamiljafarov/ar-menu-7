import { DISHES } from './dishes';
import { CATEGORIES } from './categories';
import type { Dish, Category } from '../types/dish';

export function getCategories(): Category[] {
  return [...CATEGORIES].sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
}

export function getDishes(): Dish[] {
  return DISHES.filter(d => d.available !== false);
}

export function getDishesByCategory(categoryId: string): Dish[] {
  return getDishes().filter(d => d.categoryId === categoryId);
}

export function getDishById(id?: string): Dish | undefined {
  return DISHES.find(d => d.id === id);
}