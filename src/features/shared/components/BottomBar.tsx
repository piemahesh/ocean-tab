// import { motion } from "framer-motion";
// import { Home, BookOpen, Image, Users, Info } from "lucide-react";

// export const BottomNavBar = ({
//   activeIndex = 0,
//   onSelect,
// }: {
//   activeIndex: number;
//   onSelect: (i: number) => void;
// }) => {
//   const navItems = [
//     { icon: Home, label: "Home" },
//     { icon: BookOpen, label: "Courses" },
//     { icon: Image, label: "Gallery" },
//     { icon: Users, label: "Mentors" },
//     { icon: Info, label: "About" },
//   ];

//   return (
//     <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-[400px] z-50">
//       <div className="relative bg-white shadow-xl rounded-full h-16 flex items-center justify-between px-6">
//         {/* Moving Ball Indicator */}
//         <motion.div
//           className="absolute top-0 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-md"
//           animate={{
//             x: `calc(${activeIndex} * 20px + ${activeIndex} * 100px + 24px)`,
//           }}
//           transition={{ type: "spring", stiffness: 300, damping: 30 }}
//         />

//         {navItems.map((item, i) => {
//           const Icon = item.icon;
//           return (
//             <button
//               key={i}
//               onClick={() => onSelect(i)}
//               className={`flex flex-col items-center gap-1 w-1/5 transition-all duration-200 ${
//                 activeIndex === i ? "text-blue-600" : "text-gray-400"
//               }`}
//             >
//               <Icon className="w-6 h-6" />
//               <span className="text-[10px]">{item.label}</span>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
// import { motion } from "framer-motion";
// import { Home, BookOpen, Image, Users, Info } from "lucide-react";

// export const BottomNavBar = ({
//   activeIndex = 0,
//   onSelect,
// }: {
//   activeIndex: number;
//   onSelect: (i: number) => void;
// }) => {
//   const navItems = [
//     { icon: Home, label: "Home" },
//     { icon: BookOpen, label: "Courses" },
//     { icon: Image, label: "Gallery" },
//     { icon: Users, label: "Mentors" },
//     { icon: Info, label: "About" },
//   ];

//   const ballSize = 40;
//   const gap = 6; // px padding on sides
//   const fullWidth = 400;
//   const slotWidth = fullWidth / navItems.length;

//   return (
//     <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-[400px] z-50">
//       <div className="relative bg-white shadow-xl rounded-full h-16 flex items-center justify-between px-6">
//         {/* Moving Ball Behind Active Icon */}
//         <motion.div
//           className="absolute top-1/2 left-0 z-0 w-10 h-10 bg-blue-100 rounded-full -translate-y-1/2"
//           style={{ width: ballSize, height: ballSize }}
//           animate={{
//             x: slotWidth * activeIndex + gap,
//           }}
//           transition={{ type: "spring", stiffness: 300, damping: 25 }}
//         />

//         {navItems.map((item, i) => {
//           const Icon = item.icon;
//           const isActive = activeIndex === i;

//           return (
//             <button
//               key={i}
//               onClick={() => onSelect(i)}
//               className="relative w-1/5 flex flex-col items-center justify-center z-10"
//             >
//               <Icon
//                 className={`w-6 h-6 transition-colors duration-200 ${
//                   isActive ? "text-blue-600" : "text-gray-400"
//                 }`}
//               />
//               <span
//                 className={`text-[10px] font-medium ${
//                   isActive ? "text-blue-600" : "text-gray-400"
//                 }`}
//               >
//                 {item.label}
//               </span>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
import { motion } from "framer-motion";
import { Home, BookOpen, Image, Users, Info } from "lucide-react";

export const BottomNavBar = ({
  activeIndex = 0,
  onSelect,
}: {
  activeIndex: number;
  onSelect: (i: number) => void;
}) => {
  const navItems = [
    { icon: Home, label: "Home" },
    { icon: BookOpen, label: "Courses" },
    { icon: Image, label: "Gallery" },
    { icon: Users, label: "Mentors" },
    { icon: Info, label: "About" },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-[400px] z-50">
      <div className="relative bg-white shadow-xl rounded-full h-16 flex items-center justify-between px-4">
        {navItems.map((item, i) => {
          const Icon = item.icon;
          const isActive = i === activeIndex;

          return (
            <button
              key={i}
              onClick={() => onSelect(i)}
              className="relative flex flex-col items-center justify-center w-full h-full"
            >
              {/* Animated background circle behind icon */}
              {isActive && (
                <motion.div
                  layoutId="nav-ball"
                  className="absolute w-12 h-12 rounded-full bg-blue-100"
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                />
              )}
              <Icon
                className={`w-6 h-6 z-10 ${
                  isActive ? "text-blue-600" : "text-gray-400"
                }`}
              />
              <span
                className={`text-[10px] font-medium z-10 ${
                  isActive ? "text-blue-600" : "text-gray-400"
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
