import OpenAI from "openai";

let cached: OpenAI | null = null;

export function getOpenAI() {
  if (cached) return cached;
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;
  cached = new OpenAI({ apiKey });
  return cached;
}
