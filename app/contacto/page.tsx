"use client"
import { useState } from "react"


export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", email: "", tipo: "Oferta de empleo", mensaje: "" })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const res = await fetch("/api/contacto", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
    if (res.ok) setEnviado(true)
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Oportunidades Laborales</h1>
      <p className="text-gray-600 mb-8">Actualmente disponible para propuestas de empleo en el sector tecnológico empresarial.</p>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <input name="nombre" placeholder="Tu nombre completo" onChange={handleChange} required className="border p-2 rounded" />
        <input name="email" type="email" placeholder="tu.email@ejemplo.com" onChange={handleChange} required className="border p-2 rounded" />
        <select name="tipo" onChange={handleChange} className="border p-2 rounded">
          <option>Oferta de empleo</option>
          <option>Colaboración</option>
          <option>Otra consulta</option>
        </select>
        <textarea name="mensaje" placeholder="Mensaje..." rows={5} onChange={handleChange} required className="border p-2 rounded" />
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" type="submit">Enviar mensaje</button>
      </form>
      {enviado && <p className="mt-4 text-green-600">✅ ¡Mensaje enviado con éxito!</p>}
    </div>
  )
}
