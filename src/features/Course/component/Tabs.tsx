import {
  BookOpen,
  Target,
  DollarSign,
  TrendingUp,
  Briefcase,
} from "lucide-react";
import type { FC } from "react";
import { TabButton } from "./TabButton";
import type { CourseOptions } from "../page";

const tabs = [
  { id: "overview", label: "Overview", icon: BookOpen },
  { id: "syllabus", label: "Syllabus", icon: Target },
  { id: "salary", label: "Salary Insights", icon: DollarSign },
  { id: "growth", label: "Growth Opportunities", icon: TrendingUp },
  { id: "career", label: "Career Paths", icon: Briefcase },
];

interface TabsProps {
  activeTab: string | number;
  setActiveTab: (id: CourseOptions) => void;
}

export const Tabs: FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <>
      {tabs.map(({ id, label, icon }) => (
        <TabButton
          key={id}
          id={id}
          label={label}
          icon={icon}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      ))}
    </>
  );
};
