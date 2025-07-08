import { useState } from "react";
import { motion } from "framer-motion";
import { MENTOR_DATA } from "../constant";
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
                key={index}
                layoutId={`mentor-card-${mentor.mentorName}`}
                className="group cursor-pointer"
                variants={item}
                whileHover={{
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openModal(mentor)}
              >
                <div className="relative w-80 min-h-[370px] bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100">
                  {/* Background decorative elements */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-br-full opacity-10"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-pink-400 to-orange-400 rounded-tl-full opacity-10"></div>

                  <div className="p-6">
                    {/* Profile Image */}
                    <motion.div
                      layoutId={`mentor-image-${mentor.mentorName}`}
                      className="relative mx-auto mb-4"
                    >
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-300 mx-auto relative">
                        <img
                          src={mentor.profilePicture}
                          alt={mentor.mentorName}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
                    </motion.div>

                    {/* Content */}
                    <div className="text-center space-y-3">
                      <motion.h3
                        layoutId={`mentor-name-${mentor.mentorName}`}
                        className="text-xl font-bold text-gray-800"
                      >
                        {mentor.mentorName}
                      </motion.h3>
                      <motion.p
                        layoutId={`mentor-designation-${mentor.mentorName}`}
                        className="text-blue-600 font-medium"
                      >
                        {mentor.designation}
                      </motion.p>
                      {/* <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                        <span className="font-semibold">Experience:</span>
                        <span>{mentor.experience}</span>
                      </div> */}
                    </div>

                    {/* Skills Preview */}
                    <div className="mt-4">
                      <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mb-3"></div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {mentor.skills.slice(0, 3).map((skill, i) => (
                          <span
                            key={i}
                            className="px-1 py-1 flex  justify-between text-xs bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full font-medium"
                          >
                            <span className="text-tertiary bg-tertiary/10 px-2 rounded-2xl ">
                              {skill.skill}
                            </span>
                            <span className="text-secondary bg-secondary/10  px-2  rounded-full">
                              {skill.area}
                            </span>
                          </span>
                        ))}
                        {mentor.skills.length > 3 && (
                          <span className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full font-medium">
                            +{mentor.skills.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
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
