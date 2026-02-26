import { X } from 'lucide-react';

interface ImageLightboxProps {
  open: boolean;
  imageUrl?: string;
  imageAlt?: string;
  onClose: () => void;
}

export function ImageLightbox({ open, imageUrl, imageAlt, onClose }: ImageLightboxProps) {
  if (!open || !imageUrl) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
        aria-label="Tutup foto"
      >
        <X size={20} />
      </button>

      <img
        src={imageUrl}
        alt={imageAlt ?? 'Preview foto'}
        className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}
