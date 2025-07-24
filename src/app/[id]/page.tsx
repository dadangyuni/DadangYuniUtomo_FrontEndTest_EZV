import { makeStore } from "@/lib/store";
import { todoApi } from "@/services/todo";
import { Todo } from "@/types/todo.types";
import DetailView from "@/views/Detail";

const TodoDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const store = makeStore();
  //pre-fetch
  await store.dispatch(todoApi.endpoints.getTodoByID.initiate(id));

  const { data: todo } = todoApi.endpoints.getTodoByID.select(id)(
    store.getState()
  );

  return <DetailView data={todo as Todo} />;
};

export async function generateStaticParams() {
  //fetch all
  const store = makeStore();

  const { data: todos } = await store.dispatch(
    todoApi.endpoints.getTodos.initiate()
  );

  return (
    todos?.map((todo) => ({
      id: todo.id.toString(),
    })) || []
  );
}

export const revalidate = 60; // Revalidate ISR 60s

export default TodoDetailPage;
