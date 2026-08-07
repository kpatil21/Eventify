import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

export default function BaseModal({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  size = "max-w-2xl",
}) {
  // Close modal on ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"></div>

      {/* Modal */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          relative
          w-full
          ${size}
          rounded-3xl
          overflow-hidden
          border
          border-white/10
          backdrop-blur-2xl
          shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          animate-fadeIn
        `}
        style={{
          backgroundColor: "rgba(68, 68, 78, 0.82)",
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 transition hover:bg-white/10 hover:text-[#D4AF37]"
        >
          <FaTimes size={18} />
        </button>

        {/* Header */}
        {(title || subtitle) && (
          <div className="border-b border-white/10 px-8 py-7 pr-20">
            {title && (
              <h2 className="text-3xl font-bold text-white">{title}</h2>
            )}

            {subtitle && (
              <p className="mt-2 text-sm text-gray-400">{subtitle}</p>
            )}
          </div>
        )}

        {/* Body */}
        <div className="max-h-[80vh] overflow-y-auto p-8">
          {children}
        </div>
      </div>
    </div>
  );
}