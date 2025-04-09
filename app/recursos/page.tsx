"use client"
import { motion } from "framer-motion"
import { BookOpen, Sparkles, Terminal, CalendarDays } from "lucide-react"

const MotionSection = motion.section



export default function Recursos() {
  return (
    <MotionSection
      className="max-w-7xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-center mb-4">Recursos Destacados</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Artículos, tutoriales y recursos para mantenerte al día con las últimas tendencias tecnológicas.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Recurso 1 */}
        <div className="bg-white shadow rounded-2xl p-6">
          <span className="inline-flex items-center gap-2 text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full mb-2">
            <Sparkles className="w-4 h-4" /> Inteligencia Artificial
          </span>
          <h2 className="text-lg font-semibold mb-2">Cómo implementar ChatGPT en tu web</h2>
          <p className="text-sm text-gray-600 mb-4">
            Guía paso a paso para integrar la API de ChatGPT en tu sitio web y crear experiencias conversacionales.
          </p>
          <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
            <CalendarDays className="w-4 h-4" /> 15 Mar 2025
          </p>
          <a
            href="#"
            className="text-blue-600 text-sm font-medium inline-flex items-center hover:underline"
          >
            Leer más →
          </a>
        </div>

        {/* Recurso 2 */}
        <div className="bg-white shadow rounded-2xl p-6">
          <span className="inline-flex items-center gap-2 text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full mb-2">
            <BookOpen className="w-4 h-4" /> Open Source
          </span>
          <h2 className="text-lg font-semibold mb-2">Comparativa: Odoo vs ERPNext para PYMES</h2>
          <p className="text-sm text-gray-600 mb-4">
            Análisis detallado de los pros y contras de los dos ERP open source más populares para pequeñas empresas.
          </p>
          <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
            <CalendarDays className="w-4 h-4" /> 2 Mar 2025
          </p>
          <a
            href="#"
            className="text-green-600 text-sm font-medium inline-flex items-center hover:underline"
          >
            Leer más →
          </a>
        </div>

        {/* Recurso 3 */}
        <div className="bg-white shadow rounded-2xl p-6">
          <span className="inline-flex items-center gap-2 text-xs bg-orange-100 text-orange-800 px-3 py-1 rounded-full mb-2">
            <Terminal className="w-4 h-4" /> Automatización
          </span>
          <h2 className="text-lg font-semibold mb-2">Automatización de procesos con IA generativa</h2>
          <p className="text-sm text-gray-600 mb-4">
            Descubre cómo la IA generativa está transformando la forma en que las empresas automatizan tareas complejas.
          </p>
          <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
            <CalendarDays className="w-4 h-4" /> 22 Feb 2025
          </p>
          <a
            href="#"
            className="text-orange-600 text-sm font-medium inline-flex items-center hover:underline"
          >
            Leer más →
          </a>
        </div>
      </div>

      <div className="text-center mt-12">
        <a
          href="#"
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-50 transition"
        >
          Ver todos los recursos
        </a>
      </div>
    </MotionSection>
  )
}
