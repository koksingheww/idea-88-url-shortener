import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function insertLink() {
  const link = await prisma.url.create({
    data: {
      originalUrl: "https://google.com",
      shortUrl: "https://short.com",
      urlCode: "123",
    },
  });

  return link;
}
