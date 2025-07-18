import { type FC } from "react";
import { motion } from "framer-motion";

interface CourseTopicProps {
  title: string;
  topics?: string[];
}

export const CourseTopics: FC<CourseTopicProps> = ({ title, topics }) => {
  // Light theme color palette
  const colors = [
    "bg-blue-100 text-blue-600",
    "bg-emerald-100 text-emerald-600",
    "bg-purple-100 text-purple-600",
    "bg-orange-100 text-orange-600",
    "bg-teal-100 text-teal-600",
    "bg-pink-100 text-pink-600",
    "bg-indigo-100 text-indigo-600",
    "bg-amber-100 text-amber-600",
  ];

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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="bg-white w-full rounded-2xl p-4 max-sm:p-2 border border-gray-100"
    >
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="text-xl font-bold text-gray-700 mb-6"
      >
        {title}
      </motion.h3>

      {/* Topics List */}
      <motion.div className="space-y-3">
        {topics?.map((topic, i) => (
          <motion.div
            key={topic + i}
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center space-x-4 p-2 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-200 cursor-pointer group"
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
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                colors[i % colors.length]
              } group-hover:scale-110 transition-transform duration-200`}
            >
              {i + 1}
            </motion.div>

            {/* Topic Text */}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 + 0.2 }}
              className="text-gray-700 text-lg font-medium flex-grow group-hover:text-gray-900 transition-colors duration-200"
            >
              {topic}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
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
