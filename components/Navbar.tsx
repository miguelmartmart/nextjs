'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Linkedin, Github, Youtube, Facebook } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const toggleMenu = () => setOpen(!open)

  return (
    <div className="w-full overflow-x-hidden"> 
<header className="bg-white shadow-md w-full">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo y título */}
        <Link href="/" className="text-xl font-bold text-gray-900 flex-shrink-0 mr-4">
  <span className="text-black">Software</span>
  <span className="text-blue-600">para</span>
  <span className="text-black">empresas</span>
</Link>


        {/* Menú escritorio */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link href="/" className="hover:text-blue-600">Inicio</Link>
          <Link href="/conocimiento" className="hover:text-blue-600">Conocimiento</Link>
          <Link href="/soluciones" className="hover:text-blue-600">Soluciones</Link>
          <Link href="/desarrollo" className="hover:text-blue-600">Desarrollo</Link>
          <Link href="/recursos" className="hover:text-blue-600">Recursos</Link>
          <Link href="/contacto" className="hover:text-blue-600">Contacto</Link>

          {/* Redes sociales */}
          <div className="flex gap-3 ml-2 text-gray-500 flex-wrap">
            <a href="https://www.linkedin.com/in/miguel-angel-martín-tech" target="_blank" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="https://github.com/miguelmartmart" target="_blank" aria-label="GitHub"><Github size={18} /></a>
            <a href="https://www.youtube.com/@miguelmartin6124" target="_blank" aria-label="YouTube"><Youtube size={18} /></a>
            <a href="https://www.facebook.com/profile.php?id=61574769308595" target="_blank" aria-label="Facebook"><Facebook size={18} /></a>
          </div>
        </nav>

        {/* Botón menú móvil */}
        <button onClick={toggleMenu} className="md:hidden">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <nav className="md:hidden px-4 pb-4 flex flex-col gap-3 bg-white shadow w-full">
          <Link href="/" onClick={toggleMenu}>Inicio</Link>
          <Link href="/conocimiento" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">Conocimiento</Link>
          <Link href="/soluciones" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">Soluciones</Link>
          <Link href="/desarrollo" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">Desarrollo</Link>
          <Link href="/recursos" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">Recursos</Link>
          <Link href="/contacto" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600">Contacto</Link>

          <div className="flex gap-4 mt-2 text-gray-500">
            <a href="https://www.linkedin.com/in/miguel-angel-martín-tech" target="_blank"><Linkedin size={20} /></a>
            <a href="https://github.com/miguelmartmart" target="_blank"><Github size={20} /></a>
            <a href="https://www.youtube.com/@miguelmartin6124" target="_blank"><Youtube size={20} /></a>
            <a href="https://www.facebook.com/profile.php?id=61574769308595" target="_blank"><Facebook size={20} /></a>
          </div>
        </nav>
      )}
    </header>
    </div>
  )
}
