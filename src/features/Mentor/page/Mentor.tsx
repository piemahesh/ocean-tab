import { Header } from "../../shared";
import { MentorCard } from "../component";

export const Mentor = () => {
  return (
    <div className="min-h-screen bg-secondary/10">
      <Header heading="Meet Our Mentors" />
      <div>
        <MentorCard />
      </div>
    </div>
  );
};
