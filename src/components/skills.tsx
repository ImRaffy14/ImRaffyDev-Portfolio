"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Html from "@/assets/icons/html.png"
import Bootstrap from "@/assets/icons/bootstrap.png"
import Css from "@/assets/icons/css.png"
import Js from "@/assets/icons/js.png"
import React from "@/assets/icons/react.png"
import Tailwind from "@/assets/icons/tailwind.png"
import Node from "@/assets/icons/node.png"
import Mongo from "@/assets/icons/mongodb.png"
import Express from "@/assets/icons/express.png"
import Php from "@/assets/icons/php.png"
import Sql from "@/assets/icons/mysql.png"
import Docker from "@/assets/icons/docker.png"
import Drizzle from "@/assets/icons/drizzle.jpg"
import Linux from "@/assets/icons/linux.png"
import Git from "@/assets/icons/git.png"
import Github from "@/assets/icons/github.png"
import Mariadb from "@/assets/icons/mariadb.png"
import Nextjs from "@/assets/icons/nextjs.png"
import Nginx from "@/assets/icons/nginx.png"
import Prisma from "@/assets/icons/prisma.png"
import TypeScript from "@/assets/icons/typescript.png"
import Tensorflow from "@/assets/icons/tensorflow.png"
import Vscode from "@/assets/icons/vscode.png"


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
      name: "Html",
      icon: Html,
      category: "Frontend",
    },
    {
      name: "Css",
      icon: Css,
      category: "Frontend",
    },
    {
      name: "PHP",
      icon: Php,
      category: "Language",
    },
    {
      name: "Javascript",
      icon: Js,
      category: "Language",
    },
    {
      name: "Typescript",
      icon: TypeScript,
      category: "Language",
    },
    {
      name: "React",
      icon: React,
      category: "Frontend",
    },
            {
      name: "Next.js",
      icon: Nextjs,
      category: "Frontend",
    },
    {
      name: "Node.js",
      icon: Node,
      category: "Backend",
    },
    {
      name: "Express",
      icon: Express,
      category: "Backend",
    },
    {
      name: "Tailwind Css",
      icon:Tailwind,
      category: "Frontend",
    },
    {
      name: "Bootstrap",
      icon: Bootstrap,
      category: "Frontend",
    },
    {
      name: "Mongo DB",
      icon: Mongo,
      category: "Database",
    },
    {
      name: "MySQL",
      icon: Sql,
      category: "Database",
    },
    {
      name: "Maria DB",
      icon: Mariadb,
      category: "Database",
    },
    {
      name: "Prisma",
      icon: Prisma,
      category: "ORM",
    },
    {
      name: "Drizzle",
      icon: Drizzle,
      category: "ORM",
    },
    {
      name: "Git",
      icon: Git,
      category: "Tools",
    },
    {
      name: "Github",
      icon: Github,
      category: "Tools",
    },
    {
      name: "VS Code",
      icon: Vscode,
      category: "Tools",
    },
    {
      name: "Docker",
      icon: Docker,
      category: "Devops",
    },
    {
      name: "Linux",
      icon: Linux,
      category: "Devops",
    },
        {
      name: "Nginx",
      icon: Nginx,
      category: "Devops",
    },
        {
      name: "Tensorflow",
      icon: Tensorflow,
      category: "Machine Learning",
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
