import { PrismaClient } from "@prisma/client";
import { cache } from "react";

import { getRandomUrlCode } from "./utils";

import { DOMAIN } from "./constants";

const prisma = new PrismaClient();

export async function insertLink(originalUrl: string, urlCode: string) {
  const link = await prisma.url.create({
    data: {
      originalUrl: originalUrl,
      shortUrl: `${DOMAIN}/api/links/${urlCode}`,
      urlCode: urlCode,
    },
  });

  return link;
}

export const getAllLinks = cache(async () => {
  const links = await prisma.url.findMany();

  return links;
});

export async function getOriginalUrlByUrlCode(urlCode: string) {
  const link = await prisma.url.findUnique({
    where: {
      urlCode: urlCode,
    },
  });

  return link;
}
