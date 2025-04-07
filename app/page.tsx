import ChatBot from '@/components/ChatBot'

export default function Home() {
  return (
    <section className="py-12 text-center">
      <h1 className="text-5xl font-bold mb-4">
        <span className="text-gray-800">Software </span>
        <span className="text-blue-500">para </span>
        <span className="bg-gradient-to-r from-green-400 to-yellow-500 text-transparent bg-clip-text">empresas</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
        Portal informativo sobre tecnologías empresariales: IA, ERP, automatización y soluciones digitales para negocios.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
        <a href="/contacto" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Contactar para oportunidades laborales →
        </a>
        <a href="/recursos" className="border border-blue-600 px-6 py-3 rounded hover:bg-blue-50">
          Explorar recursos tecnológicos
        </a>
      </div>
      <ChatBot />
    </section>
  )
}
