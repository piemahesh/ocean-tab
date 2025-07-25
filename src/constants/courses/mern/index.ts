import { MERN_ICON, MOBILE_DEV_ICON } from "../../../assets";
import type { CourseData } from "../../../types";
import MERN_SYLLABUS from "./mernstack.json";

export const MERN_COURSE: CourseData = {
  courseImg: MERN_ICON,
  courseName: "MERN STACK",
  courseIcon: MOBILE_DEV_ICON,
  courseId: 11,
  description:
    "Master the MERN stack — MongoDB, Express.js, React, and Node.js — to build powerful full-stack web applications. Learn to create RESTful APIs, manage frontend and backend integration, and deploy production-ready apps.",
  rating: 4.9,
  duration: "6 Months",
  students: 1400,
  level: "Advanced",
  price: "₹32,000",
  syllabusLink:
    "https://firebasestorage.googleapis.com/v0/b/oceanlivereact.appspot.com/o/ocean_assets%2Ffinal_syllabus%2FMERN%20Stack%20Syllabus.pdf?alt=media&token=5d3cf05c-0ca8-4280-a2f1-81e33aab2b3b",
  syllabus: MERN_SYLLABUS,
  avgSalary: {
    fresher: "₹4.5 LPA",
    experienced: "₹12 LPA",
    average: "₹7.5 LPA",
  },
  availability: {
    online: true,
    offline: true,
    hybrid: true,
  },
  completionRate: 97,
  growthData: [
    { year: 2020, demand: 65, salary: 450000 },
    { year: 2021, demand: 72, salary: 520000 },
    { year: 2022, demand: 78, salary: 600000 },
    { year: 2023, demand: 85, salary: 680000 },
    { year: 2024, demand: 92, salary: 750000 },
  ],
  salaryByExperience: [
    { experience: "0-1 years", salary: 450000 },
    { experience: "1-3 years", salary: 650000 },
    { experience: "3-5 years", salary: 950000 },
    { experience: "5+ years", salary: 1200000 },
  ],
  careerPaths: [
    { title: "Full Stack Developer", growth: "High", salary: "₹6-12 LPA" },
    { title: "React Developer", growth: "Very High", salary: "₹5-10 LPA" },
    { title: "Node.js Developer", growth: "High", salary: "₹6-11 LPA" },
    { title: "Technical Lead", growth: "High", salary: "₹12-18 LPA" },
  ],
  whatYouLearn: [
    "MongoDB database design and operations",
    "Express.js server-side development",
    "React.js frontend development",
    "Node.js backend programming",
    "RESTful API development",
    "Authentication and authorization",
    "State management with Redux",
    "Deployment and DevOps basics",
  ],
  courseFeatures: [
    "Live coding sessions",
    "Project-based learning",
    "Industry mentorship",
    "Career guidance",
    "Lifetime access to materials",
    "Certificate of completion",
    "Job placement assistance",
    "24/7 doubt support",
  ],
  salaryStatistics: [
    {
      title: "Average Salary in India",
      lpa: "₹7.5 LPA",
      subtitle: "Based on current market data",
    },
    {
      title: "Top Earners (90th percentile)",
      lpa: "₹15 LPA",
      subtitle: "Experienced professionals",
    },
    {
      title: "Entry Level Range",
      lpa: "₹4.5 LPA",
      subtitle: "Fresh graduates",
    },
  ],
  marketInsights: [
    {
      title: "Industry Size",
      content: "$180 billion",
      subtitle: "Expected market size by 2025",
    },
    {
      title: "Job Growth Rate",
      content: "22%",
      subtitle: "Faster than average growth",
    },
    {
      title: "Remote Work",
      content: "85%",
      subtitle: "Positions offer remote work",
    },
  ],
  hiringCompanies: [
    "Google",
    "Amazon",
    "Microsoft",
    "Meta",
    "Netflix",
    "Uber",
    "Airbnb",
    "Spotify",
    "Flipkart",
    "Swiggy",
    "Zomato",
    "Paytm",
    "PhonePe",
    "Byju's",
    "Unacademy",
  ],
};
