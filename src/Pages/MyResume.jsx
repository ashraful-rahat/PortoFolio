/* eslint-disable react/prop-types */
"use client"

import { Tab } from "@headlessui/react"
import { motion } from "framer-motion"
import { useState } from "react"
import { FaBriefcase, FaGraduationCap, FaLaptopCode } from "react-icons/fa"

const developmentSkills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 80 },
  { name: "JAVASCRIPT", level: 60 },
  { name: "REACT", level: 70 },
  { name: "MONGODB", level: 60 },
]

const SkillBar = ({ name, level }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-300 text-sm tracking-wider">{name}</span>
      <span className="text-gray-400 text-sm">{level}%</span>
    </div>
    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
      />
    </div>
  </div>
)

const TimelineEntry = ({ title, subtitle, year, description, additionalInfo }) => (
  <div className="relative pl-6 mb-12 last:mb-0">
    <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-pink-500 to-purple-500" />
    <div className="absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-pink-500" />
    <div className="bg-[#1a1e21] rounded-lg p-6 hover:bg-[#1f2326] transition-colors">
      <div className="text-pink-500 text-sm mb-2">{year}</div>
      <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
      <div className="text-gray-400 mb-2">{subtitle}</div>
      <div className="text-pink-500 font-semibold mb-3">{additionalInfo}</div>
      <p className="text-gray-500">{description}</p>
    </div>
  </div>
)

const MyResume = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div style={{ backgroundColor: "rgb(32, 37, 40)" }} className="min-h-screen">
      <div className="py-16 w-11/12 mx-auto text-gray-300">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl uppercase font-bold mb-10 text-center"
        >
          My Resume
        </motion.h1>
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <Tab.List className="flex justify-center items-center space-x-4 border-b border-gray-700 pb-2 mb-8">
            {[
              { name: "Education", icon: <FaGraduationCap /> },
              { name: "Professional Skills", icon: <FaLaptopCode /> },
              { name: "Experience", icon: <FaBriefcase /> },
            ].map((tab, index) => (
              <Tab
                key={index}
                className={({ selected }) => `
                  px-6 py-3 text-lg font-medium focus:outline-none transition-colors flex items-center space-x-2
                  ${selected ? "text-pink-500 border-pink-500" : "text-gray-400 hover:text-gray-300"}
                `}
              >
                <span className="relative">
                  {tab.icon}
                  <span>{tab.name}</span>
                  {selectedIndex === index && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute left-0 right-0 h-0.5 -bottom-[11px] bg-pink-500"
                    />
                  )}
                </span>
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-4">
            <Tab.Panel>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <div className="text-pink-500 mb-4">2020 - Present</div>
                <h2 className="text-4xl font-bold text-white mb-8">Education Quality</h2>
                <div className="space-y-6">
                  <TimelineEntry
                    year="2024 - Present"
                    title="Bachelor of Science in Computer Engineering"
                    subtitle="Bangladesh University of Professional"
                    additionalInfo="Current CGPA: 3.00/4.00"
                    description="Pursuing major in Software Engineering with focus on modern web technologies and artificial intelligence applications."
                  />
                  <TimelineEntry
                    year="2020 - 2024"
                    title="Diploma in Engineering"
                    subtitle="Feni Government Computer Institute"
                    additionalInfo="CGPA: 3.44/4.00"
                    description="Specialized in Computer Science and Technology, with emphasis on practical programming and system design."
                  />
                  <TimelineEntry
                    year="2020"
                    title="Secondary School Certificate"
                    subtitle="Feni Govt. Pilot High School"
                    additionalInfo="GPA: 5.00/5.00"
                    description="Completed SSC with excellence in Science group, focusing on mathematics and computer studies."
                  />
                </div>
              </motion.div>
            </Tab.Panel>
            <Tab.Panel>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#1a1e21] rounded-lg p-8"
              >
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-pink-500 mb-2">Features</h3>
                  <h2 className="text-4xl font-bold text-white mb-8">Development Skill</h2>
                  {developmentSkills.map((skill, index) => (
                    <SkillBar key={index} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </motion.div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  )
}

export default MyResume
