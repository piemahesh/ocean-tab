import type { FC } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { GrowthData } from "../../../types";

export const CourseGrowth: FC<GrowthData[]> = (data) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Growth Opportunities</h2>
      <div className="grid lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-4">Industry Demand Growth</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="demand"
                stroke="#3B82F6"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Market Insights</h3>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800">Industry Size</h4>
              <p className="text-2xl font-bold text-purple-600">₹9 Billion</p>
              <p className="text-sm text-gray-600">
                Expected market size by 2025
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800">Job Growth Rate</h4>
              <p className="text-2xl font-bold text-green-600">22% YoY</p>
              <p className="text-sm text-gray-600">
                Faster than average growth
              </p>
            </div>
            <div className="bg-gradient-to-r from-yellow-50 to-red-50 p-4 rounded-lg">
              <h4 className="font-semibold text-gray-800">Remote Work</h4>
              <p className="text-2xl font-bold text-orange-600">75%</p>
              <p className="text-sm text-gray-600">
                Positions offer remote work
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
