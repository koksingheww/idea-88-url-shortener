import { getAllLinks } from "@/lib/data";

export default async function Footer() {
  //request memoization?
  const allLinks = await getAllLinks();

  return (
    <div className="sticky bottom-0 mt-4 flex h-20 scale-[1.02] flex-col items-center justify-center space-y-2 rounded-t-md border border-gray-200 bg-white shadow-lg">
      <div className="flex items-center space-x-2">
        <button className="text-black flex min-w-[1.5rem] items-center justify-center rounded-md bg-white p-1 font-semibold transition-all hover:bg-gray-100">
          1
        </button>
      </div>
      <p className="text-sm text-gray-500">
        Showing 1 - {allLinks.length} of <span>{allLinks.length}</span> links
      </p>
    </div>
  );
}
