import { motion } from "framer-motion";
import { useState } from "react";
import type { FC } from "react";
import type { MentorData } from "../../types";

interface Props {
    mentor: MentorData;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

export const MentorModal: FC<Props> = ({ mentor, onClose, onNext, onPrev }) => {
    const [showBio, setShowBio] = useState(false);

    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                layoutId={`card-${mentor.mentorName}`}
                className="bg-white p-6 rounded-xl w-[90%] max-w-2xl shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
            >
                <motion.img
                    layoutId={`image-${mentor.mentorName}`}
                    src={mentor.profilePicture}
                    alt={mentor.mentorName}
                    className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-secondary"
                />
                <h2 className="text-2xl font-bold text-primary text-center mt-4">
                    {mentor.mentorName}
                </h2>
                <p className="text-center text-secondary">{mentor.designation}</p>

                <div className="mt-4 flex justify-center">
                    <button
                        onClick={() => setShowBio((prev) => !prev)}
                        className="text-primary text-sm underline"
                    >
                        {showBio ? "Hide Bio" : "Show Bio"}
                    </button>
                </div>

                {showBio && (
                    <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 text-sm text-gray-600 text-center"
                    >

                        "This mentor is passionate about teaching and sharing knowledge in their domain
                    </motion.p>
                )}

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <span className="font-semibold text-primary">Experience:</span>
                    <span className="text-secondary">4 Years</span>
                    <span className="font-semibold text-primary">Expertise:</span>
                    <span className="text-secondary">
                        Python, Django, MySQL, Java, Spring Boot, Figma
                    </span>
                    <span className="font-semibold text-primary">LinkedIn:</span>
                    <span className="text-blue-500 underline text-xs break-all">
                        {mentor.linkedIn}
                    </span>
                </div>

                <div className="mt-6 flex justify-between">
                    <button
                        onClick={onPrev}
                        className="bg-secondary text-white px-4 py-1 rounded hover:bg-primary"
                    >
                        ⬅ Prev
                    </button>
                    <button
                        onClick={onNext}
                        className="bg-secondary text-white px-4 py-1 rounded hover:bg-primary"
                    >
                        Next ➡
                    </button>
                </div>

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 bg-primary text-white px-3 py-1 text-sm rounded-full"
                >
                    ✕
                </button>
            </motion.div>
        </motion.div>
    );
};
