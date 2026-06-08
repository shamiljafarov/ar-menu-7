export interface Category {
  id: string;        // 'starters'
  label: string;     // 'Starters'
  order?: number;
}

export interface Ingredient {
  name: string; quantity: string; color: string;
  emoji?: string; percent?: number;
}

export interface DishModel { glb: string; usdz?: string; poster?: string; }

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  currency?: string;
  categoryId: string;        // Category.id-yə istinad
  image: string;
  model?: DishModel;
  video?: string;            // 'Tərkibə bax' videosu          // 3D/AR mərhələsində dolur
  ingredients: Ingredient[];
  nutrition?: { kcal?: number; protein?: string; prepTime?: string };
  allergens?: string[];
  available?: boolean;
  featured?: boolean;
}