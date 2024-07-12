import { prisma } from "@/_utils/prisma";
import { NextRequest } from "next/server";
import { z } from "zod";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const bodySchema = z.object({
    rate: z.number(),
    description: z.string(),
    bookId: z.string(),
    userId: z.string(),
  });

  const { rate, description, bookId, userId } = bodySchema.parse(body);

  const findUserWithSameId = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  const findBookWithSameId = await prisma.book.findUnique({
    where: {
      id: bookId,
    },
  });

  if (!findUserWithSameId || !findBookWithSameId) {
    throw new Error("Impossible Create Book");
  }

  const rating = await prisma.rating.create({
    data: {
      description,
      rate,
      bookId,
      userId,
    },
  });

  return Response.json(rating);
}
