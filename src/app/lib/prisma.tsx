// lib/prisma.ts
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

// Ensure that we only create one instance of PrismaClient in the app.
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export { prisma };
