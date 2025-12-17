"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "./button"
import { Menu, X } from "lucide-react"

const Navbar = () => {
    const [, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const menuItems = [
        { label: "Início", href: "#inicio" },
        { label: "Reuniões", href: "#reunioes" },
        { label: "História", href: "#historia" },
        { label: "Vídeos", href: "#videos" },
        { label: "Livros", href: "#livros" },
        { label: "Fotos", href: "#fotos" },
        { label: "Localização", href: "#localizacao" },
    ]

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href)
        if (element) {
            const navbar = document.querySelector('nav')
            const navbarHeight = navbar?.offsetHeight || 0
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - navbarHeight - 20 // 20px extra padding

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <nav className="bg-muted/30 relative z-50 backdrop-blur-md shadow-sm border-b border-border/20">
            <div className="w-full px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden bg-transparent p-1 flex-shrink-0">
                            <div className="w-full h-full rounded-full overflow-hidden bg-transparent">
                                <Image src="/images/logo-scheilla-png.png" alt="Grupo Espírita Scheilla" fill className="object-cover" />
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl sm:text-2xl lg:text-3xl font-heading font-medium text-primary tracking-wide">Grupo Espírita Scheilla</h1>
                            <p className="text-xs sm:text-sm font-sans font-light text-muted-foreground tracking-wider">Pedro Leopoldo - MG</p>
                        </div>
                    </div>

                    <div className="hidden md:flex text-base lg:text-lg items-center space-x-6 lg:space-x-8">
                        {menuItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => scrollToSection(item.href)}
                                className="font-sans text-foreground hover:text-primary transition-all duration-300 font-light tracking-wide hover:scale-105"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden h-9 w-9"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 py-4 bg-card/95 backdrop-blur-md rounded-xl shadow-lg border border-border/50">
                        {menuItems.map((item) => (
                            <button
                                key={item.href}
                                onClick={() => scrollToSection(item.href)}
                                className="block w-full text-left px-6 py-3 font-sans text-foreground hover:text-primary hover:bg-muted/50 transition-all duration-200 font-light tracking-wide"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar