"use client";

import { Todo } from "@/types/todo.types";
import { useRouter } from "next/navigation";

const DetailView = ({ data }: { data: Todo }) => {
  const router = useRouter();
  return (
    <div className="container mx-auto p-4">
      <div className="mb-2">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-3xl font-bold mb-2">Todo Detail</h1>
          <button
            onClick={() => router.push("/")}
            className="bg-red-500 p-2 px-6 rounded-md text-white cursor-pointer"
            type="button"
          >
            Back
          </button>
        </div>
        <div className="p-3 rounded-lg"></div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <p className="font-bold text-gray-500 text-sm">Status</p>
          <h3 className="text-sm pt-2">
            <span
              className={`uppercase w-auto p-2 rounded-lg ${
                data.completed ? "bg-green-500" : "bg-yellow-500"
              }`}
            >
              {data.completed ? "Completed" : "Pending"}
            </span>
          </h3>
        </div>
        <div>
          <p className="font-bold text-gray-500 text-sm">Title</p>
          <h1 className="text-2xl">{data.title}</h1>
        </div>
        <div>
          <p className="font-bold text-gray-500 text-sm">User ID</p>
          <h1 className="text-2xl">{data.userId}</h1>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
