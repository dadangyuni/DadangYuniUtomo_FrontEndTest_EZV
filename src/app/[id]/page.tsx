import { API_BASE_URL } from "@/constants/url";
import { Todo } from "@/types/todo.types";
import DetailView from "@/views/Detail";

export const revalidate = 60;

export async function generateStaticParams() {
  console.log("generateStaticParams dijalankan...");
  //fetch all
  const todos = await fetch(`${API_BASE_URL}/todos`).then((res) => res.json());
  return (
    todos?.map((todo: Todo) => ({
      id: todo.id.toString(),
    })) || []
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const todo = await fetch(API_BASE_URL + `/todos/${id}`).then((res) =>
    res.json()
  );
  return {
    title: todo.title,
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const todo = await fetch(API_BASE_URL + `/todos/${id}`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());

  return <DetailView data={todo as Todo} />;
}
