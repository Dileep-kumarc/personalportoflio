"use client"

import { ReactNode, useEffect, useRef } from "react"
import Lenis from "lenis"

interface SmoothScrollProviderProps {
    children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
    const lenisRef = useRef<Lenis | null>(null)

    useEffect(() => {
        // Initialize Lenis
        lenisRef.current = new Lenis({
            duration: 1.2,           // Scroll duration (higher = slower/smoother)
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
            orientation: "vertical", // Scroll direction
            gestureOrientation: "vertical",
            smoothWheel: true,       // Smooth scrolling for mouse wheel
            touchMultiplier: 2,      // Touch scroll multiplier
            infinite: false,         // Infinite scroll
        })

        // Animation frame loop
        function raf(time: number) {
            lenisRef.current?.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)

        // Cleanup
        return () => {
            lenisRef.current?.destroy()
            lenisRef.current = null
        }
    }, [])

    return <>{children}</>
}
