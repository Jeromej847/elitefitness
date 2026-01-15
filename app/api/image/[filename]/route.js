import { readFileSync } from 'fs';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const { filename } = params;
    const publicPath = join(process.cwd(), 'public', 'img', filename);
    
    const imageBuffer = readFileSync(publicPath);
    
    let mimeType = 'image/jpeg';
    if (filename.endsWith('.png')) {
      mimeType = 'image/png';
    } else if (filename.endsWith('.gif')) {
      mimeType = 'image/gif';
    } else if (filename.endsWith('.webp')) {
      mimeType = 'image/webp';
    }
    
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': mimeType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Image error:', error);
    return NextResponse.json({ error: 'Image not found' }, { status: 404 });
  }
}
