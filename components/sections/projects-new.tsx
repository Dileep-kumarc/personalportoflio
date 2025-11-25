"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Parallax3D, MouseParallax } from "@/components/ui/parallax-scroll"

import Image from "next/image"

const projects = [
    {
        title: "Biomarker Intelligence Platform",
        description: "Healthcare analytics platform with interactive charts",
        tags: ["Next.js", "TypeScript", "Tailwind"],
        github: "https://github.com/Dileep-kumarc/kumar-workings.git",
        demo: "https://kumar-workings.vercel.app/",
        gradient: "from-blue-500/20 to-cyan-500/20",
        image: "/Screenshot 2025-11-25 232225.png"
    },
    {
        title: "AI Central Hub",
        description: "ML project-sharing platform",
        tags: ["Flask", "MySQL", "JavaScript"],
        github: "https://github.com/Dileep-kumarc/AIhub.git",
        gradient: "from-purple-500/20 to-pink-500/20",
        image: "/artificial-intelligence-concept.jpg"
    },
    {
        title: "Brain Tumor Detection",
        description: "CNN model with 92% accuracy",
        tags: ["Python", "TensorFlow", "Streamlit"],
        github: "https://github.com/Dileep-kumarc/Brain-Tumor-Detection-using-CNN.git",
        gradient: "from-green-500/20 to-emerald-500/20",
        image: "/doctor-looking-ct-scan.jpg"
    },
    {
        title: "AI Space Defense",
        description: "Cyberpunk space shooter game",
        tags: ["p5.js", "Supabase"],
        github: "https://github.com/Dileep-kumarc/space-shooters.git",
        demo: "https://dileep-kumarc.github.io/space-shooters/",
        gradient: "from-orange-500/20 to-red-500/20",
        image: "/Screenshot 2025-11-25 232841.png"
    },
    {
        title: "College Notes Gallery",
        description: "Notes sharing platform",
        tags: ["HTML", "CSS", "Bootstrap"],
        github: "https://github.com/Dileep-kumarc/college-notes-gallery-.git",
        gradient: "from-yellow-500/20 to-amber-500/20",
        image: "/college notes gallety.jpg"
    },
    {
        title: "Online Calculators",
        description: "Multi-purpose calculator suite",
        tags: ["JavaScript", "Bootstrap"],
        github: "https://github.com/Dileep-kumarc/age-calculator-",
        demo: "https://www.freeonlinecalculators.online/",
        gradient: "from-indigo-500/20 to-violet-500/20",
        image: "/Screenshot 2025-11-25 232651.png"
    }
]

export function ProjectsNew() {
    return (
        <section id="projects" className="py-20 px-4">
            <Container>
                <Parallax3D depth={50} rotateX={true} rotateY={false}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                            Featured Projects
                        </h2>
                        <p className="text-neutral-400 mt-4">Building the future, one project at a time</p>
                    </motion.div>
                </Parallax3D>

                <BentoGrid>
                    {projects.map((project, idx) => (
                        <MouseParallax key={idx} strength={idx % 2 === 0 ? 6 : 8}>
                            <BentoGridItem
                                title={project.title}
                                description={project.description}
                                header={
                                    <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br ${project.gradient} border border-white/[0.1] items-end justify-end p-4 relative overflow-hidden group/image`}>
                                        {project.image && (
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover opacity-80 group-hover/image:opacity-100 transition-opacity duration-500"
                                            />
                                        )}
                                        <div className="flex gap-2 relative z-10">
                                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                                <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm">
                                                    <Github className="h-4 w-4" />
                                                </Button>
                                            </a>
                                            {project.demo && (
                                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                                    <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-black/50 hover:bg-black/70 text-white backdrop-blur-sm">
                                                        <ExternalLink className="h-4 w-4" />
                                                    </Button>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                }
                                className={idx === 0 || idx === 3 ? "md:col-span-2" : ""}
                            />
                        </MouseParallax>
                    ))}
                </BentoGrid>
            </Container>
        </section>
    )
}
