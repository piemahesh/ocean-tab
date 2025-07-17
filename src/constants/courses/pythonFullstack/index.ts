import { MOBILE_DEV_ICON, PYTHON_FULLSTACK_ICON } from "../../../assets";
import type { CourseData } from "../../../types";
import PYTHON_FULLSTACK_SYLLABUS from "./pythonfullstack.json";

export const PYTHON_FULLSTACK_COURSE: CourseData = {
  courseImg: PYTHON_FULLSTACK_ICON,
  courseName: "Python Fullstack",
  courseIcon: MOBILE_DEV_ICON,
  courseId: 16,
  syllabus: PYTHON_FULLSTACK_SYLLABUS,
  description:
    "Complete Python Full Stack development course covering Django/Flask, React.js, databases, and deployment. Build end-to-end web applications from scratch.",
  duration: "6-7 months",
  students: 16800,
  rating: 4.7,
  level: "Intermediate to Advanced",
  price: "₹64,999",
  avgSalary: {
    fresher: "₹5.5 LPA",
    experienced: "₹18 LPA",
    average: "₹10.8 LPA",
  },
  availability: {
    online: true,
    offline: true,
    hybrid: true,
  },
  completionRate: 84,
  growthData: [
    { year: 2022, demand: 68, salary: 9.2 },
    { year: 2023, demand: 76, salary: 10.0 },
    { year: 2024, demand: 82, salary: 10.8 },
    { year: 2025, demand: 88, salary: 11.5 },
  ],
  salaryByExperience: [
    { experience: "0-2 years", salary: 5.5 },
    { experience: "2-5 years", salary: 10.8 },
    { experience: "5-8 years", salary: 18.2 },
    { experience: "8+ years", salary: 28.0 },
  ],
  careerPaths: [
    {
      title: "Python Full Stack Developer",
      growth: "Excellent",
      salary: "₹8-18 LPA",
    },
    { title: "Django Developer", growth: "High", salary: "₹7-15 LPA" },
    { title: "Software Engineer", growth: "Very High", salary: "₹10-25 LPA" },
    { title: "Technical Lead", growth: "High", salary: "₹18-35 LPA" },
  ],
  whatYouLearn: [
    "Advanced Python and Django framework",
    "React.js and modern frontend development",
    "Database design and ORM",
    "API development and integration",
    "Authentication and security",
    "Deployment and DevOps",
  ],
  courseFeatures: [
    "Full-stack project development",
    "Industry-standard tools and frameworks",
    "Code reviews and pair programming",
    "Agile development methodologies",
    "Portfolio development",
    "Technical interview preparation",
  ],
  salaryStatistics: [
    {
      title: "Average Salary in India",
      lpa: "₹10.8 LPA",
      subtitle: "Based on current market data",
    },
    {
      title: "Top Earners (90th percentile)",
      lpa: "₹28.0 LPA",
      subtitle: "Experienced professionals",
    },
    {
      title: "Entry Level Range",
      lpa: "₹5.5 LPA",
      subtitle: "Fresh graduates",
    },
  ],
  marketInsights: [
    {
      title: "Industry Size",
      content: "$203 billion",
      subtitle: "Expected market size by 2025",
    },
    {
      title: "Job Growth Rate",
      content: "26% annually",
      subtitle: "Faster than average growth",
    },
    {
      title: "Remote Work",
      content: "78%",
      subtitle: "Positions offer remote work",
    },
  ],
  hiringCompanies: [
    "Instagram",
    "Pinterest",
    "Spotify",
    "Dropbox",
    "Reddit",
    "YouTube",
    "Quora",
    "Bitbucket",
    "Disqus",
    "Mozilla",
    "Flipkart",
    "Paytm",
    "Zomato",
    "Swiggy",
    "Ola",
    "Razorpay",
    "Freshworks",
    "Zoho",
    "Byju's",
    "Unacademy",
  ],
};
