'use client'
import Link from 'next/link'

export default function Navbar() {
  return (
<header className="py-4 border-b bg-white dark:bg-zinc-900">
  <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
    <h1 className="text-xl font-bold tracking-tight text-gray-800 dark:text-white">
      <span className="text-blue-600">Software</span> para <span className="text-orange-500">empresas</span>
    </h1>
    <nav className="space-x-4 text-sm text-gray-700 dark:text-gray-200">
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
