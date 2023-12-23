import { getAllLinks } from "@/lib/data";
import IndividualLink from "@/components/link/link";

export default async function LinkList() {
  const allLinks = await getAllLinks();

  return (
    <>
      {allLinks.map(({ originalUrl, shortUrl, urlCode, createdAt, id }) => (
        <IndividualLink
          key={id}
          originalUrl={originalUrl}
          shortUrl={shortUrl}
          urlCode={urlCode}
          createdAt={createdAt}
          id={id}
        />
      ))}
    </>
  );
}
