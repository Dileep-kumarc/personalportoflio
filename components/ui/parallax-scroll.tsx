"use client"

import { useRef, ReactNode } from "react"
import { motion, useScroll, useTransform, MotionValue } from "framer-motion"

interface ParallaxProps {
    children: ReactNode
    offset?: number
    className?: string
}

export function ParallaxSection({ children, offset = 50, className = "" }: ParallaxProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    )
}

interface Parallax3DProps {
    children: ReactNode
    depth?: number
    className?: string
    rotateX?: boolean
    rotateY?: boolean
    scale?: boolean
}

export function Parallax3D({
    children,
    depth = 100,
    className = "",
    rotateX = true,
    rotateY = true,
    scale = true
}: Parallax3DProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [depth, -depth])
    const rotateXValue = useTransform(scrollYProgress, [0, 0.5, 1], rotateX ? [-15, 0, 15] : [0, 0, 0])
    const rotateYValue = useTransform(scrollYProgress, [0, 0.5, 1], rotateY ? [-10, 0, 10] : [0, 0, 0])
    const scaleValue = useTransform(scrollYProgress, [0, 0.5, 1], scale ? [0.8, 1, 0.8] : [1, 1, 1])
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])

    return (
        <motion.div
            ref={ref}
            style={{
                y,
                rotateX: rotateXValue,
                rotateY: rotateYValue,
                scale: scaleValue,
                opacity,
                transformStyle: "preserve-3d",
                perspective: 1000
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

interface ParallaxLayerProps {
    children: ReactNode
    speed?: number
    className?: string
}

export function ParallaxLayer({ children, speed = 0.5, className = "" }: ParallaxLayerProps) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])

    return (
        <motion.div ref={ref} style={{ y }} className={className}>
            {children}
        </motion.div>
    )
}

interface MouseParallaxProps {
    children: ReactNode
    strength?: number
    className?: string
}

export function MouseParallax({ children, strength = 20, className = "" }: MouseParallaxProps) {
    const ref = useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5

        ref.current.style.transform = `
            perspective(1000px)
            rotateY(${x * strength}deg)
            rotateX(${-y * strength}deg)
            scale3d(1.05, 1.05, 1.05)
        `
    }

    const handleMouseLeave = () => {
        if (!ref.current) return
        ref.current.style.transform = `
            perspective(1000px)
            rotateY(0deg)
            rotateX(0deg)
            scale3d(1, 1, 1)
        `
    }

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`transition-transform duration-300 ease-out ${className}`}
            style={{ transformStyle: "preserve-3d" }}
        >
            {children}
        </div>
    )
}
