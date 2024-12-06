import { NextResponse } from 'next/server';
import { prisma } from '../../../../lib/prisma';

export async function GET() {
  return NextResponse.json({ message: 'Hello' });
}

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, password } = await request.json();
    console.log('Received data:', { firstName, lastName, email, password });

    if (!firstName || !lastName || !email || !password) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'User registration failed'}, { status: 500 });
  }
}

