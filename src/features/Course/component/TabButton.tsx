import type { FC } from "react";
import type { CourseOptions } from "../page";

interface TabButtonProps {
  id: string;
  label: string;
  icon: FC<{ size?: number }>;
  activeTab: string | number;
  setActiveTab: (id: CourseOptions) => void;
}

export const TabButton: FC<TabButtonProps> = ({
  id,
  label,
  icon: Icon,
  activeTab,
  setActiveTab,
}) => {
  return (
    <button
      onClick={() => setActiveTab(id)}
      className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
        activeTab === id
          ? "bg-grad bg-gradient-to-tr opacity-80 text-white shadow-lg"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      <Icon size={18} />
      {label}
    </button>
  );
};
