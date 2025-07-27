import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { prompt } = await request.json();

  if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
    return NextResponse.json({ error: 'Gemini API Key not configured.' }, { status: 500 });
  }

  const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return NextResponse.json({ text });
  } catch (error) {
    console.error('Error generating text:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json({ error: 'Failed to generate text.', details: errorMessage }, { status: 500 });
  }
}
