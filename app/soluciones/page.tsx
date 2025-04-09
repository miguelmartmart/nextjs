"use client"
import { CheckCircle, Puzzle, Bot, Server } from "lucide-react"
import { motion } from "framer-motion"

const MotionSection = motion.section

export default function Soluciones() {
  return (
    <MotionSection
      className="max-w-7xl mx-auto px-6 py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold text-center mb-4">Soluciones para Negocios</h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Tecnología avanzada adaptada a las necesidades reales de pequeñas y medianas empresas.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
      <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <Bot className="text-blue-500" /> Web & Mobile Apps
          </h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-500 w-4 h-4 mt-1" /> Aplicaciones web progresivas y responsive
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-500 w-4 h-4 mt-1" /> Apps móviles para iOS y Android
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-500 w-4 h-4 mt-1" /> Dashboards inteligentes y personalizados
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-blue-500 w-4 h-4 mt-1" /> E-commerce y tiendas online
            </li>
          </ul>
          <a
            href="/contacto"
            className="text-blue-600 text-sm font-medium inline-flex items-center mt-4 hover:underline"
          >
            Hablar sobre mi proyecto →
          </a>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <Puzzle className="text-green-500" /> Automatización de Procesos
          </h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-500 w-4 h-4 mt-1" /> Automatización de tareas repetitivas
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-500 w-4 h-4 mt-1" /> Workflows inteligentes con IA
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-500 w-4 h-4 mt-1" /> Reducción de errores humanos
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-green-500 w-4 h-4 mt-1" /> Optimización de recursos y tiempos
            </li>
          </ul>
          <a
            href="/contacto"
            className="text-green-600 text-sm font-medium inline-flex items-center mt-4 hover:underline"
          >
            Automatizar mi negocio →
          </a>
        </div>

        <div className="bg-white shadow-md rounded-2xl p-6">
          <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
            <Server className="text-orange-500" /> Integraciones & APIs
          </h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle className="text-orange-500 w-4 h-4 mt-1" /> Conexión con sistemas de IA
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-orange-500 w-4 h-4 mt-1" /> Integración con ERP y CRM existentes
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-orange-500 w-4 h-4 mt-1" /> APIs para conectar servicios
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="text-orange-500 w-4 h-4 mt-1" /> Sincronización de datos multi-plataforma
            </li>
          </ul>
          <a
            href="/contacto"
            className="text-orange-600 text-sm font-medium inline-flex items-center mt-4 hover:underline"
          >
            Integrar mis sistemas →
          </a>
        </div>
      </div>
    </MotionSection>
  )
}
