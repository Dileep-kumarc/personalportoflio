"use client"

import { Container } from "@/components/ui/container"
import { motion } from "framer-motion"

const SkillTag = ({ icon, name, color }: { icon: string; name: string; color: string }) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className={`flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-sm hover:border-${color}-500/50 transition-colors cursor-default`}
    >
        <span className="text-xl">{icon}</span>
        <span className="text-sm font-medium text-neutral-200">{name}</span>
    </motion.div>
)

export function SkillsNew() {
    const skills = [
        { name: "Java", icon: "☕", color: "red" },
        { name: "Python", icon: "🐍", color: "blue" },
        { name: "HTML", icon: "🌐", color: "orange" },
        { name: "CSS", icon: "🎨", color: "blue" },
        { name: "Bootstrap", icon: "🅱️", color: "purple" },
        { name: "JavaScript", icon: "⚡", color: "yellow" },
        { name: "MySQL", icon: "🐬", color: "blue" },
        { name: "Spring Boot", icon: "🍃", color: "green" },
        { name: "Flask", icon: "🌶️", color: "red" },
    ]

    return (
        <section id="skills" className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50" />

            <Container className="relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-500">
                        Tech Stack
                    </h2>
                    <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
                        A curated collection of technologies I use to build robust and scalable applications.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <SkillTag {...skill} />
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}
