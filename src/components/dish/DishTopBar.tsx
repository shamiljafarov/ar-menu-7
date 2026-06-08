import { ArrowLeft, Share2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function DishTopBar({ title }: { title: string }) {
  const navigate = useNavigate();
  return (
    <header className="fixed top-0 left-0 w-full z-50 h-16 flex items-center justify-between px-6
                       bg-background/80 backdrop-blur-md border-b border-outline/20">
      <button onClick={() => navigate(-1)} aria-label="Geri"
              className="text-primary transition-transform hover:scale-110 active:scale-95">
        <ArrowLeft size={22} />
      </button>
      <h1 className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-on-surface truncate px-2">
        {title}
      </h1>
      <button aria-label="Paylaş"
              className="text-primary transition-transform hover:scale-110 active:scale-95">
        <Share2 size={20} />
      </button>
    </header>
  );
}