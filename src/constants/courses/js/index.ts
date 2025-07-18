import { JS_ICON, MOBILE_DEV_ICON } from "../../../assets";
import type { CourseData } from "../../../types";
import JAVASCRIPT_SYLLABUS from "./javascript.json";

export const JAVASCRIPT_COURSE: CourseData = {
  courseImg: JS_ICON,
  courseName: "JAVASCRIPT",
  courseIcon: MOBILE_DEV_ICON,
  courseId: 9,
  syllabus: JAVASCRIPT_SYLLABUS,
  description:
    "Master JavaScript from fundamentals to advanced concepts including ES6+, React, Node.js, and modern frameworks. Build dynamic web applications and become a full-stack JavaScript developer.",
  duration: "1-2 months",
  students: 2100,
  rating: 4.7,
  level: "Beginner to Advanced",
  price: "₹10,000",
  avgSalary: {
    fresher: "₹4.0 LPA",
    experienced: "₹12.0 LPA",
    average: "₹7.5 LPA",
  },
  availability: {
    online: true,
    offline: true,
    hybrid: true,
  },
  completionRate: 85,
  growthData: [
    { year: 2022, demand: 75, salary: 6.8 },
    { year: 2023, demand: 82, salary: 7.2 },
    { year: 2024, demand: 88, salary: 7.5 },
    { year: 2025, demand: 92, salary: 8.1 },
  ],
  salaryByExperience: [
    { experience: "0-2 years", salary: 4.0 },
    { experience: "2-5 years", salary: 7.5 },
    { experience: "5-8 years", salary: 12.0 },
    { experience: "8+ years", salary: 20.0 },
  ],
  careerPaths: [
    { title: "Frontend Developer", growth: "Excellent", salary: "₹5-12 LPA" },
    { title: "Full Stack Developer", growth: "Very High", salary: "₹7-18 LPA" },
    { title: "React Developer", growth: "Excellent", salary: "₹6-15 LPA" },
    { title: "JavaScript Engineer", growth: "High", salary: "₹8-20 LPA" },
  ],
  whatYouLearn: [
    "JavaScript fundamentals and ES6+ features",
    "DOM manipulation and event handling",
    "React.js for building user interfaces",
    "Node.js for server-side development",
    "Express.js framework and REST APIs",
    "Modern development tools and workflows",
  ],
  courseFeatures: [
    "Live coding sessions with experienced instructors",
    "Real-world projects and portfolio development",
    "Modern JavaScript frameworks (React, Vue, Angular)",
    "Full-stack application development",
    "Industry best practices and code reviews",
    "Interview preparation and job placement support",
  ],
  salaryStatistics: [
    {
      title: "Average Salary in India",
      lpa: "₹7.5 LPA",
      subtitle: "Based on current market data",
    },
    {
      title: "Top Earners (90th percentile)",
      lpa: "₹20.0 LPA",
      subtitle: "Experienced professionals",
    },
    {
      title: "Entry Level Range",
      lpa: "₹4.0 LPA",
      subtitle: "Fresh graduates",
    },
  ],
  marketInsights: [
    {
      title: "Industry Size",
      content: "$165 billion",
      subtitle: "Expected market size by 2025",
    },
    {
      title: "Job Growth Rate",
      content: "25% annually",
      subtitle: "Faster than average growth",
    },
    {
      title: "Remote Work",
      content: "82%",
      subtitle: "Positions offer remote work",
    },
  ],
  hiringCompanies: [
    "Google",
    "Facebook",
    "Netflix",
    "Airbnb",
    "Uber",
    "Microsoft",
    "Amazon",
    "Apple",
    "Twitter",
    "LinkedIn",
    "Flipkart",
    "Paytm",
    "Zomato",
    "Swiggy",
    "Ola",
    "PhonePe",
    "Razorpay",
    "Freshworks",
    "Zoho",
    "Byju's",
  ],
};
