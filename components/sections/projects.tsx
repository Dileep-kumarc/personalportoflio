"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "../ui/badge"

const projects = [
    {
        title: "Biomarker Intelligence Platform",
        description: "A healthcare analytics platform to visualize biomarker trends and support clinical decisions with interactive charts.",
        tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/Dileep-kumarc/kumar-workings.git",
        demo: "https://kumar-workings.vercel.app/",
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "AI Central Hub",
        description: "A comprehensive AI/ML project-sharing web platform enabling users to upload, view, and interact with machine learning projects.",
        tags: ["Flask", "MySQL", "HTML/CSS", "JavaScript"],
        github: "https://github.com/Dileep-kumarc/AIhub.git",
        demo: null,
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Brain Tumor Detection (CNN)",
        description: "Built a deep learning model with 92% accuracy using TensorFlow & PyTorch for detecting brain tumors from MRI scans.",
        tags: ["Python", "TensorFlow", "Streamlit", "CNN"],
        github: "https://github.com/Dileep-kumarc/Brain-Tumor-Detection-using-CNN.git",
        demo: null,
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "AI Space Defense",
        description: "A cyberpunk space shooter exploring AI ethics through gameplay with dynamic difficulty and global leaderboard.",
        tags: ["p5.js", "Supabase", "JavaScript"],
        github: "https://github.com/Dileep-kumarc/space-shooters.git",
        demo: "https://dileep-kumarc.github.io/space-shooters/",
        color: "from-orange-500 to-red-500"
    },
    {
        title: "College Notes Gallery",
        description: "A web app for sharing and managing college notes among students and faculty with secure login and role-based access.",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        github: "https://github.com/Dileep-kumarc/college-notes-gallery-.git",
        demo: null,
        color: "from-yellow-500 to-amber-500"
    },
    {
        title: "Online Calculators",
        description: "Responsive utility tool website built with HTML, CSS, JS, and Bootstrap featuring multiple calculator types.",
        tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        github: "https://github.com/Dileep-kumarc/age-calculator-",
        demo: "https://www.freeonlinecalculators.online/",
        color: "from-indigo-500 to-violet-500"
    }
]

export function Projects() {
    return (
        <section id="projects" className="py-20 bg-muted/30">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A showcase of my technical projects and creative endeavors.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 border-primary/10 group">
                                <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />
                                <CardHeader>
                                    <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary" className="text-xs">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                    <CardDescription className="text-base">
                                        {project.description}
                                    </CardDescription>
                                </CardContent>
                                <CardFooter className="flex gap-4 pt-4 border-t bg-muted/20">
                                    <Button variant="outline" size="sm" className="w-full gap-2" asChild>
                                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="h-4 w-4" /> GitHub
                                        </a>
                                    </Button>
                                    {project.demo && (
                                        <Button size="sm" className="w-full gap-2" asChild>
                                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="h-4 w-4" /> Live Demo
                                            </a>
                                        </Button>
                                    )}
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
