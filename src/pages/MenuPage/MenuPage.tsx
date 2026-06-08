import { useState } from 'react';
import { getCategories, getDishesByCategory } from '../../data';
import CategoryChips from '../../components/CategoryChips';
import DishCard from '../../components/DishCard';

export default function MenuPage() {
  const categories = getCategories();
  const [activeId, setActiveId] = useState(categories[0].id);
  const dishes = getDishesByCategory(activeId);

  return (
    <section className="bg-background min-h-screen px-6 pt-10 pb-32">
      <header className="mb-4">
        <h1 className="font-display text-[2rem] leading-tight font-semibold tracking-tight text-primary mb-1">Menu</h1>
        <p className="font-display italic text-base text-muted">A symphony of seasonal flavors</p>
      </header>

      <CategoryChips categories={categories} activeId={activeId} onChange={setActiveId} />

      <div className="space-y-16 mt-4">
        {dishes.map((dish) => <DishCard key={dish.id} dish={dish} />)}
      </div>
    </section>
  );
}