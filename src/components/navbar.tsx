"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)

    if (section) {
      // Close menu if open
      if (isMenuOpen) {
        closeMenu()
      }

      // Calculate header height to offset scroll position
      const headerHeight = document.querySelector("header")?.offsetHeight || 0
      const sectionTop = section.offsetTop - headerHeight

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      })
    }
  }

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Education", href: "education" },
    { name: "Experience", href: "experience" },
    { name: "Contact", href: "contact" },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container px-4 mx-auto">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              Raffy<span className="text-gray-500">Uanan</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
              <ThemeToggle />
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden gap-2">
              <ThemeToggle />
              <Button variant="ghost" size="icon" onClick={toggleMenu} className="rounded-full">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                <span className="sr-only">Menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white dark:bg-gray-900 shadow-lg border-t border-gray-200 dark:border-gray-800"
          >
            <nav className="container px-4 py-4 mx-auto flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={`#${link.href}`}
                  className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors py-2"
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
