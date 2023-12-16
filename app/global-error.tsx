"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body>
        <div className="text-center">
          <h1 className="text-gray-700 text-9xl">500</h1>
          <p className="text-gray-100 text-2xl my-4">
            Something bad just happened...
          </p>
          <p className="text-gray-200 mb-8">
            Our servers could not handle your request. Try refreshing the page.
          </p>
          <button onClick={() => reset()}>Try again</button>
        </div>
      </body>
    </html>
  );
}
