import { type FC } from "react";
interface CourseTopicProps {
  title: string;
  topics?: string[];
}

export const CourseTopics: FC<CourseTopicProps> = ({ title, topics }) => {
  return (
    <div className="bg-white  backdrop-blur-2xl   shadow-md w-full rounded-xl p-5 border border-gray-200">
      <h3 className="text-xl font-semibold text-secondary mb-3">{title}</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {topics?.map((topic, i) => (
          <li className="text-gray-500 text-lg" key={i}>
            {topic}
          </li>
        ))}
      </ul>
    </div>
  );
};
