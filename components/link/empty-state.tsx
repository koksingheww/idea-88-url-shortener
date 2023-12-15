import Image from "next/image";
import CreateLinkButton from "./create-link-button";

export default function EmptyState() {
  return (
    <div className="mb-12 flex flex-col items-center justify-center rounded-md border border-gray-200 bg-white py-12">
      <h2 className="z-10 text-xl font-semibold text-gray-700">
        No links found.
      </h2>
      <Image
        alt="No links found"
        src="https://app.dub.co/_static/illustrations/call-waiting.svg"
        width={400}
        height={400}
      />
      <CreateLinkButton />
      <p className="mt-2 text-sm text-gray-500">or edit your search filters</p>
    </div>
  );
}
