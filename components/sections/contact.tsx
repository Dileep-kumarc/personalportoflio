"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Send } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Contact() {
    return (
        <section id="contact" className="py-20 bg-muted/30">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-primary">Touch</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Let's work together!</h3>
                        <p className="text-muted-foreground mb-8">
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="space-y-6">
                            <Card className="border-none shadow-md bg-background/50 backdrop-blur-sm">
                                <CardContent className="p-6 flex items-center gap-4">
                                    <div className="p-3 bg-primary/10 rounded-full">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Email</h4>
                                        <a href="mailto:dileepkmrc@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                            dileepkmrc@gmail.com
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-md bg-background/50 backdrop-blur-sm">
                                <CardContent className="p-6 flex items-center gap-4">
                                    <div className="p-3 bg-primary/10 rounded-full">
                                        <MapPin className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Location</h4>
                                        <p className="text-muted-foreground">Hassan, India</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Card className="border-none shadow-lg">
                            <CardContent className="p-8">
                                <form action="https://formspree.io/f/xvgwlbeb" method="POST" className="space-y-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                                        <Input id="name" name="name" placeholder="Your Name" required />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium">Email</label>
                                        <Input id="email" name="email" type="email" placeholder="Your Email" required />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium">Message</label>
                                        <Textarea id="message" name="message" placeholder="Your Message" rows={5} required />
                                    </div>

                                    <Button type="submit" className="w-full gap-2">
                                        Send Message <Send className="h-4 w-4" />
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}
