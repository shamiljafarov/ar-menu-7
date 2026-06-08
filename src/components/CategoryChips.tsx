import type { Category } from '../types/dish';

interface Props {
  categories: Category[];
  activeId: string;
  onChange: (id: string) => void;
}

export default function CategoryChips({ categories, activeId, onChange }: Props) {  
  return (
    <nav className="flex gap-2 overflow-x-auto no-scrollbar -mx-6 px-6 py-4 sticky top-0 z-40 bg-background/90 backdrop-blur-sm">
      {categories.map((cat) => {
        const isActive = cat.id === activeId;
        return (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`whitespace-nowrap px-6 py-2 rounded-full font-sans text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
              isActive
                ? 'bg-primary-container text-on-primary-container'
                : 'border border-muted/20 text-muted hover:border-primary'
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </nav>
  );
}