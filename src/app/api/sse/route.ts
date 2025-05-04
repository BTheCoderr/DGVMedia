import { NextResponse } from 'next/server';

export async function GET() {
  return new NextResponse(
    `data: ${JSON.stringify({ message: 'Connected to SSE' })}\n\n`, 
    {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache, no-transform',
        'Connection': 'keep-alive',
      },
    }
  );
} 