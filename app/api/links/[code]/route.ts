import { redirect } from "next/navigation";
import { getOriginalUrlByUrlCode } from "@/lib/data";

export async function GET(
  request: Request,
  { params }: { params: { code: string } }
) {
  const { code } = params;
  const link = await getOriginalUrlByUrlCode(code);
  redirect(`${link!.originalUrl}`);
}
