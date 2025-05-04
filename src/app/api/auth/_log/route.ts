import { NextResponse } from 'next/server';

export async function POST() {
  // This would normally log authentication events
  // Just returning a success response for now
  return NextResponse.json({ success: true });
} 