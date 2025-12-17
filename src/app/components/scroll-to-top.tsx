"use client"

import { useState, useEffect } from "react"
import { ChevronUp } from "lucide-react"

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)

        return () => {
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-50 w-8 h-8 sm:w-10 sm:h-10 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center hover:scale-110"
                    aria-label="Voltar ao topo"
                >
                    <ChevronUp className="w-5 h-5 sm:w-5 sm:h-5" />
                </button>
            )}
        </>
    )
}

export default ScrollToTop