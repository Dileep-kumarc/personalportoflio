"use client"

import React from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Home, User, Code, Briefcase, Mail, Layers, Menu, X } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const items = [
    { title: "Home", icon: Home, href: "#home" },
    { title: "About", icon: User, href: "#about" },
    { title: "Skills", icon: Layers, href: "#skills" },
    { title: "Projects", icon: Code, href: "#projects" },
    { title: "Experience", icon: Briefcase, href: "#experience" },
    { title: "Contact", icon: Mail, href: "#contact" },
]

export function FloatingDock() {
    const mouseX = useMotionValue(Infinity)
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    return (
        <>
            {/* Desktop Dock */}
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 hidden md:flex h-16 items-end gap-4 rounded-2xl bg-background/80 px-4 pb-3 backdrop-blur-2xl border border-white/10 shadow-2xl">
                {items.map((item) => (
                    <DockIcon mouseX={mouseX} key={item.title} {...item} />
                ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="fixed bottom-8 right-8 z-50 md:hidden">
                <Button
                    size="icon"
                    className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-2xl"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="fixed bottom-24 right-8 z-40 md:hidden bg-background/95 backdrop-blur-2xl border border-white/10 rounded-2xl p-4 shadow-2xl"
                >
                    <div className="flex flex-col gap-2">
                        {items.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-primary/20 transition-colors"
                            >
                                <item.icon className="h-5 w-5 text-primary" />
                                <span className="font-medium">{item.title}</span>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </>
    )
}

function DockIcon({ mouseX, title, icon: Icon, href }: any) {
    const ref = React.useRef<HTMLDivElement>(null)

    const distance = useTransform(mouseX, (val: number) => {
        const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
        return val - bounds.x - bounds.width / 2
    })

    const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40])
    const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 })

    return (
        <Link href={href}>
            <motion.div
                ref={ref}
                style={{ width }}
                onMouseMove={(e) => mouseX.set(e.pageX)}
                onMouseLeave={() => mouseX.set(Infinity)}
                className="aspect-square w-10 rounded-full bg-background/50 border border-white/10 flex items-center justify-center hover:bg-primary/20 transition-colors relative group"
            >
                <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 w-auto px-2 py-1 bg-background/90 rounded-md text-xs text-foreground opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 pointer-events-none whitespace-nowrap">
                    {title}
                </span>
            </motion.div>
        </Link>
    )
}
