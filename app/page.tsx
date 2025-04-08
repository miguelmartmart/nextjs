// app/page.tsx
'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import ChatBubble from '@/components/ChatBubble';

export default function Home() {
  const sectionClasses = clsx(
    'relative min-h-screen bg-white dark:bg-black text-center px-4 sm:px-6 md:px-8'
  )

  const headingClasses = clsx(
    'text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6',
    'text-neutral-900 dark:text-neutral-100'
  )

  const paragraphClasses = clsx(
    'text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10'
  )

  const buttonPrimaryClasses = clsx(
    'bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium shadow'
  )

  const buttonSecondaryClasses = clsx(
    'border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 font-medium'
  )

  const cardClasses = (bgColor: string) =>
    clsx(`${bgColor} rounded-xl p-5`, 'text-gray-800 dark:text-gray-200')

  return (
    <section className={sectionClasses}>
      <div className="max-w-7xl mx-auto py-24 sm:py-28">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={headingClasses}
        >
          <span>Software </span>
          <span className="text-blue-500">para </span>
          <span className="bg-gradient-to-r from-blue-500 via-green-500 via-yellow-400 to-orange-500 text-transparent bg-clip-text">
            empresas
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className={paragraphClasses}
        >
          Portal informativo sobre tecnologías empresariales: IA, ERP,
          automatización y soluciones digitales para negocios.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
        >
          <Link href="/contacto" className={buttonPrimaryClasses}>
            Contactar para oportunidades laborales →
          </Link>
          <Link href="/recursos" className={buttonSecondaryClasses}>
            Explorar recursos tecnológicos
          </Link>
        </motion.div>

        {/* Bloque de Categorías */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 bg-white dark:bg-zinc-900 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-700 shadow-2xl w-full max-w-4xl mx-auto"
        >
          <div className={cardClasses('bg-blue-50 dark:bg-blue-950')}>
            <h3 className="font-semibold text-lg">Inteligencia Artificial</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              ChatGPT, Agents, Open Source...
            </p>
          </div>
          <div className={cardClasses('bg-green-50 dark:bg-green-950')}>
            <h3 className="font-semibold text-lg">ERP & CRM</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Odoo, ERPNext, SuiteCRM...
            </p>
          </div>
          <div className={cardClasses('bg-orange-50 dark:bg-orange-950')}>
            <h3 className="font-semibold text-lg">Software Empresarial</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Aplicaciones, APIs, Integraciones...
            </p>
          </div>
          <div className={cardClasses('bg-indigo-50 dark:bg-indigo-950')}>
            <h3 className="font-semibold text-lg">Robótica & Big Data</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Tecnologías emergentes para negocios
            </p>
          </div>
        </motion.div>
      </div>

      <ChatBubble />
    </section>
  )
}
