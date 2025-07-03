import {
  ANGULAR_ICON,
  C_ICON,
  C_PLUS_ICON,
  FIGMA_ICON,
  FLUTTER_ICON,
  FRONTEND_ICON,
  JAVA_ICON,
  MEAN_ICON,
  MERN_ICON,
  MOBILE_DEV_ICON,
  MYSQL_ICON,
  REACT_ICON,
  WEB_ICON,
} from "../../../assets";
import type { CourseCardData } from "../../types";

export const courses: CourseCardData[] = [
  {
    courseImg: FRONTEND_ICON,
    courseName: "FRONTEND DEV",
    courseIcon: WEB_ICON,
    courseId: 1,
    description:
      "Master the art of building modern, responsive, and interactive websites using core technologies like HTML, CSS, JavaScript, and frameworks such as React and Angular. Learn UI/UX principles and create dynamic user experiences optimized for all devices.",
  },
  {
    courseImg: ANGULAR_ICON,
    courseName: "ANGULAR",
    courseIcon: WEB_ICON,
    courseId: 2,
    description:
      "Learn Angular, a powerful TypeScript-based framework developed by Google for building scalable and high-performance single-page applications. Explore component-driven architecture, routing, services, and state management in real-world projects.",
  },
  {
    courseImg: REACT_ICON,
    courseName: "REACT",
    courseIcon: MOBILE_DEV_ICON,
    courseId: 3,
    description:
      "Dive into React, the popular JavaScript library from Meta for building dynamic and component-based user interfaces. Understand virtual DOM, hooks, state management, and how to build high-performing web and mobile applications with ease.",
  },
  {
    courseImg: C_ICON,
    courseName: "C",
    courseIcon: MOBILE_DEV_ICON,
    courseId: 4,
    description:
      "Begin your programming journey with C, the foundational language for system software, embedded systems, and low-level development. Understand memory management, data structures, and write efficient, high-performance code.",
  },
  {
    courseImg: C_PLUS_ICON,
    courseName: "C++",
    courseIcon: MOBILE_DEV_ICON,
    courseId: 5,
    description:
      "Enhance your programming skills with C++, an object-oriented extension of C used in game development, competitive programming, and real-time systems. Learn about classes, inheritance, polymorphism, and STL (Standard Template Library).",
  },
  {
    courseImg: FIGMA_ICON,
    courseName: "FIGMA",
    courseIcon: MOBILE_DEV_ICON,
    courseId: 6,
    description:
      "Master UI/UX design using Figma, the industry-leading collaborative design tool. Learn how to create wireframes, prototypes, and design systems that bring your digital products to life with intuitive and accessible user experiences.",
  },
  {
    courseImg: JAVA_ICON,
    courseName: "JAVA",
    courseIcon: MOBILE_DEV_ICON,
    courseId: 7,
    description:
      "Learn Java, a versatile and object-oriented programming language used in enterprise systems, Android development, and backend APIs. Gain expertise in OOP principles, exception handling, multithreading, and build robust applications.",
  },
  {
    courseImg: FLUTTER_ICON,
    courseName: "FLUTTER",
    courseIcon: MOBILE_DEV_ICON,
    courseId: 8,
    description:
      "Build beautiful, natively compiled mobile, web, and desktop apps using Flutter and Dart. Learn widget-based architecture, state management, and create cross-platform apps with a single codebase and smooth UI animations.",
  },
  {
    courseImg: MEAN_ICON,
    courseName: "MEAN STACK",
    courseIcon: MOBILE_DEV_ICON,
    courseId: 9,
    description:
      "Become a full-stack developer with the MEAN stack — MongoDB, Express.js, Angular, and Node.js. Learn how to develop complete web applications from backend APIs to dynamic frontends using a single JavaScript-based ecosystem.",
  },
  {
    courseImg: MERN_ICON,
    courseName: "MERN STACK",
    courseIcon: MOBILE_DEV_ICON,
    courseId: 10,
    description:
      "Master the MERN stack — MongoDB, Express.js, React, and Node.js — to build powerful full-stack web applications. Learn to create RESTful APIs, manage frontend and backend integration, and deploy production-ready apps.",
  },
  {
    courseImg: MYSQL_ICON,
    courseName: "MYSQL",
    courseIcon: MOBILE_DEV_ICON,
    courseId: 11,
    description:
      "Learn MySQL, one of the most popular relational database management systems used worldwide. Understand how to design schemas, write complex SQL queries, and manage structured data efficiently for any application.",
  },
];
