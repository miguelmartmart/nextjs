import { useState, useEffect, useRef, FormEvent} from 'react'
import { FaRobot, FaPaperPlane, FaX, FaSpinner } from 'react-icons/fa6'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'

export default function ChatBubble() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<{ sender: string; text: string; provider?: string }[]>([])
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])
  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { sender: 'user', text: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      })

      const data = await res.json()

      if (res.ok) {
        const botMessage = {
          sender: 'bot',
          text: data.reply,
          provider: data.provider || 'IA',
        }
        setMessages((prev) => [...prev, botMessage])
      } else {
        setMessages((prev) => [...prev, { sender: 'bot', text: data.error || 'Error desconocido' }])
      }
    } catch {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Error de conexión con el servidor.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            className="w-80 sm:w-96 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="flex items-center justify-between bg-blue-600 text-white p-4">
              <div className="flex items-center gap-2">
                <FaRobot className="text-xl" />
                <h2 className="font-medium">Asistente IA</h2>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Cerrar chat">
                <FaX className="text-white hover:text-zinc-300" />
              </button>
            </div>

            <div className="p-4 h-96 overflow-y-auto bg-zinc-50 dark:bg-zinc-800 text-sm">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  className={clsx(
                    'mb-2 max-w-[80%] px-4 py-2 rounded-lg whitespace-pre-wrap break-words',
                    msg.sender === 'user'
                      ? 'bg-blue-100 dark:bg-blue-600 ml-auto text-right text-blue-800 dark:text-white'
                      : 'bg-zinc-200 dark:bg-zinc-700 text-left text-zinc-900 dark:text-white'
                  )}
                >
                  {msg.text}
                  {msg.sender === 'bot' && msg.provider && (
                    <div className="text-xs text-zinc-500 mt-1">🤖 {msg.provider}</div>
                  )}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form
              onSubmit={sendMessage}
              className="flex items-center gap-2 p-3 border-t dark:border-zinc-700"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe un mensaje..."
                className="flex-1 px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-sm text-zinc-900 dark:text-white"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 flex items-center transition-all"
              >
                {loading ? <FaSpinner className="animate-spin" /> : <FaPaperPlane />}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {!open && (
        <button
        aria-label="Abrir chat con el asistente"
          onClick={() => setOpen(true)}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-xl flex items-center gap-2 transition-all"
        >
          <FaRobot className="text-xl" />
        </button>
      )}
    </div>
  )
}
