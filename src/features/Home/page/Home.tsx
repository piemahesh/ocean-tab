import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Users,
  Award,
  BookOpen,
  Zap,
  Globe,
  ArrowRight,
  Sparkles,
  Play,
  ChevronRight,
} from "lucide-react";
import { OCN_ICON } from "../../../assets";
import { btnInteraction, vibrateDevice } from "../../../utils";
import { ImageVideo, MainBgElements } from "../..";

export const Home = () => {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { number: "15+", label: "Years of Excellence", icon: Award },
    { number: "10K+", label: "Students Trained", icon: Users },
    { number: "10+", label: "International Workshop", icon: Globe },
    { number: "95%", label: "Success Rate", icon: Star },
  ];

  const features = [
    {
      title: "Industry-Ready Curriculum",
      description: "Learn cutting-edge technologies that employers demand",
      icon: BookOpen,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Expert Mentorship",
      description:
        "Learn from industry professionals with real-world experience",
      icon: Users,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Innovation Lab",
      description:
        "Access to latest tools and technologies for hands-on learning",
      icon: Zap,
      color: "from-orange-500 to-red-500",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen  pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50  relative overflow-hidden">
      {/* Background Elements */}
      <MainBgElements />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center flex-wrap justify-center gap-4 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            className="relative group"
          >
            <div className="relative h-24 w-24 p-[3px] rounded-2xl bg-gradient-to-tr from-[#d7d7d7] via-[#a0a0a0] to-[#e2e2e2] shadow-[0_4px_12px_rgba(0,0,0,0.2)]">
              <div className="h-full w-full rounded-2xl bg-white flex items-center justify-center">
                <img
                  className="h-5/6 w-5/6 object-contain"
                  src={OCN_ICON}
                  alt="Ocean Academy Logo"
                />
              </div>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-ubuntu md:text-6xl font-bold text-secondary text-shadow-primary"
          >
            ocean academy
          </motion.h1>
        </motion.div>

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 max-lg:items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center w-full"
            >
              <div className="inline-flex w-fit items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-md font-medium text-gray-700">
                  Transform Your Career Today
                </span>
              </div>
              <div className="relative mb-4 w-full  max-lg:block hidden ">
                <ImageVideo />
              </div>
              <h2 className="text-5xl md:text-6xl  font-bold text-gray-900 leading-tight mb-6">
                Shape Your
                <span className="block bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-lg:max-w-full  max-w-2xl">
                Transform your career with industry-ready skills. Join thousands
                of students who've launched successful careers through our
                innovative programs and expert mentorship.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center max-sm:justify-center justify-between gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onTap={() => vibrateDevice(10)}
                className="group bg-gradient-to-r from-secondary to-tertiary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(59, 130, 246, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                onTap={btnInteraction}
                className="group border-2 border-blue-300 text-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 flex items-center gap-2"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`text-center min-w-32 p-6 rounded-2xl backdrop-blur-sm border shadow-lg ${
                      currentStat === index
                        ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-300 shadow-blue-200"
                        : "bg-white/70 border-white/50 hover:border-blue-200"
                    } transition-all duration-500`}
                  >
                    <div
                      className={`inline-flex p-3 rounded-full mb-3 ${
                        currentStat === index
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                          : "bg-blue-100 text-blue-600"
                      } transition-all duration-500`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Content - Image & Features */}
          <div className="space-y-8 ">
            <div className="max-lg:hidden">
              <ImageVideo />
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className="group p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-white/50 hover:border-blue-200 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-20"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 backdrop-blur-sm border border-yellow-200 rounded-full px-6 py-3 shadow-lg">
            <Star className="w-5 h-5 text-yellow-500" />
            <span className="text-gray-700 font-medium">
              Trusted by 10,000+ students worldwide
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="mt-8 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl border border-blue-100 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join our community of learners and transform your career with
              cutting-edge skills that matter in today's digital world.
            </p>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-secondary to-primary border border-tertiary/40 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};
