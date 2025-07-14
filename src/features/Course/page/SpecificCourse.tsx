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

export type CourseOptions =
  | "overview"
  | "salary"
  | "growth"
  | "career"
  | string;

export const SpecificCourse = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<CourseOptions>("overview");

  const { id } = useParams();
  useEffect(() => {
    setTimeout(() => {
      vibrateDevice([5, 10, 5]);
    }, 500);
    window.scrollTo(0, 0);
  }, []);
  // const { setValue } = useMyContext();
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

      <main className="flex flex-col max-w-5xl  m-auto items-center text-white">
        <main className=" flex  max-sm:flex-col gap-4 p-2 justify-between items-center w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="h-fit w-64 p-2 rounded-xl border shadow-2xs shadow-tertiary/35 border-tertiary/20 bg-white "
          >
            <img
              className="h-full w-full object-contain"
              src={course?.courseImg}
              alt="course-img"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className=" bg-white w-full p-4 min-h-56  border border-tertiary/20 rounded-xl shadow-2xs shadow-tertiary/35"
          >
            <article className="flex items-center justify-start gap-4">
              <div className="h-8 w-8">
                <img src={course?.courseIcon} alt="python icon" />
              </div>
              <h2 className="text-grad  text-xl font-bold">
                {course?.courseName}
              </h2>
            </article>
            <article className="flex mt-4 items-center">
              <p className=" text-xl font-bold text-tertiary">
                <span className=" text-secondary">Course duration: </span>6
                months
              </p>
            </article>
            <article className="flex mt-4 gap-1.5 items-center">
              <p className=" text-lg font-normal text-gray-600">
                <span className=" text-secondary font-bold pr-1">
                  Introduction :
                </span>
                {course?.description}
              </p>
            </article>
          </motion.div>
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
      </main>
    </section>
  );
};
