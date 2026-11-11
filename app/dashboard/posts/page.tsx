
import { getPosts } from "@/lib/api";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Posts</h1>

        <p className="mt-1 text-sm text-slate-500">
          Browse posts retrieved from JSONPlaceholder.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {posts.slice(0, 20).map((post) => (
          <article
            key={post.id}
            className="rounded-xl border border-slate-200 bg-white p-6"
          >
            <div className="mb-3 flex items-center justify-between">
              <span className="rounded-md bg-blue-50 px-3 py-1 text-xs text-blue-600">
                Post #{post.id}
              </span>

              <span className="text-xs text-slate-400">
                User {post.userId}
              </span>
            </div>

            <h2 className="font-semibold capitalize">
              {post.title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              {post.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
