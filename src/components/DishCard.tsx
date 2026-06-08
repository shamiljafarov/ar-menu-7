import { Link } from 'react-router-dom';
import type { Dish } from '../types/dish';
import { formatPrice } from '../lib/format';

export default function DishCard({ dish }: { dish: Dish }) {
  return (
    <article className="group bg-surface rounded-xl overflow-hidden">
      <Link to={`/dish/${dish.id}`}>
        <div className="aspect-square overflow-hidden relative">
          <img src={dish.image} alt={dish.name}
               className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          <span className="absolute top-4 right-4 flex items-center gap-2 rounded-full px-3 py-1 bg-background/60 backdrop-blur-md border border-muted/20 text-xs font-sans text-on-surface">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container" /> 3D · AR
          </span>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-baseline">
            <h3 className="font-display text-xl text-on-surface">{dish.name}</h3>
            <span className="text-primary text-sm font-sans">{formatPrice(dish.price, dish.currency)}</span>
          </div>
          <p className="text-sm text-muted/80 mt-1">{dish.description}</p>
        </div>
      </Link>
    </article>
  );
}