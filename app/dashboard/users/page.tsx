
import { getUsers } from "@/lib/api";
import UserSearch from "@/components/user-search";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold">
          Users Management
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Browse and search all registered users.
        </p>
      </div>

      <UserSearch users={users} />
    </div>
  );
}
