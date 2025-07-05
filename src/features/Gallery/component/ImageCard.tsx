import { useState } from "react";
import type { ImageCardProps } from "../types";

export const ImageCard: React.FC<ImageCardProps> = ({
  image,
  index,
  onClick,
}) => {
  const [loaded, setLoaded] = useState<boolean>(false);

  return (
    <div
      onClick={onClick}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
        loaded ? "animate-fadeInUp" : "opacity-0"
      }`}
      style={{
        animationDelay: `${index * 50}ms`,
        animationFillMode: "forwards",
      }}
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <img
          src={image.src}
          alt={image.alt}
          onLoad={() => setLoaded(true)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-bold text-lg mb-1">{image.title}</h3>
          <p className="text-sm opacity-90 line-clamp-2">{image.subtitle}</p>
        </div>

        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      </div>
    </div>
  );
};
