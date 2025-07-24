import { makeStore } from "@/lib/store";
import { todoApi } from "@/services/todo";
import { Todo } from "@/types/todo.types";
import ListViews from "@/views/List";

export default async function TodosPage() {
  const store = makeStore();

  await store.dispatch(todoApi.endpoints.getPaginatedTodos.initiate({}));

  const { data: todos = [] } = todoApi.endpoints.getPaginatedTodos.select({})(
    store.getState()
  );

  return <ListViews initialTodos={todos as Todo[]} />;
}
