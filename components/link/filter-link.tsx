export default function FilterLink() {
  return (
    <div className="scrollbar-hide sticky top-32 col-span-2 hidden max-h-[calc(100vh-150px)] self-start overflow-auto rounded-lg border border-gray-100 bg-white shadow lg:block">
      <div className="grid w-full rounded-md bg-white px-5 lg:divide-y lg:divide-gray-300">
        <div className="grid gap-3 py-6">
          <div className="flex items-center justify-between">
            <h3 className="ml-1 mt-2 font-semibold">Filter Links</h3>
          </div>
          <div className="relative">
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-4 w-4 text-gray-400"
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path
                  d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div> */}
            <input
              type="text"
              placeholder="Search..."
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
