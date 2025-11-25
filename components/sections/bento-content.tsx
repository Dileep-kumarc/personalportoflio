"use client"

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid"
import { Container } from "@/components/ui/container"
import { Code, Briefcase, Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import { MouseParallax, Parallax3D } from "@/components/ui/parallax-scroll"

const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/[0.1]"></div>
)

export function BentoContent() {
    return (
        <section id="about" className="py-20 px-4">
            <Container>
                <Parallax3D depth={60} rotateX={true} rotateY={false}>
                    <BentoGrid className="max-w-7xl mx-auto">
                        {/* Profile Card - Large */}
                        <MouseParallax strength={5}>
                            <BentoGridItem
                                title="Full Stack Developer"
                                description="Passionate about building scalable web applications and exploring AI/ML technologies."
                                header={
                                    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-white/[0.1] items-center justify-center">
                                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-primary/50">
                                            <Image
                                                src="/passport image.png"
                                                alt="Profile"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                }
                                className="md:col-span-2"
                                icon={<Code className="h-4 w-4 text-neutral-500" />}
                            />
                        </MouseParallax>

                        {/* Location Card */}
                        <MouseParallax strength={8}>
                            <BentoGridItem
                                title="Based in Hassan, India"
                                description="Open to remote opportunities worldwide"
                                header={
                                    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-orange-500/20 to-yellow-500/20 border border-white/[0.1] items-center justify-center relative overflow-hidden">
                                        <Image
                                            src="/Hassan.png"
                                            alt="Hassan, India"
                                            fill
                                            className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                                        />
                                    </div>
                                }
                                icon={<MapPin className="h-4 w-4 text-neutral-500" />}
                            />
                        </MouseParallax>

                        {/* Skills Card - Wide */}
                        <MouseParallax strength={5}>
                            <BentoGridItem
                                title="Tech Stack"
                                description="Java • Python • JavaScript • React • Next.js • Spring Boot • MySQL"
                                header={
                                    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-white/[0.1] items-center justify-center">
                                        <div className="flex gap-4 flex-wrap justify-center p-4">
                                            {["☕", "🐍", "⚛️", "🍃", "🐬"].map((emoji, i) => (
                                                <span key={i} className="text-4xl filter grayscale hover:grayscale-0 transition-all">
                                                    {emoji}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                }
                                className="md:col-span-2"
                                icon={<Code className="h-4 w-4 text-neutral-500" />}
                            />
                        </MouseParallax>


                        {/* Social Links Card */}
                        <MouseParallax strength={5}>
                            <BentoGridItem
                                title="Connect"
                                description="Let's build something amazing together"
                                header={
                                    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-pink-500/20 to-red-500/20 border border-white/[0.1] items-center justify-center gap-4 relative overflow-hidden group/image">
                                        <Image
                                            src="/connect.png"
                                            alt="Connect"
                                            fill
                                            className="object-cover opacity-40 group-hover/image:opacity-60 transition-opacity duration-500"
                                        />
                                        <div className="flex gap-4 relative z-10">
                                            <a href="https://github.com/Dileep-kumarc" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                                <Github className="h-8 w-8 text-neutral-400 hover:text-white" />
                                            </a>
                                            <a href="https://www.linkedin.com/in/dileep-kumar-c-a6a2a9259/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                                                <Linkedin className="h-8 w-8 text-neutral-400 hover:text-white" />
                                            </a>
                                            <a href="mailto:dileepkmrc@gmail.com" className="hover:scale-110 transition-transform">
                                                <Mail className="h-8 w-8 text-neutral-400 hover:text-white" />
                                            </a>
                                        </div>
                                    </div>
                                }
                                className="md:col-span-2"
                                icon={<Mail className="h-4 w-4 text-neutral-500" />}
                            />
                        </MouseParallax>

                        {/* CTA Card */}
                        <MouseParallax strength={8}>
                            <BentoGridItem
                                title="Available for Work"
                                description="Currently seeking new opportunities"
                                header={
                                    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-white/[0.1] items-center justify-center relative overflow-hidden">
                                        <Image
                                            src="/avalible work.png"
                                            alt="Available for Work"
                                            fill
                                            className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
                                        />
                                        <div className="absolute top-2 right-2 w-3 h-3 bg-green-500 rounded-full animate-pulse z-10"></div>
                                    </div>
                                }
                                icon={<Briefcase className="h-4 w-4 text-neutral-500" />}
                            />
                        </MouseParallax>
                    </BentoGrid>
                </Parallax3D>
            </Container>
        </section>
    )
}
