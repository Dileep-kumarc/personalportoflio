"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Parallax3D, MouseParallax, ParallaxLayer } from "@/components/ui/parallax-scroll"

export function ContactNew() {
    return (
        <section id="contact" className="py-20 px-4">
            <Container>
                <Parallax3D depth={50} rotateX={true} rotateY={false}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                            Let's Connect
                        </h2>
                        <p className="text-neutral-400 mt-4">Ready to bring your ideas to life</p>
                    </motion.div>
                </Parallax3D>

                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <ParallaxLayer speed={0.3}>
                                <MouseParallax strength={6}>
                                    <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/[0.1]">
                                        <Mail className="h-8 w-8 text-primary mb-4" />
                                        <h3 className="font-bold text-lg mb-2">Email</h3>
                                        <a href="mailto:dileepkmrc@gmail.com" className="text-neutral-400 hover:text-primary transition-colors">
                                            dileepkmrc@gmail.com
                                        </a>
                                    </div>
                                </MouseParallax>
                            </ParallaxLayer>

                            <ParallaxLayer speed={0.4}>
                                <MouseParallax strength={6}>
                                    <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/[0.1]">
                                        <MapPin className="h-8 w-8 text-primary mb-4" />
                                        <h3 className="font-bold text-lg mb-2">Location</h3>
                                        <p className="text-neutral-400">Hassan, India</p>
                                    </div>
                                </MouseParallax>
                            </ParallaxLayer>

                            <ParallaxLayer speed={0.5}>
                                <MouseParallax strength={6}>
                                    <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-white/[0.1]">
                                        <h3 className="font-bold text-lg mb-4">Follow Me</h3>
                                        <div className="flex gap-4">
                                            <a href="https://github.com/Dileep-kumarc" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                                <Github className="h-6 w-6 text-neutral-400 hover:text-white" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/dileep-kumar-c-a6a2a9259/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                                <Linkedin className="h-6 w-6 text-neutral-400 hover:text-white" />
                                            </a>
                                            <a href="mailto:dileepkmrc@gmail.com" className="hover:scale-110 transition-transform">
                                                <Mail className="h-6 w-6 text-neutral-400 hover:text-white" />
                                            </a>
                                        </div>
                                    </div>
                                </MouseParallax>
                            </ParallaxLayer>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <MouseParallax strength={8}>
                                <div className="p-8 rounded-xl bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:bg-gradient-to-br dark:from-neutral-900 dark:to-neutral-800 dark:border-white/[0.1] dark:shadow-none">
                                    <form action="https://formspree.io/f/xvgwlbeb" method="POST" className="space-y-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Name</label>
                                            <Input id="name" name="name" placeholder="Your Name" required className="bg-white/50 border-neutral-200 text-neutral-900 placeholder:text-neutral-500 dark:bg-black/50 dark:border-white/10 dark:text-white dark:placeholder:text-neutral-400" />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Email</label>
                                            <Input id="email" name="email" type="email" placeholder="your@email.com" required className="bg-white/50 border-neutral-200 text-neutral-900 placeholder:text-neutral-500 dark:bg-black/50 dark:border-white/10 dark:text-white dark:placeholder:text-neutral-400" />
                                        </div>

                                        <div className="space-y-2">
                                            <label htmlFor="message" className="text-sm font-medium text-neutral-700 dark:text-neutral-200">Message</label>
                                            <Textarea id="message" name="message" placeholder="Your message..." rows={5} required className="bg-white/50 border-neutral-200 text-neutral-900 placeholder:text-neutral-500 dark:bg-black/50 dark:border-white/10 dark:text-white dark:placeholder:text-neutral-400" />
                                        </div>

                                        <Button type="submit" className="w-full gap-2 bg-primary hover:bg-primary/90 text-white">
                                            Send Message <Send className="h-4 w-4" />
                                        </Button>
                                    </form>
                                </div>
                            </MouseParallax>
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
