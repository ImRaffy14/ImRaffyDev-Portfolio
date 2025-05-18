"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  // Initialize theme from localStorage or default to dark
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const initialTheme = savedTheme || "dark"
    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)

    // Update DOM
    document.documentElement.classList.toggle("dark", newTheme === "dark")

    // Save to localStorage
    localStorage.setItem("theme", newTheme)
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="rounded-md border-gray-300 dark:border-gray-600 flex items-center gap-2"
    >
      {theme === "dark" ? (
        <>
          <Sun className="h-4 w-4" /> Light
        </>
      ) : (
        <>
          <Moon className="h-4 w-4" /> Dark
        </>
      )}
    </Button>
  )
}
