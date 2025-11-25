"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"
import { ArrowRight, Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { Background3D } from "@/components/ui/background-3d"

export function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
            <Background3D />

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6 text-center lg:text-left"
                    >
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 border border-primary/20">
                            Available for Work
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                            Hey, I am <br />
                            <span className="text-primary">Dileep Kumar</span>
                        </h1>

                        <div className="text-xl md:text-2xl text-muted-foreground h-[60px]">
                            <TypeAnimation
                                sequence={[
                                    "Full Stack Developer",
                                    2000,
                                    "UI/UX Designer",
                                    2000,
                                    "AI Enthusiast",
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                            />
                        </div>

                        <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
                            Information Science graduate passionate about building scalable web applications and AI-driven solutions. Proficient in Java, Python, SQL, and modern web technologies.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" className="gap-2" asChild>
                                <a href="#contact">
                                    Hire Me <ArrowRight className="h-4 w-4" />
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="gap-2" onClick={() => alert("Resume download coming soon!")}>
                                Download CV <Download className="h-4 w-4" />
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative mx-auto lg:mx-0"
                    >
                        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
                            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
                                <Image
                                    src="/Picture3.png"
                                    alt="Dileep Kumar"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Floating Icons */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-4 -right-4 bg-background p-3 rounded-xl shadow-lg border"
                            >
                                <span className="text-2xl">⚛️</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-8 -left-8 bg-background p-3 rounded-xl shadow-lg border"
                            >
                                <span className="text-2xl">🐍</span>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                className="absolute -bottom-4 right-12 bg-background p-3 rounded-xl shadow-lg border"
                            >
                                <span className="text-2xl">☕</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
