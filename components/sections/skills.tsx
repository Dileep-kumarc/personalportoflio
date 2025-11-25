"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"

const skills = [
    { name: "Java", icon: "☕", level: "Advanced" },
    { name: "Python", icon: "🐍", level: "Advanced" },
    { name: "JavaScript", icon: "⚡", level: "Advanced" },
    { name: "React / Next.js", icon: "⚛️", level: "Intermediate" },
    { name: "Spring Boot", icon: "🍃", level: "Intermediate" },
    { name: "MySQL", icon: "🐬", level: "Advanced" },
    { name: "HTML5", icon: "🌐", level: "Expert" },
    { name: "CSS3 / Tailwind", icon: "🎨", level: "Expert" },
    { name: "Flask", icon: "🌶️", level: "Intermediate" },
    { name: "Git", icon: "📦", level: "Intermediate" },
]

export function Skills() {
    return (
        <section id="skills" className="py-20">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="text-primary">Skills</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Technologies and tools I work with to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                        >
                            <Card className="h-full hover:border-primary/50 transition-colors cursor-default group">
                                <CardContent className="p-6 flex flex-col items-center justify-center gap-4 text-center">
                                    <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
                                        {skill.icon}
                                    </span>
                                    <div>
                                        <h3 className="font-bold">{skill.name}</h3>
                                        <p className="text-xs text-muted-foreground mt-1">{skill.level}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
