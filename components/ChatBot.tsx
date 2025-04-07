'use client'

import { useState } from 'react'
import { FaRobot } from 'react-icons/fa'

export default function ChatBot() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    if (!input.trim()) return
    setLoading(true)
    try {
      const res = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      })
      const data = await res.json()
      setResponse(data.reply)
    } catch (err) {
      setResponse('Error del servidor')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-12 border p-4 rounded shadow max-w-xl mx-auto bg-white">
      <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
        <FaRobot className="text-pink-500" />
        Asistente IA
      </h2>
      <input
        className="border px-3 py-2 w-full rounded mb-2"
        placeholder="Escribe una pregunta..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? 'Pensando...' : 'Enviar ▶'}
      </button>
      {response && <p className="mt-4 text-gray-800">{response}</p>}
    </div>
  )
}
