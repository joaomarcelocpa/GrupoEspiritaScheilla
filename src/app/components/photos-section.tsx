"use client"

import { useState } from "react"
import { X } from "lucide-react"
import Image from "next/image";

const PhotosSection = () => {
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

    const photos = [
        {
            src: "fotos/photo1.jpg",
            alt: "Reunião de estudos espíritas",
            title: "Mocidade Espírita Scheilla",
        },
        {
            src: "fotos/photo2.jpg",
            alt: "Trabalho de caridade",
            title: "Mocidade Espírita Scheilla",
        },
        {
            src: "fotos/photo7.webp",
            alt: "Sessão de passes",
            title: "Pré-Mocidade",
        },
        {
            src: "fotos/photo4.webp",
            alt: "Palestra espírita",
            title: "COMESPEL 2025",
        },
        {
            src: "fotos/photo5.webp",
            alt: "Evangelização infantil",
            title: "Evangelização Infantil",
        },
        {
            src: "fotos/photo9.webp",
            alt: "Nosso centro espírita",
            title: "Encontro de Jovens Espíritas de Pedro Leopoldo e Região",
        },
        {
            src: "fotos/photo10.webp",
            alt: "Confraternização",
            title: "Encontro de Jovens Espíritas de Pedro Leopoldo e Região",
        },
        {
            src: "fotos/photo8.webp",
            alt: "Grupo de estudos",
            title: "Encontro de Jovens Espíritas de Pedro Leopoldo e Região",
        },
    ]

    return (
        <section id="fotos" className="py-12 sm:py-20 bg-muted/30">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10 sm:mb-16">
                    <h2 className="text-4xl sm:text-5xl font-heading text-primary mb-4">Galeria de Fotos</h2>
                    <p className="text-sm sm:text-lg font-body text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Momentos especiais de nossa comunidade espírita em ação
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
                    {photos.map((photo, index) => (
                        <div
                            key={index}
                            className="relative group rounded-lg sm:rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                            onClick={() => setSelectedPhoto(photo.src)}
                        >
                            <div className="w-full h-48 sm:h-64 bg-cover bg-center" style={{ backgroundImage: `url(${photo.src})` }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="font-semibold text-xs sm:text-sm text-balance">{photo.title}</h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Photo Modal */}
                {selectedPhoto && (
                    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" onClick={() => setSelectedPhoto(null)}>
                        <div className="relative max-w-4xl max-h-full">
                            <button
                                onClick={() => setSelectedPhoto(null)}
                                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                            >
                                <X className="w-8 h-8" />
                            </button>
                            <img
                                src={selectedPhoto}
                                alt="Foto ampliada"
                                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}

export default PhotosSection