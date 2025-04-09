"use client"
import { motion } from "framer-motion"
import { BookOpen, Sparkles, Terminal, CalendarDays, Landmark } from "lucide-react"

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
        Artículos y herramientas para aplicar IA en pequeñas empresas de forma responsable, útil y legal.
      </p>

      <div className="grid md:grid-cols-3 gap-6">

        {/* Recurso 1 */}
        <div className="bg-white shadow rounded-2xl p-6">
          <span className="inline-flex items-center gap-2 text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full mb-2">
            <Sparkles className="w-4 h-4" /> ChatGPT y productividad
          </span>
          <h2 className="text-lg font-semibold mb-2">Plugins de ChatGPT y casos de uso</h2>
          <p className="text-sm text-gray-600 mb-4">
            Conecta ChatGPT con otras herramientas como hojas de cálculo o APIs externas.
          </p>
          <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
            <CalendarDays className="w-4 h-4" /> Guía oficial
          </p>
          <a
            href="https://openai.com/blog/chatgpt-plugins"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 text-sm font-medium inline-flex items-center hover:underline"
          >
            Ver guía →
          </a>
        </div>

        {/* Recurso 2 */}
        <div className="bg-white shadow rounded-2xl p-6">
          <span className="inline-flex items-center gap-2 text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full mb-2">
            <Terminal className="w-4 h-4" /> IA práctica
          </span>
          <h2 className="text-lg font-semibold mb-2">IA para tareas simples: Excel, PDF y más</h2>
          <p className="text-sm text-gray-600 mb-4">
            Cómo usar IA para automatizar emails, resumir documentos, generar informes o responder clientes.
          </p>
          <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
            <CalendarDays className="w-4 h-4" /> Artículos actualizados
          </p>
          <a
            href="https://www.microsoft.com/es-es/microsoft-365/blog/2018/09/24/bringing-ai-to-excel-4-new-features-announced-today-at-ignite/?utm_source=chatgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 text-sm font-medium inline-flex items-center hover:underline"
          >
            Probar IA en Excel →
          </a>
        </div>

        {/* Recurso 3 */}
        <div className="bg-white shadow rounded-2xl p-6">
          <span className="inline-flex items-center gap-2 text-xs bg-orange-100 text-orange-800 px-3 py-1 rounded-full mb-2">
            <Landmark className="w-4 h-4" /> Regulación Europea
          </span>
          <h2 className="text-lg font-semibold mb-2">Ley de Inteligencia Artificial en Europa</h2>
          <p className="text-sm text-gray-600 mb-4">
            Conoce el marco legal propuesto por la UE para asegurar un uso ético y responsable de la IA.
          </p>
          <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
            <CalendarDays className="w-4 h-4" /> Última versión
          </p>
          <a
            href="https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A52021PC0206"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-600 text-sm font-medium inline-flex items-center hover:underline"
          >
            Leer ley completa →
          </a>
        </div>
      </div>

      <div className="text-center mt-12">
        <a
          href="https://eur-lex.europa.eu/legal-content/ES/TXT/?uri=CELEX%3A52021PC0206"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-blue-600 text-blue-600 px-6 py-2 rounded-full text-sm font-medium hover:bg-blue-50 transition"
        >
          Ver todos los recursos legales
        </a>
      </div>
    </MotionSection>
  )
}
