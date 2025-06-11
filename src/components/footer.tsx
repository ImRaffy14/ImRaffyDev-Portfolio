"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Instagram, Facebook, Mail, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-white dark:bg-black py-12 border-t border-gray-200 dark:border-slate-800">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0 text-center md:text-left"
          >
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              ImRaffy.<span className="text-gray-500">Dev</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Full Stack Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-6 md:mb-0"
          >
            <a
              href="#home"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("education")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Education
            </a>
            <a
              href="#experience"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Experience
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Contact
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-3"
          >
            <Link href="https://github.com/ImRaffy14" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.instagram.com/raffyuanan/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
            <Link href="https://www.facebook.com/raffy.uanan.10/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
            </Link>
            <Link href="mailto:raffysolis@123@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-200 dark:border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-500 dark:text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} ImRaffyDev. All rights reserved.
          </p>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full border-gray-300 text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:border-slate-700 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800"
          >
            <ArrowUp className="h-5 w-5" />
            <span className="sr-only">Scroll to top</span>
          </Button>
        </motion.div>
      </div>
    </footer>
  )
}
