import type { FC } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { SalaryByExperience } from "../../../types";

export const CourseSalary: FC<SalaryByExperience[]> = (data) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Salary Insights</h2>
      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Salary by Experience Level
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="experience" />
              <YAxis />
              <Tooltip
                formatter={(value) => [`₹${value} LPA`, "Average Salary"]}
              />
              <Bar dataKey="salary" fill="#3B82F6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Key Salary Statistics</h3>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800">
                Average Salary in India
              </h4>
              <p className="text-2xl font-bold text-blue-600">₹6.42 LPA</p>
              <p className="text-sm text-blue-600">
                Based on current market data
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800">
                Top Earners (90th percentile)
              </h4>
              <p className="text-2xl font-bold text-green-600">₹14.8 LPA</p>
              <p className="text-sm text-green-600">
                Experienced professionals
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800">
                Entry Level Range
              </h4>
              <p className="text-2xl font-bold text-purple-600">₹2.5-4.2 LPA</p>
              <p className="text-sm text-purple-600">Fresh graduates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
