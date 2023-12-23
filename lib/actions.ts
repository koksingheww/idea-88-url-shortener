"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { insertLink } from "./data";

const schema = z.object({
  destinationUrl: z.string().url(),
  urlCode: z.string(),
});

export async function createLink(formData: FormData) {
  const validatedFields = schema.safeParse({
    destinationUrl: formData.get("destination-url"),
    urlCode: formData.get("url-code"),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const { destinationUrl, urlCode } = validatedFields.data;
    await insertLink(destinationUrl, urlCode);
  } catch (error: any) {
    throw new Error("Failed to create link");
  }
  revalidatePath("/");
  redirect("/");
}
