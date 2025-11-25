"use client"

import { motion } from "framer-motion"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Brain, Rocket } from "lucide-react"

export function About() {
    return (
        <section id="about" className="py-20 bg-muted/30">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-primary">Me</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        I am a passionate developer with a strong foundation in computer science and a knack for solving complex problems with elegant code.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Code2 className="h-10 w-10 text-primary" />,
                            title: "Full Stack Dev",
                            description: "Building end-to-end solutions with modern tech stacks like MERN and Next.js."
                        },
                        {
                            icon: <Brain className="h-10 w-10 text-primary" />,
                            title: "AI & ML",
                            description: "Exploring the frontiers of Artificial Intelligence and Machine Learning applications."
                        },
                        {
                            icon: <Rocket className="h-10 w-10 text-primary" />,
                            title: "Problem Solver",
                            description: "Turning complex challenges into simple, efficient, and scalable solutions."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Card className="h-full hover:shadow-lg transition-shadow border-primary/10">
                                <CardContent className="pt-6 text-center flex flex-col items-center gap-4">
                                    <div className="p-4 rounded-full bg-primary/10 mb-2">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
