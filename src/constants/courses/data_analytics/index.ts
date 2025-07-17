import { DATA_ANALYST_ICON, MOBILE_DEV_ICON } from "../../../assets";
import type { CourseData } from "../../../types";
import DATA_ANALYST_SYLLABUS from "./data_analytics.json";

export const DATA_ANALYTICS_COURSE: CourseData = {
  courseImg: DATA_ANALYST_ICON,
  courseName: "data analytics",
  courseIcon: MOBILE_DEV_ICON,
  courseId: 4,
  syllabus: DATA_ANALYST_SYLLABUS,
  description:
    "Master data analytics with industry-leading tools including Power BI, Tableau, SQL, and Excel. Learn to transform raw data into actionable insights through hands-on projects and real-world scenarios.",
  duration: "4-6 months",
  students: 12500,
  rating: 4.7,
  level: "Beginner to Intermediate",
  price: "₹49,999",
  avgSalary: {
    fresher: "₹4.5 LPA",
    experienced: "₹12 LPA",
    average: "₹7.8 LPA",
  },
  availability: {
    online: true,
    offline: true,
    hybrid: true,
  },
  completionRate: 87,
  growthData: [
    { year: 2022, demand: 65, salary: 6.2 },
    { year: 2023, demand: 78, salary: 7.1 },
    { year: 2024, demand: 89, salary: 7.8 },
    { year: 2025, demand: 95, salary: 8.5 },
  ],
  salaryByExperience: [
    { experience: "0-2 years", salary: 4.5 },
    { experience: "2-5 years", salary: 7.8 },
    { experience: "5-8 years", salary: 12.2 },
    { experience: "8+ years", salary: 18.5 },
  ],
  careerPaths: [
    { title: "Data Analyst", growth: "High", salary: "₹6-10 LPA" },
    {
      title: "Business Intelligence Analyst",
      growth: "Very High",
      salary: "₹8-15 LPA",
    },
    { title: "Data Scientist", growth: "Excellent", salary: "₹12-25 LPA" },
    { title: "Analytics Manager", growth: "High", salary: "₹15-30 LPA" },
  ],
  whatYouLearn: [
    "Advanced Excel techniques and data modeling",
    "SQL for data extraction and manipulation",
    "Power BI dashboard creation and visualization",
    "Tableau advanced analytics and storytelling",
    "Statistical analysis and data interpretation",
    "ETL processes and data cleaning techniques",
  ],
  courseFeatures: [
    "Live interactive sessions with industry experts",
    "Hands-on projects with real datasets",
    "Industry-recognized certification",
    "1-on-1 mentorship support",
    "Job placement assistance",
    "Lifetime access to course materials",
  ],
  salaryStatistics: [
    {
      title: "Average Salary in India",
      lpa: "₹7.8 LPA",
      subtitle: "Based on current market data",
    },
    {
      title: "Top Earners (90th percentile)",
      lpa: "₹18.5 LPA",
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
      content: "$274 billion",
      subtitle: "Expected market size by 2025",
    },
    {
      title: "Job Growth Rate",
      content: "25% annually",
      subtitle: "Faster than average growth",
    },
    {
      title: "Remote Work",
      content: "70%",
      subtitle: "Positions offer remote work",
    },
  ],
  hiringCompanies: [
    "Microsoft",
    "Amazon",
    "Google",
    "Accenture",
    "Deloitte",
    "IBM",
    "TCS",
    "Infosys",
    "Wipro",
    "Capgemini",
    "EY",
    "PwC",
    "KPMG",
    "Flipkart",
    "Swiggy",
    "Zomato",
    "Paytm",
    "PhonePe",
    "Ola",
    "Uber",
  ],
};
