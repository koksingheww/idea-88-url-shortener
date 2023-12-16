"use server";

import { revalidatePath } from "next/cache";
import { z } from "zod";

import { insertLink } from "./db";

const schema = z.object({
  destinationUrl: z.string().url(),
});

export async function createLink(formData: FormData) {
  const validatedFields = schema.safeParse({
    destinationUrl: formData.get("destination-url"),
  });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const link = await insertLink();
    revalidatePath("/");
  } catch (error: any) {
    throw new Error("Failed to create link");
  }
}
