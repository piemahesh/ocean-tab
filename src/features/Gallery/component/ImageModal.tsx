import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSlide } from "../../../utils";

type Image = {
    src: string;
    alt?: string;
    title: string;
    subtitle: string
};

type ModalProps = {
    selectedImage: Image;
    allImages: Image[];
    originRect: DOMRect;
    onClose: () => void;
    onSelect: (img: Image) => void;
};

export const ImageModal: React.FC<ModalProps> = ({
    selectedImage,
    allImages,
    originRect,
    onClose,
    onSelect,

}) => {
    const [animating, setAnimating] = useState(true);
    const { setIsModalOpen } = useSlide()
    // 🚫 Disable scroll on open, restore on close
    useEffect(() => {
        document.body.classList.add("overflow-hidden");
        setIsModalOpen(true)
        return () => {
            setIsModalOpen(false);
            document.body.classList.remove("overflow-hidden");
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        setTimeout(() => setAnimating(false), 300);
    }, []);

    return createPortal(
        <div
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md flex flex-col items-center justify-center px-4"
            onClick={onClose}
        >
            <div
                className="relative"
                style={{
                    width: animating ? originRect.width : "80vw",
                    height: animating ? originRect.height : "60vh",
                    transform: animating
                        ? `translate(${originRect.left}px, ${originRect.top}px)`
                        : `translate(0, 0)`,
                    transition: "all 300ms ease-in-out",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="h-full flex gap-2 w-full items-center justify-start p-4 bg-white/10 rounded-md">
                    <div className="min-w-1/2 max-w-1/2 h-full">
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="w-full h-full object-contain rounded-lg"
                        />
                    </div>
                    <div className=" w-full h-full max-w-full">
                        <h1 className=" bg-gradient-to-r from-white via-primary to-pink-500 text-transparent h-14 bg-clip-text text-4xl font-semibold ">{selectedImage.title}</h1>
                        <p className="mt-3 text-white indent-2.5 text-justify">
                            {selectedImage.subtitle}
                        </p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="absolute top-0 right-0 text-gray-600 text-3xl p-2"
                >
                    ×
                </button>
            </div>

            {/* Thumbnails */}
            <div
                className="mt-6 flex gap-2 w-full overflow-x-scroll border-white rounded-md border p-2 justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                {allImages.map((img, i) => (
                    <img
                        key={i}
                        src={img.src}
                        onClick={() => onSelect(img)}
                        className={`w-20 h-20 object-contain rounded-md cursor-pointer border-2 ${img.src === selectedImage.src
                            ? "border-white p-2"
                            : "border-transparent"
                            }`}
                    />
                ))}
            </div>
        </div>,
        document.body
    );
};
