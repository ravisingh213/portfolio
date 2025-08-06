"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import bcStartegy from "../components/images/bc_startgey.png";
import bcMobile from "../components/images/bcMobile.png";
import protfolio from "../components/images/potfolio.png";
import legalAi from "../components/images/legalAi.png";
import drezzAi from "../components/images/drezzAiNew.png";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Bharat Carbon",
      description: "Carbon emission tracking & reporting web platform",
      image: bcStartegy,
      tags: ["React", "Nest.js", "Antd", "bootstrap", "zustand", "Typescript"],
      category: "web",
      github: "https://github.com/ravisingh213/completed_bc_strategy_frontend",
      backendCode:
        "https://github.com/ravisingh213/completed_bc_startegy_backend",
      demo: "https://dev-strategy.bharatcarbon.earth/Master/Stakeholders",
    },
    {
      id: 2,
      title: "Bharat Carbon Student Mobile App",
      description:
        "Built a mobile application for students and their family members to participate in daily challenges that promote sustainable and healthy living",
      image: bcMobile,
      tags: ["React Native", "Nest js"],
      category: "app",
      github: "https://github.com/ravisingh213/completed_bc_icc_app_frontend",
      backendCode: "https://github.com/ravisingh213/completed_bc_icc_backend",
      demo: "https://www.figma.com/proto/P4AzGUpoMnK791PDhlW5iR/Bharat-Carbon?page-id=686%3A1183&node-id=15819-6627&node-type=frame&viewport=325%2C1230%2C0.25&t=XTX0LQ98hLdtLehO-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=15936%3A7930&show-proto-sidebar=1",
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A modern portfolio website with dark mode, animations, and contact form.",
      image: protfolio,
      tags: ["React", "Next.js", "Framer Motion", "Tailwind CSS"],
      category: "web",
      github: "https://github.com/ravisingh213/portfolio",
      backendCode: "",
      demo: "https://portfolio-ravis-projects-cc7bfee9.vercel.app/",
    },
    {
      id: 4,
      title: "Legal AI",
      description: "Chat-based SEBI legal document search engine",
      image: legalAi,
      tags: ["Reactjs", "Bootstrap", "Redux"],
      category: "web",
      github: "https://github.com/ravisingh213/completed_legalAi",
      backendCode: "https://github.com/ravisingh213/completed-legalAi_backend",
      demo: "http://156.67.105.146:8080/",
    },
    {
      id: 5,
      title: "DrezzAi",
      description: "Fashion recommendation system using AI",
      image: drezzAi,
      tags: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      github: "https://github.com/ravisingh213/completed_drezzAi",
      backendCode: "https://github.com/ravisingh213/completed-drezzai_backend",
      demo: "https://example.com",
    },
    {
      id: 6,
      title: "Blood Bank",
      description:
        "A recipe application with search functionality, filtering, and user favorites.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Springboot", "Reactstrap"],
      category: "web",
      github: "https://github.com",
      backendCode:
        "https://github.com/ravisingh213/completed_bc_startegy_backend",
      demo: "https://example.com",
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const categories = [
    { value: "all", label: "All" },
    { value: "web", label: "Web" },
    { value: "app", label: "App" },
    { value: "fullstack", label: "Full Stack" },
  ];

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
            Here are some of my recent projects. Each project is a unique piece
            of development that showcases my skills and passion for building web
            applications.
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
                    className="object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
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
                  <Button asChild variant="outline" size="sm">
                    <Link href={project.backendCode} target="_blank">
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
  );
}
