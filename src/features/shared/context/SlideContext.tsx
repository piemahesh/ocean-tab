import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

// Define the shape of the context
interface MyContextType {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

// Create the context with default undefined, to enforce use within Provider
const MyContext = createContext<MyContextType | undefined>(undefined);

// Define provider props type
interface MyProviderProps {
  children: ReactNode;
}

export const MyProvider: React.FC<MyProviderProps> = ({ children }) => {
  const [value, setValue] = useState<number>(0);

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

// Custom hook to use the context safely
export const useMyContext = (): MyContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};
