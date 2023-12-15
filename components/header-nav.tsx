import Link from "next/link";

export default function HeaderNav() {
  return (
    <div className="sticky left-0 right-0 top-0 z-20 border-b border-gray-200 bg-white">
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a className="btn btn-ghost text-xl">sr-url-short</a>
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
