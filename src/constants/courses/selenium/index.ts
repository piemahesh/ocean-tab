import { MOBILE_DEV_ICON, SELENIUM_ICON } from "../../../assets";
import type { CourseData } from "../../../types";
import SELENIUM_SYLLABUS from "./selinium.json";

export const SELENIUM_COURSE: CourseData = {
  courseImg: SELENIUM_ICON,
  courseName: "Selenium Java",
  courseIcon: MOBILE_DEV_ICON,
  courseId: 18,
  syllabus: SELENIUM_SYLLABUS,
  description:
    "Master automated testing with Selenium WebDriver and Java. Learn test frameworks, CI/CD integration, and become a certified automation testing professional.",
  duration: "3-4 months",
  students: 9800,
  rating: 4.4,
  level: "Intermediate",
  price: "₹42,999",
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
  completionRate: 76,
  growthData: [
    { year: 2022, demand: 58, salary: 6.8 },
    { year: 2023, demand: 65, salary: 7.2 },
    { year: 2024, demand: 72, salary: 7.8 },
    { year: 2025, demand: 78, salary: 8.3 },
  ],
  salaryByExperience: [
    { experience: "0-2 years", salary: 4.5 },
    { experience: "2-5 years", salary: 7.8 },
    { experience: "5-8 years", salary: 12.5 },
    { experience: "8+ years", salary: 18.0 },
  ],
  careerPaths: [
    { title: "Automation Test Engineer", growth: "High", salary: "₹5-10 LPA" },
    { title: "QA Engineer", growth: "High", salary: "₹6-12 LPA" },
    { title: "Test Lead", growth: "Very High", salary: "₹10-20 LPA" },
    { title: "QA Manager", growth: "High", salary: "₹15-30 LPA" },
  ],
  whatYouLearn: [
    "Selenium WebDriver with Java",
    "Test framework development (TestNG, JUnit)",
    "Page Object Model design pattern",
    "API testing and integration",
    "CI/CD pipeline integration",
    "Performance and load testing",
  ],
  courseFeatures: [
    "Hands-on automation projects",
    "Industry-standard tools and frameworks",
    "Test case design and execution",
    "Bug tracking and reporting",
    "Continuous integration setup",
    "Interview preparation for QA roles",
  ],
  salaryStatistics: [
    {
      title: "Average Salary in India",
      lpa: "₹7.8 LPA",
      subtitle: "Based on current market data",
    },
    {
      title: "Top Earners (90th percentile)",
      lpa: "₹18.0 LPA",
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
      content: "$45 billion",
      subtitle: "Expected market size by 2025",
    },
    {
      title: "Job Growth Rate",
      content: "20% annually",
      subtitle: "Faster than average growth",
    },
    {
      title: "Remote Work",
      content: "72%",
      subtitle: "Positions offer remote work",
    },
  ],
  hiringCompanies: [
    "Accenture",
    "TCS",
    "Infosys",
    "Wipro",
    "Cognizant",
    "HCL",
    "Capgemini",
    "Tech Mahindra",
    "L&T Infotech",
    "Mindtree",
    "Amazon",
    "Microsoft",
    "Google",
    "IBM",
    "Oracle",
    "SAP",
    "Salesforce",
    "Adobe",
    "Intuit",
    "ServiceNow",
  ],
};
