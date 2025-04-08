import '../styles/globals.css' // antes: './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'Software para Empresas',
  description: 'IA, ERP, automatización y soluciones digitales para negocios',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="bg-white text-gray-900 antialiased font-inter">
        <Navbar />
        <main className="px-6 py-8 max-w-6xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
