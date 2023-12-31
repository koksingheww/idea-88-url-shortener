import Image from "next/image";
import Link from "next/link";

import { GOOGLE_FAVICON_URL } from "@/lib/constants";
import { getApexDomain } from "@/lib/utils";
import CopyButton from "../ui/CopyButton";
import { getClickedByUrlId } from "@/lib/data";

export default async function IndividualLink({
  originalUrl,
  shortUrl,
  urlCode,
  createdAt,
  id,
}: {
  originalUrl: string;
  shortUrl: string;
  urlCode: string;
  createdAt: Date;
  id: number;
}) {
  const urlAnalytic = await getClickedByUrlId(id);

  return (
    <li
      key={urlCode}
      className="border-black relative rounded-lg border-2 bg-white p-3 pr-1 shadow transition-all hover:shadow-md sm:p-4"
    >
      <div className="relative flex items-center justify-between">
        <div className="relative flex shrink items-center">
          <Image
            alt="Google favicon"
            src={`${GOOGLE_FAVICON_URL}${getApexDomain(originalUrl)}`}
            width={20}
            height={20}
            className="blur-0 h-8 w-8 rounded-full sm:h-10 sm:w-10"
          />
          <div className="ml-2 sm:ml-4">
            <div className="flex max-w-fit items-center space-x-2">
              <a
                className="w-full max-w-[140px] truncate text-sm font-semibold text-blue-800 sm:max-w-[300px] sm:text-base md:max-w-[360px] xl:max-w-[500px]"
                href={shortUrl}
              >
                {shortUrl.split("//")[1]}
              </a>
              <CopyButton shortUrl={shortUrl} />
            </div>
            <div className="flex max-w-fit items-center space-x-1">
              {/* <div className="md:inline-flex w-4">
                    <Image
                      alt="Avatar for Sing Kok"
                      src="https://lh3.googleusercontent.com/a/ACg8ocId-jFb6npklo8GToo6QrVRxhWME_RiyTAjwpjxPFj7mpw=s96-c"
                      width={20}
                      height={20}
                      className="rounded-full border border-gray-300 h-4 w-4"
                    />
                  </div>
                  <p>•</p> */}
              <p className="whitespace-nowrap text-sm text-gray-500">
                {new Date(createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </p>
              <p>•</p>
              <Link
                className="max-w-[140px] truncate text-sm font-medium text-gray-700 underline-offset-2 hover:underline sm:max-w-[300px] md:max-w-[360px] xl:max-w-[440px]"
                href={originalUrl}
              >
                {originalUrl}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            className="md:inline-flex flex items-center space-x-1 rounded-md bg-gray-100 px-2 py-0.5 transition-all duration-75 hover:scale-105 active:scale-100"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
            >
              <path
                d="M11.5 1C11.7761 1 12 1.22386 12 1.5V13.5C12 13.7761 11.7761 14 11.5 14C11.2239 14 11 13.7761 11 13.5V1.5C11 1.22386 11.2239 1 11.5 1ZM9.5 3C9.77614 3 10 3.22386 10 3.5V13.5C10 13.7761 9.77614 14 9.5 14C9.22386 14 9 13.7761 9 13.5V3.5C9 3.22386 9.22386 3 9.5 3ZM13.5 3C13.7761 3 14 3.22386 14 3.5V13.5C14 13.7761 13.7761 14 13.5 14C13.2239 14 13 13.7761 13 13.5V3.5C13 3.22386 13.2239 3 13.5 3ZM5.5 4C5.77614 4 6 4.22386 6 4.5V13.5C6 13.7761 5.77614 14 5.5 14C5.22386 14 5 13.7761 5 13.5V4.5C5 4.22386 5.22386 4 5.5 4ZM1.5 5C1.77614 5 2 5.22386 2 5.5V13.5C2 13.7761 1.77614 14 1.5 14C1.22386 14 1 13.7761 1 13.5V5.5C1 5.22386 1.22386 5 1.5 5ZM7.5 5C7.77614 5 8 5.22386 8 5.5V13.5C8 13.7761 7.77614 14 7.5 14C7.22386 14 7 13.7761 7 13.5V5.5C7 5.22386 7.22386 5 7.5 5ZM3.5 7C3.77614 7 4 7.22386 4 7.5V13.5C4 13.7761 3.77614 14 3.5 14C3.22386 14 3 13.7761 3 13.5V7.5C3 7.22386 3.22386 7 3.5 7Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="whitespace-nowrap text-sm text-gray-500">
              {urlAnalytic?.clicked}
              <span className="ml-1 hidden sm:inline-block">clicks</span>
            </p>
          </Link>
          <button className="sm:inline-flex rounded-md px-1 py-2 transition-all duration-75 hover:bg-gray-100 active:bg-gray-200">
            <span className="sr-only">Edit</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-500"
            >
              <path
                d="M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </li>
  );
}
