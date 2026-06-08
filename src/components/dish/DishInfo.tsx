import type { Dish } from '../../types/dish';
import { formatPrice } from '../../lib/format';

export default function DishInfo({ dish }: { dish: Dish }) {
  return (
    <section className="px-6 mt-10">
      <div className="flex justify-between items-baseline gap-3 mb-2">
        <h2 className="font-display text-[32px] leading-tight font-semibold text-on-surface">
          {dish.name}
        </h2>
        <span className="font-display text-2xl text-primary shrink-0">
          {formatPrice(dish.price, dish.currency)}
        </span>
      </div>
      <p className="font-sans text-base italic leading-relaxed text-muted/90">
        {dish.description}
      </p>
    </section>
  );
}