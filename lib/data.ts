import { PrismaClient } from "@prisma/client";
import { cache } from "react";

import { getRandomUrlCode } from "./utils";

const prisma = new PrismaClient();

export async function insertLink(
  originalUrl: string,
  shortUrl: string,
  urlCode: string
) {
  const link = await prisma.url.create({
    data: {
      originalUrl: originalUrl,
      shortUrl: shortUrl,
      urlCode: urlCode,
    },
  });

  return link;
}

export const getAllLinks = cache(async () => {
  const links = await prisma.url.findMany();

  return links;
});
