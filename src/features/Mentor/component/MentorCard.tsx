import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENTOR_DATA } from "../constant";
import { BOTTOM_TRIANGLE, FACULTY_TOP } from "../../../assets";

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

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 50,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      damping: 20,
      stiffness: 300,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    y: 50,
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  },
};

export function MentorCard() {
  const [selectedMentor, setSelectedMentor] = useState<any>(null);

  const openModal = (mentor: any) => {
    setSelectedMentor(mentor);
    scrollTo({ top: 0, behavior: "instant" });
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedMentor(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Meet Our Mentors
            </h1>
            <p className="text-gray-600 text-lg">
              Click on any mentor card to learn more about their expertise
            </p>
          </motion.div>

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
                  className=" shadow-2xl border  border-tertiary/30 shadow-primary/40 w-[300px] p-2 rounded-md overflow-hidden  relative bg-white"
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
                      alt=""
                    />
                  </motion.div>
                  <div className="h-28 w-28 absolute right-0  -bottom-6">
                    <img src={BOTTOM_TRIANGLE} alt="icon" />
                  </div>

                  <main className="flex flex-col gap-1 items-start">
                    <article className="flex items-center justify-center gap-4">
                      <span className="text-primary text-xl  font-semibold">
                        Name
                      </span>
                      <div
                        id="name"
                        className="text-secondary font-semibold text-xl"
                      >
                        {mentor?.mentorName}
                      </div>
                    </article>
                    <article className="flex items-center justify-center gap-4">
                      <span className="text-primary text-xl  font-semibold">
                        Role
                      </span>
                      <div
                        id="name"
                        className="text-secondary font-semibold text-xl"
                      >
                        {mentor?.designation}
                      </div>
                    </article>
                    <article className="flex items-center justify-center gap-4">
                      <span className="text-primary text-xl  font-semibold">
                        Experience
                      </span>
                      <div
                        id="name"
                        className="text-secondary font-semibold text-xl"
                      >
                        4
                      </div>
                    </article>
                    <article className="flex  w-full items-center justify-center">
                      <span className="text-grad italic">Expertise in</span>
                    </article>
                    <div className="h-1 rounded-full w-full bg-grad"></div>
                    <article className="flex flex-wrap gap-3 mt-4">
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
                    </article>
                  </main>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal - Fixed positioning outside main container */}
      <AnimatePresence mode="wait">
        {selectedMentor && (
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-0 h-screen w-full bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Scrollable content */}
              <div className="h-full overflow-y-auto">
                <div className="relative p-8">
                  {/* Close button */}
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 group z-10"
                  >
                    <svg
                      className="w-5 h-5 text-gray-600 group-hover:text-gray-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  {/* Header */}
                  <div className="text-center mb-8">
                    <motion.div
                      className="relative mx-auto mb-6"
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="w-32 h-32 rounded-full overflow-hidden border border-tertiary mx-auto relative">
                        <img
                          src={selectedMentor.profilePicture}
                          alt={selectedMentor.mentorName}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
                    </motion.div>

                    <motion.h2
                      className="text-3xl font-bold text-gray-800 mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {selectedMentor.mentorName}
                    </motion.h2>
                    <motion.p
                      className="text-xl text-blue-600 font-medium mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      {selectedMentor.designation}
                    </motion.p>
                    <motion.a
                      href={selectedMentor.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      LinkedIn Profile
                    </motion.a>
                  </div>

                  {/* Details */}
                  <div className="space-y-6">
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 bg-gray-50 rounded-2xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div>
                        <h4 className="font-bold text-gray-700 mb-1">
                          Experience
                        </h4>
                        <p className="text-gray-600">
                          {selectedMentor.experience}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-700 mb-1">
                          Mentoring
                        </h4>
                        <p className="text-gray-600">Available</p>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h4 className="font-bold text-gray-700 mb-4 text-lg">
                        Skills & Expertise
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedMentor.skills.map((skill: any, i: number) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + i * 0.1 }}
                            className="flex items-center gap-3 p-3 bg-white rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"></div>
                            <div>
                              <p className="font-semibold text-gray-800">
                                {skill.skill}
                              </p>
                              <p className="text-sm text-gray-600">
                                {skill.area}
                              </p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      className="pt-4 border-t border-gray-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <button
                        onClick={closeModal}
                        className="w-full bg-gradient-to-r from-secondary to-primary text-white font-semibold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-secondary transition-all duration-200 transform hover:scale-105"
                      >
                        Connect with {selectedMentor.mentorName.split(" ")[0]}
                      </button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
