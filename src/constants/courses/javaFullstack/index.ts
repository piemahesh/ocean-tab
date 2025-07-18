import { JAVA_FULLSTACK_ICON, MOBILE_DEV_ICON } from "../../../assets";
import type { CourseData } from "../../../types";
import JAVA_FULLSTACK_SYALLABUS from "./javafullstack.json";

export const JAVA_FULLSTACK_COURSE: CourseData = {
  courseImg: JAVA_FULLSTACK_ICON,
  courseName: "JAVA FULLSTACK",
  courseIcon: MOBILE_DEV_ICON,
  courseId: 8,
  syllabus: JAVA_FULLSTACK_SYALLABUS,
  description:
    "Comprehensive Java Full Stack development course covering core Java, advanced concepts, SQL database management, JSP, Servlets, and modern frameworks like Spring Boot.",
  duration: "6-7 months",
  students: 1700,
  rating: 4.6,
  level: "Beginner to Advanced",
  price: "₹36,000",
  avgSalary: {
    fresher: "₹5.2 LPA",
    experienced: "₹15 LPA",
    average: "₹9.1 LPA",
  },
  availability: {
    online: true,
    offline: true,
    hybrid: true,
  },
  completionRate: 82,
  growthData: [
    { year: 2022, demand: 70, salary: 7.8 },
    { year: 2023, demand: 75, salary: 8.5 },
    { year: 2024, demand: 80, salary: 9.1 },
    { year: 2025, demand: 85, salary: 9.8 },
  ],
  salaryByExperience: [
    { experience: "0-2 years", salary: 5.2 },
    { experience: "2-5 years", salary: 9.1 },
    { experience: "5-8 years", salary: 15.5 },
    { experience: "8+ years", salary: 25.0 },
  ],
  careerPaths: [
    { title: "Java Developer", growth: "High", salary: "₹6-12 LPA" },
    { title: "Full Stack Developer", growth: "Very High", salary: "₹8-18 LPA" },
    {
      title: "Senior Software Engineer",
      growth: "Excellent",
      salary: "₹15-30 LPA",
    },
    { title: "Technical Lead", growth: "High", salary: "₹20-45 LPA" },
  ],
  whatYouLearn: [
    "Core Java programming and OOP concepts",
    "Advanced Java features and collections",
    "Database design and SQL optimization",
    "JSP and Servlet development",
    "Spring Framework and Spring Boot",
    "RESTful web services and API development",
  ],
  courseFeatures: [
    "Industry-standard IDE and development tools",
    "Real-world project development",
    "Code review and best practices",
    "Interview preparation and mock tests",
    "Career guidance and placement support",
    "Community access and peer learning",
  ],
  salaryStatistics: [
    {
      title: "Average Salary in India",
      lpa: "₹9.1 LPA",
      subtitle: "Based on current market data",
    },
    {
      title: "Top Earners (90th percentile)",
      lpa: "₹25.0 LPA",
      subtitle: "Experienced professionals",
    },
    {
      title: "Entry Level Range",
      lpa: "₹5.2 LPA",
      subtitle: "Fresh graduates",
    },
  ],
  marketInsights: [
    {
      title: "Industry Size",
      content: "$157 billion",
      subtitle: "Expected market size by 2025",
    },
    {
      title: "Job Growth Rate",
      content: "19% annually",
      subtitle: "Faster than average growth",
    },
    {
      title: "Remote Work",
      content: "65%",
      subtitle: "Positions offer remote work",
    },
  ],
  hiringCompanies: [
    "Oracle",
    "IBM",
    "Accenture",
    "TCS",
    "Infosys",
    "Wipro",
    "HCL",
    "Cognizant",
    "Capgemini",
    "Tech Mahindra",
    "Amazon",
    "Microsoft",
    "Google",
    "Flipkart",
    "Paytm",
    "Zomato",
    "Swiggy",
    "Ola",
    "Uber",
    "PayPal",
  ],
};
