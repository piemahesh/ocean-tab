import { Moon, Sun } from "lucide-react";
import { useSlide } from "../../../utils";
import { motion } from "framer-motion";

export const ThemeSwitcher = () => {
  const { isDark, toggleTheme } = useSlide();
  const handleTheme = () => {
    setTimeout(() => {
      toggleTheme();
    }, 500);
  };

  return (
    <motion.button
      onClick={handleTheme}
      className={`fixed top-4 right-4 z-50 p-3 rounded-full border-2 transition-all duration-75 ${
        isDark
          ? "bg-gray-800/90 border-cyan-500/50 text-cyan-400 hover:bg-gray-700/90 hover:border-cyan-400 shadow-lg shadow-cyan-500/20"
          : "bg-white/90 border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-500 shadow-lg shadow-blue-500/20"
      } backdrop-blur-sm`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? <Sun size={24} /> : <Moon size={24} />}
      </motion.div>
    </motion.button>
  );
};
