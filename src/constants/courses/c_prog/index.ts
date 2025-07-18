import { C_ICON, MOBILE_DEV_ICON } from "../../../assets";
import type { CourseData } from "../../../types";
import C_SYLLABUS from "./c.json";

export const C_COURSE: CourseData = {
  courseImg: C_ICON,
  courseName: "C",
  courseIcon: MOBILE_DEV_ICON,
  courseId: 3,
  description:
    "Begin your programming journey with C, the foundational language for system software, embedded systems, and low-level development. Understand memory management, data structures, and write efficient, high-performance code.",
  rating: 4.6,
  duration: "2 Months",
  students: 3100,
  level: "Beginner",
  price: "₹12,000",
  syllabus: C_SYLLABUS,
  avgSalary: {
    fresher: "₹3.5 LPA",
    experienced: "₹12 LPA",
    average: "₹7.8 LPA",
  },
  availability: {
    online: true,
    offline: true,
    hybrid: true,
  },
  completionRate: 95,
  growthData: [
    { year: 2020, demand: 55, salary: 480000 },
    { year: 2021, demand: 58, salary: 520000 },
    { year: 2022, demand: 62, salary: 580000 },
    { year: 2023, demand: 68, salary: 640000 },
    { year: 2024, demand: 75, salary: 720000 },
  ],
  salaryByExperience: [
    { experience: "0-1 years", salary: 350000 },
    { experience: "1-3 years", salary: 520000 },
    { experience: "3-5 years", salary: 780000 },
    { experience: "5-8 years", salary: 1200000 },
    { experience: "8+ years", salary: 1800000 },
  ],
  careerPaths: [
    { title: "System Programmer", growth: "Medium", salary: "₹5-12 LPA" },
    { title: "Embedded Developer", growth: "High", salary: "₹6-14 LPA" },
    { title: "Firmware Engineer", growth: "High", salary: "₹7-15 LPA" },
    { title: "Software Engineer", growth: "High", salary: "₹4-10 LPA" },
  ],
  whatYouLearn: [
    "C programming fundamentals",
    "Data types and variables",
    "Control structures",
    "Functions and modular programming",
    "Arrays and strings",
    "Pointers and memory management",
    "File handling",
    "Data structures implementation",
    "Debugging techniques",
    "Best coding practices",
  ],
  courseFeatures: [
    "Beginner-friendly approach",
    "Hands-on coding practice",
    "Step-by-step guidance",
    "Real programming challenges",
    "Code optimization techniques",
    "Industry-standard practices",
    "Comprehensive exercises",
    "Mentor support",
  ],
  salaryStatistics: [
    {
      title: "Average Salary in India",
      lpa: "₹7.8 LPA",
      subtitle: "Based on current market data",
    },
    {
      title: "Top Earners (90th percentile)",
      lpa: "₹18+ LPA",
      subtitle: "Experienced professionals",
    },
    {
      title: "Entry Level Range",
      lpa: "₹3-4.5 LPA",
      subtitle: "Fresh graduates",
    },
  ],
  marketInsights: [
    {
      title: "Industry Size",
      content: "$68.4 billion",
      subtitle: "Expected market size by 2025",
    },
    {
      title: "Job Growth Rate",
      content: "15%",
      subtitle: "Steady growth rate",
    },
    {
      title: "Remote Work",
      content: "55%",
      subtitle: "Positions offer remote work",
    },
  ],
  hiringCompanies: [
    "Intel",
    "Qualcomm",
    "Broadcom",
    "TI",
    "Bosch",
    "Continental",
    "Honeywell",
    "Siemens",
    "IBM",
    "HP",
  ],
};
