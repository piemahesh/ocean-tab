// import { Header } from "../../shared";
// import { motion } from "framer-motion";
// import { courses } from "../constant";
// import { CourseCard } from "../component";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { CourseCard } from "../component";
import { courses } from "../constant";
// import { courses } from "../constant";

// const container = {
//   hidden: { opacity: 1, scale: 0 },
//   visible: {
//     opacity: 1,
//     scale: 1,
//     transition: {
//       delayChildren: 0.1,
//       staggerChildren: 0.2,
//     },
//   },
// };

// const item = {
//   hidden: { y: 20, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//   },
// };

// export const Course = () => {
//   return (
//     <main className=" overflow-hidden   w-screen p-4 bg-org relative">
//       <Header heading="COURSES OFFERED IN" />
//       <div className="absolute slide-ani-reverse -z-10 h-[600px]  rounded-full duration-800 bg-primary/30 backdrop:blur-3xl blur-3xl  w-[600px]"></div>
//       <div className="absolute slide-ani h-[600px] -z-10 rounded-full duration-800 bg-secondary/30 backdrop:blur-3xl blur-3xl  w-[600px]"></div>
//       <article className="flex flex-col ">
//         <h1 className="text-xl  text-secondary/90 font-bold">
//           Explore Our Career-Boosting Courses
//         </h1>
//         <p className="text-lg font-semibold text-tertiary/65">
//           Master in-demand skills with hands-on training from industry experts.
//           Whether you're starting fresh or upskilling, we have the right course
//           for you.
//         </p>
//       </article>
//       <motion.ul
//         variants={container}
//         initial="hidden"
//         animate="visible"
//         className="flex  mt-10 gap-x-6  gap-y-10 items-center flex-wrap justify-evenly pb-64"
//       >
//         {courses.map((course, index) => {
//           return (
//             <motion.li key={index} variants={item}>
//               <CourseCard key={index} {...course} />
//             </motion.li>
//           );
//         })}
//       </motion.ul>
//     </main>
//   );
// };

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
} as const;

export function Course() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Header */}
      <div className="relative z-10 container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <BookOpen className="h-4 w-4" />
              Premium Learning Experience
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Career Today
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Master in-demand skills with our industry-leading courses. Learn
              from experts, build real projects, and accelerate your career in
              tech.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 text-center"
          >
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">50K+</div>
              <div className="text-sm text-gray-600">Students Enrolled</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">4.8</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">95%</div>
              <div className="text-sm text-gray-600">Job Placement</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </motion.div>
        </div>

        {/* Courses Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {courses.map((course) => (
            <motion.div key={course.courseId} variants={item}>
              <CourseCard {...course} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20 space-y-8"
        >
          <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 max-w-4xl mx-auto border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of students who have transformed their careers with
              our courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Browse All Courses
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full font-semibold border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200">
                Talk to Advisor
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
