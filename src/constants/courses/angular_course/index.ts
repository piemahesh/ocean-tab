import { ANGULAR_ICON, WEB_ICON } from "../../../assets";
import type { CourseData } from "../../../types";
import ANGULAR_SYLLABUS from "./angular_data.json";

export const ANGULAR_COURSE: CourseData = {
  courseImg: ANGULAR_ICON,
  courseName: "ANGULAR",
  courseIcon: WEB_ICON,
  courseId: 1,
  description:
    "Learn Angular, a powerful TypeScript-based framework developed by Google for building scalable and high-performance single-page applications. Explore component-driven architecture, routing, services, and state management in real-world projects.",
  rating: 4.7,
  duration: "1 Month",
  students: 250,
  level: "Intermediate",
  price: "₹10,000",
  syllabus: ANGULAR_SYLLABUS,
  avgSalary: {
    fresher: "₹4.5 LPA",
    experienced: "₹12 LPA",
    average: "₹8.2 LPA",
  },
  availability: {
    online: true,
    offline: true,
    hybrid: true,
  },
  completionRate: 97,
  growthData: [
    { year: 2020, demand: 65, salary: 550000 },
    { year: 2021, demand: 72, salary: 620000 },
    { year: 2022, demand: 78, salary: 680000 },
    { year: 2023, demand: 85, salary: 750000 },
    { year: 2024, demand: 92, salary: 820000 },
  ],
  salaryByExperience: [
    { experience: "0-1 years", salary: 450000 },
    { experience: "1-3 years", salary: 650000 },
    { experience: "3-5 years", salary: 950000 },
    { experience: "5-8 years", salary: 1350000 },
    { experience: "8+ years", salary: 1800000 },
  ],
  careerPaths: [
    { title: "Frontend Developer", growth: "High", salary: "₹6-12 LPA" },
    { title: "Angular Developer", growth: "Very High", salary: "₹8-15 LPA" },
    { title: "Full Stack Developer", growth: "High", salary: "₹10-18 LPA" },
    { title: "Technical Lead", growth: "Medium", salary: "₹15-25 LPA" },
  ],
  whatYouLearn: [
    "Angular framework fundamentals",
    "TypeScript programming",
    "Component architecture",
    "Services and dependency injection",
    "Routing and navigation",
    "Form handling and validation",
    "HTTP client and API integration",
    "State management with NgRx",
    "Testing with Jasmine and Karma",
    "Deployment and optimization",
  ],
  courseFeatures: [
    "Live instructor-led sessions",
    "Hands-on projects",
    "Industry-relevant curriculum",
    "Career placement support",
    "Lifetime access to materials",
    "24/7 doubt resolution",
    "Mock interviews",
    "Certificate of completion",
  ],
  salaryStatistics: [
    {
      title: "Average Salary in India",
      lpa: "₹8.2 LPA",
      subtitle: "Based on current market data",
    },
    {
      title: "Top Earners (90th percentile)",
      lpa: "₹18+ LPA",
      subtitle: "Experienced professionals",
    },
    {
      title: "Entry Level Range",
      lpa: "₹4-6 LPA",
      subtitle: "Fresh graduates",
    },
  ],
  marketInsights: [
    {
      title: "Industry Size",
      content: "$89.6 billion",
      subtitle: "Expected market size by 2025",
    },
    {
      title: "Job Growth Rate",
      content: "22%",
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
    "Accenture",
    "TCS",
    "Infosys",
    "Wipro",
    "IBM",
    "Capgemini",
    "HCL",
    "Tech Mahindra",
  ],
};
