import Link from "next/link";
import Logo from "./logo";

export default function HeaderNav() {
  return (
    <div className="sticky left-0 right-0 top-0 z-20 border-b border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-xl">
              <Logo />
            </Link>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-200 sm:ml-3"
            >
              <path
                d="M4.10876 14L9.46582 1H10.8178L5.46074 14H4.10876Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <Link href="/" className="text-xl">
              <p className="text-xl">url-short</p>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/">Links</Link>
              </li>
              <li>
                <Link href="/settings">Settings</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
