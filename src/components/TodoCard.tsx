"use client";

import { Todo } from "@/types/todo.types";
import Link from "next/link";
import { SpinnerSm } from "./Spinner";

type TodoCardProps = {
  data: Todo;
  onToggle?: (data: Todo, checked: boolean) => void;
  isLoading?: boolean;
};

const TodoCard: React.FC<TodoCardProps> = ({ data, onToggle, isLoading }) => {
  return (
    <div className="flex gap-2 items-center bg-gray-100 border border-gray-200 p-4 rounded-2xl">
      <Link href={`/${data.id}`} className="w-full hover:underline">
        <h2>{data.title}</h2>
      </Link>
      {isLoading ? (
        <SpinnerSm />
      ) : (
        <input
          id="completed"
          type="checkbox"
          checked={data.completed}
          onChange={(e) => (onToggle ? onToggle(data, e.target.checked) : {})}
          className="w-5 h-5 rounded-lg text-blue-300 bg-gray-100 border-gray-300 dark:focus:ring-blue-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
        />
      )}
    </div>
  );
};
export default TodoCard;
