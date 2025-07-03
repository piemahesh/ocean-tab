import { motion } from "framer-motion";
import { MENTOR_DATA } from "../constant";
import { BOTTOM_TRIANGLE, FACULTY_TOP } from "../../../assets";
import type { MentorData } from "../../types";
import { useState, type FC } from "react";

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

export const MentorCardCopy = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [mentor, setMentor] = useState<MentorData>();
  return <>
    {
      isModal && mentor && <MentorModal onClose={() => setIsModal(false)} mentor={mentor} />
    }
      {/* <div className="absolute z-50 inset-0 bg-red-200 h-svh w-svw"></div> */}

    <motion.ul
      className="flex gap-y-5 gap-x-5 p-4 flex-wrap w-full items-center justify-evenly"
      variants={container}
      initial="hidden"
      animate="visible"
    >

      {/* <div className="fixed inset-0 bg-red-200 h-full w-full"></div> */}
      {MENTOR_DATA.map((mentor, index) => (
        <motion.li
          key={index}
          className=" shadow-2xl border  border-tertiary/30 shadow-primary/40 w-[300px] p-2 rounded-md overflow-hidden  relative bg-white"
          variants={item}
          layoutId={`card-${mentor.mentorName}`}
          onClick={() => {
            console.log("clfdkdlkj")
            setIsModal(true);
            setMentor(mentor)
            console.log(mentor, isModal)
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="h-28 w-28 absolute left-0 top-0">
            <img src={FACULTY_TOP} alt="icon" />
          </div>

          <motion.div layoutId={`image-${mentor.mentorName}`} className="h-28 m-auto w-28 border border-tertiary rounded-full overflow-hidden z-10 relative">
            <img
              className="h-full w-full object-top object-cover"
              src={mentor.profilePicture}
              alt=""
            />
          </motion.div>
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
  </>
};

interface MentorModalProps {
  mentor: MentorData;
}

interface MentorModalProps {
  mentor: MentorData;
  onClose: () => void;
}

const MentorModal: FC<MentorModalProps> = ({ mentor, onClose }) => {
  return (
    <motion.section
      layoutId={`card-${mentor.mentorName}`}
      className="absolute  z-50 flex items-center justify-center p-4 backdrop-blur-sm bg-black/30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-white max-w-3xl w-full p-6 rounded-lg shadow-2xl relative flex flex-col gap-4"
        onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
      >
        <motion.div
          layoutId={`image-${mentor.mentorName}`}
          className="w-32 h-32 rounded-full overflow-hidden border-4 border-secondary mx-auto"
        >
          <img
            src={mentor.profilePicture}
            alt=""
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-primary">{mentor.mentorName}</h2>
          <h3 className="text-lg text-secondary">{mentor.designation}</h3>
          <p className="text-sm text-gray-600 italic">{mentor.linkedIn}</p>
        </div>

        <div className="border-t border-dashed border-tertiary my-4" />

        <article className="grid grid-cols-2 gap-3 text-sm">
          <span className="font-semibold text-primary">Experience:</span>
          <span className="text-secondary">4 Years</span>

          <span className="font-semibold text-primary">Expertise:</span>
          <span className="text-secondary">Python, Django, MySQL, Java, Spring Boot, Figma</span>
        </article>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-sm text-white bg-primary hover:bg-secondary rounded-full px-3 py-1"
        >
          Close
        </button>
      </motion.div>
    </motion.section>
  );
};
