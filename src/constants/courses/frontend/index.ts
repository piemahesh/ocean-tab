import { FRONTEND_ICON, WEB_ICON } from "../../../assets";
import type { CourseData } from "../../../types";
import FRONTEND_SYLLABUS from "./frontenddevelopment.json";

export const FRONTEND_COURSE: CourseData = {
  courseImg: FRONTEND_ICON,
  courseName: "FRONTEND DEV",
  courseIcon: WEB_ICON,
  courseId: 6,
  description:
    "Master the art of building modern, responsive, and interactive websites using core technologies like HTML, CSS, JavaScript, and frameworks such as React and Angular. Learn UI/UX principles and create dynamic user experiences optimized for all devices.",
  rating: 4.8,
  duration: "2-3 Months",
  students: 3200,
  level: "Advanced",
  price: "₹16,000",
  syllabusLink:
    "https://firebasestorage.googleapis.com/v0/b/oceanlivereact.appspot.com/o/ocean_assets%2Ffinal_syllabus%2FFront%20End%20Development%20Syllabus.pdf?alt=media&token=b114c19e-0611-4f79-bb53-43eb13169ca6",
  syllabus: FRONTEND_SYLLABUS,
  avgSalary: {
    fresher: "₹4.2 LPA",
    experienced: "₹12 LPA",
    average: "₹8.1 LPA",
  },
  availability: {
    online: true,
    offline: true,
    hybrid: true,
  },
  completionRate: 99,
  growthData: [
    { year: 2020, demand: 68, salary: 520000 },
    { year: 2021, demand: 75, salary: 590000 },
    { year: 2022, demand: 82, salary: 660000 },
    { year: 2023, demand: 88, salary: 730000 },
    { year: 2024, demand: 94, salary: 810000 },
  ],
  salaryByExperience: [
    { experience: "0-1 years", salary: 420000 },
    { experience: "1-3 years", salary: 620000 },
    { experience: "3-5 years", salary: 920000 },
    { experience: "5-8 years", salary: 1400000 },
    { experience: "8+ years", salary: 1900000 },
  ],
  careerPaths: [
    { title: "Frontend Developer", growth: "Very High", salary: "₹5-12 LPA" },
    { title: "UI Developer", growth: "High", salary: "₹6-14 LPA" },
    { title: "Web Developer", growth: "High", salary: "₹4-10 LPA" },
    { title: "Frontend Architect", growth: "Medium", salary: "₹15-25 LPA" },
  ],
  whatYouLearn: [
    "HTML5 and semantic markup",
    "CSS3 and advanced styling",
    "JavaScript ES6+ features",
    "Responsive web design",
    "CSS frameworks (Bootstrap, Tailwind)",
    "Version control with Git",
    "Build tools and bundlers",
    "Frontend frameworks overview",
    "Performance optimization",
    "Cross-browser compatibility",
  ],
  courseFeatures: [
    "Project-based learning",
    "Industry-relevant curriculum",
    "Live coding sessions",
    "Portfolio development",
    "Responsive design focus",
    "Modern tools and workflows",
    "Code review and feedback",
    "Career preparation",
  ],
  salaryStatistics: [
    {
      title: "Average Salary in India",
      lpa: "₹8.1 LPA",
      subtitle: "Based on current market data",
    },
    {
      title: "Top Earners (90th percentile)",
      lpa: "₹19+ LPA",
      subtitle: "Experienced professionals",
    },
    {
      title: "Entry Level Range",
      lpa: "₹3.5-5 LPA",
      subtitle: "Fresh graduates",
    },
  ],
  marketInsights: [
    {
      title: "Industry Size",
      content: "$95.8 billion",
      subtitle: "Expected market size by 2025",
    },
    {
      title: "Job Growth Rate",
      content: "24%",
      subtitle: "Much faster than average",
    },
    {
      title: "Remote Work",
      content: "78%",
      subtitle: "Positions offer remote work",
    },
  ],
  hiringCompanies: [
    "Netflix",
    "Airbnb",
    "Spotify",
    "Uber",
    "Facebook",
    "Twitter",
    "LinkedIn",
    "Shopify",
    "Stripe",
    "Atlassian",
  ],
};
