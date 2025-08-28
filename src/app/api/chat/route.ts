import { NextResponse } from "next/server";
import { openai } from "@/lib/openai";

export async function POST(req: Request) {
    try {
        const { question, context, initialQuery } = await req.json();

        let contextStr: string;
        if (typeof context === "string") {
            contextStr = context;
        } else {
            contextStr = JSON.stringify(context, null, 2);
        }

        const completion = await openai.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content: "You are a helpful legal research assistant. Use the provided case results to answer follow-up questions clearly and concisely.",
                },
                {
                    role: "assistant",
                    content: `Here are the results of the initial query:\n\n${contextStr}`,
                },
                {
                    role: "user",
                    content: `Initial Query: ${initialQuery}\n\nFollow Up Question: ${question}`,
                },
            ],
            max_tokens: 2000,
        });

        const message = completion.choices[0]?.message?.content || "";

        return NextResponse.json({
            message: message,
        });
    } catch (error) {
        console.error("OpenAI query failed:", error);
        return NextResponse.json(
            { message: "error", error: (error as Error).message },
            { status: 500 }
        );
    }
}
