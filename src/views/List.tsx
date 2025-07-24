"use client";

import TodoCard from "@/components/TodoCard";
import { Todo } from "@/types/todo.types";
import useTodoList from "./List.hook";
import { Button } from "@/components/Button";
import { useGetPaginatedTodosQuery } from "@/services/todo";
import { useMemo } from "react";
import TodoForm from "@/components/TodoForm";

const ListViews = ({ initialTodos }: { initialTodos: Todo[] }) => {
  const {
    onSubmit,
    register,
    result,
    start,
    page,
    totalData,
    totalPage,
    limit,
    setPage,
    onToggleComplete,
    resultUpdate,
  } = useTodoList();

  const { data: todos = [], isLoading } = useGetPaginatedTodosQuery({
    start,
    limit,
  });

  const todoList = useMemo(() => {
    if (isLoading) return initialTodos;
    return todos;
  }, [isLoading, todos, initialTodos]);

  return (
    <div className="w-full p-4">
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <h1 className="text-3xl font-bold mb-2">Todos List</h1>
          <div></div>
        </div>
        <TodoForm
          onSubmit={onSubmit}
          register={register}
          isLoading={result.isLoading}
          isSuccess={result.isSuccess}
        />
      </div>
      {isLoading && <p className="mb-2 text-center">Synchronizing...</p>}
      <div className="grid gap-4">
        {todoList.map((todo: Todo) => (
          <TodoCard
            isLoading={
              resultUpdate.originalArgs?.id === todo.id && resultUpdate.isLoading
            }
            onToggle={onToggleComplete}
            data={todo}
            key={todo.id}
          />
        ))}
      </div>
      <div className="mt-8 flex items-center gap-1 justify-between text-gray-500">
        <p>
          {start + 1} - {start + todoList.length} of {totalData} items
        </p>
        <div className="flex items-center gap-2 justify-end">
          <Button
            variant="outlined"
            className="w-24"
            disabled={page <= 1}
            onClick={() => page > 1 && setPage((prev) => prev - 1)}
          >
            Previous
          </Button>
          <Button
            variant="outlined"
            className="w-24"
            disabled={page >= totalPage}
            onClick={() => page < totalPage && setPage((prev) => prev + 1)}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ListViews;
