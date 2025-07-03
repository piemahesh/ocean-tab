// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { useState, useRef, type TouchEvent } from "react";
// import { useMyContext } from "../context";
// import { Home } from "../../Home";
// import { Course } from "../../Course";
// import { Gallery } from "../../Gallery";
// import { Mentor } from "../../Mentor";
// import { About } from "../../About";

// export const MyCarousel: React.FC = () => {
//   const { value } = useMyContext();
//   const [slideIndex, setSlideIndex] = useState<number>(value);
//   const touchStartX = useRef<number | null>(null);

//   const handleTouchStart = (e: TouchEvent<HTMLElement>) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = (e: TouchEvent<HTMLElement>) => {
//     if (touchStartX.current === null) return;
//     const touchEndX = e.changedTouches[0].clientX;
//     const deltaX = touchEndX - touchStartX.current;
//     const threshold = window.innerWidth * 0.5;

//     if (Math.abs(deltaX) > threshold) {
//       if (deltaX > 0) {
//         setSlideIndex((prev) => (prev - 1 + 5) % 5);
//       } else {
//         setSlideIndex((prev) => (prev + 1) % 5);
//       }
//     }

//     touchStartX.current = null;
//   };

//   return (
//     <section
//       className="custom-carousel w-full"
//       onTouchStart={handleTouchStart}
//       onTouchEnd={handleTouchEnd}
//     >
//       <Carousel
//         infiniteLoop={true}
//         swipeable={false}
//         showThumbs={false}
//         selectedItem={slideIndex}
//         onChange={(index: number) => setSlideIndex(index)}
//       >
//         {slideIndex === 0 && <Home />}
//         {slideIndex === 1 && <Course />}
//         {slideIndex === 2 && <Gallery />}
//         {slideIndex === 3 && <Mentor />}
//         {slideIndex === 4 && <About />}
//       </Carousel>
//     </section>
//   );
// };
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useEffect, useRef, useState, type TouchEvent } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export const MyCarousel: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const touchStartX = useRef<number | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  }, [pathname]);
  const pathToIndex = (pathname: string): number => {
    if (pathname === "/") return 0;
    if (pathname === "/course") return 1;
    if (pathname === "/gallery") return 2;
    if (pathname === "/mentor") return 3;
    if (pathname === "/about") return 4;
    return 0;
  };

  const indexToPath = (index: number): string => {
    switch (index) {
      case 0:
        return "/";
      case 1:
        return "/course";
      case 2:
        return "/gallery";
      case 3:
        return "/mentor";
      case 4:
        return "/about";
      default:
        return "/";
    }
  };

  const [slideIndex, setSlideIndex] = useState<number>(
    pathToIndex(location.pathname)
  );

  useEffect(() => {
    setSlideIndex(pathToIndex(location.pathname));
  }, [location.pathname]);

  const handleSlideChange = (index: number) => {
    setSlideIndex(index);
    navigate(indexToPath(index));
  };

  const handleTouchStart = (e: TouchEvent<HTMLElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLElement>) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchEndX - touchStartX.current;
    const threshold = window.innerWidth * 0.25;

    let newIndex = slideIndex;
    if (Math.abs(deltaX) > threshold) {
      if (deltaX > 0) {
        newIndex = (slideIndex - 1 + 5) % 5;
      } else {
        newIndex = (slideIndex + 1) % 5;
      }
      handleSlideChange(newIndex);
    }

    touchStartX.current = null;
  };

  return (
    <section
      className="custom-carousel w-full"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Carousel
        infiniteLoop
        swipeable={false}
        showThumbs={false}
        selectedItem={slideIndex}
        onChange={handleSlideChange}
      >
        <div>
          <Outlet context={{ index: 0 }} />
        </div>
        <div>
          <Outlet context={{ index: 1 }} />
        </div>
        <div>
          <Outlet context={{ index: 2 }} />
        </div>
        <div>
          <Outlet context={{ index: 3 }} />
        </div>
        <div>
          <Outlet context={{ index: 4 }} />
        </div>
      </Carousel>
    </section>
  );
};
