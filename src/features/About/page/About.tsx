
import { Header } from "../../shared";
import { useState, useEffect } from "react";

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => setIsVisible(true), 100);
    setTimeout(() => setTextVisible(true), 600);
  }, []);

  const stats = [
    { number: "5000+", label: "Students Graduated" },
    { number: "15+", label: "Years Experience" },
    { number: "100%", label: "Success Rate" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-4 lg:p-8">
        <Header heading="About us" />

        {/* Hero Section */}
        <section className="mt-8 lg:mt-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Image Section */}
              <div
                className={`relative transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-20 opacity-0"
                }`}
              >
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-2xl blur opacity-15 group-hover:opacity-25 transition duration-1000"></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-200 shadow-xl">
                    <img
                      src="https://img.freepik.com/free-photo/silhouette-confident-businesspeople_1098-1768.jpg?semt=ais_hybrid&w=740"
                      alt="Ocean Academy Team"
                      className="w-full h-64 lg:h-80 object-cover rounded-xl transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div
                className={`space-y-6 transform transition-all duration-1000 delay-300 ${
                  textVisible
                    ? "translate-x-0 opacity-100"
                    : "translate-x-20 opacity-0"
                }`}
              >
                <div className="space-y-4">
                  <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-l from-tertiary via-primary to-secondary bg-clip-text text-transparent leading-tight">
                    Ocean Academy
                  </h2>
                  <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                  <p className="text-xl text-transparent bg-gradient-to-tl bg-clip-text from-secondary to-tertiary font-medium">
                    Computer Technology & Consultancy Firm
                  </p>
                </div>

                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    Ocean Academy stands as a leading name in IT education,
                    software production, and IT services, having graduated more
                    than{" "}
                    <span className="text-cyan-600 font-semibold">
                      5,000 students
                    </span>
                    .
                  </p>
                  <p>
                    Built from the outset on the concept of constructing and
                    introducing brilliant innovations that generate change for
                    students and customers. It's the only location where
                    excellence and technology intersect.
                  </p>
                  <p>
                    We have enabled digital technologies in numerous fields and
                    continue fostering the latest technology among students and
                    clients, enhancing the quality of learning and preparing
                    students for emerging technologies.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    ISO 9001:2008 Certified
                  </div>
                  <div className="bg-gray-100 text-gray-800 px-6 py-3 rounded-full font-semibold border border-gray-300 hover:bg-gray-200 transform hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    Since 2007
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-16 lg:mt-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-lg transform transition-all duration-700 hover:scale-105 hover:bg-white/90 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 200 + 800}ms` }}
                >
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-secondary from-35% to-primary bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm lg:text-base font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mt-16 lg:mt-24 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <div
              className={`space-y-6 transform transition-all duration-1000 ${
                textVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-l from-25% from-tertiary to-primary mb-6">
                Our Mission
              </h3>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-xl">
                <p className="text-lg text-gray-700 leading-relaxed">
                  We engage in the growth of experts who trust themselves and
                  are trained in recent advancements in their particular fields.
                  Experts who are competent and willing to succeed in a
                  demanding environment, working toward a core of excellence to
                  enhance the level of learning and science.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
