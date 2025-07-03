import React, {
  createContext,
} from "react";


export interface MyContextType {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


export const SlideContext = createContext<MyContextType | undefined>(undefined);


