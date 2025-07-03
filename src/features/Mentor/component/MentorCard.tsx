import { motion } from "framer-motion";
import { MENTOR_DATA } from "../constant";
import { BOTTOM_TRIANGLE, FACULTY_TOP } from "../../../assets";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export const MentorCard = () => (
  <motion.ul
    className="flex gap-y-5 gap-x-5 p-4 flex-wrap w-full items-center justify-evenly"
    variants={container}
    initial="hidden"
    animate="visible"
  >
    {MENTOR_DATA.map((mentor, index) => (
      <motion.li
        key={index}
        className=" shadow-2xl border  border-tertiary/30 shadow-primary/40 w-[300px] p-2 rounded-md overflow-hidden  relative bg-white"
        variants={item}
        transition={{ duration: 0.5 }}
      >
        <div className="h-28 w-28 absolute left-0 top-0">
          <img src={FACULTY_TOP} alt="icon" />
        </div>

        <div className="h-28 m-auto w-28 border border-tertiary rounded-full overflow-hidden">
          <img
            className="h-full w-full object-top object-cover "
            src={mentor.profilePicture}
            alt=""
          />
        </div>
        <div className="h-28 w-28 absolute right-0  -bottom-6">
          <img src={BOTTOM_TRIANGLE} alt="icon" />
        </div>

        <main className="flex flex-col gap-1 items-start">
          <article className="flex items-center justify-center gap-4">
            <span className="text-primary text-xl  font-semibold">Name</span>
            <div id="name" className="text-secondary font-semibold text-xl">
              {mentor?.mentorName}
            </div>
          </article>
          <article className="flex items-center justify-center gap-4">
            <span className="text-primary text-xl  font-semibold">Role</span>
            <div id="name" className="text-secondary font-semibold text-xl">
              {mentor?.designation}
            </div>
          </article>
          <article className="flex items-center justify-center gap-4">
            <span className="text-primary text-xl  font-semibold">
              Experience
            </span>
            <div id="name" className="text-secondary font-semibold text-xl">
              4
            </div>
          </article>
          <article className="flex  w-full items-center justify-center">
            <span className="text-grad italic">Expertise in</span>
          </article>
          <div className="h-1 rounded-full w-full bg-grad"></div>
          <article className="flex flex-wrap gap-3 mt-4">
            {[
              { skill: "Python", area: "Backend" },
              { skill: "Django", area: "Web Framework" },
              { skill: "MySQL", area: "Database" },
              { skill: "Java", area: "OOP" },
              { skill: "Spring Boot", area: "Java Web" },
              { skill: "Figma", area: "UI/UX" },
            ].map(({ skill, area }, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-2 py-1 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-secondary/30 shadow-sm backdrop-blur-sm hover:scale-[1.03] transition-all"
              >
                <span className="text-primary font-semibold text-sm">
                  {skill}
                </span>
                <span className="text-secondary text-xs bg-secondary/10 px-2 py-0.5 rounded-full">
                  {area}
                </span>
              </div>
            ))}
          </article>
        </main>
      </motion.li>
    ))}
  </motion.ul>
);
