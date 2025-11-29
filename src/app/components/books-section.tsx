import Image from "next/image";

const BooksSection = () => {
    const books = [
        {
            image: "/books/livro-dos-espiritos.jpeg",
            title: "O Livro dos Espíritos",
            author: "Allan Kardec",
            description: "A obra fundamental do Espiritismo, contendo os princípios da doutrina espírita.",
        },
        {
            image: "/books/evangelho-segundo-espiritismo.jpg",
            title: "O Evangelho Segundo o Espiritismo",
            author: "Allan Kardec",
            description: "Os ensinamentos morais de Jesus explicados segundo a doutrina espírita.",
        },
        {
            image: "/books/nosso-lar.jpg",
            title: "Nosso Lar",
            author: "André Luiz (Chico Xavier)",
            description: "Relato sobre a vida no mundo espiritual e as colônias de recuperação.",
        },
        {
            image: "/books/pao-nosso.jpg",
            title: "Pão Nosso",
            author: "Emmanuel (Chico Xavier)",
            description: "Comentários às orações dominicais com ensinamentos espirituais profundos.",
        },
        {
            image: "/books/missionarios-da-luz.jpg",
            title: "Missionários da Luz",
            author: "André Luiz (Chico Xavier)",
            description: "Ensinamentos sobre a mediunidade e o trabalho espiritual.",
        },
        {
            image: "/books/fonte-viva.jpg",
            title: "Fonte Viva",
            author: "Emmanuel (Chico Xavier)",
            description: "Comentários ao Evangelho de Jesus com aplicações práticas para o dia a dia.",
        },
    ]

    return (
        <section id="livros" className="py-12 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-4xl sm:text-5xl font-heading text-primary mb-3">Biblioteca Espírita</h2>
                    <p className="text-sm sm:text-base font-body text-muted-foreground max-w-2xl mx-auto text-pretty">
                        Explore nossa seleção de livros espíritas para enriquecer sua jornada de conhecimento
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
                    {books.map((book, index) => (
                        <div
                            key={index}
                            className="bg-card rounded-lg sm:rounded-xl p-3 sm:p-5 shadow-lg hover:shadow-xl transition-all duration-300 border border-border/50 group hover:-translate-y-1"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="relative w-16 h-24 sm:w-20 sm:h-32 lg:w-24 lg:h-36 mb-2 sm:mb-3 rounded-lg overflow-hidden shadow-md bg-muted flex items-center justify-center">
                                    <div className="text-xs text-muted-foreground text-center px-2">
                                        <Image src={book.image} alt={book.title} fill className="object-cover" />
                                    </div>
                                </div>

                                <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-card-foreground mb-1 sm:mb-2 text-balance leading-tight">{book.title}</h3>

                                <p className="text-primary font-medium mb-1 sm:mb-2 text-[10px] sm:text-xs lg:text-sm">{book.author}</p>

                                <p className="text-muted-foreground text-[10px] sm:text-xs text-pretty leading-relaxed">{book.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-6 sm:mt-8">
                    <div className="bg-secondary/20 rounded-xl p-4 sm:p-5 max-w-2xl mx-auto border border-secondary/30">
                        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">Biblioteca Física</h3>
                        <p className="text-muted-foreground text-pretty leading-relaxed text-xs sm:text-sm">
                            Visite nosso centro espírita e tenha acesso à nossa biblioteca completa com centenas de obras espíritas. Funcionamento: Terça, das 20h às 21:30h.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BooksSection