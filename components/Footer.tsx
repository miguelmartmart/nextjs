"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { FaLinkedin, FaGithub, FaYoutube, FaFacebook } from "react-icons/fa"

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-100 dark:bg-zinc-900 text-sm text-gray-600 dark:text-gray-300 mt-12 border-t border-gray-200 dark:border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>&copy; {new Date().getFullYear()} Software para Empresas</p>
        <div className="flex space-x-4 text-lg">
          <Link href="https://www.linkedin.com/in/miguel-angel-martín-tech" target="_blank">
            <FaLinkedin className="hover:text-blue-600" />
          </Link>
          <Link href="https://github.com/miguelmartmart" target="_blank">
            <FaGithub className="hover:text-gray-900 dark:hover:text-white" />
          </Link>
          <Link href="https://www.youtube.com/@miguelmartin6124" target="_blank">
            <FaYoutube className="hover:text-red-600" />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61574769308595" target="_blank">
            <FaFacebook className="hover:text-blue-500" />
          </Link>
        </div>
      </div>
    </motion.footer>
  )
}
