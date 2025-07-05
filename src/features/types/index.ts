export interface CourseCardData {
  courseId: string;
  courseName: string;
  courseIcon: string;
  courseImg: string;
  description: string;
  duration: string;
  students: string;
  rating: number;
  level: string;
  price: string;
}

interface SkillData {
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
