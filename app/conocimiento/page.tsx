// ✅ Actualización completa del sitio con diseño atractivo, responsivo, accesible y moderno

// 🧭 app/conocimiento/page.tsx
"use client"
import { motion } from "framer-motion"
import { BrainCircuit, DatabaseZap, Building2, MoveLeft } from "lucide-react"

const MotionSection = motion.section;

export default function Soluciones() {
  return (
    <MotionSection
      className="max-w-7xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >

<h1 className="text-4xl font-bold text-center mb-4 flex justify-center items-center gap-2">

  Conocimiento Compartido
</h1>


      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Comparto información estructurada y actualizada sobre tecnologías que están transformando los negocios.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <motion.div className="rounded-xl border p-6 shadow-md bg-white" whileHover={{ scale: 1.03 }}>
          <div className="bg-blue-100 w-fit p-2 rounded mb-4"><BrainCircuit className="text-blue-600" /></div>
          <h2 className="font-semibold text-lg mb-2">Inteligencia Artificial</h2>
          <p className="text-sm text-gray-600 mb-4">Explora las novedades en ChatGPT, GPTs, modelos open source y cómo aplicarlos en tu negocio.</p>
          <a className="text-blue-600 text-sm font-medium hover:underline" href="/contacto">Descubrir más →</a>
        </motion.div>
        <motion.div className="rounded-xl border p-6 shadow-md bg-white" whileHover={{ scale: 1.03 }}>
          <div className="bg-green-100 w-fit p-2 rounded mb-4"><DatabaseZap className="text-green-600" /></div>
          <h2 className="font-semibold text-lg mb-2">ERP & CRM Open Source</h2>
          <p className="text-sm text-gray-600 mb-4">Soluciones como Odoo, Dolibarr, ERPNext y SuiteCRM para gestionar tu empresa eficientemente.</p>
          <a className="text-green-600 text-sm font-medium hover:underline" href="/contacto">Comparar soluciones →</a>
        </motion.div>
        <motion.div className="rounded-xl border p-6 shadow-md bg-white" whileHover={{ scale: 1.03 }}>
          <div className="bg-orange-100 w-fit p-2 rounded mb-4"><Building2 className="text-orange-600" /></div>
          <h2 className="font-semibold text-lg mb-2">Software Empresarial</h2>
          <p className="text-sm text-gray-600 mb-4">Soluciones adaptadas para pequeñas y medianas empresas que necesitan optimizar sus operaciones.</p>
          <a className="text-orange-600 text-sm font-medium hover:underline" href="/contacto">Explorar opciones →</a>
        </motion.div>
        <motion.div className="rounded-xl border p-6 shadow-md bg-white opacity-60" whileHover={{ scale: 1.03 }}>
          <div className="bg-gray-100 w-fit p-2 rounded mb-4"><MoveLeft className="text-gray-600" /></div>
          <h2 className="font-semibold text-lg mb-2">Próximamente</h2>
          <p className="text-sm text-gray-600 mb-4">Big Data y Robótica para negocios. Nuevas tecnologías al alcance de tu empresa.</p>
          <span className="text-gray-400 text-sm">En desarrollo •</span>
        </motion.div>
      </div>
      </MotionSection>
  )
}

// 💡 Siguientes archivos también actualizados con diseño y enfoque solicitado:
// - app/soluciones/page.tsx → tarjetas adaptadas a negocio
// - app/desarrollo/page.tsx → colaboración, metodología, implementación
// - app/recursos/page.tsx → artículos destacados y responsive
// - Componente Footer actualizado para colocarse siempre abajo con layout flex o grid

// 📌 Siguientes pasos sugeridos:
// - Añadir animación scroll snap o scroll reveal (ej. `react-scroll`, `locomotive-scroll` o `framer-motion`)
// - Conectar las tarjetas de conocimiento y recursos a una fuente dinámica (CMS o .mdx)
// - Añadir buscador, categorías filtrables o contenido expandible según interacción del usuario
