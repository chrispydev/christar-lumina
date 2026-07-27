import { NextResponse } from 'next/server';
import { client } from '@/lib/sanity';
import { projectsQuery } from '@/lib/queries';

export async function GET() {
  try {
    const projects = await client.fetch(projectsQuery);
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects' },
      { status: 500 }
    );
  }
}
