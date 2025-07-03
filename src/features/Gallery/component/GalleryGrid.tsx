import React, { useState, useRef } from "react";
import { ImageModal } from "./ImageModal";

type Image = {
    src: string;
    alt?: string;
    title: string;
    subtitle: string
};

type GalleryGridProps = {
    images: Image[];
};

export const GalleryGrid: React.FC<GalleryGridProps> = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState<Image | null>(null);
    const [originRect, setOriginRect] = useState<DOMRect | null>(null);

    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

    const handleImageClick = (image: Image, index: number) => {
        const imgEl = imageRefs.current[index];
        if (imgEl) {
            setOriginRect(imgEl.getBoundingClientRect());
        }
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setOriginRect(null);
    };

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {images.map((image, index) => (
                    <div
                        onClick={() => handleImageClick(image, index)}
                        key={index}
                        className="relative h-full w-full border border-gray-400 overflow-hidden rounded-xl group"
                    >
                        <img
                            ref={(el) => {
                                imageRefs.current[index] = el;
                            }}
                            src={image.src}
                            alt={image.alt || `Image ${index + 1}`}
                            className="object-cover object-top w-full h-96 rounded-xl transform group-hover:scale-105 transition-transform duration-300 ease-in-out shadow cursor-pointer"
                        />
                    </div>
                ))}
            </div>

            {selectedImage && originRect && (
                <ImageModal
                    selectedImage={selectedImage}
                    allImages={images}
                    originRect={originRect}
                    onClose={closeModal}
                    onSelect={(img) => setSelectedImage(img)}
                />
            )}
        </>
    );
};
