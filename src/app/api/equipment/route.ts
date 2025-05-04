import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    equipment: [
      { id: 1, name: "Camera Package", type: "Video" },
      { id: 2, name: "Audio Equipment", type: "Audio" },
      { id: 3, name: "Lighting Kit", type: "Lighting" },
      { id: 4, name: "Microphones", type: "Audio" },
      { id: 5, name: "Tripods", type: "Support" },
      { id: 6, name: "Editing Workstation", type: "Post-Production" }
    ]
  });
} 