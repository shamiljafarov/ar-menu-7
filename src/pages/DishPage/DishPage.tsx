import { useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDishById } from '../../data';
import DishTopBar from '../../components/dish/DishTopBar';
import DishStage from '../../components/dish/DishStage';
import ARButton from '../../components/dish/ARButton';
import DishInfo from '../../components/dish/DishInfo';
import IngredientsOverlay from '../../components/dish/IngredientsOverlay';

export default function DishPage() {
  const { id } = useParams();
  const dish = getDishById(id);
  const mvRef = useRef<HTMLElement | null>(null);
  const [showIngredients, setShowIngredients] = useState(false);

  if (!dish) {
    return (
      <div className="bg-background min-h-screen flex flex-col items-center justify-center gap-4 text-center">
        <p className="text-muted">Yemək tapılmadı.</p>
        <Link to="/" className="text-primary underline">Menyuya qayıt</Link>
      </div>
    );
  }

  const launchAR = () => {
    const mv = mvRef.current as (HTMLElement & { activateAR?: () => void }) | null;
    mv?.activateAR?.();
  };

  return (
    <main className="bg-background min-h-screen pb-24">
      <DishTopBar title={dish.name} />
      <div className="pt-16 max-w-md mx-auto">
        <DishStage
          model={dish.model}
          image={dish.image}
          alt={dish.name}
          onIngredients={() => setShowIngredients(true)}
          mvRef={mvRef}
        />
        <div className="px-6 mt-4">
          <ARButton onClick={launchAR} />
        </div>
        <DishInfo dish={dish} />
      </div>

      {dish.video && (
        <IngredientsOverlay
          open={showIngredients}
          video={dish.video}
          onClose={() => setShowIngredients(false)}
        />
      )}
    </main>
  );
}
