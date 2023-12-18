"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { insertLink } from "./data";

const schema = z.object({
  destinationUrl: z.string().url(),
  shortLink: z.string().url(),
});

export async function createLink(formData: FormData) {
  const validatedFields = schema.safeParse({
    destinationUrl: formData.get("destination-url"),
    shortLink: formData.get("short-link"),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const { destinationUrl, shortLink } = validatedFields.data;
    const link = await insertLink(destinationUrl, shortLink);
    revalidatePath("/");
  } catch (error: any) {
    throw new Error("Failed to create link");
  }
}
