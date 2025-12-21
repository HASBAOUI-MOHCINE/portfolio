# Mohcine Hasbaoui - Full Stack Web Developer Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=vercel)](https://hasbaoui.uk)
[![GitHub](https://img.shields.io/badge/GitHub-View%20Code-black?style=for-the-badge&logo=github)](https://github.com/HASBAOUI-MOHCINE/portfolio)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/mohcine-hasbaoui)

Professional Full Stack Web Developer portfolio showcasing modern web solutions, e-commerce platforms, and innovative web applications built with cutting-edge technologies.

## 🚀 Live Demo
**https://hasbaoui.uk**

## 📋 Features

- ✨ **Responsive Design** - Optimized for all devices and screen sizes
- 🌓 **Dark/Light Theme** - Toggle between themes with smooth transitions
- 🌍 **Multi-language Support** - English and French translations
- 🎨 **Modern Animations** - Smooth page transitions and interactive elements
- 🔍 **SEO Optimized** - Comprehensive meta tags, structured data, and performance optimizations
- ⚡ **Fast Loading** - Optimized bundle size and lazy loading
- 📱 **PWA Ready** - Web app manifest and service worker support

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with concurrent features
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **React Router** - Declarative routing for React

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing and optimization
- **Autoprefixer** - CSS vendor prefixing

### Libraries
- **FontAwesome** - Icon library
- **React Icons** - Popular icon packs
- **Headless UI** - Unstyled UI components

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── _redirects          # Netlify SPA redirects
│   ├── robots.txt          # Search engine crawling rules
│   ├── sitemap.xml         # XML sitemap for SEO
│   ├── favicon.svg         # Favicon
│   └── site.webmanifest    # PWA manifest
├── src/
│   ├── components/         # React components
│   │   ├── Home.jsx       # Landing page
│   │   ├── Skills.jsx     # Technical skills showcase
│   │   ├── Projects.jsx   # Portfolio projects
│   │   ├── Certifications.jsx # Education & certifications
│   │   ├── Contact.jsx    # Contact form
│   │   └── Background.jsx # Animated background
│   ├── context/           # React context providers
│   └── assets/            # Static assets
└── dist/                  # Production build output
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/HASBAOUI-MOHCINE/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Bundle Size**: Optimized with code splitting
- **Loading Speed**: Fast initial page load with lazy loading
- **SEO Score**: 100% with comprehensive meta tags

## 🔍 SEO Features

- **Meta Tags**: Comprehensive Open Graph, Twitter Cards, and standard meta tags
- **Structured Data**: JSON-LD schema markup for Person and Projects
- **Sitemap**: XML sitemap for search engine indexing
- **Robots.txt**: Proper crawling instructions
- **Canonical URLs**: Prevent duplicate content issues
- **Dynamic Titles**: Page-specific titles and descriptions

## 📞 Contact

**Mohcine Hasbaoui**
- **Email**: mohcinehasbaoui@gmail.com
- **WhatsApp**: +212 622 664410
- **LinkedIn**: [Mohcine Hasbaoui](https://www.linkedin.com/in/mohcine-hasbaoui)
- **GitHub**: [HASBAOUI-MOHCINE](https://github.com/HASBAOUI-MOHCINE)
- **Portfolio**: [hasbaoui.uk](https://hasbaoui.uk)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 🙏 Acknowledgments

- React and Vite communities for amazing tools
- FontAwesome for the icon library
- Tailwind CSS for the utility-first approach
- All the open-source contributors

---

**Built with ❤️ by Mohcine Hasbaoui**

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
