import { Layers } from 'lucide-react';
import '@google/model-viewer';

// model-viewer yalnız AR üçündür (görünmür) — activateAR() ref ilə çağırılır
const ModelViewer = 'model-viewer' as any;

export default function DishStage({
  model,
  image,
  alt,
  onIngredients,
  mvRef,
}: {
  model?: { glb: string; usdz?: string; poster?: string };
  image: string;
  alt: string;
  onIngredients?: () => void;
  mvRef?: React.Ref<HTMLElement>;
}) {
  return (
    <section className="relative aspect-4/5 w-full overflow-hidden bg-surface">
      {/* AR üçün model — şəklin altında, görünmür, sadəcə yüklənir ki, AR açıla bilsin */}
      {model && (
        <ModelViewer
          ref={mvRef}
          src={model.glb}
          ios-src={model.usdz}
          poster={model.poster ?? image}
          alt={alt}
          ar
          ar-modes="webxr scene-viewer quick-look"
          ar-scale="auto"
          ar-placement="floor"
          loading="eager"
          reveal="auto"
          shadow-intensity="1"
          environment-image="neutral"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', backgroundColor: 'transparent' }}
        />
      )}

      {/* Statik şəkil — üstdə, modeli tam örtür */}
      <img src={image} alt={alt} className="absolute inset-0 w-full h-full object-cover" />

      {/* yuxarıdan qaranlıq keçid */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-60" />

      {/* AR View nişanı */}
      <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full
                      bg-surface/80 backdrop-blur-md border border-primary/20">
        <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_2px_rgba(176,141,79,.6)]" />
        <span className="font-sans text-[10px] font-semibold uppercase tracking-wide text-primary">AR View</span>
      </div>

      {/* Tərkibə bax düyməsi -> video */}
      <button
        onClick={onIngredients}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-6 py-2 rounded-full
                   bg-surface/60 backdrop-blur-xl border border-outline/10
                   font-sans text-[10px] font-semibold uppercase tracking-wide
                   text-on-surface hover:text-primary transition-colors active:scale-95">
        <Layers size={13} />
        Tərkibə bax
      </button>
    </section>
  );
}
