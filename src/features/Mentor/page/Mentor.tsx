import { Header } from "../../shared";
import { MentorCard } from "../component";

export const Mentor = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header heading="Meet Our Mentors" />
      <div>
        <MentorCard />
      </div>
    </div>
  );
};
