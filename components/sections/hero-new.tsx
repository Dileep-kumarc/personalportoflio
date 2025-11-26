"use client"

import React from "react"
import { motion } from "framer-motion"
import { Background3D } from "@/components/ui/background-3d"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import { Parallax3D, ParallaxLayer } from "@/components/ui/parallax-scroll"
import { Meteors } from "@/components/ui/meteors"
import { TextRevealChar, TextRevealWord, TextRevealBlur } from "@/components/ui/text-reveal"

export function HeroNew() {
    return (
        <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-transparent dark:bg-black/[0.96] antialiased dark:bg-grid-white/[0.02] relative overflow-hidden">
            <ParallaxLayer speed={0.3} className="absolute inset-0">
                <Background3D />
                <Meteors number={20} />
            </ParallaxLayer>
            <Parallax3D depth={80} rotateX={true} rotateY={false} scale={true} className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Greeting */}
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-primary font-medium mb-4 flex items-center gap-2"
                    >
                        <span className="inline-block w-8 h-[2px] bg-primary" />
                        Hello, I'm
                    </motion.p>

                    {/* Name with character reveal */}
                    <h1 className="font-heading text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50">
                        <TextRevealChar text="Dileep Kumar C" delay={0.3} />
                    </h1>

                    {/* Role with word reveal */}
                    <h2 className="text-2xl md:text-5xl text-primary font-sans font-bold mt-2">
                        <TextRevealWord text="Full Stack Developer" delay={0.8} />
                    </h2>
                </motion.div>

                {/* Description with blur reveal */}
                <p className="mt-6 font-normal text-base md:text-lg text-neutral-700 dark:text-neutral-300 max-w-xl">
                    <TextRevealBlur
                        text="Crafting digital experiences with code. Specializing in modern web technologies and AI integration."
                        delay={1.2}
                    />
                </p>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.6 }}
                    className="mt-8 flex gap-8 flex-wrap"
                >
                    {[
                        { number: "6+", label: "Projects" },
                        { number: "3+", label: "Internships" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <motion.span
                                className="text-3xl md:text-4xl font-bold text-primary"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 1.7 + i * 0.1, type: "spring" }}
                            >
                                {stat.number}
                            </motion.span>
                            <p className="text-sm text-neutral-500 dark:text-neutral-400">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                    className="mt-10 flex gap-4 flex-wrap"
                >
                    <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white group" asChild>
                        <a href="#projects">
                            View My Work
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-white/10 group" asChild>
                        <a href="#contact">
                            Let's Talk
                        </a>
                    </Button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.2 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-neutral-500 uppercase tracking-widest">Scroll</span>
                    <motion.div
                        className="w-6 h-10 border-2 border-neutral-300 dark:border-neutral-700 rounded-full flex justify-center pt-2"
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        <motion.div
                            className="w-1.5 h-1.5 bg-primary rounded-full"
                            animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                    </motion.div>
                </motion.div>
            </Parallax3D>
        </div>
    )
}
