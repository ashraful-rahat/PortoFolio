"use client"

import { motion } from "framer-motion"
import { FaLaptopCode, FaPaintBrush, FaServer } from "react-icons/fa"

const skills = [
  {
    name: "Web Design",
    icon: <FaPaintBrush size={40} className="text-teal-400" />,
    description: "Crafting visually stunning and user-friendly interfaces with a keen eye for detail and aesthetics.",
    color: "from-teal-400 to-teal-600",
  },
  {
    name: "Web Development",
    icon: <FaLaptopCode size={40} className="text-indigo-400" />,
    description: "Building high-performance, responsive, and dynamic web applications with modern technologies.",
    color: "from-indigo-400 to-indigo-600",
  },
  {
    name: "MERN Stack Development",
    icon: <FaServer size={40} className="text-amber-400" />,
    description:
      "Developing end-to-end full-stack applications using MongoDB, Express, React, and Node.js for seamless user experiences.",
    color: "from-amber-400 to-amber-600",
  },
]

const WhatIDo = () => {
  return (
   
    <div style={{ backgroundColor: "rgb(32, 37, 40)" }}>
    <div  className="py-16 relative w-11/12 mx-auto overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute  overflow-hidden opacity-10">
        <div className="absolute h-96 w-96 -top-48 -left-48 bg-teal-500 rounded-full filter blur-3xl"></div>
        <div className="absolute h-96 w-96 -bottom-48 -right-48 bg-indigo-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm uppercase font-light text-teal-400 tracking-widest mb-4">Expertise</h2>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 relative inline-block">
            What I Do
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-indigo-400 to-amber-400"></span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute  bg-gradient-to-br opacity-75 blur group-hover:opacity-100 transition duration-300 rounded-lg"></div>
              <div className="relative bg-[rgb(32,37,40)] p-8 rounded-lg border border-gray-700 h-full flex flex-col justify-between z-10">
                <div>
                  <div
                    className={`w-16 h-16 mb-6 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center`}
                  >
                    {skill.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{skill.name}</h3>
                  <p className="text-gray-300">{skill.description}</p>
                </div>
                <motion.div className="mt-6" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <a
                    href="#"
                    className={`inline-block py-2 px-4 bg-gradient-to-r ${skill.color} text-gray-900 font-semibold rounded-full text-sm transition duration-300 hover:shadow-lg hover:shadow-${skill.color.split("-")[1]}/50`}
                  >
                    Learn More
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

     
      </div>
    </div>
    </div>
  )
}

export default WhatIDo

