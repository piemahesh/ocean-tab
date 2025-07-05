import { useState } from "react";
import { motion } from "framer-motion";
import { MENTOR_DATA } from "../constant";
import { BOTTOM_TRIANGLE, FACULTY_TOP } from "../../../assets";
import { MentorModal } from "./MentorModal";
import type { MentorData } from "../../types";

// Animation variants
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      damping: 12,
      stiffness: 100,
    },
  },
};

export function MentorCard() {
  const [selectedMentor, setSelectedMentor] = useState<MentorData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (mentor: MentorData) => {
    setSelectedMentor(mentor);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMentor(null);
  };

  return (
    <>
      <div className=" p-6">
        <div className="max-w-7xl mx-auto"> 
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {MENTOR_DATA.map((mentor, index) => (
              <motion.div
                key={`mentor-${index}`}
                className="group cursor-pointer"
                variants={item}
                whileHover={{
                  y: -8,
                  transition: {
                    type: "spring" as const,
                    stiffness: 300,
                    damping: 20,
                  },
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openModal(mentor)}
              >
                <motion.div
                  key={index}
                  className=" border border-tertiary/30  min-h-[470px] w-[300px] p-2 rounded-md overflow-hidden relative bg-white"
                  variants={item}
                  layoutId={`card-${mentor.mentorName}`}
                  transition={{ duration: 0.5 }}
                >
                  <div className="h-28 w-28 absolute left-0 top-0">
                    <img src={FACULTY_TOP} alt="icon" />
                  </div>

                  <motion.div
                    layoutId={`image-${mentor.mentorName}`}
                    className="h-28 m-auto w-28 border border-tertiary rounded-full overflow-hidden z-10 relative"
                  >
                    <img
                      className="h-full w-full object-top object-cover"
                      src={mentor.profilePicture}
                      alt={mentor.mentorName}
                    />
                  </motion.div>
                  <div className="h-28 w-28 absolute right-0 -bottom-6">
                    <img src={BOTTOM_TRIANGLE} alt="icon" />
                  </div>

                  <main className="flex flex-col gap-1 items-start">
                    <article className="flex items-center justify-center gap-4">
                      <span className="text-primary text-xl font-semibold">
                        Name
                      </span>
                      <div className="text-secondary font-semibold text-xl">
                        {mentor?.mentorName}
                      </div>
                    </article>
                    <article className="flex items-center justify-center gap-4">
                      <span className="text-primary text-xl font-semibold">
                        Role
                      </span>
                      <div className="text-secondary font-semibold text-xl">
                        {mentor?.designation}
                      </div>
                    </article>
                    <article className="flex items-center justify-center gap-4">
                      <span className="text-primary text-xl font-semibold">
                        Experience
                      </span>
                      <div className="text-secondary font-semibold text-xl">
                        {mentor.experience}
                      </div>
                    </article>
                    <article className="flex w-full items-center justify-center">
                      <span className="text-grad italic">Expertise in</span>
                    </article>
                    <div className="h-1 rounded-full w-full bg-grad"></div>
                    {/* <article className="flex flex-wrap gap-3 mt-4">
                      {mentor.skills.map(({ skill, area }, i) => (
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
                    </article> */}
                    <article className="flex flex-wrap gap-3 mt-4">
                      {mentor.skills.slice(0, 5).map(({ skill, area }, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 px-2 py-1 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-secondary/30 shadow-sm backdrop-blur-sm hover:scale-[1.03] transition-all"
                        >
                          <span className="text-primary font-semibold text-sm">{skill}</span>
                          <span className="text-secondary text-xs bg-secondary/10 px-2 py-0.5 rounded-full">{area}</span>
                        </div>
                      ))}
                      {mentor.skills.length > 5 && (
                        <div className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium border border-secondary/30">
                          +{mentor.skills.length - 5} more
                        </div>
                      )}
                    </article>
                  </main>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal Component */}
      <MentorModal
        mentor={selectedMentor}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}
