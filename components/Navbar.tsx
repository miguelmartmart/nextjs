'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="py-4 border-b">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
        <h1 className="text-xl font-bold">
          <span className="text-gray-800">Software</span><span className="text-blue-600">para</span><span className="text-gray-800">empresas</span>
        </h1>
        <nav className="space-x-4 text-sm">
          <Link href="/">Inicio</Link>
          <Link href="/conocimiento">Conocimiento</Link>
          <Link href="/soluciones">Soluciones</Link>
          <Link href="/desarrollo">Desarrollo</Link>
          <Link href="/recursos">Recursos</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
      </div>
    </header>
  )
}
