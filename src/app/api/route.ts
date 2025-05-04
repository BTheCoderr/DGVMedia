import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'Da Grape Vine API' });
}

export async function POST() {
  return NextResponse.json({ message: 'Success' });
} 