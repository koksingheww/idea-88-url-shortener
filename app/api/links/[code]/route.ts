import { redirect } from "next/navigation";
import {
  getOriginalUrlByUrlCode,
  updateClickedByUrlId,
  getClickedByUrlId,
} from "@/lib/data";

export async function GET(
  request: Request,
  { params }: { params: { code: string } }
) {
  const { code } = params;
  const link = await getOriginalUrlByUrlCode(code);
  if (!link) {
    return redirect("/");
  }

  const urlAnalytic = await getClickedByUrlId(link.id);

  await updateClickedByUrlId(link.id, urlAnalytic!.clicked + 1);

  redirect(`${link!.originalUrl}`);
}
