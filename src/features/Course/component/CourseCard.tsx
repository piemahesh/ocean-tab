import type { FC } from "react";
import type { CourseCardData } from "../../types";
import { Link } from "react-router-dom";

export const CourseCard: FC<CourseCardData> = (data) => {
  const { courseIcon, courseId, courseImg, courseName, description } = data;

  return (
    <section className="w-[330px] group hover:scale-105 transition-all duration-500 ring-2 ring-primary shadow-lg shadow-primary/15  bg-white h-full max-h-fit flex flex-col items-center rounded-xl justify-center p-4 gap-2 card-shadow">
      <div className="h-24 group-hover:scale-[1.1] transition-all duration-500 w-24 mb-5">
        <img
          className="object-contain h-full w-full"
          src={courseImg}
          alt="angular"
        />
      </div>
      <div className="flex group-hover:scale-[1.1] transition-all duration-500  items-center p-2 rounded-xs justify-center gap-4">
        <img
          src={courseIcon}
          className="h-6 w-6 object-contain"
          alt="angular"
        />
        <h4 className="text-grad text-xl font-semibold whitespace-nowrap">
          {courseName}
        </h4>
      </div>
      {/* inner card */}
      <div className="shadow-xl flex flex-col shadow-primary/30 p-4 rounded-lg gap-4">
        <p className="text-start text-gray-600">{description}</p>
        <Link className="course-btn" to={`/course/${courseId}`}>
          more details
        </Link>
      </div>
    </section>
  );
};
