import type { CourseData } from "../../types";
import { ANGULAR_COURSE } from "./angular_course";
import { C_PLUS_COURSE } from "./c_plus";
import { C_COURSE } from "./c_prog";
import { DATA_ANALYTICS_COURSE } from "./data_analytics";
import { FLUTTER_COURSE } from "./flutter";
import { FRONTEND_COURSE } from "./frontend";
import { JAVA_COURSE } from "./java";
import { JAVA_FULLSTACK_COURSE } from "./javaFullstack";
import { JAVASCRIPT_COURSE } from "./js";
import { MEAN_COURSE } from "./mean";
import { MERN_COURSE } from "./mern";
import { SQL_COURSE } from "./sql";
import { POWER_BI_COURSE } from "./powerBi";
import { PYTHON_COURSE } from "./python";
import { PYTHON_FULLSTACK_COURSE } from "./pythonFullstack";
import { REACT_COURSE } from "./react";
import { UI_UX_COURSE } from "./ui_ux";

export const OCEAN_COURSES: CourseData[] = [
  MEAN_COURSE,
  MERN_COURSE,
  JAVA_FULLSTACK_COURSE,
  JAVA_COURSE,
  PYTHON_COURSE,
  PYTHON_FULLSTACK_COURSE,
  DATA_ANALYTICS_COURSE,
  FRONTEND_COURSE,
  UI_UX_COURSE,
  POWER_BI_COURSE,
  ANGULAR_COURSE,
  REACT_COURSE,
  FLUTTER_COURSE,
  JAVASCRIPT_COURSE,
  C_COURSE,
  C_PLUS_COURSE,
  SQL_COURSE,
];

OCEAN_COURSES.map((course) => {
  console.log(course.courseId, course.courseName);
});
