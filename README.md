# Web Software para Empresas

Portal informativo sobre tecnologías empresariales como Inteligencia Artificial, ERP, automatización y soluciones digitales para negocios.

---

## 💡 Tecnologías principales

- **Next.js 15** (App Router, TypeScript, `next/font`)
- **React 19** con **Server Components**
- **Tailwind CSS 4** con `postcss-nesting`
- **PostCSS** y **Autoprefixer**
- **Framer Motion** (animaciones)
- **Lucide React** y **React Icons** (iconografía)
- **OpenAI** y **Generative AI** (API IA)
- **TypeScript**

---

## 📄 Estructura de archivos destacada

```
.
├── app/                # Páginas del proyecto
│   ├── layout.tsx     # Layout general con fuente y estructura
│   ├── page.tsx       # Homepage
│   ├── test.tsx       # Pruebas visuales o sandbox
│   └── api/          # Rutas de backend (API Routes)
│       └── chatbot/route.ts # Endpoint para asistente IA
├── components/         # Componentes reutilizables
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── ChatBubble.tsx
├── styles/
│   └── globals.css   # Estilos globales + Tailwind
├── .gitignore
├── .gitattributes      # Reglas de salto de línea
├── postcss.config.js   # Configuración PostCSS
├── tailwind.config.js  # Configuración Tailwind
├── vite.config.ts      # (solo si usas Vite para builds alternativos)
├── tsconfig.json       # Configuración de TypeScript
├── package.json
└── README.md           # Este archivo
```

---

## ⚙️ Archivos de configuración importantes

### `tailwind.config.js`
Define rutas de contenido, extensiones de tema, fuentes personalizadas, y plugins como `@tailwindcss/typography`.

### `postcss.config.js`
Habilita nesting moderno, Tailwind y soporte cross-browser:

```js
module.exports = {
  plugins: {
    'postcss-nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### `.gitattributes`
Fuerza uso de saltos de línea LF:

```
* text=auto eol=lf
```

---

## 🚀 Comandos principales

### Desarrollo
```bash
npm run dev       # Inicia servidor Next.js en modo desarrollo
```

### Producción
```bash
npm run build     # Compila para producción
npm run start     # Sirve la versión compilada
```

### Linting
```bash
npm run lint      # Ejecuta ESLint
```

---

## 🪜 Dependencias clave

```bash
npm install -D tailwindcss postcss autoprefixer postcss-nesting
npm install next react react-dom framer-motion clsx react-icons lucide-react @google/generative-ai openai
```

---

## ♻️ Resetear entorno de desarrollo

```bash
rd /s /q node_modules      # (Windows)
del package-lock.json      # (Windows)
npm cache clean --force
npm install
```

---

## ✨ Inicialización de Tailwind (si fuera necesario)

```bash
npx tailwindcss init -p    # Crea tailwind.config.js y postcss.config.js
```

---

## ✅ Buenas prácticas aplicadas

- Uso de `clsx` para clases condicionales
- Animaciones con Framer Motion
- Componentización y limpieza de código
- Configuración PostCSS + Nesting moderna
- Archivo `.gitattributes` para consistencia de saltos de línea
- `.gitignore` limpio para proyectos con Next.js

---

📢 _Actualizado: Abril 2025_

