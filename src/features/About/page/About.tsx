import { Header } from "../../shared";

export const About = () => {
  return (
    <div className="p-4 h-dvh">
      <Header heading="About us" />
      <section className="flex h-full  flex-wrap items-center justify-center">
        <div className="flex-1  mt-4">
          <img
            src="https://img.freepik.com/free-photo/silhouette-confident-businesspeople_1098-1768.jpg?semt=ais_hybrid&w=740"
            alt=""
          />
        </div>
        <p className="float-right flex-1 max-w-4xl mt-4">
          About us Ocean Academy Computer technology and consultancy firm Ocean
          Academy, a leading name in the areas of IT education, software
          production, and IT services, has graduated more than 5,000 students.
          The Ocean Academy was built from the outset on the concept of
          constructing and introducing brilliant innovations that generate
          change for students and customers. It's the only location where
          excellence and technology intersect. We have allowed digital
          technologies in numerous fields and are still enabling and fostering
          the latest technology among students and clients. Students and their
          lives are also enhancing the quality of learning. We understand the
          value of the interests of students and consumers and therefore satisfy
          them with the highest level of service. Improving students' readiness
          to accept emerging technologies and therefore their ability to go
          beyond them. We engage in the growth of experts who trust themselves
          and are trained in the recent advancements in their particular fields,
          experts who are competent and willing to succeed in a demanding
          environment. In 2010, we officially launched our creation of an IT
          trail. It is an entity with a certification of 9001:2008 which will
          continue to aspire and seek to be creative in all areas. We are
          working toward a core of excellence to enhance the level of learning
          and science.
        </p>
      </section>
    </div>
  );
};
