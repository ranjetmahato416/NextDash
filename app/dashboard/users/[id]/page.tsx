
import { notFound } from "next/navigation";
import Link from "next/link";

import {
  getUserById,
  getUserPosts,
} from "@/lib/api";

export default async function UserDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const user = await getUserById(id);

  if (!user || !user.id) {
    notFound();
  }

  const posts = await getUserPosts(id);

  return (
    <div className="space-y-6">
      <Link
        href="/dashboard/users"
        className="text-sm font-medium text-blue-600 hover:underline"
      >
        ← Back to Users
      </Link>

      <section className="rounded-xl border border-slate-200 bg-white p-8">
        <div className="flex items-center gap-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-700">
            {user.name.charAt(0)}
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              {user.name}
            </h1>

            <p className="text-slate-500">
              @{user.username}
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-xs text-slate-400">Email</p>
            <p className="mt-1">{user.email}</p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Phone</p>
            <p className="mt-1">{user.phone}</p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Website</p>
            <p className="mt-1">{user.website}</p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Company</p>
            <p className="mt-1">{user.company.name}</p>
          </div>

          <div>
            <p className="text-xs text-slate-400">City</p>
            <p className="mt-1">{user.address.city}</p>
          </div>

          <div>
            <p className="text-xs text-slate-400">Address</p>
            <p className="mt-1">
              {user.address.street}, {user.address.suite}
            </p>
          </div>
        </div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="mb-5 text-lg font-semibold">
          User Posts ({posts.length})
        </h2>

        <div className="space-y-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="border-b pb-4 last:border-0"
            >
              <h3 className="font-semibold capitalize">
                {post.title}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                {post.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
