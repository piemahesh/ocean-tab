import {
  C_ICON,
  FIGMA_ICON,
  FLUTTER_ICON,
  FRONTEND_ICON,
  JAVA_ICON,
  MOBILE_DEV_ICON,
  WEB_ICON,
} from "../../../assets";
import type { CourseCardData } from "../../types";

export const courses: CourseCardData[] = [
  {
    courseId: "1",
    courseName: "Full Stack Development",
    courseIcon: WEB_ICON,
    courseImg: FRONTEND_ICON,
    description:
      "Master modern web development with React, Node.js, and MongoDB. Build scalable applications from scratch.",
    duration: "16 weeks",
    students: "2,847",
    rating: 4.8,
    level: "Intermediate",
    price: "$299",
  },
  {
    courseId: "2",
    courseName: "UI/UX Design",
    courseIcon: WEB_ICON,
    courseImg: FIGMA_ICON,
    description:
      "Create stunning user interfaces and experiences. Learn Figma, prototyping, and design systems.",
    duration: "12 weeks",
    students: "1,923",
    rating: 4.9,
    level: "Beginner",
    price: "$249",
  },
  {
    courseId: "3",
    courseName: "Data Science & Analytics",
    courseIcon: WEB_ICON,
    courseImg: C_ICON,
    description:
      "Unlock insights from data using Python, machine learning, and statistical analysis techniques.",
    duration: "20 weeks",
    students: "3,156",
    rating: 4.7,
    level: "Advanced",
    price: "$399",
  },
  {
    courseId: "4",
    courseName: "Digital Marketing",
    courseIcon: WEB_ICON,
    courseImg: JAVA_ICON,
    description:
      "Master SEO, social media marketing, content strategy, and paid advertising campaigns.",
    duration: "10 weeks",
    students: "4,231",
    rating: 4.6,
    level: "Beginner",
    price: "$199",
  },
  {
    courseId: "5",
    courseName: "Mobile App Development",
    courseIcon: MOBILE_DEV_ICON,
    courseImg: FLUTTER_ICON,
    description:
      "Build native iOS and Android apps using React Native and Flutter frameworks.",
    duration: "14 weeks",
    students: "1,687",
    rating: 4.8,
    level: "Intermediate",
    price: "$349",
  },
  {
    courseId: "6",
    courseName: "Cloud Computing",
    courseIcon: MOBILE_DEV_ICON,
    courseImg: FLUTTER_ICON,
    description:
      "Learn AWS, Azure, and Google Cloud. Master containerization, DevOps, and serverless architecture.",
    duration: "18 weeks",
    students: "2,394",
    rating: 4.9,
    level: "Advanced",
    price: "$449",
  },
];
