"use client"

import { motion, useInView, Variants } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

interface TextRevealProps {
    text: string
    className?: string
    delay?: number
    once?: boolean
}

// Character-by-character reveal
export function TextRevealChar({ text, className, delay = 0, once = true }: TextRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once, margin: "-50px" })

    return (
        <span ref={ref} className={cn("inline-block", className)}>
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                    transition={{
                        duration: 0.5,
                        delay: delay + i * 0.03,
                        ease: [0.215, 0.61, 0.355, 1],
                    }}
                    className="inline-block"
                    style={{ transformOrigin: "bottom" }}
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    )
}

// Word-by-word reveal
export function TextRevealWord({ text, className, delay = 0, once = true }: TextRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once, margin: "-50px" })

    const words = text.split(" ")

    return (
        <span ref={ref} className={cn("inline-block", className)}>
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                    <motion.span
                        initial={{ y: "100%", opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{
                            duration: 0.5,
                            delay: delay + i * 0.1,
                            ease: [0.215, 0.61, 0.355, 1],
                        }}
                        className="inline-block"
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    )
}

// Line reveal with mask
export function TextRevealLine({ text, className, delay = 0, once = true }: TextRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once, margin: "-100px" })

    return (
        <div ref={ref} className={cn("overflow-hidden", className)}>
            <motion.div
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{
                    duration: 0.8,
                    delay,
                    ease: [0.215, 0.61, 0.355, 1],
                }}
            >
                {text}
            </motion.div>
        </div>
    )
}

// Gradient reveal effect
export function TextRevealGradient({ text, className, delay = 0, once = true }: TextRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once, margin: "-50px" })

    return (
        <motion.span
            ref={ref}
            className={cn("inline-block bg-clip-text", className)}
            initial={{
                backgroundSize: "0% 100%",
                color: "transparent",
                backgroundImage: "linear-gradient(90deg, currentColor 50%, transparent 50%)",
            }}
            animate={isInView ? {
                backgroundSize: "200% 100%",
            } : {}}
            transition={{
                duration: 1.2,
                delay,
                ease: [0.215, 0.61, 0.355, 1],
            }}
            style={{
                backgroundRepeat: "no-repeat",
                WebkitBackgroundClip: "text",
            }}
        >
            {text}
        </motion.span>
    )
}

// Split lines reveal (for paragraphs)
interface SplitRevealProps {
    children: string
    className?: string
    lineClassName?: string
    delay?: number
    once?: boolean
}

export function SplitLinesReveal({ children, className, lineClassName, delay = 0, once = true }: SplitRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once, margin: "-50px" })

    const lines = children.split("\n")

    return (
        <div ref={ref} className={className}>
            {lines.map((line, i) => (
                <div key={i} className="overflow-hidden">
                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{
                            duration: 0.6,
                            delay: delay + i * 0.15,
                            ease: [0.215, 0.61, 0.355, 1],
                        }}
                        className={lineClassName}
                    >
                        {line}
                    </motion.div>
                </div>
            ))}
        </div>
    )
}

// Blur reveal effect
export function TextRevealBlur({ text, className, delay = 0, once = true }: TextRevealProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once, margin: "-50px" })

    return (
        <motion.span
            ref={ref}
            className={cn("inline-block", className)}
            initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
            animate={isInView ? { opacity: 1, filter: "blur(0px)", y: 0 } : {}}
            transition={{
                duration: 0.8,
                delay,
                ease: [0.215, 0.61, 0.355, 1],
            }}
        >
            {text}
        </motion.span>
    )
}

// Typewriter effect
interface TypewriterProps {
    text: string
    className?: string
    speed?: number
    delay?: number
}

export function Typewriter({ text, className, speed = 50, delay = 0 }: TypewriterProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <span ref={ref} className={cn("inline-block", className)}>
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{
                        duration: 0,
                        delay: delay + (i * speed) / 1000,
                    }}
                >
                    {char}
                </motion.span>
            ))}
            <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: [0, 1, 0] } : {}}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: delay + (text.length * speed) / 1000,
                }}
                className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle"
            />
        </span>
    )
}
