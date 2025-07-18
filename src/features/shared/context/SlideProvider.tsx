import { useState, type ReactNode } from "react";
import { SlideContext } from "./SlideContext";

interface MyProviderProps {
  children: ReactNode;
}

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [value, setValue] = useState<number>(0);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // ✅ new state

  return (
    <SlideContext.Provider
      value={{
        value,
        setValue,
        isModalOpen,
        setIsModalOpen,
        isDark,
        toggleTheme,
      }} // ✅ provide modal state
    >
      {children}
    </SlideContext.Provider>
  );
};
