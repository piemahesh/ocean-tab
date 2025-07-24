export interface SyllabusData {
  title: string;
  topics?: string[];
}
export interface AvgSalaryData {
  fresher: string;
  experienced: string;
  average: string;
}

export interface CourseAvailability {
  online: boolean;
  offline: boolean;
  hybrid: boolean;
}
export interface GrowthData {
  year: number;
  demand: number;
  salary: number;
}
export interface SalaryByExperience {
  experience: string;
  salary: number;
}
export interface CareerPathsData {
  title: string;
  growth: string;
  salary: string;
}
export interface StatsData {
  title: string;
  lpa: string;
  subtitle: string;
}
export interface InsightData {
  title: string;
  content: string;
  subtitle: string;
}
export interface CourseData {
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
  avgSalary: AvgSalaryData;
  availability: CourseAvailability;
  completionRate: number;
  growthData: GrowthData[];
  salaryByExperience: SalaryByExperience[];
  careerPaths: CareerPathsData[];
  whatYouLearn: string[];
  courseFeatures: string[];
  salaryStatistics: StatsData[];
  marketInsights: InsightData[];
  hiringCompanies: string[];
  syllabusLink: string;
}
