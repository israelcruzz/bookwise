import { type NextRequest } from "next/server";
import { prisma } from "@/_utils/prisma";

export async function GET(
  request: NextRequest,
  { params: { name } }: { params: { name: string } }
) {
  if (!name) {
    throw new Error("Books Not Found");
  }

  let books;

  if (name === "Todos") {
    books = await prisma.book.findMany({
      include: {
        _count: {
          select: { rating: true },
        },
        categories: {
          include: {
            category: true,
          },
        },
      },
    });
  } else {
    books = await prisma.book.findMany({
      where: {
        categories: {
          some: { category: { name: name } },
        },
      },
      include: {
        _count: {
          select: { rating: true },
        },
        categories: {
          include: {
            category: true,
          },
        },
      },
    });
  }

  return Response.json(books);
}
