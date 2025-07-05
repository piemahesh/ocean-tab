import type { CategoryButtonProps } from "../types";

export const CategoryButton: React.FC<CategoryButtonProps> = ({
  category,
  isActive,
  onClick,
  count,
}) => (
  <button
    onClick={onClick}
    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
      isActive
        ? "bg-gradient-to-br from-secondary via-10%  to-primary  text-white shadow-lg shadow-blue-500/25"
        : "bg-white/80 text-gray-700 hover:bg-white/90 shadow-md hover:shadow-lg"
    } backdrop-blur-sm border border-white/20`}
  >
    {category} ({count})
  </button>
);
