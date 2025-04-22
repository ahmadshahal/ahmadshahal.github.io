"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      // Calculate offset (accounting for fixed header)
      const offset = 80 // Adjust this value based on your header height
      const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - offset

      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="home" className="min-h-[calc(100vh-4rem)] flex flex-col justify-center pt-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col space-y-6"
        >
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Hi, I&apos;m <span className="text-primary">Ahmad Al-Shahal</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium mt-2 text-muted-foreground">Android Developer</h2>
          </div>

          <p className="text-lg text-muted-foreground max-w-md">
            I'm a passionate Android Developer who loves crafting intuitive and impactful mobile experiences. With over
            3 years of hands-on experience, I blend technical expertise with creative problem-solving to build apps
            people love to use.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href="#contact" onClick={(e) => handleScrollToSection(e, "contact")}>
                Get in touch
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#experience" onClick={(e) => handleScrollToSection(e, "experience")}>
                View my work
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <div className="flex gap-4">
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <Link href="https://www.linkedin.com/in/ahmad-shahal" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="rounded-full">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024-01-13%2011.18.52.jpg-N2gGSRKoNG1rLVJ2VoyYRnF6QkKsm9.jpeg"
              alt="Ahmad Al-Shahal"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
