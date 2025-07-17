import { JS_ICON, MOBILE_DEV_ICON } from "../../../assets";
import type { CourseData } from "../../../types";
import JAVASCRIPT_SYLLABUS from "./javascript.json";

export const JAVASCRIPT_COURSE: CourseData = {
  courseImg: JS_ICON,
  courseName: "Javascript",
  courseIcon: MOBILE_DEV_ICON,
  courseId: 9,
  syllabus: JAVASCRIPT_SYLLABUS,
  description:
    "Learn modern JavaScript 🌐 (ES6+), Node.js, React, and full‑stack development with hands‑on projects.",
  duration: "12 weeks",
  students: 12500,
  rating: 4.7,
  level: "Intermediate to Advanced",
  price: "₹29,999",
  avgSalary: {
    fresher: "₹5.4 LPA",
    experienced: "₹15 LPA",
    average: "₹10 LPA",
  },
  availability: {
    online: true,
    offline: false,
    hybrid: false,
  },
  completionRate: 0.82,
  growthData: [
    { year: 2022, demand: 60, salary: 5.5 },
    { year: 2023, demand: 68, salary: 7.5 },
    { year: 2024, demand: 75, salary: 10.0 },
  ],
  salaryByExperience: [
    { experience: "0–3 years", salary: 5.43 },
    { experience: "3–6 years", salary: 12.0 },
    { experience: "6–9 years", salary: 15.4 },
  ],
  careerPaths: [
    {
      title: "Front‑End Developer",
      growth: "High",
      salary: "₹4–6 LPA (fresher), ₹8–12 LPA (experienced)",
    },
    {
      title: "Full‑Stack Developer",
      growth: "Very High",
      salary: "₹6–8 LPA (fresher), ₹12–18 LPA (experienced)",
    },
    {
      title: "Node.js Backend Engineer",
      growth: "High",
      salary: "₹6–8 LPA (fresher), ₹12–16 LPA (experienced)",
    },
  ],
  whatYouLearn: [
    "Core ES6+ JavaScript",
    "DOM manipulation & event-driven JS",
    "Node.js backend development",
    "REST & GraphQL APIs",
    "React.js frontend architecture",
    "Full‑stack project deployment",
  ],
  courseFeatures: [
    "Live coding sessions",
    "Real-world projects",
    "1:1 mentorship",
    "Career support & placements",
  ],
  salaryStatistics: [
    {
      title: "Average Salary in India",
      lpa: "₹10 LPA",
      subtitle: "Based on current market data",
    },
    {
      title: "Top Earners (90th percentile)",
      lpa: "₹18 LPA",
      subtitle: "Experienced professionals",
    },
    {
      title: "Entry Level Range",
      lpa: "₹5 LPA",
      subtitle: "Fresh graduates",
    },
  ],
  marketInsights: [
    {
      title: "Industry Size",
      content: "Global JavaScript market valued at $XX billion by 2025",
      subtitle: "Expected market size by 2025",
    },
    {
      title: "Job Growth Rate",
      content: "Web developer roles projected to grow ~8 % annually (2023‑33).",
      subtitle: "Faster than average growth",
    },
    {
      title: "Remote Work",
      content: "≈50 % of JavaScript roles are remote-friendly in 2025",
      subtitle: "Positions offer remote work",
    },
  ],
  hiringCompanies: ["Google", "Microsoft", "Infosys", "TCS", "Freshworks"],
};
