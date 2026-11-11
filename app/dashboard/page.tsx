
import {
  Users,
  FileText,
  ListTodo,
  CheckCircle,
} from "lucide-react";

import StatCard from "@/components/stat-card";
import {
  getUsers,
  getPosts,
  getTodos,
} from "@/lib/api";

export default async function DashboardPage() {
  // Fetch all three APIs simultaneously
  const [users, posts, todos] = await Promise.all([
    getUsers(),
    getPosts(),
    getTodos(),
  ]);

  const completedTodos = todos.filter(
    (todo) => todo.completed
  ).length;

  const statistics = [
    {
      title: "Total Users",
      value: users.length,
      description: "Users retrieved from API",
      icon: Users,
    },
    {
      title: "Total Posts",
      value: posts.length,
      description: "Posts retrieved from API",
      icon: FileText,
    },
    {
      title: "Total Tasks",
      value: todos.length,
      description: "Tasks retrieved from API",
      icon: ListTodo,
    },
    {
      title: "Completed Tasks",
      value: completedTodos,
      description: "Successfully completed",
      icon: CheckCircle,
    },
  ];

  const recentUsers = users.slice(0, 5);
  const recentPosts = posts.slice(0, 5);

  return (
    <div className="space-y-8">
      {/* Page heading */}
      <div>
        <h1 className="text-2xl font-bold">
          Dashboard Overview
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Welcome to your dynamic Next.js dashboard.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {statistics.map((stat) => (
          <StatCard
            key={stat.title}
            {...stat}
          />
        ))}
      </div>

      {/* Recent users */}
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold">
            Recent Users
          </h2>

          <a
            href="/dashboard/users"
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            View all
          </a>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b text-slate-500">
                <th className="pb-3">Name</th>
                <th className="pb-3">Email</th>
                <th className="pb-3">Company</th>
              </tr>
            </thead>

            <tbody>
              {recentUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b last:border-0"
                >
                  <td className="py-4 font-medium">
                    {user.name}
                  </td>

                  <td className="py-4 text-slate-500">
                    {user.email}
                  </td>

                  <td className="py-4 text-slate-500">
                    {user.company.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Recent posts */}
      <section className="rounded-xl border border-slate-200 bg-white p-6">
        <h2 className="mb-5 text-lg font-semibold">
          Recent Posts
        </h2>

        <div className="space-y-4">
          {recentPosts.map((post) => (
            <div
              key={post.id}
              className="border-b pb-4 last:border-0 last:pb-0"
            >
              <h3 className="font-medium capitalize">
                {post.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {post.body}
              </p>

              <span className="mt-2 inline-block text-xs text-blue-600">
                Author ID: {post.userId}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
