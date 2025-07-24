"use client";

import { Todo } from "@/types/todo.types";
import { useRouter } from "next/navigation";

const ListViews = ({ initialTodos }: { initialTodos: Todo[] }) => {
  const router = useRouter();

  return (
    <div className="w-full p-4">
      <div className="mb-6">
        <div className="mb-2 flex items-center justify-between">
          <h1 className="text-3xl font-bold mb-2">Todos List (SSR)</h1>
          <button
            onClick={() => router.push("create")}
            className="bg-green-500 p-2 px-6 rounded-md text-white cursor-pointer"
            type="button"
          >
            Create New
          </button>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-blue-800">
            📡 <strong>Server-Side Rendering:</strong> Data ini di-fetch setiap
            request untuk memastikan selalu up-to-date
          </p>
        </div>
      </div>
      <div className="grid gap-4">
        {initialTodos.map((todo) => (
          <div key={todo.id}>
            <div className="border border-gray-300 p-4 rounded-lg">
              <span
                className={`p-1 border px-3 border-gray-300 rounded-sm text-sm ${
                  todo.completed ? "bg-green-100" : "bg-yellow-100"
                }`}
              >
                {todo.completed ? "✅ Completed" : "❌ Pending"}
              </span>
              <div className=" my-2 flex justify-between items-center">
                <h1 className="text-2xl">{todo.title}</h1>
                <button
                  className="border p-1 px-4 bg-cyan-600 border-gray-200 text-sm text-white rounded-lg cursor-pointer"
                  type="button"
                  onClick={() => router.push(`/${todo.id}`)}
                >
                  Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center text-gray-500">
        <p>Showing {initialTodos.length} todos</p>
      </div>
    </div>
  );
};

export default ListViews;
