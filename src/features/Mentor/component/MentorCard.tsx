import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useState } from "react";
import { MENTOR_DATA } from "../constant";
import { MentorModal } from "./MentorModal";


export const MentorCard = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedMentor = selectedIndex !== null ? MENTOR_DATA[selectedIndex] : null;

  return (
    <>
      {/* Cards List */}
      <motion.ul
        className="flex flex-wrap gap-6 justify-center items-start p-4 z-10 relative"
        layout
      >
        {MENTOR_DATA.map((mentor, index) => (
          <motion.li
            key={mentor.mentorName}
            layoutId={`card-${mentor.mentorName}`}
            onClick={() => setSelectedIndex(index)}
            className="cursor-pointer bg-white shadow-lg p-4 rounded-xl w-[260px] text-center"
          >
            <motion.img
              layoutId={`image-${mentor.mentorName}`}
              src={mentor.profilePicture}
              alt={mentor.mentorName}
              className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-secondary"
            />
            <h3 className="mt-3 text-lg font-bold text-primary">
              {mentor.mentorName}
            </h3>
            <p className="text-sm text-secondary">{mentor.designation}</p>
          </motion.li>
        ))}
      </motion.ul>

      {/* Modal */}
      {/* <>
        {selectedMentor && (
          <MentorModal
            mentor={selectedMentor}
            onClose={() => setSelectedIndex(null)}
            onNext={() =>
              setSelectedIndex((prev) =>
                prev !== null ? (prev + 1) % MENTOR_DATA.length : null
              )
            }
            onPrev={() =>
              setSelectedIndex((prev) =>
                prev !== null
                  ? (prev - 1 + MENTOR_DATA.length) % MENTOR_DATA.length
                  : null
              )
            }
          />
        )}
      </> */}
    </>
  );
};
