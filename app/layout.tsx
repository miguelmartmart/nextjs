import '../styles/globals.css'
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
      <body className="font-sans antialiased bg-white text-gray-900">
        <Navbar />
        <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
