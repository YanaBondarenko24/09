
import { nextServer } from "@/lib/api/api";
import { cookies } from 'next/headers';
import type { Note } from "@/types/note";
import type { User } from "@/types/user";

const getServerHeaders = async () => {
  const cookieStore = await cookies();
  return {
    headers: {
      Cookie: cookieStore.toString(),
    },
  };
};

export const checkServerSession = async () => {

  const headers = await getServerHeaders();
  const res = await nextServer.get('/auth/session', headers);

  return res;
};

export const getServerMe = async (): Promise<User> => {
  const headers = await getServerHeaders();
  const { data } = await nextServer.get('/users/me', headers);
  return data;
};



export const fetchNoteById = async (id: string) => {
  const headers = await getServerHeaders();
  const res = await nextServer.get<Note>(`/notes/${id}`,headers);
  return res.data;
};