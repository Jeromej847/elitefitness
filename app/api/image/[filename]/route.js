import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    // Await the params since it's a Promise in Next.js 13+
    const resolvedParams = await params;
    const { filename } = resolvedParams;
    
    if (!filename) {
      return NextResponse.json({ error: 'Filename required' }, { status: 400 });
    }
    
    // Get the public directory path
    const publicDir = path.join(process.cwd(), 'public', 'img');
    const filePath = path.join(publicDir, decodeURIComponent(filename));
    
    // Security check - ensure file is within public/img directory
    if (!filePath.startsWith(publicDir)) {
      return NextResponse.json({ error: 'Invalid file path' }, { status: 403 });
    }
    
    // Check if file exists
    if (!fs.existsSync(filePath)) {
      console.log('File not found:', filePath);
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }
    
    // Read the file
    const fileBuffer = fs.readFileSync(filePath);
    
    // Determine MIME type
    let mimeType = 'image/jpeg';
    const lowerFilename = filename.toLowerCase();
    if (lowerFilename.endsWith('.png')) {
      mimeType = 'image/png';
    } else if (lowerFilename.endsWith('.gif')) {
      mimeType = 'image/gif';
    } else if (lowerFilename.endsWith('.webp')) {
      mimeType = 'image/webp';
    } else if (lowerFilename.endsWith('.svg')) {
      mimeType = 'image/svg+xml';
    }
    
    // Return the file with appropriate headers
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': mimeType,
        'Cache-Control': 'public, max-age=31536000, immutable',
        'Content-Length': fileBuffer.length.toString(),
      },
    });
  } catch (error) {
    console.error('Image serving error:', error);
    return NextResponse.json({ error: 'Failed to serve image', details: error.message }, { status: 500 });
  }
}
