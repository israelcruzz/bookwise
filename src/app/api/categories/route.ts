import { prisma } from "@/_utils/prisma";

export async function GET() {
  const categories = await prisma.category.findMany();

  if (!categories) {
    throw new Error("Categories Not Found");
  }

  return Response.json(categories);
}