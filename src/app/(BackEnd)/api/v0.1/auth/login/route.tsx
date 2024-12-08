import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    console.log("Received data:", { email, password });

    // Find user in the database
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Ensure the JWT secret is defined
    //if (!process.env.JWT_SECRET) {
    //  throw new Error("JWT_SECRET is not defined in environment variables");
    //}

    // Generate a JWT token
    //const token = jwt.sign(
    //  { id: user.id, email: user.email },
    //  process.env.JWT_SECRET,
    //  { expiresIn: "1h" } // Fixed property name
    //);

    // Return the token
    return NextResponse.json({ "token":"hello" }, { status: 200 });
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
