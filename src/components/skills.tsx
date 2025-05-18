"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const technologies = [
    {
      name: "JavaScript",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Language",
    },
    {
      name: "TypeScript",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Language",
    },
    {
      name: "React",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Frontend",
    },
    {
      name: "Next.js",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Frontend",
    },
    {
      name: "Node.js",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Backend",
    },
    {
      name: "Express",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Backend",
    },
    {
      name: "MongoDB",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Database",
    },
    {
      name: "PostgreSQL",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Database",
    },
    {
      name: "Tailwind CSS",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Frontend",
    },
    {
      name: "Docker",
      icon: "/placeholder.svg?height=80&width=80",
      category: "DevOps",
    },
    {
      name: "Git",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Tool",
    },
    {
      name: "AWS",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Cloud",
    },
    {
      name: "GraphQL",
      icon: "/placeholder.svg?height=80&width=80",
      category: "API",
    },
    {
      name: "Redux",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Frontend",
    },
    {
      name: "Figma",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Design",
    },
    {
      name: "Jest",
      icon: "/placeholder.svg?height=80&width=80",
      category: "Testing",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
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
              My Skills
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Tools & Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300"
          >
            I've worked with a wide range of technologies across the full stack development spectrum. Here are the key
            tools and languages I use regularly.
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={skillVariants}
              className="flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-gray-50 hover:bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-800 transition-all duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 mb-2 sm:mb-3 relative">
                <Image
                  src={tech.icon || "/placeholder.svg"}
                  alt={tech.name}
                  width={80}
                  height={80}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white text-center">{tech.name}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 hidden sm:block">{tech.category}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
