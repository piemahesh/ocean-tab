import { MEAN_ICON, MOBILE_DEV_ICON } from "../../../assets";
import type { CourseData } from "../../../types";
import MEAN_SYLLABUS from "./meanstack.json";

export const MEAN_COURSE: CourseData = {
  index: 7,
  courseImg: MEAN_ICON,
  courseName: "MEAN STACK",
  courseIcon: MOBILE_DEV_ICON,
  courseId: 7,
  description:
    "Become a full-stack developer with the MEAN stack — MongoDB, Express.js, Angular, and Node.js. Learn how to develop complete web applications from backend APIs to dynamic frontends using a single JavaScript-based ecosystem.",
  rating: 4.8,
  duration: "4 Months",
  students: 1000,
  level: "Advanced",
  price: "₹32,000",
  syllabus: MEAN_SYLLABUS,
  avgSalary: {
    fresher: "₹5.5 LPA",
    experienced: "₹16 LPA",
    average: "₹10.8 LPA",
  },
  availability: {
    online: true,
    offline: true,
    hybrid: true,
  },
  completionRate: 94,
  growthData: [
    { year: 2020, demand: 62, salary: 650000 },
    { year: 2021, demand: 70, salary: 720000 },
    { year: 2022, demand: 78, salary: 800000 },
    { year: 2023, demand: 86, salary: 880000 },
    { year: 2024, demand: 92, salary: 960000 },
  ],
  salaryByExperience: [
    { experience: "0-1 years", salary: 550000 },
    { experience: "1-3 years", salary: 800000 },
    { experience: "3-5 years", salary: 1200000 },
    { experience: "5-8 years", salary: 1700000 },
    { experience: "8+ years", salary: 2400000 },
  ],
  careerPaths: [
    {
      title: "MEAN Stack Developer",
      growth: "Very High",
      salary: "₹8-15 LPA",
    },
    {
      title: "Full Stack Developer",
      growth: "Very High",
      salary: "₹10-18 LPA",
    },
    { title: "Backend Developer", growth: "High", salary: "₹9-16 LPA" },
    { title: "Technical Lead", growth: "Medium", salary: "₹16-28 LPA" },
  ],
  whatYouLearn: [
    "MongoDB database design",
    "Express.js server development",
    "Angular frontend framework",
    "Node.js backend programming",
    "RESTful API development",
    "Authentication and authorization",
    "Real-time applications with Socket.io",
    "Testing strategies",
    "Deployment and DevOps",
    "Performance optimization",
  ],
  courseFeatures: [
    "Complete full-stack curriculum",
    "End-to-end project development",
    "Industry-relevant case studies",
    "Expert mentorship",
    "Live application deployment",
    "Code review and best practices",
    "Interview preparation",
    "Job placement assistance",
  ],
  salaryStatistics: [
    {
      title: "Average Salary in India",
      lpa: "₹10.8 LPA",
      subtitle: "Based on current market data",
    },
    {
      title: "Top Earners (90th percentile)",
      lpa: "₹24+ LPA",
      subtitle: "Experienced professionals",
    },
    {
      title: "Entry Level Range",
      lpa: "₹5-7 LPA",
      subtitle: "Fresh graduates",
    },
  ],
  marketInsights: [
    {
      title: "Industry Size",
      content: "$112.4 billion",
      subtitle: "Expected market size by 2025",
    },
    {
      title: "Job Growth Rate",
      content: "26%",
      subtitle: "Much faster than average",
    },
    {
      title: "Remote Work",
      content: "85%",
      subtitle: "Positions offer remote work",
    },
  ],
  hiringCompanies: [
    "Netflix",
    "Airbnb",
    "WhatsApp",
    "LinkedIn",
    "Upwork",
    "IBM",
    "Accenture",
    "Wipro",
    "TCS",
    "Infosys",
  ],
};
