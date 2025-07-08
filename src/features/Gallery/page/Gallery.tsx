import React, { useState } from "react";
import type { Image } from "../types";
import { CategoryButton, ImageCard, ImageModal } from "../component";
import { OCEAN_GALLERY_DATA } from "../constant";
import { Header } from "../../shared";
import { useSlide } from "../../../utils";

export const Gallery: React.FC = () => {
  const { setIsModalOpen } = useSlide();
  const [activeCategory, setActiveCategory] =
    useState<string>("SFM APP Launch");
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCategoryChange = (category: string): void => {
    setIsLoading(true);
    setTimeout(() => {
      setActiveCategory(category);
      setIsLoading(false);
    }, 300);
  };

  const allImages: Image[] = OCEAN_GALLERY_DATA[activeCategory];

  const handleImageSelect = (image: Image): void => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleModalClose = (): void => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <Header heading="Gallery" />
      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {Object.entries(OCEAN_GALLERY_DATA).map(
            ([category, images], index) => (
              <div
                key={category}
                className="animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CategoryButton
                  category={category}
                  isActive={activeCategory === category}
                  onClick={() => handleCategoryChange(category)}
                  count={images.length}
                />
              </div>
            )
          )}
        </div>

        {/* Gallery Grid */}
        <div className="relative " key={activeCategory}>
          {isLoading && (
            <div
              key={activeCategory}
              className="absolute inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-10 rounded-2xl"
            >
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          )}

          <div
            key={activeCategory}
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 transition-opacity duration-300 ${
              isLoading ? "opacity-50" : "opacity-100"
            }`}
          >
            {allImages.map((image, index) => (
              <ImageCard
                key={`${activeCategory}-${index}`}
                image={image}
                index={index}
                onClick={() => handleImageSelect(image)}
              />
            ))}
          </div>

          {allImages.length === 0 && !isLoading && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg">
                No projects found matching your search.
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <ImageModal
          selectedImage={selectedImage}
          allImages={allImages}
          onClose={handleModalClose}
          onSelect={handleImageSelect}
        />
      )}
    </div>
  );
};
