import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { CourseCard } from "../component";
import { GoToTopButton, Header, MainBgElements } from "../../shared";
import { useEffect, useState } from "react";
import { OCEAN_COURSES } from "../../../constants";

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
  const [currentStat, setCurrentStat] = useState(0);
  const stats = [
    { label: "Students Enrolled", info: "10K+" },
    { label: "Average Rating", info: "4.8" },
    { label: "Support", info: "24/7" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen pb-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      <Header heading="Trending Courses" />
      <MainBgElements />
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Header */}
      <div className="relative z-10 container mx-auto px-4 py-6 sm:px-6 lg:px-8">
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
              <span className="block pb-3 bg-gradient-to-r from-tertiary via-secondary to-primary bg-clip-text text-transparent">
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
            {stats.map((content, i) => (
              <div
                key={i}
                className={`text-center min-w-[150px] p-6 rounded-2xl backdrop-blur-sm border shadow-lg ${
                  currentStat === i
                    ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-300 shadow-blue-200"
                    : "bg-white/70 border-white/50 hover:border-blue-200"
                } transition-all duration-500`}
              >
                <div className="text-3xl font-bold text-gray-700">
                  {content.info}
                </div>
                <div className="text-sm text-gray-600">{content.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Courses Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {OCEAN_COURSES.map((course) => (
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
      <GoToTopButton />
    </main>
  );
}
