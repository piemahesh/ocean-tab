import { BANNER, CSS_ICON, C_ICON, C_PLUS_ICON, DART_ICON, DJANGO_ICON, EXPRESS_ICON, FIGMA_ICON, FLUTTER_ICON, FRONTEND_ICON } from "../../../assets";
import { Header } from "../../shared";
import { GalleryGrid } from "../component";

export const Gallery = () => {
  const images = [
    { src: BANNER, alt: "angluar", title: "Techfest 2025", subtitle: "It's an awesome event showcasing the future of technology." },
    { src: CSS_ICON, alt: "css", title: "CSS Mastery", subtitle: "Design visually stunning interfaces with style and grace." },
    { src: C_ICON, alt: "c", title: "C Programming", subtitle: "Learn the backbone of all modern languages." },
    { src: C_PLUS_ICON, alt: "c_plus", title: "C++ Power", subtitle: "Dive into object-oriented coding and system-level programming." },
    { src: BANNER, alt: "angluar", title: "Tech Talk Angular", subtitle: "Modern web apps with robust architecture." },
    { src: DART_ICON, alt: "dart", title: "Dart Essentials", subtitle: "The language behind Flutter — optimized for UI." },
    { src: DJANGO_ICON, alt: "django", title: "Django Web Dev", subtitle: "Rapid web development with Python’s top framework." },
    { src: EXPRESS_ICON, alt: "express", title: "Express.js", subtitle: "Build fast and minimal backend APIs with Node.js." },
    { src: BANNER, alt: "angluar", title: "Angular Summit", subtitle: "Scalable, reactive, and enterprise-grade web development." },
    { src: FIGMA_ICON, alt: "figma", title: "Figma Design", subtitle: "Collaborative UI/UX design in the browser." },
    { src: FLUTTER_ICON, alt: "flutter", title: "Flutter Bootcamp", subtitle: "Build native mobile apps for iOS and Android." },
    { src: FRONTEND_ICON, alt: "frontend", title: "Frontend Wizardry", subtitle: "Bring websites to life with HTML, CSS, and JS." },
  ]
  return (
    <section className="relative">
      <Header heading="Gallery" />
      {/* <div className="absolute h-full w-full bg-black/35 backdrop-blur-xs"></div> */}
      <GalleryGrid images={images} />
    </section>
  );
};
