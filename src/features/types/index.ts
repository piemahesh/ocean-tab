export interface SyllabusData {
  title: string;
  topics?: string[];
}
export interface CourseCardData {
  courseId: number;
  courseName: string;
  courseIcon: string;
  courseImg: string;
  description: string;
  duration: string;
  students: number;
  rating: number;
  level: string;
  price: string;
  syllabus: SyllabusData[];
}

export interface SkillData {
  skill: string;
  area: string;
}

export interface MentorData {
  _id: string;
  mentorName: string;
  profilePicture: string;
  designation: string;
  linkedIn: string;
  experience: number;
  skills: SkillData[];
  index: number;
}
