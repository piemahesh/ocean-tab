import { MOBILE_DEV_ICON, REACT_ICON } from "../../../assets";
import type { CourseData } from "../../../types";
import REACT_SYLLABUS from "./reactjs.json";

export const REACT_COURSE: CourseData = {
  courseImg: REACT_ICON,
  courseName: "REACT",
  courseIcon: MOBILE_DEV_ICON,
  courseId: 17,
  description:
    "Dive into React, the popular JavaScript library from Meta for building dynamic and component-based user interfaces. Understand virtual DOM, hooks, state management, and how to build high-performing web and mobile applications with ease.",
  rating: 4.9,
  duration: "1 Month",
  students: 1800,
  level: "Advanced",
  price: "₹10,000",
  syllabusLink:
    "https://firebasestorage.googleapis.com/v0/b/oceanlivereact.appspot.com/o/ocean_assets%2Ffinal_syllabus%2FReact%20Syllabus.pdf?alt=media&token=a9538ae6-85c7-4b0c-94e2-5bd42e8ded09",
  syllabus: REACT_SYLLABUS,
  avgSalary: {
    fresher: "₹5 LPA",
    experienced: "₹13 LPA",
    average: "₹8 LPA",
  },
  availability: {
    online: true,
    offline: true,
    hybrid: true,
  },
  completionRate: 99,
  growthData: [
    { year: 2020, demand: 75, salary: 500000 },
    { year: 2021, demand: 82, salary: 580000 },
    { year: 2022, demand: 88, salary: 680000 },
    { year: 2023, demand: 94, salary: 750000 },
    { year: 2024, demand: 98, salary: 800000 },
  ],
  salaryByExperience: [
    { experience: "0-1 years", salary: 500000 },
    { experience: "1-3 years", salary: 720000 },
    { experience: "3-5 years", salary: 1050000 },
    { experience: "5+ years", salary: 1300000 },
  ],
  careerPaths: [
    { title: "React Developer", growth: "Very High", salary: "₹6-13 LPA" },
    { title: "Frontend Developer", growth: "High", salary: "₹5-11 LPA" },
    { title: "UI Developer", growth: "High", salary: "₹5-10 LPA" },
    { title: "Frontend Architect", growth: "High", salary: "₹12-20 LPA" },
  ],
  whatYouLearn: [
    "React fundamentals and JSX",
    "Component lifecycle and hooks",
    "State management with Redux",
    "Routing with React Router",
    "Form handling and validation",
    "API integration and HTTP requests",
    "Testing with Jest and React Testing Library",
    "Performance optimization techniques",
  ],
  courseFeatures: [
    "Interactive coding exercises",
    "Real-world project portfolio",
    "Live code reviews",
    "Industry best practices",
    "Modern development tools",
    "Certificate of completion",
    "Job placement assistance",
    "Community support",
  ],
  salaryStatistics: [
    {
      title: "Average Salary in India",
      lpa: "₹8 LPA",
      subtitle: "Based on current market data",
    },
    {
      title: "Top Earners (90th percentile)",
      lpa: "₹16 LPA",
      subtitle: "Experienced professionals",
    },
    {
      title: "Entry Level Range",
      lpa: "₹5 LPA",
      subtitle: "Fresh graduates",
    },
  ],
  marketInsights: [
    {
      title: "Industry Size",
      content: "$120 billion",
      subtitle: "Expected market size by 2025",
    },
    {
      title: "Job Growth Rate",
      content: "25%",
      subtitle: "Faster than average growth",
    },
    {
      title: "Remote Work",
      content: "90%",
      subtitle: "Positions offer remote work",
    },
  ],
  hiringCompanies: [
    "Meta",
    "Netflix",
    "Airbnb",
    "Uber",
    "WhatsApp",
    "Instagram",
    "Dropbox",
    "Spotify",
    "Slack",
    "Flipkart",
    "Zomato",
    "Swiggy",
    "Paytm",
    "Razorpay",
    "Freshworks",
  ],
};
