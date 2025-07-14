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
import type { SalaryByExperience, StatsData } from "../../../types";
import { GLASS_DOOR_IMG } from "../../../assets";

interface CourseSalaryProps {
  salaryStatistics: StatsData[];
  salaryByExperience: SalaryByExperience[];
}

export const CourseSalary: FC<CourseSalaryProps> = (data) => {
  const { salaryByExperience, salaryStatistics } = data;
  return (
    <div className="bg-gradient-to-bl relative from-tertiary/10 via-primary/5 to-secondary/10 p-2 rounded-2xl">
      <h2 className="text-2xl text-grad font-bold mb-6">Salary Insights</h2>
      <div className="absolute p-2 flex items-center justify-between gap-1.5 rounded-md bg-green-200/20 border border-green-300 right-2 top-2">
        <div className="h-6">
          <img
            className="h-full w-full object-contain"
            src={GLASS_DOOR_IMG}
            alt="glassdoor img"
          />
        </div>
        <p className="text-xs text-green-600 font-semibold font-sans">
          powered by glassdoor
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg text-secondary font-semibold mb-4">
            Salary by Experience Level
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salaryByExperience}>
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
          <h3 className="text-lg text-tertiary font-semibold mb-4">
            Key Salary Statistics
          </h3>
          <div className="space-y-4">
            {salaryStatistics.map((stat, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800">{stat.title}</h4>
                <p className="text-2xl font-bold text-blue-600">{stat.lpa}</p>
                <p className="text-sm text-blue-600">{stat.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
