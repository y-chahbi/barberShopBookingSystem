import { NextResponse } from 'next/server';
import { prisma } from '../../../../../lib/prisma';
import bcrypt from "bcrypt";



export async function POST(request: Request) {
    try {
      const { firstName, lastName, email, newPassword } = await request.json();
      console.log('Received data for password reset:', { firstName, lastName, email });
  
      if (!firstName || !lastName || !email || !newPassword) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
      }
  
      // Check if the user exists and details match
      const user = await prisma.user.findUnique({
        where: { email },
      });
  
      if (!user || user.firstName !== firstName || user.lastName !== lastName) {
        return NextResponse.json({ error: 'Invalid user details' }, { status: 404 });
      }
  
      // Hash the new password
      const hashedPassword = await bcrypt.hash(newPassword, 10);
  
      // Update the user's password in the database
      const updatedUser = await prisma.user.update({
        where: { email },
        data: { password: hashedPassword },
      });
  
      return NextResponse.json({ message: 'Password updated successfully' }, { status: 200 });
    } catch (error) {
      console.error('Error resetting password:', error);
      return NextResponse.json({ error: 'Password reset failed' }, { status: 500 });
    }
}