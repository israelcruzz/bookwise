import { type NextRequest } from "next/server";
import { prisma } from "@/_utils/prisma";

export async function GET(request: NextRequest) {
  const books = await prisma.book.findMany();

  if (!books) {
    throw new Error("Books Not Found");
  }

  return Response.json(books);
}
