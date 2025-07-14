// import { Award, Calendar, Globe, Monitor, Users } from "lucide-react";
import type { FC } from "react";

interface CourseOverView {
  whatYouLearn: string[];
  courseFeatures: string[];
}

export const CourseOverView: FC<CourseOverView> = ({
  courseFeatures,
  whatYouLearn,
}) => {
  return (
    <div className="rounded-xl z-30 bg-gradient-to-tl from-tertiary/10 via-primary/5 to-secondary/10 w-full p-4">
      <h2 className="text-2xl text-grad font-bold mb-3">Course Overview</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg text-secondary font-semibold mb-3">
            What You'll Learn
          </h3>
          <ul className="space-y-2">
            {whatYouLearn.map((line, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <span className="text-gray-600">{line}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-lg text-secondary font-semibold mb-3">
            Course Features
          </h3>
          <div className="space-y-3">
            <ul className="space-y-2">
              {courseFeatures.map((line, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                  <span className="text-gray-600">{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
