import { NextResponse } from "next/server";

// Simulated authentication middleware
export async function authenticate(request: Request) {
  const authHeader = request.headers.get("Authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = authHeader.split(" ")[1];

  // Simulate token validation (replace this with real validation logic, e.g., JWT verification)
  if (token !== "valid_token") {
    return NextResponse.json({ error: "Invalid token" }, { status: 403 });
  }

  // If authentication succeeds, return null
  return null;
}
