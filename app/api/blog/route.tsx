import { NextResponse } from 'next/server';
import clientPromise from '../../lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('sip_db');
    const users = await db.collection('blog').find({}).toArray();

    return NextResponse.json({ success: true, data: users });
  } catch (error) {
    console.error('Failed to fetch blog posts:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch blog posts.' });
  }
}
