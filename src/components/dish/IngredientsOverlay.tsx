import { ArrowLeft } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export default function IngredientsOverlay({
  open,
  video,
  onClose,
}: {
  open: boolean;
  video: string;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
          {/* poster yoxdur -> əvvəlcədən şəkil çıxmır; qaranlıqdan hamar açılır.
              loop yoxdur -> bir dəfə oynayıb dayanır */}
          <video
            src={video}
            autoPlay
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover"
          />

          {/* yuxarı solda geri — bir basışla menyuya qayıdır */}
          <button
            onClick={onClose}
            aria-label="Geri"
            className="absolute top-6 left-6 z-10 flex h-11 w-11 items-center justify-center rounded-full
                       bg-black/40 backdrop-blur-md border border-white/15 text-white
                       transition active:scale-90 hover:bg-black/60"
          >
            <ArrowLeft size={22} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
