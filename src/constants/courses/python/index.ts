import { MOBILE_DEV_ICON, PYTHON_ICON } from "../../../assets";
import type { CourseData } from "../../../types";
import PYTHON_SYLLABUS from "./python.json";

export const PYTHON_COURSE: CourseData = {
  courseImg: PYTHON_ICON,
  courseName: "Python",
  courseIcon: MOBILE_DEV_ICON,
  courseId: 15,
  syllabus: PYTHON_SYLLABUS,
  description:
    "Master Python programming from basics to advanced concepts. Learn data structures, algorithms, web development, automation, and prepare for a career in software development.",
  duration: "3-4 months",
  students: 22400,
  rating: 4.8,
  level: "Beginner to Intermediate",
  price: "₹39,999",
  avgSalary: {
    fresher: "₹4.2 LPA",
    experienced: "₹14 LPA",
    average: "₹8.3 LPA",
  },
  availability: {
    online: true,
    offline: true,
    hybrid: true,
  },
  completionRate: 91,
  growthData: [
    { year: 2022, demand: 80, salary: 7.2 },
    { year: 2023, demand: 88, salary: 7.8 },
    { year: 2024, demand: 92, salary: 8.3 },
    { year: 2025, demand: 96, salary: 9.0 },
  ],
  salaryByExperience: [
    { experience: "0-2 years", salary: 4.2 },
    { experience: "2-5 years", salary: 8.3 },
    { experience: "5-8 years", salary: 14.5 },
    { experience: "8+ years", salary: 22.0 },
  ],
  careerPaths: [
    { title: "Python Developer", growth: "Excellent", salary: "₹5-12 LPA" },
    { title: "Data Scientist", growth: "Very High", salary: "₹10-25 LPA" },
    {
      title: "Machine Learning Engineer",
      growth: "Excellent",
      salary: "₹12-30 LPA",
    },
    { title: "Backend Developer", growth: "High", salary: "₹8-18 LPA" },
  ],
  whatYouLearn: [
    "Python syntax and programming fundamentals",
    "Data structures and algorithms",
    "Object-oriented programming in Python",
    "File handling and database connectivity",
    "Web development with Flask/Django",
    "Automation and scripting",
  ],
  courseFeatures: [
    "Interactive Python environment",
    "Code challenges and assignments",
    "Project-based learning approach",
    "Industry mentor guidance",
    "Career transition support",
    "Flexible learning schedule",
  ],
  salaryStatistics: [
    {
      title: "Average Salary in India",
      lpa: "₹8.3 LPA",
      subtitle: "Based on current market data",
    },
    {
      title: "Top Earners (90th percentile)",
      lpa: "₹22.0 LPA",
      subtitle: "Experienced professionals",
    },
    {
      title: "Entry Level Range",
      lpa: "₹4.2 LPA",
      subtitle: "Fresh graduates",
    },
  ],
  marketInsights: [
    {
      title: "Industry Size",
      content: "$189 billion",
      subtitle: "Expected market size by 2025",
    },
    {
      title: "Job Growth Rate",
      content: "22% annually",
      subtitle: "Faster than average growth",
    },
    {
      title: "Remote Work",
      content: "75%",
      subtitle: "Positions offer remote work",
    },
  ],
  hiringCompanies: [
    "Google",
    "Microsoft",
    "Amazon",
    "Netflix",
    "Spotify",
    "Instagram",
    "Dropbox",
    "Uber",
    "Airbnb",
    "Tesla",
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "Deloitte",
    "Flipkart",
    "Paytm",
    "Zomato",
    "Swiggy",
    "Ola",
  ],
};
