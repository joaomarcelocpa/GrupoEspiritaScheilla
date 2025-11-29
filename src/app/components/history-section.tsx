import Image from "next/image";

const HistorySection = () => {
    return (
        <section id="historia" className="py-12 bg-background overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-4xl sm:text-5xl font-heading text-primary mb-3">Nossa História</h2>
                        <p className="font-body text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto text-pretty">
                            Conheça a trajetória do Grupo Espírita Scheilla e nossa missão de amor e caridade
                        </p>
                    </div>

                    {/* Seção 1: Texto principal + Zeca e Chico */}
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start mb-8">
                        <div className="bg-card rounded-xl p-4 sm:p-6 shadow-lg border border-border/50 w-full">
                            <h3 className="text-lg sm:text-xl font-semibold text-card-foreground mb-3">Centro Espírita Scheilla</h3>
                            <p className="text-muted-foreground text-pretty leading-relaxed mb-3 text-xs sm:text-sm">
                                Uma casa de fé, serviço e carinho no coração de Pedro Leopoldo. Fundado em 3 de agosto de 1954 por José Flaviano "Zeca" Machado, o Centro Espírita Scheilla nasceu do encontro entre a dedicação de um homem e a inspiração da espiritualidade — um lugar onde a palavra, a oração e a assistência se transformam em acolhimento para quem procura conforto e orientação.
                            </p>
                            <p className="text-muted-foreground text-pretty leading-relaxed mb-3 text-xs sm:text-sm">
                                Zeca Machado chegou a Pedro Leopoldo para administrar a companhia de tecidos da família. Homem de grande sensibilidade espiritual, conheceu Chico Xavier e passou a frequentar e trabalhar nos centros Luiz Gonzaga e Mei Mei, encantando-se pela missão espírita de caridade e serviço. Sob a orientação de Chico Xavier, e motivado pelas manifestações mediúnicas da sua filha Eliana, que passou a manifestar o espírito conhecido como irmã Scheilla durante as reuniões — Zeca deu forma ao sonho de criar uma casa de amor e trabalho espiritual.
                            </p>
                            <p className="text-muted-foreground text-pretty leading-relaxed text-xs sm:text-sm">
                                O Centro Espírita Scheilla mantém, desde sua fundação, um compromisso contínuo com a assistência espiritual e social. Aqui prestamos atendimento fraterno, estudamos a Doutrina Espírita e trabalhamos para transformar vidas — sempre servindo ao Cristo através da caridade.
                            </p>
                        </div>

                        <div className="flex flex-row gap-3 sm:gap-6 justify-center items-start">
                            <div className="flex flex-col items-center flex-1 max-w-[180px]">
                                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mb-2 sm:mb-4 bg-muted">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    <Image src="/images/zeca-machado.jpeg" alt="José Flaviano Zeca Machado" fill className="object-cover" />
                                </div>
                                <div className="text-center w-full">
                                    <h4 className="text-xs sm:text-base lg:text-lg font-semibold text-foreground mb-1 sm:mb-2">José Flaviano "Zeca" Machado</h4>
                                    <p className="text-muted-foreground text-pretty leading-relaxed text-[10px] sm:text-sm">
                                        Fundador do Centro Espírita Scheilla, homem de sensibilidade espiritual dedicado à caridade e ao serviço.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col items-center flex-1 max-w-[180px]">
                                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mb-2 sm:mb-4 bg-muted">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                    <Image src="/images/chico-xavier.jpg" alt="Francisco Cândido Xavier" fill className="object-cover" />
                                </div>
                                <div className="text-center w-full">
                                    <h4 className="text-xs sm:text-base lg:text-lg font-semibold text-foreground mb-1 sm:mb-2">Francisco Cândido "Chico" Xavier</h4>
                                    <p className="text-muted-foreground text-pretty leading-relaxed text-[10px] sm:text-sm">
                                        Chico Xavier foi um dos maiores médiuns da história do Espiritismo, exemplo de humildade, caridade e dedicação aos ensinamentos de Jesus.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Seção 2: Card Scheilla + Foto Scheilla */}
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
                        <div className="bg-secondary/20 rounded-xl p-4 border border-secondary/30 w-full">
                            <h4 className="text-base sm:text-lg font-semibold text-foreground mb-3">Quem foi Scheilla?</h4>
                            <p className="text-muted-foreground text-pretty leading-relaxed text-xs sm:text-sm">
                                Scheilla, cujo nome hoje ilumina nossa Casa Espírita, foi em vida uma jovem enfermeira alemã dotada de profunda ternura e vocação para servir. Era descrita como uma presença suave: olhar azul sereno, cabelos loiros, e um comportamento sempre humilde e acolhedor. Mais do que características físicas, porém, Scheilla carregava uma sensibilidade rara — uma generosidade que se expressava nos gestos cotidianos, no cuidado com os enfermos, na paciência com os mais fragilizados e na dedicação àqueles que sofriam.
                            </p>
                            <p className="text-muted-foreground text-pretty leading-relaxed text-xs sm:text-sm mt-3">
                                Durante a Segunda Guerra Mundial, atuou como enfermeira em Hamburgo, permanecendo firme no dever de amparar vidas mesmo em meio ao caos. Em 1943, quando a cidade foi atingida por intensos bombardeios, Scheilla perdeu a vida enquanto tentava salvar uma criança — um ato que sintetiza com perfeição sua essência: a coragem que nasce do amor ao próximo.
                            </p>
                            <p className="text-muted-foreground text-pretty leading-relaxed text-xs sm:text-sm mt-3">
                                Após seu desencarne, Scheilla seguiu sua jornada espiritual preservando a mesma meiguice, simplicidade e desejo de auxiliar. Tornou-se conhecida no plano espiritual como uma trabalhadora dedicada à cura, ao consolo e à proteção daqueles que buscam amparo. Em diversas ocasiões, manifesta-se com seu toque característico de serenidade, irradiando paz e ajudando no reequilíbrio emocional e espiritual dos que a procuram.
                            </p>
                        </div>

                        <div className="flex flex-col items-center justify-start lg:justify-center">
                            <div className="relative w-32 h-44 sm:w-40 sm:h-56 lg:w-48 lg:h-64 rounded-2xl overflow-hidden shadow-2xl mb-3 bg-muted">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                                <Image src="/images/foto-scheilla.jpg" alt="Irma Scheilla" fill className="object-cover" />
                            </div>
                            <div className="text-center max-w-xs">
                                <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-foreground mb-2">Irmã Scheilla</h4>
                                <p className="text-muted-foreground text-pretty leading-relaxed text-xs sm:text-sm">
                                    Devotada enfermeira que viveu na Alemanha, Scheilla experienciou sua última encarnação com simplicidade e servindo aos enfermos que a rodeavam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HistorySection