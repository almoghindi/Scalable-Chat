import { CHATS_URL } from "@/lib/apiAuthRoutes";

export async function fetchChats(groupId: string) {
  const res = await fetch(`${CHATS_URL}/${groupId}`, {
    cache: "no-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const response = await res.json();
  if (response?.data) {
    return response?.data;
  }
  return [];
}
