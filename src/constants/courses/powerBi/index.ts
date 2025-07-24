import { MOBILE_DEV_ICON, POWER_BI_ICON } from "../../../assets";
import type { CourseData } from "../../../types";
import POWER_BI_SYLLABUS from "./powerbi.json";

export const POWER_BI_COURSE: CourseData = {
  courseImg: POWER_BI_ICON,
  courseName: "POWER BI",
  courseIcon: MOBILE_DEV_ICON,
  courseId: 14,
  syllabusLink:
    "https://firebasestorage.googleapis.com/v0/b/oceanlivereact.appspot.com/o/ocean_assets%2Ffinal_syllabus%2FPower_bi_syllabus.pdf?alt=media&token=e74051bd-a933-4aa7-86fa-58be4bdd19bd",
  syllabus: POWER_BI_SYLLABUS,
  description:
    "Become a Power BI expert with comprehensive training in data modeling, DAX, advanced visualizations, and business intelligence solutions for enterprise environments.",
  duration: "1-2 months",
  students: 50,
  rating: 4.9,
  level: "Beginner to Advanced",
  price: "₹16,000",
  avgSalary: {
    fresher: "₹4.8 LPA",
    experienced: "₹13 LPA",
    average: "₹8.2 LPA",
  },
  availability: {
    online: true,
    offline: true,
    hybrid: true,
  },
  completionRate: 89,
  growthData: [
    { year: 2022, demand: 62, salary: 7.1 },
    { year: 2023, demand: 71, salary: 7.6 },
    { year: 2024, demand: 80, salary: 8.2 },
    { year: 2025, demand: 87, salary: 8.8 },
  ],
  salaryByExperience: [
    { experience: "0-2 years", salary: 4.8 },
    { experience: "2-5 years", salary: 8.2 },
    { experience: "5-8 years", salary: 13.5 },
    { experience: "8+ years", salary: 19.0 },
  ],
  careerPaths: [
    { title: "Power BI Developer", growth: "High", salary: "₹6-12 LPA" },
    {
      title: "Business Intelligence Analyst",
      growth: "Very High",
      salary: "₹7-15 LPA",
    },
    { title: "Data Analyst", growth: "Excellent", salary: "₹8-18 LPA" },
    { title: "BI Consultant", growth: "High", salary: "₹12-25 LPA" },
  ],
  whatYouLearn: [
    "Power BI Desktop and Service",
    "Advanced DAX formulas and calculations",
    "Data modeling and relationships",
    "Custom visualizations and reports",
    "Power Query for data transformation",
    "Enterprise deployment and security",
  ],
  courseFeatures: [
    "Microsoft certified curriculum",
    "Real business case studies",
    "Dashboard creation workshops",
    "Performance optimization techniques",
    "Integration with other Microsoft tools",
    "Industry certification preparation",
  ],
  salaryStatistics: [
    {
      title: "Average Salary in India",
      lpa: "₹8.2 LPA",
      subtitle: "Based on current market data",
    },
    {
      title: "Top Earners (90th percentile)",
      lpa: "₹19.0 LPA",
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
      content: "$18.3 billion",
      subtitle: "Expected market size by 2025",
    },
    {
      title: "Job Growth Rate",
      content: "23% annually",
      subtitle: "Faster than average growth",
    },
    {
      title: "Remote Work",
      content: "68%",
      subtitle: "Positions offer remote work",
    },
  ],
  hiringCompanies: [
    "Microsoft",
    "Accenture",
    "Deloitte",
    "PwC",
    "EY",
    "KPMG",
    "IBM",
    "Capgemini",
    "TCS",
    "Infosys",
    "Wipro",
    "HCL",
    "Cognizant",
    "Tech Mahindra",
    "L&T Infotech",
    "Mindtree",
    "Mphasis",
    "Hexaware",
    "Coforge",
    "Zensar",
  ],
};
