import { FIGMA_ICON, MOBILE_DEV_ICON } from "../../../assets";
import type { CourseData } from "../../../types";
import UI_UX_SYLLABUS from "./ui&ux.json";

export const UI_UX_COURSE: CourseData = {
  courseImg: FIGMA_ICON,
  courseName: "FIGMA",
  courseIcon: MOBILE_DEV_ICON,
  courseId: 19,
  description:
    "Master UI/UX design using Figma, the industry-leading collaborative design tool. Learn how to create wireframes, prototypes, and design systems that bring your digital products to life with intuitive and accessible user experiences.",
  rating: 4.8,
  duration: "1.5 Months",
  students: 850,
  level: "Intermediate",
  price: "₹22,000",
  syllabus: UI_UX_SYLLABUS,
  avgSalary: {
    fresher: "₹4 LPA",
    experienced: "₹12 LPA",
    average: "₹7 LPA",
  },
  availability: {
    online: true,
    offline: true,
    hybrid: true,
  },
  completionRate: 98,
  growthData: [
    { year: 2020, demand: 68, salary: 400000 },
    { year: 2021, demand: 75, salary: 480000 },
    { year: 2022, demand: 82, salary: 580000 },
    { year: 2023, demand: 88, salary: 650000 },
    { year: 2024, demand: 92, salary: 700000 },
  ],
  salaryByExperience: [
    { experience: "0-1 years", salary: 400000 },
    { experience: "1-3 years", salary: 620000 },
    { experience: "3-5 years", salary: 900000 },
    { experience: "5+ years", salary: 1200000 },
  ],
  careerPaths: [
    { title: "UI Designer", growth: "High", salary: "₹5-10 LPA" },
    { title: "UX Designer", growth: "Very High", salary: "₹6-12 LPA" },
    { title: "Product Designer", growth: "High", salary: "₹7-15 LPA" },
    { title: "Design Lead", growth: "High", salary: "₹12-22 LPA" },
  ],
  whatYouLearn: [
    "Design thinking methodology",
    "User research and personas",
    "Wireframing and prototyping",
    "Visual design principles",
    "Figma and Adobe Creative Suite",
    "Interaction design patterns",
    "Usability testing methods",
    "Design system creation",
  ],
  courseFeatures: [
    "Design portfolio development",
    "Industry tools and software",
    "Real client projects",
    "Peer design reviews",
    "Mentorship from design leads",
    "Certificate of completion",
    "Job placement support",
    "Networking opportunities",
  ],
  salaryStatistics: [
    {
      title: "Average Salary in India",
      lpa: "₹7 LPA",
      subtitle: "Based on current market data",
    },
    {
      title: "Top Earners (90th percentile)",
      lpa: "₹15 LPA",
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
      content: "$95 billion",
      subtitle: "Expected market size by 2025",
    },
    {
      title: "Job Growth Rate",
      content: "13%",
      subtitle: "Much faster than average",
    },
    {
      title: "Remote Work",
      content: "85%",
      subtitle: "Positions offer remote work",
    },
  ],
  hiringCompanies: [
    "Google",
    "Apple",
    "Microsoft",
    "Adobe",
    "Figma",
    "Canva",
    "Zomato",
    "Swiggy",
    "Flipkart",
    "Paytm",
    "Ola",
    "Uber",
    "Airbnb",
    "Spotify",
    "Netflix",
  ],
};
