import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const GoToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 3000);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <button
        onClick={scrollToTop}
        className="relative p-4 rounded-full bg-gradient-to-br from-tertiary to-secondary shadow-2xl text-white transition-all duration-300 hover:scale-110 hover:-rotate-12 animate-bounce"
        aria-label="Scroll to top"
      >
        {/* Glow ring */}
        <span className="absolute inset-0 rounded-full bg-white opacity-10 blur-xl animate-pulse"></span>

        {/* Icon */}
        <ArrowUp className="relative z-10 w-6 h-6" />
      </button>

      {/* Tooltip */}
      <div className="absolute w-full right-14 top-1/4 -translate-y-1/2 bg-black/50 backdrop-filter-xl text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
        Go to Top
      </div>
    </div>
  );
};
