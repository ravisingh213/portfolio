"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"

export default function Projects() {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "E-commerce Website",
      description:
        "A fully responsive e-commerce website with product filtering, cart functionality, and checkout process.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      category: "web",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A drag-and-drop task management application with user authentication and real-time updates.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Firebase", "Tailwind CSS", "DnD Kit"],
      category: "app",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description: "A modern portfolio website with dark mode, animations, and contact form.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
      category: "web",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather dashboard that displays current weather and forecast data for any location.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["JavaScript", "API", "CSS", "HTML"],
      category: "app",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 5,
      title: "Blog Platform",
      description: "A full-stack blog platform with user authentication, markdown support, and comment system.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 6,
      title: "Recipe App",
      description: "A recipe application with search functionality, filtering, and user favorites.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Firebase", "CSS Modules"],
      category: "app",
      github: "https://github.com",
      demo: "https://example.com",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  const categories = [
    { value: "all", label: "All" },
    { value: "web", label: "Web" },
    { value: "app", label: "App" },
    { value: "fullstack", label: "Full Stack" },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is a unique piece of development that showcases my skills
            and passion for building web applications.
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={filter === category.value ? "default" : "outline"}
                onClick={() => setFilter(category.value)}
                className="min-w-20"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-between">
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.github} target="_blank">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Link>
                  </Button>
                  <Button asChild size="sm">
                    <Link href={project.demo} target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

