"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function About() {
  const skills = {
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Bootstrap CSS",
    ],
    backend: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Firebase",
      "REST API",
      "GraphQL",
    ],
    tools: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Adobe XD",
      "Webpack",
      "Jest",
      "React Testing Library",
    ],
  };

  const timeline = [
    {
      year: "2025",
      title: "Full Stack Developer",
      company: "Alina Software LLP Bhopal",
      description:
        "Led the frontend & Backend development team in building a modern web application using React and NodeJs. ",
    },
    {
      year: "2024",
      title: "Senior Frontend Developer",
      company: "Arrow Ai Mumbai",
      description:
        "Developed responsive websites and web applications for various clients using React and Next.js.",
    },
    {
      year: "2023",
      title: "Junior Web Developer",
      company: "Mediquity Technologies Pvt. Ltd. Bhopal",
      description:
        "Started my career as a web developer working with HTML, CSS, JavaScript And React.",
    },
    {
      year: "2018",
      title: "Information Technology Degree",
      company: "RGPV Bhopal University",
      description:
        "Graduated with a Bachelor's degree in Information Technology.",
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate Full Stack developer with a strong focus on
            creating intuitive and performant user interfaces. With several
            years of experience in web development, I enjoy turning complex
            problems into simple, beautiful solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-lg overflow-hidden border-4 border-primary/20">
              <Image
                src="/pic.jpeg"
                alt="Profile"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Who am I?</h3>
            <p className="text-muted-foreground">
              I'm a Full Stack developer based in Bhopal India with a passion
              for building digital experiences that are both functional and
              beautiful. I specialize in creating responsive websites and web
              applications that provide a smooth user experience.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying outdoor
              activities. I'm always open to new opportunities and challenges.
            </p>

            <div className="pt-4">
              <h3 className="text-2xl font-bold mb-4">My Skills</h3>
              <Tabs defaultValue="frontend">
                <TabsList className="mb-4">
                  <TabsTrigger value="frontend">Frontend</TabsTrigger>
                  <TabsTrigger value="backend">Backend</TabsTrigger>
                  <TabsTrigger value="tools">Tools</TabsTrigger>
                </TabsList>
                <TabsContent value="frontend" className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="backend" className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="tools" className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm py-1"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-10">My Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex items-center"
                >
                  {index % 2 === 0 ? (
                    <>
                      <div className="flex-1 pr-8">
                        <Card>
                          <CardContent className="p-6">
                            <div className="text-sm text-primary font-semibold mb-1">{item.year}</div>
                            <div className="font-bold text-lg mb-1">{item.title}</div>
                            <div className="text-primary font-medium mb-2">{item.company}</div>
                            <div className="text-muted-foreground">{item.description}</div>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"></div>
                      <div className="flex-1"></div>
                    </>
                  ) : (
                    <>
                      <div className="flex-1"></div>
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"></div>
                      <div className="flex-1 pl-8">
                        <Card>
                          <CardContent className="p-6">
                            <div className="text-sm text-primary font-semibold mb-1">{item.year}</div>
                            <div className="font-bold text-lg mb-1">{item.title}</div>
                            <div className="text-primary font-medium mb-2">{item.company}</div>
                            <div className="text-muted-foreground">{item.description}</div>
                          </CardContent>
                        </Card>
                      </div>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
