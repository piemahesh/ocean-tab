import { motion } from "framer-motion";
import { BANNER, OCN_ICON } from "../../../assets";
export const Home = () => {
  return (
    <main className="   max-h-full  relative mx-auto   p-5  ">
      <div className="flex gap-3 w-full  items-center justify-center">
        <div className="h-28 w-28 min-h-16 min-w-16">
          <img
            className="h-full w-full object-contain border"
            src={OCN_ICON}
            alt="logo"
          />
        </div>
        <h4 className="text-sky-500 text-[2em] sm:text-[4em] font-bold">
          Ocean Academy
        </h4>
      </div>
      <div className="flex  h-full flex-wrap-reverse gap-2 w-full  items-center justify-center ">
        <div className="w-full text-start self-end  sm:max-w-[50%]">
          <h1 className="text-primary/90  font-bold text-[1.8em] sm:text-[2.4em]">
            WELCOME TO OCEAN ACADEMY
          </h1>
          <h2 className="text-grad text-2xl">
            Shape Your Future with Industry-Ready Skills
          </h2>
          <p className=" text-xl w-full max-w-3xl mt-4 text-secondary/60 text-start">
            The Ocean Academy was built from the outset on the concept of
            constructing and introducing brilliant innovations that generate
            change for students and customers. It's the only location where
            excellence and technology intersect. We have allowed digital
            technologies in numerous fields and are still enabling and fostering
            the latest technology among students and clients. Students and their
            lives are also enhancing the quality of learning. We understand the
            value of the interests of students and consumers and therefore
            satisfy them with the highest level of service. Improving students'
            readiness to accept emerging technologies and therefore their
            ability to go beyond them. We engage in the growth of experts who
            trust themselves and are trained in the recent advancements in their
            particular fields, experts who are competent and willing to succeed
            in a demanding environment. In 2010, we officially launched our
            creation of an IT trail. It is an entity with a certification of
            9001:2008 which will continue to aspire and seek to be creative in
            all areas. We are working toward a core of excellence to enhance the
            level of learning and science.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="h-[300px] sm:h-[600px] w-[300px] sm:w-[600px]"
        >
          <img src={BANNER} className="h-full w-full object-cover" alt="" />
        </motion.div>
      </div>
    </main>
  );
};
