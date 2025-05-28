"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"
import Colorcraft from "@/assets/projects/colorcraft.png"
import Ems from "@/assets/projects/ems.png"
import Financejjm from "@/assets/projects/jjm-finance.png"
import NodadoFinance from "@/assets/projects/nodado-finance.png"
import Nodadolanding from "@/assets/projects/nodado-landing.png"
import Pacc from "@/assets/projects/pacc.png"
import Sms from "@/assets/projects/sms.png"
import V1portolio from "@/assets/projects/v1Portfolio.png"
import V2portfolio from "@/assets/projects/v2Portfolio.png"

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

  // Initial projects to show
  const initialProjects = [
    {
      id: 1,
      title: "JJM Manufacturing Finance Management System",
      description:
        "A capstone and client-based project designed to streamline financial operations for a manufacturing firm. Key features include automated financial tracking and a machine learning-powered AI for anomaly detection to enhance accuracy and security.",
      image: Financejjm,
      technologies: ["React", "Node.js", "MongoDB", "Tensorflow", "Tailwind", "Express"],
      githubUrl: "https://github.com/ImRaffy14/Manufacturing-finance-client",
      liveUrl: "https://finance.jjm-manufacturing.com/",
    },
    {
      id: 2,
      title: "Pilot Area Community Chapter System",
      description: "A private system built to manage residents, funds, and attendance for our community chapter. It streamlines administrative tasks with features like resident database management, financial tracking, and attendance monitoring—showcasing my ability to develop tailored, efficient solutions.",
      image: Pacc,
      technologies: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL", "Javascript"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 3,
      title: "Nodado Finance Management System",
      description: "A custom financial management system developed for Nodado General Hospital to streamline and centralize financial operations. The system handles budgeting, expense tracking, and financial reporting, improving overall efficiency, accuracy, and transparency in hospital fund management.",
      image: NodadoFinance,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ]

  // Additional projects to show when "View All Projects" is clicked
  const additionalProjects = [
    {
      id: 4,
      title: "Nodado Management System",
      description: "A comprehensive management system developed for Nodado General Hospital, integrating core administrative functions including finance and HR. The system streamlines operations such as financial tracking, budgeting, employee records, and HR processes, enhancing overall efficiency and organizational management.",
      image: Nodadolanding,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
      githubUrl: "https://github.com/ImRaffy14/HOSPITAL-CORE3",
      liveUrl: "https://nodadogenhospital.com/",
    },
    {
      id: 5,
      title: "Enrollment Management System",
      description: "A full-stack system designed to manage student enrollment processes efficiently. Features include student registration, course management, and real-time status tracking—streamlining administrative tasks for educational institutions.",
      image: Ems,
      technologies: ["React", "Node.js", "Typescipt", "MongoDB", "Prisma", "Tailwind"],
      githubUrl: "https://github.com/ImRaffy14/Enrollment-System",
      liveUrl: "https://enrollment.imraffydev.com/login",
    },
    {
      id: 6,
      title: "School Management System",
      description: "A system built to enhance student communications within a school setting. It streamlines announcements, messaging, and updates between students, teachers, and administrators—improving overall engagement and information flow.",
      image: Sms,
      technologies: ["React", "Node.js", "Typescipt", "MongoDB", "Prisma", "Tailwind"],
      githubUrl: "https://github.com/ImRaffy14/SMS-PROJECT",
      liveUrl: "https://sms.imraffydev.com/login",
    },
    {
      id: 7,
      title: "Colorcraft Co.",
      description: "A sleek and visually engaging landing page developed for Colorcraft Co., showcasing their products and services. The page emphasizes a user-friendly design with modern web elements, aiming to provide an intuitive experience for visitors while highlighting the company’s branding and offerings.",
      image: Colorcraft,
      technologies: ["React", "Tailwind"],
      githubUrl: "https://github.com/ImRaffy14/ColorCraft.co",
      liveUrl: "https://imraffy14.github.io/ColorCraft.co",
    },
    {
      id: 8,
      title: "v1 ImRaffyDev Portfolio",
      description: "A collection of full-stack systems I’ve developed to solve real-world problems across various industries, including finance, healthcare, education, and community management. Each project highlights my ability to create efficient, customized solutions using modern web technologies.",
      image: V1portolio,
      technologies: ["React", "Tailwind" ],
      githubUrl: "https://github.com/ImRaffy14/ImRaffyDev-Portfolio",
      liveUrl: "https://v1.imraffydev.com/",
    },
    {
      id: 9,
      title: "v2 ImRaffyDev Portfolio",
      description: "These projects reflect my hands-on experience in building tailored management systems for businesses, schools, and communities. Focused on usability and functionality, my work combines practical needs with full-stack development to deliver impactful solutions.",
      image: V2portfolio,
      technologies: ["Next.js", "Typescript", "Tailwind"],
      githubUrl: "https://github.com/ImRaffy14/ImRaffy.dev",
      liveUrl: "https://imraffydev.com"
    },
  ]

  // Combine projects based on showAll state
  const displayedProjects = showAll ? [...initialProjects, ...additionalProjects] : initialProjects

  const toggleShowAll = () => {
    setShowAll(!showAll)
  }

  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-slate-950">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-200 text-gray-800 border border-gray-300 dark:bg-gray-800/30 dark:text-gray-400 dark:border-gray-700/50">
              My Work
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
          >
            Web Applications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300"
          >
            Here are some of my recent web application projects that showcase my skills and expertise in full stack
            development.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-gray-200 dark:border-slate-800 shadow-lg group"
            >
              <div className="relative overflow-hidden aspect-video">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-6">
                  <div className="flex gap-2 sm:gap-3">
                    <Link href={project.githubUrl}>
                      <Button size="icon" variant="secondary" className="rounded-full h-8 w-8 sm:h-10 sm:w-10">
                        <Github className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                    <Link href={project.liveUrl}>
                      <Button size="icon" variant="secondary" className="rounded-full h-8 w-8 sm:h-10 sm:w-10">
                        <ExternalLink className="h-4 w-4 sm:h-5 sm:w-5" />
                        <span className="sr-only">Live Demo</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-800 dark:bg-slate-800 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={project.liveUrl}
                  className="inline-flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 transition-colors text-sm sm:text-base"
                >
                  View Project <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            onClick={toggleShowAll}
            className="border-gray-300 text-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-800/30"
          >
            {showAll ? (
              <>
                Show Less <ChevronUp className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                View All Projects <ChevronDown className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
