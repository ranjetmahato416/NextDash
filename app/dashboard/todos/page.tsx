
import { getTodos } from "@/lib/api";
import { CheckCircle, Clock } from "lucide-react";

export default async function TodosPage() {
  const todos = await getTodos();

  const completed = todos.filter(
    (todo) => todo.completed
  ).length;

  const pending = todos.length - completed;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Todos</h1>

        <p className="mt-1 text-sm text-slate-500">
          Task management dashboard.
        </p>
      </div>

      <div className="mb-6 grid gap-5 md:grid-cols-3">
        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Total Tasks
          </p>
          <h2 className="mt-2 text-3xl font-bold">
            {todos.length}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Completed
          </p>
          <h2 className="mt-2 text-3xl font-bold text-green-600">
            {completed}
          </h2>
        </div>

        <div className="rounded-xl bg-white p-5 shadow-sm">
          <p className="text-sm text-slate-500">
            Pending
          </p>
          <h2 className="mt-2 text-3xl font-bold text-orange-500">
            {pending}
          </h2>
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        {todos.slice(0, 30).map((todo) => (
          <div
            key={todo.id}
            className="flex items-center justify-between gap-4 border-b p-5 last:border-0"
          >
            <div className="flex items-center gap-3">
              {todo.completed ? (
                <CheckCircle
                  className="shrink-0 text-green-600"
                  size={20}
                />
              ) : (
                <Clock
                  className="shrink-0 text-orange-500"
                  size={20}
                />
              )}

              <div>
                <p className="text-sm font-medium">
                  {todo.title}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  User ID: {todo.userId}
                </p>
              </div>
            </div>

            <span
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                todo.completed
                  ? "bg-green-50 text-green-700"
                  : "bg-orange-50 text-orange-700"
              }`}
            >
              {todo.completed ? "Completed" : "Pending"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
