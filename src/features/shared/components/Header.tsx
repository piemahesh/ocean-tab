import React from "react";
import { motion } from "framer-motion";

// Define the props interface
interface HeaderProps {
  heading: string;
}

export const Header: React.FC<HeaderProps> = ({ heading }) => {
  return (
    <header className="relative w-full flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.1, rotate: 60 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-primary text-3xl font-bold">{heading}</h1>
      </motion.div>
    </header>
  );
};
