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
      className="w-full h-full  overflow-hidden relative bg-white"
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
