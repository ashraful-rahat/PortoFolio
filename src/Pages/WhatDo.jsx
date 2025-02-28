"use client"

import { motion } from "framer-motion"
import { FaLaptopCode, FaPaintBrush, FaServer } from "react-icons/fa"

const skills = [
  {
    name: "Web Design",
    icon: <FaPaintBrush className="w-8 h-8 text-teal-400" />,
    description: "Crafting visually stunning and user-friendly interfaces with a keen eye for detail and aesthetics.",
    color: "from-teal-400 to-teal-600",
    borderColor: "border-teal-400/30",
  },
  {
    name: "Web Development",
    icon: <FaLaptopCode className="w-8 h-8 text-indigo-400" />,
    description: "Building high-performance, responsive, and dynamic web applications with modern technologies.",
    color: "from-indigo-400 to-indigo-600",
    borderColor: "border-indigo-400/30",
  },
  {
    name: "MERN Stack Development",
    icon: <FaServer className="w-8 h-8 text-amber-400" />,
    description: "Developing end-to-end full-stack applications using MongoDB, Express, React, and Node.js for seamless user experiences.",
    color: "from-amber-400 to-amber-600",
    borderColor: "border-amber-400/30",
  },
]

const WhatIDo = () => {
  return (
    <div className="bg-[#202528] relative overflow-hidden py-24">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute  overflow-hidden"
      >
        <div className="absolute w-[600px] h-[600px] -top-48 -left-48 bg-teal-500 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] -bottom-48 -right-48 bg-indigo-500 rounded-full blur-[100px] opacity-40 animate-pulse delay-1000"></div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-widest text-teal-400 font-medium mb-4 inline-block">
            Specializations
          </span>
          <h2 className="text-5xl font-bold text-white mb-6 relative">
            What I Do
            <span className="absolute -bottom-6 left-1/2 transform  -translate-x-1/2 w-24 h-1 bg-gradient-to-r  from-teal-400 to-indigo-500 rounded-full"></span>
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl from-teal-400/30 via-indigo-400/30 to-amber-400/30" />

              {/* Card container */}
              <div className={`relative bg-[#1a1e21] p-8 rounded-xl border ${skill.borderColor} group-hover:border-transparent transition-all duration-300 h-full overflow-hidden`}>
                {/* Animated background */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-5`} />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)]" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon container */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center backdrop-blur-sm`}
                  >
                    {skill.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-4">{skill.name}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">{skill.description}</p>

                  {/* Learn More button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                  >
                    <a
                      href="#"
                      className={`inline-flex items-center px-6 py-2.5 rounded-full bg-gradient-to-br ${skill.color} text-white font-medium hover:shadow-lg hover:shadow-teal-400/20 transition-all duration-300`}
                    >
                      <span>Explore More</span>
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WhatIDo