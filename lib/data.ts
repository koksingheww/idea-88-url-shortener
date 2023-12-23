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

  await createUrlAnalytic(link.id, 0);

  return link;
}

export async function createUrlAnalytic(urlId: number, clicked: number) {
  const newUrlAnalytic = await prisma.urlAnalytic.create({
    data: {
      urlId: urlId,
      clicked: clicked,
    },
  });

  return newUrlAnalytic;
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

export async function getClickedByUrlId(urlId: number) {
  const urlAnalytic = await prisma.urlAnalytic.findFirst({
    where: {
      urlId: urlId,
    },
    select: {
      clicked: true,
    },
  });

  return urlAnalytic;
}

export async function updateClickedByUrlId(urlId: number, clicked: number) {
  const urlAnalytic = await prisma.urlAnalytic.update({
    where: {
      urlId: urlId,
    },
    data: {
      clicked: clicked,
    },
  });

  return urlAnalytic;
}
