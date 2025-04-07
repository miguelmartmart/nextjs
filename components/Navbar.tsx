export default function Navbar() {
  return (
    <header className="border-b py-4 px-6 shadow-sm">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-xl font-bold">
          <span className="text-gray-800">Software</span>
          <span className="text-blue-600">para</span>
          <span className="text-gray-800">empresas</span>
        </h1>
        <nav className="space-x-4 text-sm">
          <a href="/" className="hover:underline">Inicio</a>
          <a href="/conocimiento" className="hover:underline">Conocimiento</a>
          <a href="/soluciones" className="hover:underline">Soluciones</a>
          <a href="/desarrollo" className="hover:underline">Desarrollo</a>
          <a href="/recursos" className="hover:underline">Recursos</a>
          <a href="/contacto" className="hover:underline">Contacto</a>
        </nav>
      </div>
    </header>
  )
}
