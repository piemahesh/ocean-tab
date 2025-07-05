import { useEffect, useState } from "react";
import type { ImageModalProps } from "../types";
import { createPortal } from "react-dom";

export const ImageModal: React.FC<ImageModalProps> = ({
  selectedImage,
  allImages,
  onClose,
  onSelect,
}) => {
  const [animating, setAnimating] = useState<boolean>(true);
  const currentIndex: number = allImages.findIndex(
    (img) => img.src === selectedImage.src
  );

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    setTimeout(() => setAnimating(false), 300);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  const nextImage = (): void => {
    const nextIndex = (currentIndex + 1) % allImages.length;
    onSelect(allImages[nextIndex]);
  };

  const prevImage = (): void => {
    const prevIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    onSelect(allImages[prevIndex]);
  };

  const handleKeyDown = (e: KeyboardEvent): void => {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") onClose();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return createPortal(
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div
        className={`relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden transition-all duration-500 ${
          animating ? "scale-50 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:bg-white hover:text-gray-800 transition-colors duration-200"
        >
          ×
        </button>

        {/* Navigation buttons */}
        <button
          onClick={prevImage}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:bg-white hover:text-gray-800 transition-colors duration-200"
        >
          ←
        </button>
        <button
          onClick={nextImage}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-gray-600 hover:bg-white hover:text-gray-800 transition-colors duration-200"
        >
          →
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Image */}
          <div className="relative bg-gray-100 flex items-center justify-center min-h-[400px]">
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Content */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                {selectedImage.title}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {selectedImage.subtitle}
              </p>

              {/* Image counter */}
              <div className="text-sm text-gray-500 mb-6">
                {currentIndex + 1} of {allImages.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {allImages
                .slice(Math.max(0, currentIndex - 2), currentIndex + 3)
                .map((img, i) => {
                  const actualIndex = Math.max(0, currentIndex - 2) + i;
                  return (
                    <img
                      key={actualIndex}
                      src={img.src}
                      onClick={() => onSelect(img)}
                      className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 transition-all duration-200 ${
                        img.src === selectedImage.src
                          ? "border-blue-500 scale-110"
                          : "border-transparent hover:border-gray-300"
                      }`}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};
