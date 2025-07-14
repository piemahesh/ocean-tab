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

interface CourseSalaryProps {
  salaryStatistics: StatsData[];
  salaryByExperience: SalaryByExperience[];
}

export const CourseSalary: FC<CourseSalaryProps> = (data) => {
  const { salaryByExperience, salaryStatistics } = data;
  return (
    <div className="bg-gradient-to-bl from-tertiary/10 via-primary/5 to-secondary/10 p-2 rounded-2xl">
      <h2 className="text-2xl text-grad font-bold mb-6">Salary Insights</h2>
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
            {salaryStatistics.map((stat) => (
              <div className="bg-blue-50 p-4 rounded-lg">
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
