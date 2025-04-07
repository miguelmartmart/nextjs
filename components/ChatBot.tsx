"use client"
import { useState } from 'react'

export default function ChatBot() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')

  const handleSubmit = async () => {
    const res = await fetch('/api/chatbot', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    })
    const data = await res.json()
    setResponse(data.reply)
  }

  return (
    <div className="p-4 border rounded shadow max-w-xl mx-auto">
      <h2 className="text-lg font-semibold mb-2">Bot IA (demo)</h2>
      <input
        className="border px-3 py-2 w-full mb-2"
        placeholder="Escribe una pregunta..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={handleSubmit}
      >
        Enviar
      </button>
      {response && <p className="mt-4 text-gray-800">🤖 {response}</p>}
    </div>
  )
}
