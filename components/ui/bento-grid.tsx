"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useRef, useState } from "react"

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string
    children?: React.ReactNode
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
                className
            )}
        >
            {children}
        </div>
    )
}

export const BentoGridItem = ({
    className,
    title,
    description,
    header,
    icon,
}: {
    className?: string
    title?: string | React.ReactNode
    description?: string | React.ReactNode
    header?: React.ReactNode
    icon?: React.ReactNode
}) => {
    const divRef = useRef<HTMLDivElement>(null)
    const [position, setPosition] = useState({ x: 0, y: 0 })
    const [opacity, setOpacity] = useState(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return

        const rect = divRef.current.getBoundingClientRect()
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    }

    const handleFocus = () => {
        setOpacity(1)
    }

    const handleBlur = () => {
        setOpacity(0)
    }

    const handleMouseEnter = () => {
        setOpacity(1)
    }

    const handleMouseLeave = () => {
        setOpacity(0)
    }

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] justify-between flex flex-col space-y-4 relative overflow-hidden",
                className
            )}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-0"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(var(--spotlight-color), var(--spotlight-opacity)), transparent 40%)`,
                }}
            />
            <div className="relative z-10">
                {header}
                <div className="group-hover/bento:translate-x-2 transition duration-200">
                    {icon}
                    <div className="font-heading font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
                        {title}
                    </div>
                    <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
                        {description}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
