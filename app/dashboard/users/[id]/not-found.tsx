
import Link from "next/link";

export default function UserNotFound() {
  return (
    <div className="rounded-xl bg-white p-10 text-center">
      <h1 className="text-2xl font-bold">
        User Not Found
      </h1>

      <p className="mt-2 text-slate-500">
        The requested user does not exist.
      </p>

      <Link
        href="/dashboard/users"
        className="mt-5 inline-block rounded-lg bg-blue-600 px-5 py-2 text-white"
      >
        Return to Users
      </Link>
    </div>
  );
}
