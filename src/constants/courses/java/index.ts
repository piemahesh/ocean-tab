import { JAVA_ICON, MOBILE_DEV_ICON } from "../../../assets";
import type { CourseData } from "../../../types";
import JAVA_SYLLABUS from "./java.json";

export const JAVA_COURSE: CourseData = {
  index: 6,
  courseImg: JAVA_ICON,
  courseName: "JAVA",
  courseIcon: MOBILE_DEV_ICON,
  courseId: 6,
  description:
    "Learn Java, a versatile and object-oriented programming language used in enterprise systems, Android development, and backend APIs. Gain expertise in OOP principles, exception handling, multithreading, and build robust applications.",
  rating: 4.8,
  duration: "3 Months",
  students: 1150,
  level: "Intermediate",
  price: "₹16,000",
  syllabus: JAVA_SYLLABUS,
  avgSalary: {
    fresher: "₹4.5 LPA",
    experienced: "₹15 LPA",
    average: "₹9.8 LPA",
  },
  availability: {
    online: true,
    offline: true,
    hybrid: true,
  },
  completionRate: 76,
  growthData: [
    { year: 2020, demand: 72, salary: 580000 },
    { year: 2021, demand: 76, salary: 640000 },
    { year: 2022, demand: 80, salary: 700000 },
    { year: 2023, demand: 85, salary: 760000 },
    { year: 2024, demand: 89, salary: 820000 },
  ],
  salaryByExperience: [
    { experience: "0-1 years", salary: 450000 },
    { experience: "1-3 years", salary: 680000 },
    { experience: "3-5 years", salary: 1000000 },
    { experience: "5-8 years", salary: 1500000 },
    { experience: "8+ years", salary: 2100000 },
  ],
  careerPaths: [
    { title: "Java Developer", growth: "High", salary: "₹6-12 LPA" },
    { title: "Backend Developer", growth: "High", salary: "₹7-15 LPA" },
    {
      title: "Full Stack Developer",
      growth: "Very High",
      salary: "₹8-16 LPA",
    },
    { title: "Java Architect", growth: "Medium", salary: "₹18-30 LPA" },
  ],
  whatYouLearn: [
    "Java fundamentals and OOP",
    "Collections and generics",
    "Exception handling",
    "Multithreading and concurrency",
    "JDBC and database connectivity",
    "Spring framework basics",
    "Spring Boot development",
    "RESTful web services",
    "Testing with JUnit",
    "Build tools (Maven, Gradle)",
  ],
  courseFeatures: [
    "Comprehensive Java curriculum",
    "Real-world project development",
    "Industry-standard frameworks",
    "Expert instructor guidance",
    "Live coding demonstrations",
    "Code review sessions",
    "Interview preparation",
    "Job placement support",
  ],
  salaryStatistics: [
    {
      title: "Average Salary in India",
      lpa: "₹9.8 LPA",
      subtitle: "Based on current market data",
    },
    {
      title: "Top Earners (90th percentile)",
      lpa: "₹21+ LPA",
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
      content: "$108.7 billion",
      subtitle: "Expected market size by 2025",
    },
    {
      title: "Job Growth Rate",
      content: "20%",
      subtitle: "Faster than average growth",
    },
    {
      title: "Remote Work",
      content: "68%",
      subtitle: "Positions offer remote work",
    },
  ],
  hiringCompanies: [
    "Oracle",
    "IBM",
    "Accenture",
    "Capgemini",
    "TCS",
    "Infosys",
    "Wipro",
    "Amazon",
    "Microsoft",
    "Goldman Sachs",
  ],
};
