import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'
import axios from 'axios'
import { GoogleGenerativeAI } from '@google/generative-ai'

export async function POST(req: NextRequest) {
  const { message } = await req.json()

  if (!message || typeof message !== 'string') {
    return NextResponse.json({ error: 'Mensaje vacío' }, { status: 400 })
  }

  // ----------- 1. OpenAI -----------
  try {
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' })

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    })

    const reply = completion.choices?.[0]?.message?.content || ''
    return NextResponse.json({ reply, provider: 'OpenAI' })
  } catch (error: any) {
    console.warn('❌ OpenAI falló →', error?.message || error)
  }

  // ----------- 2. DeepSeek -----------
  try {
    const response = await axios.post(
      'https://api.deepseek.com/chat/completions',
      {
        model: 'deepseek-chat',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: message },
        ],
        stream: false,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.DEEPSEEK_API_KEY || ''}`,
          'Content-Type': 'application/json',
        },
      }
    )
  
    const reply = response.data?.choices?.[0]?.message?.content || ''
    return NextResponse.json({ reply, provider: 'DeepSeek' })
  } catch (error: any) {
    console.warn('❌ DeepSeek falló →', error?.message || error)
  }

  // ----------- 3. HuggingFace -----------
  try {
    const hugging = await axios.post(
      'https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1',
      { inputs: message },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGINGCHAT_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    )

    const reply = hugging.data?.[0]?.generated_text || ''
    return NextResponse.json({ reply, provider: 'HuggingFace' })
  } catch (error: any) {
    console.warn('❌ HuggingFace falló →', error?.message || error)
  }

  // ----------- 4. Gemini (Google) -----------
  try {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '')
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-pro-latest' })

    const result = await model.generateContent(message)
    const reply = result.response.text() || ''
    return NextResponse.json({ reply, provider: 'Gemini' })
  } catch (error: any) {
    console.warn('❌ Gemini falló →', error?.message || error)
  }

  // ----------- Ninguna IA funcionó -----------
  return NextResponse.json(
    { error: 'Ningún proveedor de IA respondió' },
    { status: 500 }
  )
}