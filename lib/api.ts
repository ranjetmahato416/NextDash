
import type { User, Post, Todo } from "./types";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL;

async function apiFetch<T>(endpoint: string): Promise<T> {
  const response = await fetch(
    `${API_BASE_URL}${endpoint}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error(
      `API request failed: ${response.status}`
    );
  }

  return response.json() as Promise<T>;
}

export function getUsers() {
  return apiFetch<User[]>("/users");
}

export async function getUserById(
  id: string
): Promise<User | null> {
  const response = await fetch(
    `${API_BASE_URL}/users/${id}`,
    { cache: "no-store" }
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }

  return response.json() as Promise<User>;
}

export function getPosts() {
  return apiFetch<Post[]>("/posts");
}

export function getTodos() {
  return apiFetch<Todo[]>("/todos");
}

export function getUserPosts(id: string) {
  return apiFetch<Post[]>(`/users/${id}/posts`);
}
