"use client"

import { motion } from "framer-motion"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Experience() {
  const technicalSkills = [
    { name: "HTML & CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 75 },
    { name: "UI/UX Design", level: 70 },
  ]

  const softSkills = [
    { name: "Communication", level: 90 },
    { name: "Teamwork", level: 95 },
    { name: "Problem Solving", level: 85 },
    { name: "Time Management", level: 80 },
    { name: "Adaptability", level: 85 },
    { name: "Leadership", level: 75 },
  ]

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Alina Software LLP Bhopal",
      period: "2025 - Present",
      description: [
        "Led a team of 5 developers in building a modern web application using React , TypeScript And NodeJs.",
        "Implemented CI/CD pipelines to streamline the development process",
        "Reduced page load time by 40% through performance optimizations",
        "Collaborated with designers to create a consistent design system",
      ],
    },
    {
      title: "Senior Frontend Developer",
      company: "Arrow Ai Bhopal",
      period: "June-2024 - Dec-2024",
      description: [
        "Developed responsive websites and web applications for various clients",
        "Worked with React, Next.js, and various CSS frameworks",
        "Implemented accessibility features to ensure WCAG compliance",
        "Participated in code reviews and mentored junior developers",
      ],
    },
    {
      title: "Junior Web Developer",
      company: "Startup",
      period: "Jan-2024 - June-2024",
      description: [
        "Built and maintained websites using HTML, CSS, and JavaScript",
        "Collaborated with the design team to implement UI/UX designs",
        "Optimized websites for maximum speed and scalability",
        "Assisted in the development of a company-wide design system",
      ],
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "Rajiv Gandhi Proudyogiki Vishwavidyalaya Bhopal",
      period: "2011 - 2018",
      description: "Graduated with honors. Focused on web development and user interface design.",
    },
    {
      degree: "Web Development Bootcamp",
      institution: "Coding Academy",
      period: "2018",
      description: "Intensive 12-week program covering full-stack web development.",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the skills I've acquired along the way. I'm constantly learning and improving my
            abilities to deliver the best results.
          </p>
        </motion.div>

        <Tabs defaultValue="experience" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <TabsContent value="experience">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Work Experience</h3>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle>{exp.title}</CardTitle>
                          <CardDescription>
                            {exp.company} | {exp.period}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="list-disc pl-5 space-y-2">
                            {exp.description.map((item, i) => (
                              <li key={i} className="text-muted-foreground">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Education</h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card>
                        <CardHeader>
                          <CardTitle>{edu.degree}</CardTitle>
                          <CardDescription>
                            {edu.institution} | {edu.period}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{edu.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="skills">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Soft Skills</h3>
                <div className="space-y-6">
                  {softSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

