import { C_PLUS_ICON, MOBILE_DEV_ICON } from "../../../assets";
import type { CourseData } from "../../../types";
import C_PLUS_SYLLABUS from "./c++.json";

export const C_PLUS_COURSE: CourseData = {
  courseImg: C_PLUS_ICON,
  courseName: "C++",
  courseIcon: MOBILE_DEV_ICON,
  courseId: 2,
  description:
    "Enhance your programming skills with C++, an object-oriented extension of C used in game development, competitive programming, and real-time systems. Learn about classes, inheritance, polymorphism, and STL (Standard Template Library).",
  rating: 4.7,
  duration: "1-1.5 Months",
  students: 3980,
  level: "Intermediate",
  price: "₹12,000",
  syllabus: C_PLUS_SYLLABUS,
  avgSalary: {
    fresher: "₹4 LPA",
    experienced: "₹15 LPA",
    average: "₹9.5 LPA",
  },
  availability: {
    online: true,
    offline: true,
    hybrid: true,
  },
  completionRate: 95,
  growthData: [
    { year: 2020, demand: 58, salary: 520000 },
    { year: 2021, demand: 62, salary: 580000 },
    { year: 2022, demand: 68, salary: 650000 },
    { year: 2023, demand: 75, salary: 720000 },
    { year: 2024, demand: 82, salary: 800000 },
  ],
  salaryByExperience: [
    { experience: "0-1 years", salary: 400000 },
    { experience: "1-3 years", salary: 600000 },
    { experience: "3-5 years", salary: 900000 },
    { experience: "5-8 years", salary: 1400000 },
    { experience: "8+ years", salary: 2000000 },
  ],
  careerPaths: [
    { title: "Software Developer", growth: "High", salary: "₹5-10 LPA" },
    { title: "System Programmer", growth: "Medium", salary: "₹8-15 LPA" },
    { title: "Game Developer", growth: "High", salary: "₹6-12 LPA" },
    { title: "Embedded Developer", growth: "Medium", salary: "₹7-14 LPA" },
  ],
  whatYouLearn: [
    "C++ syntax and fundamentals",
    "Object-oriented programming",
    "Memory management",
    "Standard Template Library (STL)",
    "File handling and I/O",
    "Exception handling",
    "Templates and generic programming",
    "Multithreading concepts",
    "Data structures and algorithms",
    "Performance optimization",
  ],
  courseFeatures: [
    "Comprehensive curriculum",
    "Practical coding exercises",
    "Real-world projects",
    "Expert instructor guidance",
    "Code review sessions",
    "Programming contests",
    "Industry case studies",
    "Career guidance",
  ],
  salaryStatistics: [
    {
      title: "Average Salary in India",
      lpa: "₹9.5 LPA",
      subtitle: "Based on current market data",
    },
    {
      title: "Top Earners (90th percentile)",
      lpa: "₹20+ LPA",
      subtitle: "Experienced professionals",
    },
    {
      title: "Entry Level Range",
      lpa: "₹3.5-5 LPA",
      subtitle: "Fresh graduates",
    },
  ],
  marketInsights: [
    {
      title: "Industry Size",
      content: "$75.2 billion",
      subtitle: "Expected market size by 2025",
    },
    {
      title: "Job Growth Rate",
      content: "19%",
      subtitle: "Faster than average growth",
    },
    {
      title: "Remote Work",
      content: "65%",
      subtitle: "Positions offer remote work",
    },
  ],
  hiringCompanies: [
    "Intel",
    "AMD",
    "NVIDIA",
    "Samsung",
    "Qualcomm",
    "Adobe",
    "Microsoft",
    "Google",
    "Amazon",
    "Oracle",
  ],
};
