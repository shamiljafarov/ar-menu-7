import { Box } from 'lucide-react';

export default function ARButton({ onClick }: { onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-center gap-3 py-5 rounded-lg
                 bg-linear-to-r from-primary-container to-[#775921]
                 shadow-[0_8px_32px_rgba(176,141,79,0.2)]
                 transition-all hover:brightness-110 active:scale-[0.98]">
      <Box size={20} className="text-on-primary-container" />
      <span className="font-sans text-[11px] font-semibold uppercase tracking-wider text-on-primary-container">
        AR-da bax — masanıza qoyun
      </span>
    </button>
  );
}
