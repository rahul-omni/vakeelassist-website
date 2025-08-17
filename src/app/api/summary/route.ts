import { NextRequest, NextResponse } from 'next/server';
import pdf2md from "@opendocsg/pdf2md";
import OpenAI from "openai";
import prisma from '@/lib/prisma'

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

    // Check if judgment already exists
    let existingJudgment = await prisma.extracted_judgments.findFirst({
      where: { judgment_url: url }
    });

    // If judgment exists and has a summary, return it
    if (existingJudgment && existingJudgment.summary) {
      return NextResponse.json({ summary: existingJudgment.summary });
    }

    // If judgment exists but no summary → generate one
    if (existingJudgment && !existingJudgment.summary) {
      console.log("ℹ️ Existing judgment found without summary — generating now...");
    }

    // Fetch the PDF from the URL
    const pdfRes = await fetch(url);
    if (!pdfRes.ok) {
      return NextResponse.json({ error: 'Failed to fetch PDF' }, { status: 500 });
    }

    const buffer = Buffer.from(await pdfRes.arrayBuffer());

    // Convert PDF to markdown
    const markdown: string = await pdf2md(buffer, {});

    // Limit to ~8000 characters (safe for context)
    const inputText = markdown.slice(0, 8000);

    // Generate summary using OpenAI
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: 'You are a legal assistant. Summarize the following legal PDF text in 500 words:' },
        { role: 'user', content: inputText }
      ],
      temperature: 0.5
    });

    const summary = completion.choices?.[0]?.message?.content || "No summary generated.";

    // If judgment already exists, update it
    if (existingJudgment) {
      existingJudgment = await prisma.extracted_judgments.update({
        where: { id: existingJudgment.id },
        data: { summary }
      });
    } else {
      // Otherwise, create new entry
      return NextResponse.json({ summary });
    }

    return NextResponse.json({ summary });
  } catch (err) {
    console.error('❌ Error:', err);
    return NextResponse.json(
      { error: 'Failed to process PDF and generate summary' },
      { status: 500 }
    );
  }
}

