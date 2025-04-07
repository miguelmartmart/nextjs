import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  const { message } = await req.json()

  if (!message) {
    return NextResponse.json({ error: 'Mensaje vacío' }, { status: 400 })
  }

  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: message }],
  })

  return NextResponse.json({ reply: completion.choices[0].message.content })
}
