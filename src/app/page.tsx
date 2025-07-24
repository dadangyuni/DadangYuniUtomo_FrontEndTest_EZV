import { API_BASE_URL } from "@/constants/url";
import { Todo } from "@/types/todo.types";
import ListViews from "@/views/List";

export default async function TodosPage() {
  const todos = await fetch(`${API_BASE_URL}/todos?_start=0&_limit=10`).then(
    (res) => res.json()
  );

  return <ListViews initialTodos={todos as Todo[]} />;
}
