import { PrismaClient } from "@prisma/client";

import {
  SECOND_LEVEL_DOMAINS,
  SPECIAL_APEX_DOMAINS,
  ccTLDs,
  nanoid,
} from "./constants";

const prisma = new PrismaClient();

export const getApexDomain = (url: string) => {
  let domain;
  try {
    domain = new URL(url.replace(/^[a-zA-Z]+:\/\//, "https://")).hostname;
  } catch (e) {
    return "";
  }
  if (domain === "youtu.be") return "youtube.com";
  if (domain === "raw.githubusercontent.com") return "github.com";
  if (domain.endsWith(".vercel.app")) return "vercel.app";

  const parts = domain.split(".");
  if (parts.length > 2) {
    if (
      (SECOND_LEVEL_DOMAINS.has(parts[parts.length - 2]) &&
        ccTLDs.has(parts[parts.length - 1])) ||
      SPECIAL_APEX_DOMAINS.has(parts.slice(-2).join("."))
    ) {
      return parts.slice(-3).join(".");
    }
    return parts.slice(-2).join(".");
  }
  return domain;
};

export async function getRandomUrlCode(): Promise<string> {
  /* recursively get random key till it gets one that's available */
  const key = nanoid();
  const response = await prisma.url.findUnique({
    where: {
      urlCode: key,
    },
  });

  if (response) {
    // by the off chance that key already exists
    return getRandomUrlCode();
  } else {
    return key;
  }
}
