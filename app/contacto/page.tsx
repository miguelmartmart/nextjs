"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Send, BrainCircuit, MapPin } from "lucide-react"

const MotionDiv = motion.div

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", tipo: "Oferta de empleo", mensaje: "" })
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setError(false)
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setEnviado(true)
        setForm({ nombre: "", email: "", tipo: "Oferta de empleo", mensaje: "" })
      } else {
        setError(true)
      }
    } catch (err) {
      console.error("Error enviando el formulario:", err)
      setError(true)
    }
  }

  return (
    <MotionDiv
      className="max-w-4xl mx-auto p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
        <Mail className="w-6 h-6 text-blue-600" /> Oportunidades Laborales
      </h1>
      <p className="text-gray-600 mb-8">Actualmente disponible para propuestas de empleo en el sector tecnológico empresarial.</p>

      <form className="grid gap-4" onSubmit={handleSubmit}>
        <input
          name="nombre"
          placeholder="Tu nombre completo"
          value={form.nombre}
          onChange={handleChange}
          required
          className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          name="email"
          type="email"
          placeholder="tu.email@ejemplo.com"
          value={form.email}
          onChange={handleChange}
          required
          className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <select
          name="tipo"
          value={form.tipo}
          onChange={handleChange}
          className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          <option>Oferta de empleo</option>
          <option>Colaboración</option>
          <option>Otra consulta</option>
        </select>
        <textarea
          name="mensaje"
          placeholder="Mensaje..."
          rows={5}
          value={form.mensaje}
          onChange={handleChange}
          required
          className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 flex items-center justify-center gap-2"
          type="submit"
        >
          <Send className="w-4 h-4" /> Enviar mensaje
        </button>
      </form>

      {enviado && <p className="mt-4 text-green-600">✅ ¡Mensaje enviado con éxito!</p>}
      {error && <p className="mt-4 text-red-600">❌ Ocurrió un error. Intenta nuevamente más tarde.</p>}
    
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <MapPin className="text-blue-600" /> Ubicación de la Empresa
        </h2>
        <div className="aspect-video rounded overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12716.132267093683!2d-1.13259665!3d37.98380945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd638208d3bbcbad%3A0xbf9182c30f090fd4!2sMurcia!5e0!3m2!1ses!2ses!4v1712700000000!5m2!1ses!2ses"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación Murcia"
          ></iframe>
        </div>
      </div>
    
    </MotionDiv>
  )
}
