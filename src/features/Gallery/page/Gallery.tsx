import { Header } from "../../shared";
import { GalleryImgs } from "../component";

export const Gallery = () => {
  return (
    <section className="relative">
      <Header heading="Gallery" />
      <div className="absolute h-full w-full bg-black/35 backdrop-blur-xs"></div>
      <GalleryImgs />
    </section>
  );
};
