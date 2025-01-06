import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS for animations
import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaBootstrap, FaCss3Alt, FaHtml5, FaJs, FaNode, FaReact, FaStripe } from "react-icons/fa";
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
        className="text-4xl text-indigo-200 text-center"
        data-aos="fade-down"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      >
        About Me
      </motion.h1>

      <div
        className="divider w-1/12 bg-[#97a5ff] h-1 rounded-full mx-auto my-4"
        data-aos="fade-left"
        data-aos-duration="1700"
        data-aos-easing="ease-in-out"
      ></div>

      {/* Profile and About Content Section */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-10 px-4 md:px-16">
        {/* Profile Section with Flexbox Layout */}
        <div
          className="flex-1 flex justify-center"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          {/* Custom Image Shape: Using an octagon shape */}
          <div className="w-72 md:w-96 h-72 md:h-[400px] relative overflow-hidden">
            <img
              src={myself}
              alt="Profile"
              className="object-cover w-full h-full rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300" // Smooth hover scaling and shadow effect
            />
            {/* Optional overlay effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
          </div>
        </div>

        {/* About Content Section */}
        <div className="flex-1 text-indigo-200 md:w-1/2">
          <div
            className="backdrop-blur-md  bg-opacity-30 p-6 text-base rounded-xl shadow-2xl"
            data-aos="fade-left"
            data-aos-duration="1500"
          >
            <p className="font-mono text-lg">
              I&#39;m <span className="font-bold text-lg">Ashraful Rahat</span>, a 20-year-old{" "}
              <span className="font-bold text-lg">Full-Stack Developer</span> with 1+ years of experience. I work
              with JavaScript and its endless list of frameworks, primarily with{" "}
              <span className="font-bold text-lg">React.js, Node.js, and Express.js</span>.
            </p>
            <br />
            <p className="font-mono text-lg">
              My main experience is in front-end development, but I also have a passion for back-end design. I believe that
              producing a modern website requires a combination of design, server technology, and the user interface
              layer. With experience in both design and development, I can create optimal user experiences.
            </p>
            <br />
          </div>
        </div>
      </div>

      {/* Skills Section (My Stack) */}
      <section>
        <div
          className="divider text-2xl pt-10 pb-14 mx-auto text-center"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          My Stack
        </div>
        
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
