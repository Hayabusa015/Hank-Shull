import { openai } from '@ai-sdk/openai';
import { streamText, convertToModelMessages } from 'ai';
import { HANK_SYSTEM } from '@/lib/instructions';

export async function POST(req: Request) {
  const { messages } = await req.json();
  const result = streamText({
    model: openai('gpt-5.6'),
    system: HANK_SYSTEM,
    messages: await convertToModelMessages(messages),
  });
  return result.toUIMessageStreamResponse();
}
