"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap } from "lucide-react"
import { Container } from "@/components/ui/container"
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Parallax3D, ParallaxLayer, MouseParallax } from "@/components/ui/parallax-scroll"

import Image from "next/image"

const experience = [
    {
        title: "Java Full Stack Intern",
        company: "TAP Academy",
        period: "Jul 2025 – Present",
        description: "Full-stack development with Java, Spring, and MySQL in agile teams.",
        gradient: "from-blue-500/20 to-cyan-500/20",
        image: "/java.png"
    },
    {
        title: "Web Development Intern",
        company: "Onsite",
        period: "Jan 2024 – Jun 2024",
        description: "Responsive websites using HTML, CSS, and JavaScript.",
        gradient: "from-purple-500/20 to-pink-500/20",
        image: "/web.png"
    },
    {
        title: "AICTE Ideal Lab Internship",
        company: "AICTE",
        period: "Oct 2022 – Nov 2022",
        description: "3D printing, laser cutting, and PCB manufacturing.",
        gradient: "from-green-500/20 to-emerald-500/20",
        image: "/ideallab.png"
    }
]

const education = [
    {
        degree: "Bachelor of Engineering",
        field: "Information Science & Engineering",
        school: "Malnad College of Engineering, Hassan",
        period: "2021 - 2025",
        grade: "CGPA: 7.0/10",
        gradient: "from-orange-500/20 to-red-500/20",
        image: "/Malnad College.png"
    },
    {
        degree: "Pre-University Course",
        field: "PCMB",
        school: "M. Krishna PU College, Hassan",
        period: "2019 - 2021",
        grade: "80% Aggregate",
        gradient: "from-yellow-500/20 to-amber-500/20",
        image: "/mkrishnapu.png"
    },
    {
        degree: "SSLC",
        field: "State Board",
        school: "Swarna High School",
        period: "2018 - 2019",
        grade: "85% Aggregate",
        gradient: "from-indigo-500/20 to-violet-500/20",
        image: "/swarn.png"
    }
]

export function ExperienceNew() {
    return (
        <section id="experience" className="py-20 px-4">
            <Container>
                <Parallax3D depth={50} rotateX={true} rotateY={false}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                            Experience & Education
                        </h2>
                        <p className="text-neutral-400 mt-4">My professional journey and academic background</p>
                    </motion.div>
                </Parallax3D>

                <div className="space-y-16">
                    {/* Experience */}
                    <div>
                        <ParallaxLayer speed={0.4}>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-primary/10 rounded-full">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold">Internships</h3>
                            </div>
                        </ParallaxLayer>
                        <BentoGrid>
                            {experience.map((item, idx) => (
                                <MouseParallax key={idx} strength={7}>
                                    <BentoGridItem
                                        title={item.title}
                                        description={
                                            <div className="space-y-2 relative z-10">
                                                <p className="text-primary font-medium">{item.company}</p>
                                                <p className="text-xs text-neutral-500">{item.period}</p>
                                                <p className="text-sm">{item.description}</p>
                                            </div>
                                        }
                                        header={
                                            <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br ${item.gradient} border border-white/[0.1] relative overflow-hidden group/image`}>
                                                {item.image && (
                                                    <Image
                                                        src={item.image}
                                                        alt={item.title}
                                                        fill
                                                        className="object-cover opacity-60 group-hover/image:opacity-80 transition-opacity duration-500"
                                                    />
                                                )}
                                            </div>
                                        }
                                    />
                                </MouseParallax>
                            ))}
                        </BentoGrid>
                    </div>

                    {/* Education */}
                    <div id="education">
                        <ParallaxLayer speed={0.4}>
                            <div className="flex items-center gap-3 mb-8">
                                <div className="p-3 bg-primary/10 rounded-full">
                                    <GraduationCap className="h-6 w-6 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold">Education</h3>
                            </div>
                        </ParallaxLayer>
                        <BentoGrid>
                            {education.map((item, idx) => (
                                <MouseParallax key={idx} strength={7}>
                                    <BentoGridItem
                                        title={item.degree}
                                        description={
                                            <div className="space-y-2 relative z-10">
                                                <p className="text-primary font-medium">{item.school}</p>
                                                <p className="text-xs text-neutral-500">{item.period}</p>
                                                <p className="text-sm">{item.field}</p>
                                                <p className="text-xs font-semibold text-green-400">{item.grade}</p>
                                            </div>
                                        }
                                        header={
                                            <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br ${item.gradient} border border-white/[0.1] relative overflow-hidden group/image`}>
                                                {item.image && (
                                                    <Image
                                                        src={item.image}
                                                        alt={item.school}
                                                        fill
                                                        className="object-cover opacity-60 group-hover/image:opacity-80 transition-opacity duration-500"
                                                    />
                                                )}
                                            </div>
                                        }
                                    />
                                </MouseParallax>
                            ))}
                        </BentoGrid>
                    </div>
                </div>
            </Container>
        </section>
    )
}
