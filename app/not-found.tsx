"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowLeft, Search } from "lucide-react"
import { TextRevealChar, TextRevealBlur } from "@/components/ui/text-reveal"

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
            {/* Animated background gradient */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-full blur-3xl"
                    animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                    }}
                />
                <motion.div
                    className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/20 via-transparent to-transparent rounded-full blur-3xl"
                    animate={{
                        rotate: -360,
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                        scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                    }}
                />
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_40%,transparent_100%)]" />

            {/* Content */}
            <div className="relative z-10 text-center px-4">
                {/* Glitch 404 */}
                <motion.div
                    className="relative mb-8"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
                >
                    <h1 className="text-[150px] md:text-[250px] font-bold leading-none tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 dark:from-white dark:to-neutral-500 select-none">
                        404
                    </h1>

                    {/* Glitch layers */}
                    <motion.span
                        className="absolute inset-0 text-[150px] md:text-[250px] font-bold leading-none tracking-tighter text-primary/50 select-none"
                        animate={{
                            x: [0, -5, 5, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 0.2,
                            repeat: Infinity,
                            repeatDelay: 3,
                        }}
                    >
                        404
                    </motion.span>
                    <motion.span
                        className="absolute inset-0 text-[150px] md:text-[250px] font-bold leading-none tracking-tighter text-cyan-500/50 select-none"
                        animate={{
                            x: [0, 5, -5, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 0.2,
                            repeat: Infinity,
                            repeatDelay: 3,
                            delay: 0.1,
                        }}
                    >
                        404
                    </motion.span>
                </motion.div>

                {/* Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="space-y-4 mb-12"
                >
                    <h2 className="text-2xl md:text-4xl font-bold">
                        <TextRevealChar text="Oops! Page Not Found" delay={0.5} />
                    </h2>
                    <p className="text-neutral-500 dark:text-neutral-400 max-w-md mx-auto">
                        <TextRevealBlur
                            text="The page you're looking for seems to have wandered off into the digital void."
                            delay={0.8}
                        />
                    </p>
                </motion.div>

                {/* Animated search icon */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <motion.div
                        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 border border-primary/20"
                        animate={{
                            scale: [1, 1.1, 1],
                            rotate: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <Search className="w-8 h-8 text-primary" />
                    </motion.div>
                </motion.div>

                {/* Action buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                >
                    <Button
                        size="lg"
                        className="rounded-full bg-primary hover:bg-primary/90 text-white gap-2 group"
                        asChild
                    >
                        <Link href="/">
                            <Home className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            Back to Home
                        </Link>
                    </Button>
                    <Button
                        variant="outline"
                        size="lg"
                        className="rounded-full border-neutral-200 dark:border-white/10 gap-2 group"
                        onClick={() => window.history.back()}
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Go Back
                    </Button>
                </motion.div>

                {/* Floating particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(20)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-primary/40 rounded-full"
                            initial={{
                                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                            }}
                            animate={{
                                y: [null, Math.random() * -500],
                                opacity: [0, 1, 0],
                            }}
                            transition={{
                                duration: Math.random() * 5 + 5,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
