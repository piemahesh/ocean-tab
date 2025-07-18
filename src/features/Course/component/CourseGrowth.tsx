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
import type { GrowthData, InsightData } from "../../../types";
import { GLASS_DOOR_IMG } from "../../../assets";

interface CourseGrowthProps {
  growthData: GrowthData[];
  marketInsights: InsightData[];
}

export const CourseGrowth: FC<CourseGrowthProps> = (data) => {
  const { growthData, marketInsights } = data;
  return (
    <div className="bg-gradient-to-tl relative from-tertiary/10 via-primary/5 to-secondary/10 p-2 rounded-2xl">
      <h2 className="text-2xl text-grad font-bold mb-6">
        Growth Opportunities
      </h2>
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
            Industry Demand Growth
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={growthData}>
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
          <h3 className="text-lg text-tertiary font-semibold mb-4">
            Market Insights
          </h3>
          <div className="space-y-4">
            {marketInsights.map((insight, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg"
              >
                <h4 className="font-semibold text-gray-800">{insight.title}</h4>
                <p className="text-2xl font-bold text-purple-600">
                  {insight.content}
                </p>
                <p className="text-sm text-gray-600">{insight.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
