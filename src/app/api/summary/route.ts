import { NextRequest, NextResponse } from 'next/server';
import pdf2md from "@opendocsg/pdf2md";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { url } = body;

    if (!url) {
      return NextResponse.json({ error: 'Missing URL' }, { status: 400 });
    }

    // Fetch the PDF from the URL
    const pdfRes = await fetch(url);
    if (!pdfRes.ok) {
      return NextResponse.json({ error: 'Failed to fetch PDF' }, { status: 500 });
    }

    const buffer = Buffer.from(await pdfRes.arrayBuffer());

    // Convert PDF to markdown
    const markdown: string = await pdf2md(buffer, {});

    // Limit to ~8000 characters to stay within OpenAI context window
    const inputText = markdown.slice(0, 8000);

    // Generate summary using OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: 'You are a legal assistant. Summarize the following legal PDF text:' },
        { role: 'user', content: inputText }
      ],
      temperature: 0.5
    });

    const summary = completion.choices?.[0]?.message?.content;

    return NextResponse.json({ summary });
  } catch (err) {
    console.error('❌ Error:', err);
    return NextResponse.json(
      { error: 'Failed to process PDF and generate summary' },
      { status: 500 }
    );
  }
}
