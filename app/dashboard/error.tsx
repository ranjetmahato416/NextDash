
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="rounded-xl border border-red-200 bg-white p-8">
      <h2 className="text-lg font-semibold text-red-600">
        Something went wrong!
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="mt-5 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white"
      >
        Try Again
      </button>
    </div>
  );
}
