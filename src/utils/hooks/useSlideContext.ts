import { useContext } from "react";
import { SlideContext, type MyContextType } from "../../features";

// Custom hook
export const useSlide = (): MyContextType => {
    const context = useContext(SlideContext);
    if (!context) {
        throw new Error("useMyContext must be used within a MyProvider");
    }
    return context;
};
