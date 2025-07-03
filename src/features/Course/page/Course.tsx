import { Header } from "../../shared";
import { motion } from "framer-motion";
import { courses } from "../constant";
import { CourseCard } from "../component";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const Course = () => {
  return (
    <main className=" overflow-hidden  overflow-y-scroll w-screen p-4 bg-org relative">
      <Header heading="COURSES OFFERED IN" />
      <div className="absolute slide-ani-reverse -z-10 h-[600px]  rounded-full duration-800 bg-primary/30 backdrop:blur-3xl blur-3xl  w-[600px]"></div>
      <div className="absolute slide-ani h-[600px] -z-10 rounded-full duration-800 bg-secondary/30 backdrop:blur-3xl blur-3xl  w-[600px]"></div>
      <article className="flex flex-col ">
        <h1 className="text-xl  text-secondary/90 font-bold">
          Explore Our Career-Boosting Courses
        </h1>
        <p className="text-lg font-semibold text-tertiary/65">
          Master in-demand skills with hands-on training from industry experts.
          Whether you're starting fresh or upskilling, we have the right course
          for you.
        </p>
      </article>
      <motion.ul
        variants={container}
        initial="hidden"
        animate="visible"
        className="flex  mt-10 gap-x-6 gap-y-10 items-center flex-wrap justify-evenly pb-64"
      >
        {courses.map((course, index) => {
          return (
            <motion.li key={index} variants={item}>
              <CourseCard key={index} {...course} />
            </motion.li>
          );
        })}
      </motion.ul>
    </main>
  );
};
