import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CourseCareer,
  CourseExtend,
  CourseGrowth,
  CourseOverView,
  CourseSalary,
  CourseTopics,
  Tabs,
} from "../component";
import { BACK_ICON } from "../../../assets";
import { OCEAN_COURSES } from "../../../constants";
import { GoToTopButton, ThemeSwitcher } from "../../shared";
import { useSlide } from "../../../utils";

export type CourseOptions =
  | "overview"
  | "salary"
  | "growth"
  | "career"
  | string;

export const SpecificCourse = () => {
  const navigate = useNavigate();
  const { isDark } = useSlide();
  const [activeTab, setActiveTab] = useState<CourseOptions>("overview");
  const [isHovered, setIsHovered] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  if (!id) return;

  const course = OCEAN_COURSES.find(
    (course) => course.courseId === parseInt(id)
  );

  if (!course) return;

  const {
    whatYouLearn,
    courseFeatures,
    salaryByExperience,
    salaryStatistics,
    growthData,
    marketInsights,
    careerPaths,
    hiringCompanies,
    duration,
  } = course;

  const handleSubmit = () => {
    navigate(-1);
  };

  return (
    <section
      className={`flex flex-col m-auto p-2 items-center min-h-screen transition-all duration-300 ${
        isDark ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      {/* Back Button */}
      <div
        onClick={handleSubmit}
        className="self-start p-3 hover:cursor-pointer group"
      >
        <img
          className="h-10 w-10 inline-block transition-all duration-300 group-hover:scale-110"
          src={BACK_ICON}
          alt="backIcon"
        />
        <span className="inline-block text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text font-semibold ml-2 group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
          back
        </span>
      </div>

      <ThemeSwitcher />

      <main className="flex flex-col max-w-11/12 w-full m-auto items-center">
        {/* Main Course Card */}
        {/* Main Course Card */}
        <main className="w-full mx-auto mb-6">
          <div
            className={`relative overflow-hidden rounded-3xl border shadow-2xl transition-all duration-500 backdrop-blur-sm ${
              isDark
                ? "border-cyan-500/30 bg-gray-800/90 hover:shadow-cyan-500/20"
                : "border-blue-300 bg-white/90 hover:shadow-blue-500/20"
            }`}
          >
            {/* Background effects */}
            <div
              className={`absolute inset-0 opacity-50 ${
                isDark
                  ? "bg-gradient-to-br from-cyan-500/5 to-purple-500/5"
                  : "bg-gradient-to-br from-blue-500/5 to-purple-500/5"
              }`}
            />

            {/* Animated background elements */}
            <div
              className={`absolute top-0 right-0 w-96 h-96 rounded-full -translate-y-48 translate-x-48 animate-pulse ${
                isDark
                  ? "bg-gradient-to-br from-cyan-400/10 to-purple-400/10"
                  : "bg-gradient-to-br from-blue-400/10 to-purple-400/10"
              }`}
            />

            <div className="relative p-6">
              <div className="grid lg:grid-cols-5 gap-8 items-start">
                {/* Image Card */}
                <div className="lg:col-span-2">
                  <div
                    className={`group relative h-fit w-full overflow-hidden rounded-2xl border shadow-lg transition-all duration-500 transform hover:-translate-y-2 ${
                      isDark
                        ? "border-cyan-400/50 bg-gray-700/50 hover:shadow-cyan-400/30"
                        : "border-blue-300 bg-white hover:shadow-blue-400/30"
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {/* Neon border effect */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl ${
                        isDark
                          ? "bg-gradient-to-br from-cyan-400/20 to-purple-400/20"
                          : "bg-gradient-to-br from-blue-400/20 to-purple-400/20"
                      }`}
                    />

                    <div
                      className={`relative p-4 ${
                        isDark
                          ? "bg-gradient-to-bl from-cyan-500/20 via-purple-500/20 to-cyan-500/20"
                          : "bg-gradient-to-bl from-blue-500/20 via-purple-500/20 to-blue-500/20"
                      }`}
                    >
                      <img
                        className="h-64 w-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                        src={course.courseImg}
                        alt="course-img"
                      />
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className="lg:col-span-3">
                  <div
                    className={`group relative w-full overflow-hidden rounded-2xl border shadow-md transition-all duration-500 backdrop-blur-sm ${
                      isDark
                        ? "border-purple-400/50 bg-gray-800/90 hover:shadow-purple-400/30"
                        : "border-purple-300 bg-white/90 hover:shadow-purple-400/30"
                    }`}
                  >
                    <div className="relative p-8 space-y-6">
                      {/* Header */}
                      <article className="flex items-center justify-start gap-4">
                        <div
                          className={`relative h-12 p-2 rounded-md shadow-lg transition-transform duration-300 group-hover:scale-110 ${
                            isDark
                              ? "bg-gradient-to-br from-cyan-500/30 to-purple-500/30 shadow-cyan-500/20"
                              : "bg-gradient-to-br from-blue-500/30 to-purple-500/30 shadow-blue-500/20"
                          }`}
                        >
                          <img
                            src={course.courseIcon}
                            alt="course icon"
                            className="h-full w-full object-contain rounded-lg"
                          />
                        </div>
                        <h2
                          className={`text-3xl font-bold leading-tight ${
                            isDark
                              ? "bg-gradient-to-r from-cyan-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                              : "text-blue-800"
                          }`}
                        >
                          {course.courseName}
                        </h2>
                      </article>

                      {/* Duration */}
                      <article className="flex items-center">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-3 h-3 rounded-full animate-pulse shadow-lg ${
                              isDark
                                ? "bg-gradient-to-r from-cyan-500 to-purple-500 shadow-cyan-500/50"
                                : "bg-gradient-to-r from-blue-500 to-purple-500 shadow-blue-500/50"
                            }`}
                          />
                          <p
                            className={`text-xl font-semibold ${
                              isDark ? "text-gray-200" : "text-gray-700"
                            }`}
                          >
                            <span
                              className={`font-bold ${
                                isDark ? "text-cyan-400" : "text-blue-600"
                              }`}
                            >
                              Course duration:{" "}
                            </span>
                            <span
                              className={
                                isDark ? "text-purple-400" : "text-purple-600"
                              }
                            >
                              {duration}
                            </span>
                          </p>
                        </div>
                      </article>

                      {/* Description */}
                      <article className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-3 h-3 rounded-full animate-pulse shadow-lg ${
                              isDark
                                ? "bg-gradient-to-r from-purple-500 to-cyan-500 shadow-purple-500/50"
                                : "bg-gradient-to-r from-purple-500 to-blue-500 shadow-purple-500/50"
                            }`}
                          />
                          <span
                            className={`font-bold text-xl ${
                              isDark ? "text-cyan-400" : "text-blue-600"
                            }`}
                          >
                            Introduction:
                          </span>
                        </div>
                        <p
                          className={`leading-relaxed pl-6 border-l-4 text-lg ${
                            isDark
                              ? "text-gray-300 border-gradient-to-b from-cyan-400 to-purple-400"
                              : "text-gray-600 border-gradient-to-b from-blue-400 to-purple-400"
                          }`}
                        >
                          {course.description}
                        </p>
                      </article>

                      {/* Animated progress bar */}
                      <div
                        className={`w-full h-2 rounded-full overflow-hidden ${
                          isDark ? "bg-gray-700" : "bg-gray-200"
                        }`}
                      >
                        <div
                          className={`h-full rounded-full transition-all duration-1000 shadow-lg ${
                            isDark
                              ? "bg-gradient-to-r from-cyan-500 to-purple-500 shadow-cyan-500/50"
                              : "bg-gradient-to-r from-blue-500 to-purple-500 shadow-blue-500/50"
                          } ${isHovered ? "w-full" : "w-0"}`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Course Extend Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1 }}
          className={
            isDark
              ? "bg-gray-800/90 w-full border border-cyan-500/30 shadow-2xl shadow-cyan-500/10 rounded-2xl mb-6 backdrop-blur-sm"
              : " bg-white w-full border shadow-2xs shadow-gray-400/35 border-gray-500/20 rounded-2xl mb-6"
          }
        >
          <CourseExtend {...course} />
        </motion.div>

        {/* Tabs Section */}
        <div className="w-full mx-auto mb-6">
          <div
            className={` ${
              isDark ? "bg-gray-800/90" : "bg-white"
            } rounded-xl shadow-sm border border-purple-500/30 p-2 backdrop-blur-sm`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
          </div>
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`w-full rounded-2xl border ${
            isDark ? "border-cyan-400/30 bg-gray-800/90" : "bg-white"
          }  border-purple-500/30 backdrop-blur-sm p-1`}
        >
          {activeTab === "overview" && (
            <CourseOverView
              courseFeatures={courseFeatures}
              whatYouLearn={whatYouLearn}
            />
          )}
          {activeTab === "salary" && (
            <CourseSalary
              salaryByExperience={salaryByExperience}
              salaryStatistics={salaryStatistics}
            />
          )}
          {activeTab === "growth" && (
            <CourseGrowth
              growthData={growthData}
              marketInsights={marketInsights}
            />
          )}
          {activeTab === "career" && (
            <CourseCareer
              careerPaths={careerPaths}
              hiringCompanies={hiringCompanies}
            />
          )}
        </motion.div>

        {/* Syllabus Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transitionDelay: 2 }}
          transition={{ duration: 1 }}
          className="w-full mb-7"
          viewport={{ once: true }}
        >
          <motion.ul className="flex flex-col w-full gap-4 mt-8">
            <div
              className={`border-2 sticky top-0 z-40
                ${
                  isDark
                    ? " bg-gray-800/95 border-cyan-400/50"
                    : "bg-white border-purple-500/30"
                } rounded-md py-2 pl-5 backdrop-blur-sm shadow-lg shadow-cyan-500/20`}
            >
              <h1
                className={`text-2xl font-bold ${
                  isDark ? "from-cyan-400 to-purple-400" : "text-grad"
                } bg-gradient-to-r  bg-clip-text text-transparent`}
              >
                Syllabus
              </h1>
            </div>

            {course.syllabus.map((topic, i) => {
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileTap={{ scale: 1.02 }}
                  viewport={{ once: true, amount: "some" }}
                  transition={{ duration: 0.6 }}
                  className="w-full mx-auto flex relative rounded-md overflow-hidden"
                >
                  <CourseTopics {...topic} />
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>

        <GoToTopButton />
      </main>
    </section>
  );
};
