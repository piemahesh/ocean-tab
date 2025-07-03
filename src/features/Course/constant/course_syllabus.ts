import {
  ANGULAR,
  C_PLUS,
  C_PROG,
  FLUTTER,
  FRONTEND_DEV,
  JAVA,
  MEAN_STACK,
  MERN_STACK,
  REACT,
  UI_UX,
} from "../../../assets";

interface SyllabusData {
  title: string;
  topics?: string[];
}

interface CourseSyllabus {
  id: number;
  syllabus: SyllabusData[];
}

export const courseSyllabus: CourseSyllabus[] = [
  { id: 1, syllabus: FRONTEND_DEV },
  { id: 2, syllabus: ANGULAR },
  { id: 3, syllabus: REACT },
  { id: 4, syllabus: C_PROG },
  { id: 5, syllabus: C_PLUS },
  { id: 6, syllabus: UI_UX },
  { id: 7, syllabus: JAVA },
  { id: 8, syllabus: FLUTTER },
  { id: 9, syllabus: MEAN_STACK },
  { id: 10, syllabus: MERN_STACK },
  { id: 11, syllabus: MEAN_STACK },
];
