import { MOBILE_DEV_ICON, MYSQL_ICON } from "../../../assets";
import type { CourseData } from "../../../types";
import MY_SQL_SYLLABUS from "./nodejs.json";

export const MY_SQL_COURSE: CourseData = {
  index: 9,
  courseImg: MYSQL_ICON,
  courseName: "MYSQL",
  courseIcon: MOBILE_DEV_ICON,
  courseId: 9,
  description:
    "Learn MySQL, one of the most popular relational database management systems used worldwide. Understand how to design schemas, write complex SQL queries, and manage structured data efficiently for any application.",
  rating: 4.7,
  duration: "2 Months",
  students: 1050,
  level: "Intermediate",
  price: "₹8,000",
  syllabus: MY_SQL_SYLLABUS,
  avgSalary: {
    fresher: "₹4 LPA",
    experienced: "₹10 LPA",
    average: "₹6.5 LPA",
  },
  availability: {
    online: true,
    offline: true,
    hybrid: true,
  },
  completionRate: 98,
  growthData: [
    { year: 2020, demand: 70, salary: 400000 },
    { year: 2021, demand: 75, salary: 450000 },
    { year: 2022, demand: 78, salary: 520000 },
    { year: 2023, demand: 82, salary: 580000 },
    { year: 2024, demand: 85, salary: 650000 },
  ],
  salaryByExperience: [
    { experience: "0-1 years", salary: 400000 },
    { experience: "1-3 years", salary: 580000 },
    { experience: "3-5 years", salary: 800000 },
    { experience: "5+ years", salary: 1000000 },
  ],
  careerPaths: [
    {
      title: "Database Administrator",
      growth: "High",
      salary: "₹6-12 LPA",
    },
    { title: "Database Developer", growth: "Medium", salary: "₹5-9 LPA" },
    { title: "Data Architect", growth: "High", salary: "₹8-15 LPA" },
    { title: "Backend Developer", growth: "High", salary: "₹6-11 LPA" },
  ],
  whatYouLearn: [
    "MySQL installation and configuration",
    "Database design and normalization",
    "SQL query optimization",
    "Backup and recovery strategies",
    "Performance tuning and monitoring",
    "Security best practices",
    "Replication and clustering",
    "Stored procedures and functions",
  ],
  courseFeatures: [
    "Hands-on lab sessions",
    "Real-world database projects",
    "Performance optimization techniques",
    "Industry-standard tools",
    "Certificate of completion",
    "Job placement support",
    "Expert mentorship",
    "Flexible learning schedule",
  ],
  salaryStatistics: [
    {
      title: "Average Salary in India",
      lpa: "₹6.5 LPA",
      subtitle: "Based on current market data",
    },
    {
      title: "Top Earners (90th percentile)",
      lpa: "₹12 LPA",
      subtitle: "Experienced professionals",
    },
    {
      title: "Entry Level Range",
      lpa: "₹4 LPA",
      subtitle: "Fresh graduates",
    },
  ],
  marketInsights: [
    {
      title: "Industry Size",
      content: "$85 billion",
      subtitle: "Expected market size by 2025",
    },
    {
      title: "Job Growth Rate",
      content: "8%",
      subtitle: "Steady growth expected",
    },
    {
      title: "Remote Work",
      content: "70%",
      subtitle: "Positions offer remote work",
    },
  ],
  hiringCompanies: [
    "Oracle",
    "IBM",
    "Microsoft",
    "SAP",
    "TCS",
    "Infosys",
    "Wipro",
    "Cognizant",
    "Accenture",
    "Capgemini",
    "HCL",
    "Tech Mahindra",
    "Mindtree",
    "L&T Infotech",
    "Mphasis",
  ],
};
