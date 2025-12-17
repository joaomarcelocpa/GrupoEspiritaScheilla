import { Facebook, Instagram, Youtube, Mail, Phone } from "lucide-react"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-card border-t border-border">
            <div className="container mx-auto px-4 py-8 sm:py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {/* Logo and Description */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-3 sm:mb-4">
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-card-foreground">Grupo Espírita Scheilla</h3>
                            </div>
                        </div>
                        <p className="text-muted-foreground text-pretty leading-relaxed mb-4 sm:mb-6 max-w-md text-xs sm:text-base">
                            Dedicados ao estudo e prática da doutrina espírita, promovendo o amor ao próximo e o crescimento
                            espiritual através dos ensinamentos de Jesus Cristo.
                        </p>

                        {/* Social Media */}
                        <div className="flex space-x-3 sm:space-x-4">
                            <a
                                href="https://www.facebook.com/profile.php?id=100084042267180"
                                className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a
                                href="https://www.instagram.com/grupoespiritascheilla/"
                                className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                            <a
                                href="https://www.youtube.com/@grupoespiritascheillapl"
                                className="w-9 h-9 sm:w-10 sm:h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-4 h-4 sm:w-5 sm:h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-base sm:text-lg font-semibold text-card-foreground mb-3 sm:mb-4">Links Rápidos</h4>
                        <ul className="space-y-1.5 sm:space-y-2">
                            <li>
                                <a href="#inicio" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-xs sm:text-base">
                                    Início
                                </a>
                            </li>
                            <li>
                                <a href="#reunioes" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-xs sm:text-base">
                                    Reuniões
                                </a>
                            </li>
                            <li>
                                <a href="#historia" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-xs sm:text-base">
                                    Nossa História
                                </a>
                            </li>
                            <li>
                                <a href="#videos" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-xs sm:text-base">
                                    Vídeos
                                </a>
                            </li>
                            <li>
                                <a href="#livros" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-xs sm:text-base">
                                    Biblioteca
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-base sm:text-lg font-semibold text-card-foreground mb-3 sm:mb-4">Contato</h4>
                        <div className="space-y-2 sm:space-y-3">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                                <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                                <span className="text-muted-foreground text-xs sm:text-sm">(31) 3661-3884</span>
                            </div>
                            <div className="flex items-center space-x-2 sm:space-x-3">
                                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0" />
                                <span className="text-muted-foreground text-xs sm:text-sm wrap-break-word">gespl.livraria@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
                    <p className="text-muted-foreground text-xs sm:text-sm">
                        © {currentYear} Grupo Espírita Scheilla. Todos os direitos reservados.
                    </p>
                    <p className="text-muted-foreground text-[10px] sm:text-xs mt-2">&#34;Embora ninguém possa voltar atrás e fazer um novo começo, qualquer um pode começar agora e fazer um novo fim&#34; - Chico Xavier</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer