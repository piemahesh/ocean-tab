import { useState, type ReactNode } from "react";
import { SlideContext } from "./SlideContext";

interface MyProviderProps {
    children: ReactNode;
}

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
    const [value, setValue] = useState<number>(0);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false); // ✅ new state

    return (
        <SlideContext.Provider
            value={{ value, setValue, isModalOpen, setIsModalOpen }} // ✅ provide modal state
        >
            {children}
        </SlideContext.Provider>
    );
};

