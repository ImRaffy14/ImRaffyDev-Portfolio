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
      position: "Senior Full Stack Developer",
      company: "TechInnovate Solutions",
      location: "San Francisco, CA",
      period: "2020 - Present",
      description:
        "Leading the development of enterprise web applications using Next.js, React, and Node.js. Managing a team of 5 developers and collaborating with product managers to deliver high-quality software solutions.",
      achievements: [
        "Redesigned the company's flagship product, resulting in a 40% increase in user engagement",
        "Implemented CI/CD pipelines that reduced deployment time by 60%",
        "Mentored junior developers and established coding standards across the team",
      ],
    },
    {
      position: "Full Stack Developer",
      company: "WebSphere Inc.",
      location: "Seattle, WA",
      period: "2018 - 2020",
      description:
        "Developed and maintained multiple web applications for clients in various industries. Worked with React, Express, MongoDB, and AWS to create scalable and responsive web solutions.",
      achievements: [
        "Built an e-commerce platform that processed over $2M in annual sales",
        "Optimized database queries, improving application performance by 35%",
        "Collaborated with UX designers to implement responsive designs across all platforms",
      ],
    },
    {
      position: "Junior Web Developer",
      company: "Digital Creations",
      location: "Los Angeles, CA",
      period: "2016 - 2018",
      description:
        "Started as an intern and quickly progressed to a full-time role. Assisted in the development of websites and web applications using JavaScript, HTML, CSS, and PHP.",
      achievements: [
        "Developed a content management system used by over 50 clients",
        "Contributed to the company's internal tool that streamlined project management",
        "Received the 'Rookie of the Year' award for exceptional performance",
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
            Professional Journey
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
                <div className="sticky top-20">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">{exp.period}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">{exp.location}</div>
                  <div className="absolute top-1 right-0 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 border-4 border-white dark:border-gray-950 flex items-center justify-center -translate-x-1/2">
                    <Briefcase className="w-3 h-3 text-gray-600 dark:text-gray-400" />
                  </div>
                  <div className="absolute top-8 bottom-0 right-4 w-0.5 bg-gray-200 dark:bg-gray-800 h-full"></div>
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
