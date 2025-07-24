"use client";

import { Todo } from "@/types/todo.types";
import { useRouter } from "next/navigation";

const DetailView = ({ data }: { data: Todo }) => {
  const router = useRouter();
  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold mb-2">Detail Page (ISR)</h1>
          <button
            onClick={() => router.back()}
            className="bg-red-500 p-2 px-6 rounded-md text-white cursor-pointer"
            type="button"
          >
            Back
          </button>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg">
          <p className="text-sm text-blue-800">ISR</p>
        </div>
      </div>
      <div>
        <h1>{data.title}</h1>
        <p>{data.userId}</p>
        <span>{data.completed ? "true" : "false"}</span>
      </div>
    </div>
  );
};

export default DetailView;
