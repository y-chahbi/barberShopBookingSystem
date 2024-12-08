import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { date, time, userId } = req.body;
    try {
      const newReservation = await prisma.reservation.create({
        data: {
          date,
          time,
          user: { connect: { id: userId } },
        },
      });
      res.status(201).json(newReservation);
    } catch (error) {
      res.status(500).json({ error: "Reservation creation failed" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
