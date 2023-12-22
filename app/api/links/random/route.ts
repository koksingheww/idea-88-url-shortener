import { getRandomUrlCode } from "@/lib/utils";

export const dynamic = "force-dynamic"; // defaults to auto

export async function GET(request: Request) {
  const data = await getRandomUrlCode();

  return Response.json({ data });
}
