import { useState } from "react";
import { useSlide } from "../../../utils";
import { ImageModal, PhotoThumbnail } from "../components";
import { useNavigate, useParams } from "react-router-dom";
import { OCEAN_ALBUMS } from "../constant";
import { Header } from "../../shared";
import { ArrowLeft } from "lucide-react";

export const SpecificAlbum = () => {
  const navigate = useNavigate();
  const { setIsModalOpen } = useSlide();
  const { albumId } = useParams();

  const selectedAlbum = OCEAN_ALBUMS.find((album) => album.id == albumId);

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
    setIsModalOpen(false);
  };

  const handleBackToAlbums = () => {
    setSelectedImageIndex(null);
    navigate(-1);
  };

  if (!albumId) {
    return;
  }

  return (
    <section>
      <Header heading={selectedAlbum?.title || "Album"} />
      <button
        onClick={handleBackToAlbums}
        className="inline-flex absolute z-30 left-2.5 top-4 items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-secondary to-tertiary text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
      >
        <ArrowLeft size={18} />
        <span>Go Back</span>
      </button>
      <div className="grid grid-cols-2 p-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {selectedAlbum?.images.map((image, index) => (
          <PhotoThumbnail
            key={index}
            image={image}
            index={index}
            onClick={() => handleImageClick(index)}
            isActive={selectedImageIndex === index}
          />
        ))}
      </div>
      {selectedAlbum && selectedImageIndex !== null && (
        <ImageModal
          images={selectedAlbum.images}
          currentIndex={selectedImageIndex}
          onClose={handleCloseModal}
          onNavigate={setSelectedImageIndex}
        />
      )}
    </section>
  );
};
