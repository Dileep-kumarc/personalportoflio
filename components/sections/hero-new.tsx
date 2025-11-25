"use client"

import React from "react"
import { motion } from "framer-motion"
import { Background3D } from "@/components/ui/background-3d"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Parallax3D, ParallaxLayer } from "@/components/ui/parallax-scroll"
import { Meteors } from "@/components/ui/meteors"

export function HeroNew() {
    return (
        <div className="h-screen w-full rounded-md flex md:items-center md:justify-center bg-transparent dark:bg-black/[0.96] antialiased dark:bg-grid-white/[0.02] relative overflow-hidden">
            <ParallaxLayer speed={0.3} className="absolute inset-0">
                <Background3D />
                <Meteors number={20} />
            </ParallaxLayer>
            <Parallax3D depth={80} rotateX={true} rotateY={false} scale={true} className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                <motion.h1
                    initial={{ opacity: 0.5, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="font-heading text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50"
                >
                    Dileep Kumar C <br />
                    <span className="text-2xl md:text-5xl text-primary font-sans">Full Stack Developer.</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="mt-4 font-normal text-base text-neutral-700 dark:text-neutral-300 max-w-lg"
                >
                    Crafting digital experiences with code. Specializing in modern web technologies and AI integration.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="mt-8 flex gap-4"
                >
                    <Button size="lg" className="rounded-full bg-primary hover:bg-primary/90 text-white" asChild>
                        <a href="#projects">View Work <ArrowRight className="ml-2 h-4 w-4" /></a>
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full border-neutral-200 dark:border-white/10 text-neutral-900 dark:text-white hover:bg-neutral-100 dark:hover:bg-white/10" asChild>
                        <a href="#contact">Contact Me</a>
                    </Button>
                </motion.div>
            </Parallax3D>
        </div>
    )
}
