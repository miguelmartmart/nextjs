"use client"
import ChatBot from "@/components/ChatBot"

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-bold mb-4">
        Software para <span className="bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 text-transparent bg-clip-text">empresas</span>
      </h1>
      <p className="text-lg mb-6 text-gray-600">
        Portal informativo sobre tecnologías empresariales: IA, ERP, automatización y soluciones digitales para negocios.
      </p>
      <ChatBot />
    </>
  )
}
