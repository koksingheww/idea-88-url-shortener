import { PrismaClient } from "@prisma/client";
import { cache } from "react";

const prisma = new PrismaClient();

export async function insertLink() {
  const link = await prisma.url.create({
    data: {
      originalUrl: "https://www.prisma.io/docs/orm/reference/prisma-client-reference#create",
      shortUrl: "https://short.com",
      urlCode: "123saasas",
    },
  });

  return link;
}

export const getAllLinks = cache(async () => {
  const links = await prisma.url.findMany();

  return links;
});
