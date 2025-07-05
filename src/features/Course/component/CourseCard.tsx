import { motion } from "framer-motion";
import {
  Clock,
  Users,
  Star,
} from "lucide-react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import type { CourseCardData } from "../../types";

export const CourseCard: FC<CourseCardData> = (data) => {
  const {
    courseIcon,
    courseId,
    courseImg,
    courseName,
    description,
    duration,
    students,
    rating,
    level,
    price,
  } = data;

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800";
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800";
      case "Advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 w-full max-w-sm mx-auto"
    >
      {/* Course Image */}
      <div className="h-48 p-6 flex items-center justify-center bg-gradient-to-br from-gray-100 to-white">
        <div className="h-24 w-24">
          <img src={courseImg} className="w-full h-full object-contain" alt="" />
        </div>
      </div>

      <span
        className={`px-3 py-1 absolute top-2 right-2 rounded-full text-xs font-medium ${getLevelColor(
          level
        )}`}
      >
        {level}
      </span>
<hr className="bg-gradient-to-l h-1 rounded-4xl border-none from-secondary via-tertiary to-primary" />
      {/* Course Content */}
      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex flex-col items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 overflow-hidden">
              <img
                className="w-full object-contain h-full"
                src={courseIcon}
                alt="courseIcon"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
              {courseName}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{students}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span>{rating}</span>
          </div>
        </div>

        {/* Price and CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="text-2xl font-bold text-gray-900">{price}</div>
          <Link
            to={`/course/${courseId}`}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            View More
          </Link>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.div>
  );
};
