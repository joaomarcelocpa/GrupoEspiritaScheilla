# 🕊️ Grupo Espírita Scheilla

<div align="center">

![Logo Scheilla](public/images/logo-scheilla-png.png)

**Website oficial do Grupo Espírita Scheilla - Pedro Leopoldo, MG**

[![Next.js](https://img.shields.io/badge/Next.js-16.0.3-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)


</div>

---

## 📖 Sobre o Projeto

Website institucional desenvolvido para o **Grupo Espírita Scheilla**, uma casa de fé e caridade fundada em 1954 por José Flaviano "Zeca" Machado, sob orientação espiritual de Chico Xavier. O projeto tem como objetivo:

- 🏛️ Apresentar a história e missão do centro espírita
- 📅 Divulgar eventos e reuniões públicas através de um calendário interativo
- 📚 Compartilhar conhecimento através de biblioteca digital
- 🎥 Transmitir lives espirituais via integração com YouTube
- 📍 Facilitar o acesso à localização e informações de contato

Acesse o site em: [https://grupoespiritascheillapl.com](https://grupoespiritascheillapl.com)

---

## ✨ Funcionalidades

### 🎠 Carrossel de Imagens
- Apresentação visual atrativa com transições suaves
- Navegação por setas e indicadores de slide
- Auto-play configurável

### 📆 Calendário Interativo
- Visualização mensal de eventos
- Eventos recorrentes baseados no dia da semana
- Modal detalhado com informações de cada evento
- Destaque visual para o dia atual

### 📜 História do Centro
- Narrativa completa da fundação
- Galeria de personalidades importantes
- Design responsivo e imersivo

### 🎬 Integração com YouTube
- Exibição automática das últimas lives
- Diferenciação entre lives ao vivo, agendadas e gravadas
- Player modal para reprodução
- Cache de 1 hora para otimização

### 📚 Biblioteca Espírita
- Seleção curada de obras fundamentais
- Informações sobre biblioteca física
- Design em cards com hover effects

### 🖼️ Galeria de Fotos
- Grid responsivo de imagens
- Modal de visualização ampliada
- Hover effects elegantes

### 🗺️ Localização
- Mapa interativo do Google Maps
- Informações de contato completas
- Links para redes sociais

---

## 🛠️ Tecnologias Utilizadas

### Core
- **[Next.js 16](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://reactjs.org/)** - Biblioteca JavaScript para UI
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática

### Estilização
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones
- **[Google Fonts](https://fonts.google.com/)** - Inter e Playfair Display

### APIs
- **[YouTube Data API v3](https://developers.google.com/youtube/v3)** - Integração de vídeos
- **[Google Maps Embed API](https://developers.google.com/maps/documentation/embed)** - Mapa de localização

### Ferramentas de Desenvolvimento
- **[ESLint](https://eslint.org/)** - Linter JavaScript/TypeScript
- **[Babel React Compiler](https://react.dev/learn/react-compiler)** - Otimização de performance

---

## 🚀 Como Executar

### Pré-requisitos

- Node.js 20.9.0 ou superior
- npm, yarn, pnpm ou bun

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/gruposcheilla.git
cd gruposcheilla
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env.local` na raiz do projeto:
```env
# YouTube API
YOUTUBE_API_KEY=sua_chave_api_aqui
YOUTUBE_CHANNEL_ID=seu_channel_id_aqui
```

> 💡 **Como obter as credenciais:**
> - Acesse o [Google Cloud Console](https://console.cloud.google.com/)
> - Crie um novo projeto ou selecione um existente
> - Ative a YouTube Data API v3
> - Crie credenciais (API Key)
> - O Channel ID pode ser encontrado na URL do canal do YouTube

4. **Execute o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

5. **Abra no navegador**

Acesse [http://localhost:3000](http://localhost:3000)

---

## 📁 Estrutura do Projeto
```
gruposcheilla/
├── public/
│   ├── books/              # Capas de livros
│   ├── carossel/           # Imagens do carrossel
│   ├── fotos/              # Galeria de fotos
│   └── images/             # Logos e imagens gerais
├── src/
│   └── app/
│       ├── api/
│       │   ├── utils/
│       │   │   └── events.json        # Dados dos eventos semanais
│       │   └── youtube-videos/
│       │       └── route.ts           # API route para YouTube
│       ├── components/
│       │   ├── books-section.tsx      # Seção de livros
│       │   ├── button.tsx             # Componente Button
│       │   ├── calendar-modal.tsx     # Modal de eventos
│       │   ├── events-section.tsx     # Seção de eventos
│       │   ├── footer.tsx             # Rodapé
│       │   ├── hero-carousel.tsx      # Carrossel principal
│       │   ├── history-section.tsx    # História do centro
│       │   ├── interactive-calendar.tsx # Calendário interativo
│       │   ├── location-section.tsx   # Localização
│       │   ├── navbar.tsx             # Barra de navegação
│       │   ├── photos-section.tsx     # Galeria de fotos
│       │   ├── scroll-to-top.tsx      # Botão voltar ao topo
│       │   └── videos-section.tsx     # Lives do YouTube
│       ├── globals.css                # Estilos globais
│       ├── layout.tsx                 # Layout principal
│       └── page.tsx                   # Página inicial
├── .env.local                         # Variáveis de ambiente (criar)
├── next.config.ts                     # Configuração Next.js
├── package.json                       # Dependências
├── postcss.config.mjs                 # Configuração PostCSS
├── tailwind.config.js                 # Configuração Tailwind
└── tsconfig.json                      # Configuração TypeScript
```

---

## 🎨 Guia de Estilo

### Paleta de Cores
```css
/* Tema Claro */
--primary: oklch(0.6 0.15 142);        /* Verde sereno */
--secondary: oklch(0.85 0.08 200);     /* Azul claro */
--accent: oklch(0.7 0.12 160);         /* Verde-azulado */
--background: oklch(1 0 0);            /* Branco */
--foreground: oklch(0.3 0 0);          /* Cinza escuro */
```

### Tipografia

- **Headings**: Playfair Display (Serif elegante)
- **Body**: Inter (Sans-serif moderna)

---

## 📝 Scripts Disponíveis
```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Produção
npm run build        # Build de produção
npm run start        # Inicia servidor de produção

# Qualidade de Código
npm run lint         # Executa ESLint
```

---


## 👥 Autores

- **Desenvolvedores** 
  - [João Marcelo](https://github.com/joaomarcelocpa)
  - [Bernardo de Resende](https://github.com/bernardordm)
  - [Miguel Diniz](https://github.com/DevMiguelDiniz)

---

## 📞 Contato

**Grupo Espírita Scheilla**

- 📍 Rua Nossa Senhora das Graças, 381 - Centro, Pedro Leopoldo/MG
- 📱 (31) 3661-3884
- 📧 gespl.livraria@gmail.com
- 🌐 [Site Oficial](https://grupoespiritascheillapl.com)
- 📺 [YouTube](https://www.youtube.com/@grupoespiritascheillapl)
- 📷 [Instagram](https://www.instagram.com/grupoespiritascheillapl/)

---

<div align="center">

**"Embora ninguém possa voltar atrás e fazer um novo começo, qualquer um pode começar agora e fazer um novo fim"**

*- Chico Xavier*

</div>