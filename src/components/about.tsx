"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import MeTwo from "@/assets/me2.png"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="container px-4 mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative mx-auto md:mx-0 max-w-sm md:max-w-none">
            <div className="flex justify-center items-center relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 opacity-30 blur-xl"></div>

              <div className="relative aspect-square w-full h-auto rounded-xl border border-gray-200 dark:border-gray-700/20 shadow-lg overflow-hidden">
                <Image
                  src={MeTwo}
                  alt="Developer portrait"
                  width={300}
                  height={300}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          </motion.div>

          <div className="text-center md:text-left">
            <motion.div variants={itemVariants} className="inline-block mb-6">
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-800 border border-gray-200 dark:bg-gray-800/30 dark:text-gray-400 dark:border-gray-700/50">
                About Me
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
            >
              Passionate Developer Creating Digital Experiences
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 mb-4">
              I'm a Full Stack Developer with over 2 years of experience building dynamic 
              and responsive web applications. I specialize in the MERN stack (MongoDB, Express.js, React, and Node.js) and have a solid grasp of modern web technologies and best practices.
            </motion.p>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 mb-6">
            Since 2022, I’ve worked with various clients to transform ideas into scalable, user-friendly digital solutions. 
            I'm passionate about writing clean, maintainable code and building intuitive experiences, always striving to stay current with the latest in tech.
            </motion.p>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 mb-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">2+</h3>
                <p className="text-gray-600 dark:text-gray-400">Years of Experience</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">20+</h3>
                <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">10+</h3>
                <p className="text-gray-600 dark:text-gray-400">Happy Clients</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="flex justify-center md:justify-start">
              <Button className="bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
