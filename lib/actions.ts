"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { insertLink } from "./data";

const schema = z.object({
  destinationUrl: z.string().url(),
  shortLink: z.string().url(),
});

export async function createLink(urlCode: string, formData: FormData) {
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
    await insertLink(destinationUrl, shortLink, urlCode);
  } catch (error: any) {
    throw new Error("Failed to create link");
  }
  revalidatePath("/");
  redirect("/");
}
