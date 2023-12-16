"use server";

import { insertLink } from "./db";

export async function createLink() {
  const link = await insertLink();
  console.log("create link: ", link);
}
