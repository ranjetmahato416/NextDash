
"use client";

import { useState } from "react";
import Link from "next/link";
import type { User } from "@/lib/types";

export default function UserSearch({
  users,
}: {
  users: User[];
}) {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email} ${user.username}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name, email or username..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-6 w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500"
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredUsers.map((user) => (
          <Link
            key={user.id}
            href={`/dashboard/users/${user.id}`}
            className="rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                {user.name.charAt(0)}
              </div>

              <div>
                <h3 className="font-semibold">
                  {user.name}
                </h3>

                <p className="text-xs text-slate-500">
                  @{user.username}
                </p>
              </div>
            </div>

            <div className="mt-5 space-y-2 text-sm text-slate-500">
              <p>{user.email}</p>
              <p>{user.company.name}</p>
              <p>{user.address.city}</p>
            </div>

            <p className="mt-5 text-sm font-medium text-blue-600">
              View Details →
            </p>
          </Link>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <p className="py-10 text-center text-slate-500">
          No users found.
        </p>
      )}

      <p className="mt-5 text-sm text-slate-500">
        Showing {filteredUsers.length} of {users.length} users
      </p>
    </div>
  );
}
