import { type NextRequest } from "next/server";
import { prisma } from "@/_utils/prisma";

export async function GET(request: NextRequest, { params: { name } }: { params: { name: string } }) {
  if (!name) {
    throw new Error("Books Not Found");
  }

  const books = await prisma.book.findMany({
    where: {
      categories: {
        some: { category: { name: name } },
      },
    },
  });

  return Response.json(books);
}