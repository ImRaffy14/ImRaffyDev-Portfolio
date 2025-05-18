"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Calendar } from "lucide-react"

export default function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const education = [
    {
      degree: "Information Communication Technology",
      institution: "Commonwealth Highschool",
      year: "2018 - 2020",
      description:
        "Completed high school education with a focus on technology. Acquired foundational skills in web development by learning HTML and CSS. Demonstrated proficiency in creating basic websites.",
    },
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "STI Fairview",
      year: "2021 - 2022",
      description:
        "Initiated higher education journey with a keen interest in Information Technology. Engaged in introductory courses covering fundamental concepts of Java programming and Linux operating systems. Explored practical applications of programming and system administration.",
    },
    {
      degree: "Bachelor of Science in Information Technology major in Information Management",
      institution: "Bestlink College of the Philippines",
      year: "2022 - 2025",
      description:
        "In my fourth year at Bestlink College of the Philippines, I’ve focused on the MERN stack (MongoDB, Express.js, React.js, Node.js) to advance my web development skills. I am leading our capstone project as Scrum Master, Project Manager, and Full Stack Developer. My current work involves developing dynamic web applications and engaging in collaborative projects, constantly applying and expanding my expertise in real-world scenarios.",
    },
  ]

  return (
    <section id="education" className="py-20 bg-white dark:bg-black">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-800 border border-gray-200 dark:bg-gray-800/30 dark:text-gray-400 dark:border-gray-700/50">
              Education
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Academic Background
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300"
          >
            My educational journey has equipped me with a strong foundation in computer science and practical skills in
            software development.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-800"></div>

            {/* Education items */}
            {education.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right md:ml-auto md:mr-1/2" : "md:pl-12 md:ml-1/2"
                } md:w-1/2`}
              >
                {/* Timeline dot */}
                <div className="absolute top-0 left-0 md:left-auto md:right-0 md:translate-x-1/2 -translate-y-1/4 w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 border-4 border-white dark:border-black flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                </div>

                <div
                  className={`bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-md ${
                    index % 2 === 0 ? "md:mr-6" : "md:ml-6"
                  }`}
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.degree}</h3>
                  <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">{item.institution}</h4>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{item.year}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
