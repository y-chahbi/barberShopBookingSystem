import { NextResponse } from "next/server";
import { prisma } from "../../../../../lib/prisma";

export async function POST(request: Request) {
  try {
    const { date, time, userId } = await request.json();

    // Create a new reservation in the database
    const newReservation = await prisma.reservation.create({
      data: {
        date,
        time,
        user: { connect: { id: userId } },
      },
    });

    // Return the created reservation as a JSON response
    return NextResponse.json(newReservation, { status: 201 });
  } catch (error) {
    console.error("Error creating reservation:", error);

    // Return an error response
    return NextResponse.json({ error: "Reservation creation failed" }, { status: 500 });
  }
}
