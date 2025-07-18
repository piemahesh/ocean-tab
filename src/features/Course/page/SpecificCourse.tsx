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
import { vibrateDevice } from "../../../utils";
import { OCEAN_COURSES } from "../../../constants";
import { GoToTopButton } from "../../shared";

export type CourseOptions =
  | "overview"
  | "salary"
  | "growth"
  | "career"
  | string;

export const SpecificCourse = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<CourseOptions>("overview");
  const [isHovered, setIsHovered] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    setTimeout(() => {
      vibrateDevice([5, 10, 5]);
    }, 500);
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
    <section className="flex flex-col  m-auto p-2 items-center text-white">
      <div
        onClick={handleSubmit}
        className="self-start p-3 hover:cursor-pointer"
      >
        <img
          className="h-10 w-10 inline-block"
          src={BACK_ICON}
          alt="backIcon"
        />
        <span className="inline-block text-grad">back</span>
      </div>

      <main className="flex  flex-col max-w-5xl  m-auto items-center text-white">
        <main className="w-full mx-auto mb-6">
          {/* Main Container Card */}
          <div className="relative overflow-hidden rounded-3xl border border-purple-200/30 bg-gradient-to-br from-white via-purple-50/20 to-blue-50/20 shadow-2xl hover:shadow-3xl transition-all duration-700 backdrop-blur-sm">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-br from-tertiary/3 to-secondary/3" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/10 to-blue-200/10 rounded-full -translate-y-48 translate-x-48 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-blue-200/10 to-purple-200/10 rounded-full translate-y-36 -translate-x-36 animate-pulse" />

            {/* Content Grid */}
            <div className="relative p-2">
              <div className="grid lg:grid-cols-5 gap-8 items-start">
                {/* Image Card - Takes 2 columns */}
                <div className="lg:col-span-2">
                  <div
                    className="group relative h-fit w-full overflow-hidden rounded-2xl border border-purple-200/50 bg-gradient-to-br from-purple-50 to-blue-50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-tertiary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative bg-gradient-to-bl from-primary/20 via-secondary/20 to-tertiary/20 p-4">
                      <img
                        className="h-64 w-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                        src={course?.courseImg}
                        alt="course-img"
                      />
                      <div className="absolute inset-4 rounded-xl bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    {/* Floating elements */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-400 to-secondary rounded-full animate-pulse opacity-70" />
                    <div className="absolute -bottom-1 -left-1 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-bounce opacity-50" />
                  </div>
                </div>

                {/* Content Card - Takes 3 columns */}
                <div className="lg:col-span-3">
                  <div className="group relative w-full overflow-hidden rounded-2xl border border-purple-200/40 bg-gradient-to-br from-white/80 via-purple-50/40 to-blue-50/40 shadow-md hover:shadow-xl transition-all duration-500 backdrop-blur-sm">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-tertiary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Geometric decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full translate-y-12 -translate-x-12 group-hover:scale-125 transition-transform duration-700" />

                    <div className="relative p-8 space-y-6">
                      {/* Header */}
                      <article className="flex items-center justify-start gap-4">
                        <div className="relative h-12 p-2 rounded-md bg-gradient-to-br from-purple-500/30 to-secondary/25  shadow-lg group-hover:scale-110 transition-transform duration-300">
                          <img
                            src={course?.courseIcon}
                            alt="course icon"
                            className="h-full w-full object-cotain rounded-lg"
                          />
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent" />
                        </div>
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-tertiary via-secondary to-purple-800 bg-clip-text text-transparent leading-tight">
                          {course?.courseName}
                        </h2>
                      </article>

                      {/* Duration */}
                      <article className="flex items-center">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-secondary rounded-full animate-pulse" />
                          <p className="text-xl font-semibold text-gray-700">
                            <span className="text-tertiary font-bold">
                              Course duration:{" "}
                            </span>
                            <span className="text-secondary">{duration}</span>
                          </p>
                        </div>
                      </article>

                      {/* Description */}
                      <article className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-secondary to-purple-500 rounded-full animate-pulse" />
                          <span className="text-tertiary font-bold text-xl">
                            Introduction:
                          </span>
                        </div>
                        <p className="text-gray-700 leading-relaxed pl-6 border-l-3 border-gradient-to-b from-purple-200 to-blue-200 text-lg">
                          {course?.description}
                        </p>
                      </article>

                      {/* Animated progress bar */}
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r from-purple-500 to-secondary rounded-full transition-all duration-1000 ${
                            isHovered ? "w-full" : "w-0"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" bg-white w-full border shadow-2xs shadow-gray-400/35 border-gray-500/20 rounded-2xl mb-6 "
        >
          <CourseExtend {...course} />
        </motion.div>

        {/* <div className="absolute slide-ani-reverse -z-10 h-[300px]  rounded-full duration-800 bg-primary/30 backdrop:blur-3xl blur-3xl  w-[300px]"></div>
        <div className="absolute slide-ani h-[200px] -z-10 rounded-full duration-800 bg-secondary/30 backdrop:blur-3xl blur-3xl  w-[200px]"></div> */}

        <div className="w-full  mx-auto  mb-6 ">
          <div className="bg-white rounded-xl shadow-sm p-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className=" w-full rounded-2xl border  p-1"
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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transitionDelay: 2 }}
          transition={{ duration: 1 }}
          className=" w-full  mb-7"
          viewport={{ once: true }}
        >
          <motion.ul className=" flex flex-col w-full gap-4 mt-8">
            <div className="border-2 sticky top-0 z-40  bg-white border-gray-300 rounded-md py-0.5 pl-5">
              <h1 className="text-2xl text-grad font-bold ">Syllabus</h1>
            </div>

            {course.syllabus.map((topic, i) => {
              return (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileTap={{ scale: 1.1 }}
                  viewport={{ once: true, amount: "some" }}
                  transition={{ duration: 1 }}
                  className="w-full mx-auto  flex relative rounded-md overflow-hidden"
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
