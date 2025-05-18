"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypeAnimationProps {
  text: string
  className?: string
  speed?: number
  delay?: number
}

export function TypeAnimation({ text, className = "", speed = 50, delay = 0 }: TypeAnimationProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    // Initial delay before starting typing
    const startTimeout = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    if (isTyping && currentIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.substring(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, speed)
    }

    return () => {
      clearTimeout(timeout)
      clearTimeout(startTimeout)
    }
  }, [currentIndex, text, speed, delay, isTyping])

  return (
    <div className={className}>
      {displayedText}
      {isTyping && currentIndex < text.length && (
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
          className="inline-block w-[2px] h-[1em] bg-current ml-[1px] align-middle"
        />
      )}
    </div>
  )
}
