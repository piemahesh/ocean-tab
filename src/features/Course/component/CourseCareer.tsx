import type { FC } from "react";
import { motion } from "framer-motion";
import type { CareerPathsData } from "../../../types";
import { Briefcase } from "lucide-react";

interface CourseCareerProps {
  careerPaths: CareerPathsData[];
  hiringCompanies: string[];
}

export const CourseCareer: FC<CourseCareerProps> = ({
  careerPaths,
  hiringCompanies,
}) => {
  return (
    <div className="bg-gradient-to-bl from-tertiary/10 via-primary/5 to-secondary/10 p-2 rounded-2xl">
      <h2 className="text-2xl text-grad font-bold mb-6">Career Paths</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {careerPaths.map((path, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-3">
              <Briefcase className="text-blue-600" size={24} />
              <h3 className="text-lg text-secondary font-semibold">
                {path.title}
              </h3>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Growth:</span>
                <span
                  className={`font-semibold border px-2.5 rounded-2xl ${
                    path.growth === "Excellent"
                      ? "text-green-600"
                      : path.growth === "Very High"
                      ? "text-blue-600"
                      : "text-orange-600"
                  }`}
                >
                  {path.growth}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Salary:</span>
                <span className="font-semibold text-grad">{path.salary}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 p-6 shadow shadow-tertiary/30 rounded-xl">
        <h3 className="text-lg text-grad font-semibold mb-4">
          Top Hiring Companies
        </h3>
        <div className="flex flex-wrap gap-3">
          {hiringCompanies.map((company) => (
            <span
              key={company}
              className="bg-white text-secondary px-4 py-2 rounded-full text-sm font-medium shadow-sm"
            >
              {company}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
