export interface CourseCardData {
  courseImg: string;
  courseName: string;
  courseIcon: string;
  courseId: number;
  description: string;
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
