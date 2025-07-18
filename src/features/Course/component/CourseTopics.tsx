import { type FC } from "react";
import { motion } from "framer-motion";
import { useSlide } from "../../../utils";

interface CourseTopicProps {
  title: string;
  topics?: string[];
}
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};
export const CourseTopics: FC<CourseTopicProps> = ({ title, topics }) => {
  const { isDark } = useSlide();

  // Theme-aware colors
  const darkColors = [
    "bg-cyan-500/20 text-cyan-300 border-cyan-500/30 shadow-cyan-500/20",
    "bg-emerald-500/20 text-emerald-300 border-emerald-500/30 shadow-emerald-500/20",
    "bg-purple-500/20 text-purple-300 border-purple-500/30 shadow-purple-500/20",
    "bg-orange-500/20 text-orange-300 border-orange-500/30 shadow-orange-500/20",
    "bg-teal-500/20 text-teal-300 border-teal-500/30 shadow-teal-500/20",
    "bg-pink-500/20 text-pink-300 border-pink-500/30 shadow-pink-500/20",
    "bg-indigo-500/20 text-indigo-300 border-indigo-500/30 shadow-indigo-500/20",
    "bg-amber-500/20 text-amber-300 border-amber-500/30 shadow-amber-500/20",
  ];

  const lightColors = [
    "bg-blue-100 text-blue-800 border-blue-300 shadow-blue-500/20",
    "bg-green-100 text-green-800 border-green-300 shadow-green-500/20",
    "bg-purple-100 text-purple-800 border-purple-300 shadow-purple-500/20",
    "bg-orange-100 text-orange-800 border-orange-300 shadow-orange-500/20",
    "bg-teal-100 text-teal-800 border-teal-300 shadow-teal-500/20",
    "bg-pink-100 text-pink-800 border-pink-300 shadow-pink-500/20",
    "bg-indigo-100 text-indigo-800 border-indigo-300 shadow-indigo-500/20",
    "bg-amber-100 text-amber-800 border-amber-300 shadow-amber-500/20",
  ];

  const colors = isDark ? darkColors : lightColors;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`w-full rounded-2xl p-6 max-sm:p-4 border shadow-lg backdrop-blur-sm transition-all duration-300 ${
        isDark
          ? "bg-gray-800/90 border-cyan-500/30 shadow-cyan-500/10"
          : "bg-white/90 border-blue-300 shadow-blue-500/10"
      }`}
    >
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className={`text-2xl font-bold mb-8 ${
          isDark
            ? "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
            : "text-blue-800"
        }`}
      >
        {title}
      </motion.h3>

      {/* Topics List */}
      <motion.div className="space-y-4">
        {topics?.map((topic, i) => (
          <motion.div
            key={topic + i}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 cursor-pointer group border shadow-md ${
              isDark
                ? "bg-gray-700/50 hover:bg-gray-700/80 border-gray-600/50 hover:border-cyan-500/50 hover:shadow-cyan-500/20"
                : "bg-gray-50 hover:bg-blue-50 border-gray-200 hover:border-blue-300 hover:shadow-blue-500/20"
            }`}
          >
            {/* Animated Color Indicator */}
            <motion.div
              initial={{ scale: 0, opacity: 0.1 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
                type: "spring",
                stiffness: 200,
              }}
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 ${
                colors[i % colors.length]
              } group-hover:scale-110 transition-all duration-300 shadow-lg`}
            >
              {i + 1}
            </motion.div>

            {/* Topic Text */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className={`text-lg font-medium flex-grow transition-colors duration-300 leading-relaxed ${
                isDark
                  ? "text-gray-200 group-hover:text-white"
                  : "text-gray-700 group-hover:text-gray-900"
              }`}
            >
              {topic}
            </motion.span>

            {/* Accent line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "4px" }}
              transition={{ delay: i * 0.1 + 0.4, duration: 0.5 }}
              className={`h-8 rounded-full ${
                colors[i % colors.length].split(" ")[0]
              } group-hover:h-10 transition-all duration-300`}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom accent */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className={`mt-6 h-1 rounded-full shadow-lg ${
          isDark
            ? "bg-gradient-to-r from-cyan-500 to-purple-500 shadow-cyan-500/50"
            : "bg-gradient-to-r from-blue-500 to-purple-500 shadow-blue-500/50"
        }`}
      />
    </motion.div>
  );
};
// import { type FC } from "react";
// import { motion } from "framer-motion";

// interface CourseTopicProps {
//   title: string;
//   topics?: string[];
// }

// export const CourseTopics: FC<CourseTopicProps> = ({ title, topics }) => {
//   // Light theme color palette
//   const colors = [
//     "bg-blue-100 text-blue-600",
//     "bg-emerald-100 text-emerald-600",
//     "bg-purple-100 text-purple-600",
//     "bg-orange-100 text-orange-600",
//     "bg-teal-100 text-teal-600",
//     "bg-pink-100 text-pink-600",
//     "bg-indigo-100 text-indigo-600",
//     "bg-amber-100 text-amber-600",
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.4 },
//     },
//   };

//   return (
//     <motion.div
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       className="bg-white w-full rounded-2xl p-4 max-sm:p-2 border border-gray-100"
//     >
//       {/* Title */}
//       <motion.h3
//         initial={{ opacity: 0, y: -10 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.2 }}
//         className="text-xl font-bold text-gray-700 mb-6"
//       >
//         {title}
//       </motion.h3>

//       {/* Topics List */}
//       <motion.div className="space-y-3">
//         {topics?.map((topic, i) => (
//           <motion.div
//             key={topic + i}
//             variants={itemVariants}
//             whileHover={{
//               scale: 1.02,
//               transition: { duration: 0.2 },
//             }}
//             whileTap={{ scale: 0.98 }}
//             className="flex items-center space-x-4 p-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 cursor-pointer group"
//           >
//             {/* Animated Color Indicator */}
//             <motion.div
//               initial={{ scale: 0, opacity: 0.1 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{
//                 duration: 0.8,
//                 delay: i * 0.1,
//                 type: "spring",
//                 stiffness: 200,
//               }}
//               className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
//                 colors[i % colors.length]
//               } group-hover:scale-110 transition-transform duration-200`}
//             >
//               {i + 1}
//             </motion.div>

//             {/* Topic Text */}
//             <motion.span
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: i * 0.1 + 0.2 }}
//               className="text-gray-700 text-lg font-medium flex-grow group-hover:text-gray-900 transition-colors duration-200"
//             >
//               {topic}
//             </motion.span>
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// };
// export const CourseTopics: FC<SyllabusData> = ({ title, topics }) => {
//   return (
//     <div className="w-full bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
//       <div className="flex justify-between items-start mb-3">
//         <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
//       </div>
//       <div className="space-y-2">
//         <p className="text-gray-700 font-medium">Topics covered:</p>
//         <ul className="list-disc list-inside text-gray-600 space-y-1">
//           {topics?.map((topic, index) => (
//             <li key={index}>{topic}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };
