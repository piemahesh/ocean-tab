import { Award, Calendar, Globe, Monitor, Users } from "lucide-react";

export const CourseOverView = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Course Overview</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">What You'll Learn</h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span>Master UI/UX design principles and methodologies</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span>Learn industry-standard tools like Figma and Adobe XD</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span>Conduct user research and usability testing</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span>Create responsive designs and prototypes</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span>Build a professional portfolio</span>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Course Features</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Calendar className="text-blue-600" size={20} />
              <span>6-month comprehensive program</span>
            </div>
            <div className="flex items-center gap-3">
              <Monitor className="text-blue-600" size={20} />
              <span>Live online sessions + recorded content</span>
            </div>
            <div className="flex items-center gap-3">
              <Users className="text-blue-600" size={20} />
              <span>1:1 mentorship sessions</span>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="text-blue-600" size={20} />
              <span>Global industry projects</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="text-blue-600" size={20} />
              <span>Industry-recognized certification</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
