"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import { Container } from "@/components/ui/container"

export function FooterNew() {
    return (
        <footer className="relative border-t border-neutral-200 dark:border-white/10 bg-white dark:bg-black overflow-hidden">
            <Container>
                <div className="py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 font-heading text-neutral-900 dark:text-white">
                                Let's work together
                            </h3>
                            <p className="text-neutral-600 dark:text-neutral-400 max-w-md mb-8">
                                I'm currently available for freelance work and open to new opportunities.
                                Let's build something amazing together.
                            </p>
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/Dileep-kumarc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-neutral-100 dark:bg-white/5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 text-neutral-600 dark:text-neutral-400"
                                >
                                    <Github className="h-5 w-5" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/dileep-kumar-c-a6a2a9259/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-full bg-neutral-100 dark:bg-white/5 hover:bg-blue-600 hover:text-white transition-all duration-300 text-neutral-600 dark:text-neutral-400"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                                <a
                                    href="mailto:dileepkmrc@gmail.com"
                                    className="p-3 rounded-full bg-neutral-100 dark:bg-white/5 hover:bg-red-500 hover:text-white transition-all duration-300 text-neutral-600 dark:text-neutral-400"
                                >
                                    <Mail className="h-5 w-5" />
                                </a>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 md:items-end">
                            <a href="#about" className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">About</a>
                            <a href="#projects" className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Projects</a>
                            <a href="#experience" className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Experience</a>
                            <a href="#contact" className="text-neutral-600 dark:text-neutral-400 hover:text-black dark:hover:text-white transition-colors">Contact</a>
                        </div>
                    </div>

                    <div className="relative">
                        <h1 className="font-heading text-[12vw] leading-none font-bold text-neutral-900 dark:text-neutral-900 select-none pointer-events-none text-center md:text-left opacity-10 dark:opacity-100 dark:text-neutral-800">
                            DILEEP KUMAR
                        </h1>
                        <div className="absolute bottom-4 left-0 right-0 flex justify-between items-end px-2">
                            <p className="text-neutral-500 text-sm">
                                © {new Date().getFullYear()}
                            </p>
                            <p className="text-neutral-500 text-sm flex items-center gap-1">
                                Dileep Kumar C
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    )
}
