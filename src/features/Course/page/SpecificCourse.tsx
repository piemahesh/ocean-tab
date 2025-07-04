import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { courses, courseSyllabus } from "../constant";
import { CourseTopics } from "../component";
import { BACK_ICON } from "../../../assets";

export const SpecificCourse = () => {
  const { id } = useParams();
  // const { setValue } = useMyContext();
  if (!id) return;

  const syllabus = courseSyllabus.find((course) => course.id === parseInt(id));
  const course = courses.find((course) => course.courseId == parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate(-1);
  };
  return (
    <section className="flex flex-col  items-center text-white">
      <div onClick={handleSubmit} className="self-start p-3">
        <img
          className="h-10 w-10 inline-block"
          src={BACK_ICON}
          alt="backIcon"
        />
        <span className="inline-block text-grad">back</span>
      </div>

      <main className=" flex max-w-5xl max-sm:flex-col gap-4 p-2 justify-between items-center w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="h-64 w-64 "
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
          className=" bg-white w-full p-4 rounded-md shadow-2xs shadow-tertiary/35"
        >
          <article className="flex items-center justify-start gap-4">
            <div className="h-8 w-8">
              <img src={course?.courseIcon} alt="python icon" />
            </div>
            <h2 className="text-grad  text-2xl font-bold">
              {course?.courseName}
            </h2>
          </article>
          <article className="flex mt-4 items-center">
            <p className=" text-2xl font-bold text-primary">
              <span className=" text-secondary">Course duration: </span>6 months
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

      <div className="absolute slide-ani-reverse z-10 h-[300px]  rounded-full duration-800 bg-primary/30 backdrop:blur-3xl blur-3xl  w-[300px]"></div>
      <div className="absolute slide-ani h-[200px] z-10 rounded-full duration-800 bg-secondary/30 backdrop:blur-3xl blur-3xl  w-[200px]"></div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transitionDelay: 2 }}
        transition={{ duration: 1 }}
        className=" w-full px-8 mb-7"
        viewport={{ once: true }}
      >
        <motion.ul className=" flex flex-col gap-4 mt-8">
          {syllabus?.syllabus.map((topic, i) => {
            return (
              <motion.li
                key={i}
                initial={{ opacity: 0, scale: 0.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileTap={{ scale: 1.1 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 1 }}
                className="w-full mx-auto max-w-5xl flex relative rounded-md overflow-hidden"
              >
                <CourseTopics {...topic} />
              </motion.li>
            );
          })}
        </motion.ul>
      </motion.div>
    </section>
  );
};
