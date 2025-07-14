import {
  Star,
  Users,
  Clock,
  TrendingUp,
  CheckCircle,
  Globe,
  Monitor,
  Zap,
} from "lucide-react";
import type { FC } from "react";
import type { CourseData } from "../../../types";

export const CourseExtend: FC<CourseData> = ({
  avgSalary,
  rating,
  duration,
  students,
  level,
  price,
  availability,
  completionRate,
}) => {
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          className="w-3 h-3 fill-yellow-400 text-yellow-400 opacity-50"
        />
      );
    }

    return stars;
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden bg-white mx-auto">
      <div className="  shadow-xl border border-gray-100 overflow-hidden  flex flex-col">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-white to-blue-100 p-4 border-b border-gray-100">
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="flex items-center gap-1 mb-1">
                {renderStars(rating)}
                <span className="text-xs font-medium text-gray-600 ml-1">
                  {rating}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900">
                Professional Course
              </h3>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 mt-1">
                {level}
              </span>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-blue-600">{price}</div>
              <div className="text-xs text-gray-500">Course Fee</div>
            </div>
          </div>
        </div>

        {/* Main Content - Bento Grid */}
        <div className="flex-1 p-4 grid grid-cols-6 grid-rows-4 gap-3">
          {/* Salary Card - Large */}
          <div className="col-span-4 row-span-2 bg-gradient-to-br from-green-50 to-emerald-50 p-3 rounded-xl border border-green-200">
            <div className="flex items-center gap-1 mb-2">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <h4 className="text-sm font-semibold text-gray-900">
                Avg Salary
              </h4>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center">
                <div className="text-sm font-bold text-green-600">
                  {avgSalary.fresher}
                </div>
                <div className="text-xs text-gray-600">Fresher</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-green-600">
                  {avgSalary.experienced}
                </div>
                <div className="text-xs text-gray-600">Experienced</div>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-green-700">
                  {avgSalary.average}
                </div>
                <div className="text-xs text-gray-600">Average</div>
              </div>
            </div>
          </div>

          {/* Duration Card */}
          <div className="col-span-2 row-span-2 bg-gradient-to-br from-purple-50 to-violet-50 p-3 rounded-xl border border-purple-200">
            <div className="flex items-center gap-1 mb-1">
              <Clock className="w-4 h-4 text-purple-600" />
              <h4 className="text-sm font-semibold text-gray-900">Duration</h4>
            </div>
            <div className="text-lg font-bold text-purple-600">{duration}</div>
            <div className="text-xs text-gray-600">Complete</div>
          </div>

          {/* Students Card */}
          <div className="col-span-2 row-span-2 bg-gradient-to-br from-orange-50 to-red-50 p-3 rounded-xl border border-orange-200">
            <div className="flex items-center gap-1 mb-1">
              <Users className="w-4 h-4 text-orange-600" />
              <h4 className="text-sm font-semibold text-gray-900">Students</h4>
            </div>
            <div className="text-lg font-bold text-orange-600">{students}</div>
            <div className="text-xs text-gray-600">Enrolled</div>
          </div>

          {/* Completion Rate Card */}
          <div className="col-span-2 row-span-2 bg-gradient-to-br from-teal-50 to-cyan-50 p-3 rounded-xl border border-teal-200">
            <div className="flex items-center gap-1 mb-1">
              <CheckCircle className="w-4 h-4 text-teal-600" />
              <h4 className="text-sm font-semibold text-gray-900">Success</h4>
            </div>
            <div className="text-lg font-bold text-teal-600">
              {completionRate}%
            </div>
            <div className="text-xs text-gray-600">Completion</div>
          </div>

          {/* Availability Card */}
          <div className="col-span-2 row-span-2 bg-gradient-to-br from-indigo-50 to-blue-50 p-3 rounded-xl border border-indigo-200">
            <h4 className="text-sm font-semibold text-gray-900 mb-2">
              Available
            </h4>
            <div className="space-y-1">
              {availability.online && (
                <div className="flex items-center gap-1">
                  <Globe className="w-3 h-3 text-indigo-600" />
                  <span className="text-xs text-gray-700">Online</span>
                </div>
              )}
              {availability.offline && (
                <div className="flex items-center gap-1">
                  <Monitor className="w-3 h-3 text-indigo-600" />
                  <span className="text-xs text-gray-700">Offline</span>
                </div>
              )}
              {availability.hybrid && (
                <div className="flex items-center gap-1">
                  <Zap className="w-3 h-3 text-indigo-600" />
                  <span className="text-xs text-gray-700">Hybrid</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white px-4 py-3 border-t border-gray-100">
          <button className="w-full bg-gradient-to-l from-primary to-secondary text-white py-2 px-4 rounded-lg font-medium transition-colors text-sm">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};
