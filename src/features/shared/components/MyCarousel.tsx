// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { useEffect, useRef, useState, type TouchEvent } from "react";
// import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import { useSlide } from "../../../utils";

// export const MyCarousel: React.FC = () => {
//   const { isModalOpen } = useSlide(); // ← access modal status
//   const location = useLocation();
//   const navigate = useNavigate();
//   const touchStartX = useRef<number | null>(null);
//   // const { pathname } = useLocation();

//   // useEffect(() => {
//   //   // Scroll to top on route change
//   //   setTimeout(() => {
//   //     window.scrollTo(0, 0);
//   //   }, 100);
//   // }, [pathname]);
//   const pathToIndex = (pathname: string): number => {
//     if (pathname === "/") return 0;
//     if (pathname === "/course") return 1;
//     if (pathname === "/gallery") return 2;
//     if (pathname === "/mentor") return 3;
//     if (pathname === "/about") return 4;
//     return 0;
//   };

//   const indexToPath = (index: number): string => {
//     switch (index) {
//       case 0:
//         return "/";
//       case 1:
//         return "/course";
//       case 2:
//         return "/gallery";
//       case 3:
//         return "/mentor";
//       case 4:
//         return "/about";
//       default:
//         return "/";
//     }
//   };

//   const [slideIndex, setSlideIndex] = useState<number>(
//     pathToIndex(location.pathname)
//   );

//   useEffect(() => {
//     setSlideIndex(pathToIndex(location.pathname));
//   }, [location.pathname]);

//   const handleSlideChange = (index: number) => {
//     setSlideIndex(index);
//     navigate(indexToPath(index));
//   };

//   const handleTouchStart = (e: TouchEvent<HTMLElement>) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = (e: TouchEvent<HTMLElement>) => {
//     if (isModalOpen) return;
//     if (touchStartX.current === null) return;
//     const touchEndX = e.changedTouches[0].clientX;
//     const deltaX = touchEndX - touchStartX.current;
//     const threshold = window.innerWidth * 0.25;

//     let newIndex = slideIndex;
//     if (Math.abs(deltaX) > threshold) {
//       if (deltaX > 0) {
//         newIndex = (slideIndex - 1 + 5) % 5;
//       } else {
//         newIndex = (slideIndex + 1) % 5;
//       }
//       handleSlideChange(newIndex);
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
//         infiniteLoop
//         swipeable={false}
//         showThumbs={false}
//         selectedItem={slideIndex}
//         onChange={handleSlideChange}
//       >
//         <div>
//           <Outlet context={{ index: 0 }} />
//         </div>
//         <div>
//           <Outlet context={{ index: 1 }} />
//         </div>
//         <div>
//           <Outlet context={{ index: 2 }} />
//         </div>
//         <div>
//           <Outlet context={{ index: 3 }} />
//         </div>
//         <div>
//           <Outlet context={{ index: 4 }} />
//         </div>
//       </Carousel>
//     </section>
//   );
// };
// import { useEffect, useState } from "react";
// import { useSwipeable } from "react-swipeable";
// import { motion, AnimatePresence } from "framer-motion";
// import { Outlet, useLocation, useNavigate } from "react-router-dom";
// import { useSlide } from "../../../utils";

// const pathList = ["/", "/course", "/gallery", "/mentor", "/about"];

// const pathToIndex = (pathname: string): number => {
//   const index = pathList.indexOf(pathname);
//   return index >= 0 ? index : 0;
// };

// const indexToPath = (index: number): string => {
//   return pathList[index] || "/";
// };

// export const MyCarousel: React.FC = () => {
//   const { isModalOpen } = useSlide();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [index, setIndex] = useState(pathToIndex(location.pathname));
//   const [direction, setDirection] = useState(0);
//   const [currentPath, setCurrentPath] = useState(location.pathname);

//   useEffect(() => {
//     const newIndex = pathToIndex(location.pathname);
//     setDirection(newIndex > index ? 1 : -1);
//     setIndex(newIndex);
//     setCurrentPath(location.pathname);
//   }, [location.pathname]);

//   const handleChangeIndex = (newIndex: number) => {
//     if (newIndex < 0 || newIndex >= pathList.length) return;
//     const newPath = indexToPath(newIndex);
//     if (newPath !== location.pathname) {
//       navigate(newPath);
//     }
//   };

//   const swipeHandlers = useSwipeable({
//     onSwipedLeft: () => {
//       if (!isModalOpen) handleChangeIndex(index + 1);
//     },
//     onSwipedRight: () => {
//       if (!isModalOpen) handleChangeIndex(index - 1);
//     },
//     preventDefaultTouchmoveEvent: true,
//     trackTouch: true,
//   });

//   const variants = {
//     enter: (dir: number) => ({
//       x: dir > 0 ? 300 : -300,
//       opacity: 0,
//       position: "absolute",
//       width: "100%",
//       height: "100%",
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//       position: "relative",
//       width: "100%",
//       height: "100%",
//     },
//     exit: (dir: number) => ({
//       x: dir > 0 ? -300 : 300,
//       opacity: 0,
//       position: "absolute",
//       width: "100%",
//       height: "100%",
//     }),
//   };

//   return (
//     <section
//       className="w-full h-full overflow-hidden relative bg-white"
//       {...swipeHandlers}
//     >
//       <AnimatePresence custom={direction} mode="wait">
//         <motion.div
//           key={currentPath} // ensures animation plays on route change
//           custom={direction}
//           variants={variants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{ duration: 0.3 }}
//           className="w-full h-full"
//         >
//           <Outlet />
//         </motion.div>
//       </AnimatePresence>
//     </section>
//   );
// };
import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useSlide } from "../../../utils";
import { BottomNavBar } from "./BottomBar";

const pathList = ["/", "/course", "/gallery", "/mentor", "/about"];

const pathToIndex = (pathname: string): number => {
  const index = pathList.indexOf(pathname);
  return index >= 0 ? index : 0;
};

const indexToPath = (index: number): string => {
  return pathList[index % pathList.length];
};

export const MyCarousel: React.FC = () => {
  const { isModalOpen } = useSlide();
  const location = useLocation();
  const navigate = useNavigate();
  const [index, setIndex] = useState(pathToIndex(location.pathname));
  const [direction, setDirection] = useState(0);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  useEffect(() => {
    const newIndex = pathToIndex(location.pathname);
    setDirection(newIndex > index ? 1 : -1);
    setIndex(newIndex);
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  const handleChangeIndex = (newIndex: number) => {
    const loopedIndex = (newIndex + pathList.length) % pathList.length;
    navigate(indexToPath(loopedIndex));
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (!isModalOpen) handleChangeIndex(index + 1);
    },
    onSwipedRight: () => {
      if (!isModalOpen) handleChangeIndex(index - 1);
    },
    trackTouch: true,
    trackMouse: false,
    preventScrollOnSwipe: true,
  });

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
      width: "100%",
      height: "100%",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
      width: "100%",
      height: "100%",
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      position: "absolute",
      width: "100%",
      height: "100%",
    }),
  };

  return (
    <section
      className="w-full h-full overflow-hidden relative bg-white"
      {...swipeHandlers}
    >
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentPath}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.3 }}
          className="w-full h-full"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>

      <BottomNavBar
        activeIndex={index}
        onSelect={(i) => handleChangeIndex(i)}
      />
    </section>
  );
};
