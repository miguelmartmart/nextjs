"use client"
import { CheckCircle, Brain, Settings, Code } from "lucide-react"
import { motion } from "framer-motion"

const MotionSection = motion.section

export default function Desarrollo() {
  return (
    <MotionSection
      className="max-w-7xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-center mb-4">Desarrollo ERP & CRM</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Software empresarial pensado para adaptarse a las personas, equipos y procesos reales.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <Brain className="text-purple-600" /> ERP & CRM con IA
          </h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-purple-600 w-4 h-4 mt-1" />
              Automatización de procesos administrativos y comerciales
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-purple-600 w-4 h-4 mt-1" />
              Inteligencia artificial para asistencia operativa
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-purple-600 w-4 h-4 mt-1" />
              Análisis de datos para decisiones estratégicas
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-purple-600 w-4 h-4 mt-1" />
              Personalización según área y usuario
            </li>
          </ul>
          <a
            href="/contacto"
            className="text-purple-600 text-sm font-medium inline-flex items-center mt-4 hover:underline"
          >
            Quiero modernizar mi empresa →
          </a>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <Settings className="text-emerald-600" /> Consultoría Técnica
          </h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-emerald-600 w-4 h-4 mt-1" />
              Diagnóstico de herramientas actuales
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-emerald-600 w-4 h-4 mt-1" />
              Propuestas de optimización tecnológica
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-emerald-600 w-4 h-4 mt-1" />
              Adaptación de soluciones a medida
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-emerald-600 w-4 h-4 mt-1" />
              Acompañamiento continuo
            </li>
          </ul>
          <a
            href="/contacto"
            className="text-emerald-600 text-sm font-medium inline-flex items-center mt-4 hover:underline"
          >
            Evaluar mi entorno →
          </a>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <Code className="text-sky-600" /> Desarrollo a Medida
          </h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-sky-600 w-4 h-4 mt-1" />
              Sistemas modulares y escalables
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-sky-600 w-4 h-4 mt-1" />
              Aplicaciones compatibles con otros servicios
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-sky-600 w-4 h-4 mt-1" />
              Integración con plataformas externas (IA, APIs, datos)
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-sky-600 w-4 h-4 mt-1" />
              Paneles de control para equipos y gerencia
            </li>
          </ul>
          <a
            href="/contacto"
            className="text-sky-600 text-sm font-medium inline-flex items-center mt-4 hover:underline"
          >
            Crear mi solución digital →
          </a>
        </div>
      </div>
    </MotionSection>
  )
}