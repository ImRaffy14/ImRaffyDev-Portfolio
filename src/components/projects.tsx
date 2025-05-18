"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const [showAll, setShowAll] = useState(false)

  // Initial projects to show
  const initialProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with payment processing, user authentication, and admin dashboard.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team workspaces.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 3,
      title: "Real Estate Marketplace",
      description: "A real estate marketplace with property listings, search filters, and user messaging.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
      githubUrl: "#",
      liveUrl: "#",
    },
  ]

  // Additional projects to show when "View All Projects" is clicked
  const additionalProjects = [
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "A comprehensive dashboard for managing and analyzing social media accounts and campaigns.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React", "Express", "PostgreSQL", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 5,
      title: "Learning Management System",
      description: "An educational platform for creating, managing and delivering online courses and assessments.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Next.js", "Supabase", "Tailwind CSS", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A responsive portfolio website showcasing projects and skills with dark/light mode support.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 7,
      title: "Recipe Sharing Platform",
      description: "A community-driven platform for sharing and discovering recipes with social features.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React", "Node.js", "MongoDB", "AWS S3"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 8,
      title: "Fitness Tracker",
      description: "A web application for tracking workouts, nutrition, and fitness progress with data visualization.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["React", "Express", "PostgreSQL", "D3.js"],
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      id: 9,
      title: "Budget Management App",
      description: "A personal finance application for tracking expenses, income, and budget planning.",
      image: "/placeholder.svg?height=600&width=800",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Chart.js"],
      githubUrl: "#",
      liveUrl: "#",
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
