"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-slate-950">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-block mb-4"
            >
              <span className="text-sm font-medium px-3 py-1 rounded-full bg-gray-100 text-gray-800 border border-gray-200 dark:bg-gray-800/30 dark:text-gray-400 dark:border-gray-700/50">
                Get In Touch
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white"
            >
              Let's Work Together
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 mx-auto lg:mx-0 max-w-lg"
            >
              I'm currently available for freelance work and full-time positions. If you have a project that needs some
              creative work, I'd love to hear about it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6 max-w-md mx-auto lg:mx-0"
            >
              <div className="flex items-start gap-3 sm:gap-4 justify-center lg:justify-start">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 flex-shrink-0 dark:bg-gray-800 dark:text-gray-400">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">hello@raffyuanan.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 justify-center lg:justify-start">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 flex-shrink-0 dark:bg-gray-800 dark:text-gray-400">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4 justify-center lg:justify-start">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 flex-shrink-0 dark:bg-gray-800 dark:text-gray-400">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">San Francisco, CA</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-900 rounded-2xl p-5 sm:p-6 md:p-8 border border-gray-200 dark:border-slate-800 shadow-lg relative overflow-hidden max-w-lg mx-auto lg:mx-0 w-full"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gray-100 dark:bg-gray-800 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gray-100 dark:bg-gray-800 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 relative z-10">
              Send Me a Message
            </h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-lg p-4 sm:p-6 text-center dark:bg-green-900/20 dark:border-green-800/30"
              >
                <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-green-600 dark:text-green-500 mx-auto mb-3 sm:mb-4" />
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">Message Sent!</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  Thank you for reaching out. I'll get back to you soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      required
                      className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus-visible:ring-gray-600 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder:text-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      required
                      className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus-visible:ring-gray-600 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder:text-gray-500"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Subject"
                    required
                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus-visible:ring-gray-600 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder:text-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={4}
                    required
                    className="bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-500 focus-visible:ring-gray-600 dark:bg-slate-800 dark:border-slate-700 dark:text-white dark:placeholder:text-gray-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-800"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
