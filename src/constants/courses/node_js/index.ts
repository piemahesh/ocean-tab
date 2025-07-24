import { MOBILE_DEV_ICON, NODE_JS_ICON } from "../../../assets";
import type { CourseData } from "../../../types";
import NODE_JS_SYLLABUS from "./nodejs.json";

export const NODE_JS_COURSE: CourseData = {
  courseImg: NODE_JS_ICON,
  courseName: "Node Js",
  courseIcon: MOBILE_DEV_ICON,
  courseId: 13,
  syllabusLink:
    "https://firebasestorage.googleapis.com/v0/b/oceanlivereact.appspot.com/o/ocean_assets%2Ffinal_syllabus%2FNode-syllabus.pdf?alt=media&token=84cebb34-0d71-426a-953d-56512cf3e9f3",
  syllabus: NODE_JS_SYLLABUS,
  description:
    "Learn server-side JavaScript development with Node.js. Master Express.js, MongoDB, REST APIs, and build scalable web applications and microservices.",
  duration: "4-5 months",
  students: 15600,
  rating: 4.5,
  level: "Intermediate",
  price: "₹44,999",
  avgSalary: {
    fresher: "₹4.8 LPA",
    experienced: "₹16 LPA",
    average: "₹9.5 LPA",
  },
  availability: {
    online: true,
    offline: false,
    hybrid: true,
  },
  completionRate: 79,
  growthData: [
    { year: 2022, demand: 72, salary: 8.1 },
    { year: 2023, demand: 80, salary: 8.8 },
    { year: 2024, demand: 85, salary: 9.5 },
    { year: 2025, demand: 90, salary: 10.2 },
  ],
  salaryByExperience: [
    { experience: "0-2 years", salary: 4.8 },
    { experience: "2-5 years", salary: 9.5 },
    { experience: "5-8 years", salary: 16.2 },
    { experience: "8+ years", salary: 26.5 },
  ],
  careerPaths: [
    { title: "Node.js Developer", growth: "High", salary: "₹6-14 LPA" },
    { title: "Backend Developer", growth: "Very High", salary: "₹8-18 LPA" },
    {
      title: "Full Stack Developer",
      growth: "Excellent",
      salary: "₹10-22 LPA",
    },
    { title: "DevOps Engineer", growth: "High", salary: "₹12-28 LPA" },
  ],
  whatYouLearn: [
    "Node.js fundamentals and event-driven programming",
    "Express.js framework and middleware",
    "MongoDB and database integration",
    "RESTful API development",
    "Authentication and authorization",
    "Microservices architecture",
  ],
  courseFeatures: [
    "Live coding sessions",
    "API development projects",
    "Database design workshops",
    "Performance optimization techniques",
    "Deployment and cloud integration",
    "Industry best practices",
  ],
  salaryStatistics: [
    {
      title: "Average Salary in India",
      lpa: "₹9.5 LPA",
      subtitle: "Based on current market data",
    },
    {
      title: "Top Earners (90th percentile)",
      lpa: "₹26.5 LPA",
      subtitle: "Experienced professionals",
    },
    {
      title: "Entry Level Range",
      lpa: "₹4.8 LPA",
      subtitle: "Fresh graduates",
    },
  ],
  marketInsights: [
    {
      title: "Industry Size",
      content: "$125 billion",
      subtitle: "Expected market size by 2025",
    },
    {
      title: "Job Growth Rate",
      content: "24% annually",
      subtitle: "Faster than average growth",
    },
    {
      title: "Remote Work",
      content: "80%",
      subtitle: "Positions offer remote work",
    },
  ],
  hiringCompanies: [
    "Netflix",
    "Uber",
    "Airbnb",
    "WhatsApp",
    "LinkedIn",
    "PayPal",
    "eBay",
    "Trello",
    "Medium",
    "Shopify",
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
