import { FLUTTER_ICON, MOBILE_DEV_ICON } from "../../../assets";
import type { CourseData } from "../../../types";
import FLUTTER_SYLLABUS from "./flutter.json";

export const FLUTTER_COURSE: CourseData = {
  courseImg: FLUTTER_ICON,
  courseName: "FLUTTER",
  courseIcon: MOBILE_DEV_ICON,
  courseId: 5,
  description:
    "Build beautiful, natively compiled mobile, web, and desktop apps using Flutter and Dart. Learn widget-based architecture, state management, and create cross-platform apps with a single codebase and smooth UI animations.",
  rating: 4.9,
  duration: "2.5 Months",
  students: 1250,
  level: "Advanced",
  price: "₹25,000",
  syllabus: FLUTTER_SYLLABUS,
  avgSalary: {
    fresher: "₹5 LPA",
    experienced: "₹14 LPA",
    average: "₹9.5 LPA",
  },
  availability: {
    online: true,
    offline: true,
    hybrid: true,
  },
  completionRate: 98,
  growthData: [
    { year: 2020, demand: 45, salary: 580000 },
    { year: 2021, demand: 62, salary: 680000 },
    { year: 2022, demand: 78, salary: 780000 },
    { year: 2023, demand: 89, salary: 880000 },
    { year: 2024, demand: 95, salary: 950000 },
  ],
  salaryByExperience: [
    { experience: "0-1 years", salary: 500000 },
    { experience: "1-3 years", salary: 750000 },
    { experience: "3-5 years", salary: 1100000 },
    { experience: "5-8 years", salary: 1600000 },
    { experience: "8+ years", salary: 2200000 },
  ],
  careerPaths: [
    {
      title: "Mobile App Developer",
      growth: "Very High",
      salary: "₹6-12 LPA",
    },
    { title: "Flutter Developer", growth: "Very High", salary: "₹8-16 LPA" },
    { title: "Full Stack Developer", growth: "High", salary: "₹10-18 LPA" },
    { title: "Mobile Architect", growth: "Medium", salary: "₹18-30 LPA" },
  ],
  whatYouLearn: [
    "Flutter framework fundamentals",
    "Dart programming language",
    "Widget architecture",
    "State management (Provider, Bloc)",
    "Navigation and routing",
    "API integration and HTTP",
    "Local storage and databases",
    "Firebase integration",
    "App deployment (Play Store, App Store)",
    "Performance optimization",
  ],
  courseFeatures: [
    "Latest Flutter version",
    "Real app development projects",
    "iOS and Android deployment",
    "Industry mentor guidance",
    "Live coding sessions",
    "Portfolio development",
    "App store publishing guide",
    "Job placement assistance",
  ],
  salaryStatistics: [
    {
      title: "Average Salary in India",
      lpa: "₹9.5 LPA",
      subtitle: "Based on current market data",
    },
    {
      title: "Top Earners (90th percentile)",
      lpa: "₹22+ LPA",
      subtitle: "Experienced professionals",
    },
    {
      title: "Entry Level Range",
      lpa: "₹4.5-6 LPA",
      subtitle: "Fresh graduates",
    },
  ],
  marketInsights: [
    {
      title: "Industry Size",
      content: "$156.5 billion",
      subtitle: "Expected market size by 2025",
    },
    {
      title: "Job Growth Rate",
      content: "28%",
      subtitle: "Fastest growing segment",
    },
    {
      title: "Remote Work",
      content: "82%",
      subtitle: "Positions offer remote work",
    },
  ],
  hiringCompanies: [
    "Google",
    "Alibaba",
    "BMW",
    "Tencent",
    "Nubank",
    "Groupon",
    "Reflectly",
    "Hamilton",
    "Philips Hue",
    "Grab",
  ],
};
