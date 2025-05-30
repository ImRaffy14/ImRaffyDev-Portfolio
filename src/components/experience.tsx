"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, CheckCircle } from "lucide-react"

export default function Experience() {
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

  const experiences = [
    {
      position: "Freelance Full-Stack Developer",
      company: "Freelance",
      location: "Freelance",
      period: "2022 - Present",
      description:
        "Built and maintained end-to-end web applications with responsive design and smooth user experiences. Collaborated with clients to deliver customized solutions using HTML, CSS, JavaScript, React, Node.js, and MongoDB.",
      achievements: [
        "Developed and maintained multiple end-to-end web applications, ensuring responsive designand seamless user experiences.",
        "Collaborated with clients to understand their needs and deliver tailored web solutions",
        "Managed both front-end and back-end development using technologies such as HTML, CSS,JavaScript, React, Node.js, and MongoDB.",
      ],
    },
    {
      position: "Intern – Frontend Developer",
      company: "Ichico Solutions",
      location: "Maryland Cubao",
      period: "2025",
      description:
        "Contributed to the development and management of a SaaS project using Next js.",
      achievements: [
        "Developed the Point-of-Sale (POS) and Kiosk modules for a SaaS-based application as part of a frontend internship.",
        "Built responsive and user-friendly interfaces tailored for real-time transactions and self-service interactions.",
        "Implemented lightweight client-side algorithms to handle user input validation, item selection,and basic calculations.",
        "Ensured smooth integration with backend services and contributed to an agile development workflow."
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-950">
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
              Experience
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300"
          >
            My career path in software development has given me diverse experience across different industries and
            technologies.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto space-y-12"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-10 md:pl-0 md:grid md:grid-cols-7 md:gap-10"
            >
              {/* Timeline dot and line for mobile */}
              <div className="absolute top-0 left-0 md:hidden h-full">
                <div className="absolute top-1 left-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 border-4 border-white dark:border-gray-950 flex items-center justify-center">
                  <Briefcase className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                </div>
                <div className="absolute top-8 bottom-0 left-4 w-0.5 bg-gray-200 dark:bg-gray-800"></div>
              </div>

              {/* Date column */}
              <div className="hidden md:block md:col-span-2 text-right pr-10 relative">
                <div className="relative h-full">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white mr-16">{exp.period}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 mr-16">{exp.location}</div>
                  <div className="absolute right-0 top-4 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 border-4 border-white dark:border-gray-950 flex items-center justify-center -translate-x-1/2 mr-2">
                    <Briefcase className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="absolute right-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800"></div>
                </div>
              </div>

              {/* Content column */}
              <div className="md:col-span-5">
                <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-md">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.position}</h3>
                  <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-4">{exp.company}</h4>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4 md:hidden">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{exp.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                  <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-gray-600 dark:text-gray-400 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}