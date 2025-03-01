import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS for animations
import { AnimatePresence, motion } from "framer-motion";

import { useEffect } from "react";
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJs, FaNode, FaReact, FaStripe } from "react-icons/fa";
import { FiCode, FiDatabase, FiLayout, FiServer } from "react-icons/fi";
import { SiDaisyui, SiExpress, SiFirebase, SiMongodb, SiTailwindcss } from "react-icons/si";
import myself from '/public/images/mypic2.jpg'; // Add your own photo path here

const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="min-h-screen pb-40 bg-[rgb(32,37,40)] text-white" id="about">
      {/* About Header */}
      <motion.h1
            className="text-5xl font-bold bg-gradient-to-r from-teal-400 via-blue-400 text-center to-purple-500 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            About Me
          </motion.h1>

      <div
        className="w-24 h-1 bg-gradient-to-r from-teal-400 to-purple-500 mx-auto mt-4 mb-8 rounded-full"
        data-aos="fade-left"
        data-aos-duration="1700"
        data-aos-easing="ease-in-out"
      ></div>

         {/* Profile and About Content Section */}
         <div className="flex flex-col md:flex-row justify-center items-center space-y-8 lg:mt-16 md:space-y-0 md:space-x-10 px-4 md:px-16">
        {/* Profile Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.6 }}
          className="flex-1 flex justify-center"
        >
          <div className="w-72 md:w-96 h-72 md:h-[400px] relative overflow-hidden">
            <motion.img
              src={myself}
              alt="Profile"
              className="object-cover w-full h-full rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 200 }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </div>
        </motion.div>

        {/* About Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.8 }}
          className="flex-1 md:w-1/2 space-y-8"
        >
          <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl shadow-2xl border border-white/10">
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="space-y-6"
              >
                <motion.h2
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
                >
                  Building Digital Experiences
                </motion.h2>

                <motion.div
                  className="space-y-4 text-gray-300"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <motion.p
                    className="text-lg leading-relaxed"
                    initial={{ x: 20 }}
                    animate={{ x: 0 }}
                  >
                    Hi! I&apos;m <span className="font-semibold text-emerald-400">Ashraful Rahat</span>, a passionate full-stack developer specializing in modern web technologies.
                  </motion.p>

                  <motion.div
                    className="grid grid-cols-2 gap-4 mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4 }}
                  >
                    {[ 
                      { icon: <FiCode className="text-purple-400" />, text: "React.js" },
                      { icon: <FiServer className="text-purple-400" />, text: "Node.js/Express" },
                      { icon: <FiDatabase className="text-purple-400" />, text: "MongoDB" },
                      { icon: <FiLayout className="text-purple-400" />, text: "Tailwind CSS" },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.6 + index * 0.1 }}
                      >
                        {item.icon}
                        <span className="font-mono">{item.text}</span>
                      </motion.div>
                    ))}
                  </motion.div>

                  <motion.p
                    className="text-lg leading-relaxed mt-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                  >
                    My development approach combines clean code architecture with intuitive user interfaces.
                  </motion.p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      {/* Skills Section (My Stack) */}
      <section>
      <motion.h1
  className="text-5xl font-bold bg-gradient-to-r from-teal-400 via-blue-400 mt-12 text-center to-purple-500 bg-clip-text text-transparent"
  data-aos="fade-right"
  data-aos-duration="1700"
  data-aos-easing="ease-in-out"
>
  MY STACK
</motion.h1>

      <div
        className="w-24 h-1 bg-gradient-to-r from-teal-400 to-purple-500 mx-auto mt-5 mb-12 rounded-full"
        data-aos="fade-left"
        data-aos-duration="1700"
        data-aos-easing="ease-in-out"
      ></div>
        
        {/* Single Container Box for Glassy Effect */}
        <div
          className="bg-transparent p-8 rounded-lg shadow-xl mx-auto w-full md:w-4/5"
          style={{
            borderImage: "linear-gradient(45deg, #e34f26, #f7df1e, #339933, #61dafb, #1572b6) 1", // Running gradient
            borderWidth: "4px",
            animation: "borderAnim 3s linear infinite", // Animation for the running effect
          }}
        >
          <div className="grid grid-cols-6 gap-6 justify-center">
            {/* Stack Icons with Glassy Box Effect */}
            {[  
              { icon: <FaHtml5 size={40} />, title: "HTML", color: "#e34f26" }, // HTML's official color
              { icon: <FaCss3Alt size={40} />, title: "CSS", color: "#1572b6" }, // CSS official color
              { icon: <FaJs size={40} />, title: "JavaScript", color: "#f7df1e" }, // JavaScript official color
              { icon: <FaReact size={40} />, title: "React", color: "#61dafb" }, // React official color
              { icon: <FaNode size={40} />, title: "Node.js", color: "#339933" }, // Node.js official color
              { icon: <FaStripe size={40} />, title: "Stripe", color: "#6772e5" }, // Stripe official color
              { icon: <FaBootstrap size={40} />, title: "Bootstrap", color: "#563d7c" }, // Bootstrap official color
              { icon: <SiTailwindcss size={40} />, title: "TailwindCSS", color: "#38bdf8" }, // TailwindCSS official color
              { icon: <SiDaisyui size={40} />, title: "DaisyUI", color: "#8b5cf6" }, // DaisyUI official color
              { icon: <SiMongodb size={40} />, title: "MongoDB", color: "#47a248" }, // MongoDB official color
              { icon: <SiFirebase size={40} />, title: "Firebase", color: "#ffca28" }, // Firebase official color
              { icon: <SiExpress size={40} />, title: "Express.js", color: "#339933" }, // Express.js official color
            ].map((skill, index) => (
              <div
                key={index}
                data-aos="fade-left"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out"
                data-aos-delay={`${500 + index * 100}`}
                className="flex p-2 flex-col items-center transform transition-all duration-300 scale-105 hover:scale-110"
                style={{ boxShadow: `0 4px 10px 0 ${skill.color}` }} // Unique shadow color for each logo
              >
                {/* Icon with unique color */}
                <div className="mb-3" style={{ color: skill.color }}>{skill.icon}</div>
                {/* Title below the icon */}
                <p className="text-sm text-indigo-200 mt-2">{skill.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
