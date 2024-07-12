import { prisma } from "@/_utils/prisma";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const ratings = await prisma.rating.findMany({
    where: {
      bookId: params.id,
    },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });

  if (!ratings) {
    throw new Error("Ratings Not Found");
  }

  return Response.json(ratings);
}
