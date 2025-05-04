import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const encoder = new TextEncoder();
  
  // Create a readable stream
  const stream = new ReadableStream({
    start(controller) {
      const message = JSON.stringify({ message: "Connected to SSE" });
      controller.enqueue(encoder.encode(`data: ${message}\n\n`));
      
      // Send a message every 5 seconds to keep the connection alive
      const timer = setInterval(() => {
        const timestamp = new Date().toISOString();
        const keepalive = JSON.stringify({ timestamp });
        controller.enqueue(encoder.encode(`data: ${keepalive}\n\n`));
      }, 5000);
      
      // Clean up when the connection is closed
      request.signal.addEventListener('abort', () => {
        clearInterval(timer);
        controller.close();
      });
    }
  });
  
  // Return the stream in a Response
  return new Response(stream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache, no-transform',
      'Connection': 'keep-alive',
    },
  });
} 