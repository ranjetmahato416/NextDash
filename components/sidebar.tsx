
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  ListTodo,
  ChartNoAxesCombined,
} from "lucide-react";

const navigation = [
  {
    name: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Users",
    href: "/dashboard/users",
    icon: Users,
  },
  {
    name: "Posts",
    href: "/dashboard/posts",
    icon: FileText,
  },
  {
    name: "Todos",
    href: "/dashboard/todos",
    icon: ListTodo,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r border-slate-200 bg-white p-5">
      <div className="mb-10 flex items-center gap-3">
        <div className="rounded-lg bg-blue-600 p-2 text-white">
          <ChartNoAxesCombined size={23} />
        </div>

        <h1 className="text-xl font-bold">NextDash</h1>
      </div>

      <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
        Main Menu
      </p>

      <nav className="space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;

          const active =
            pathname === item.href ||
            (item.href !== "/dashboard" &&
              pathname.startsWith(item.href + "/"));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
                active
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              <Icon size={19} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto rounded-xl bg-slate-50 p-4">
        <p className="text-sm font-semibold">NextDash Demo</p>
        <p className="mt-1 text-xs text-slate-500">
          Learning Next.js and REST APIs
        </p>
      </div>
    </aside>
  );
}
