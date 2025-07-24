import { API_BASE_URL } from "@/constants/url";
import type { PaginationParams, Todo } from "@/types/todo.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ["Todo"],
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "todos",
      providesTags: ["Todo"],
      keepUnusedDataFor: 300,
    }),
    getPaginatedTodos: builder.query<Todo[], PaginationParams>({
      query: ({ start = 0, limit = 10 }) =>
        `todos?_start=${start}&_limit=${limit}`,
    }),
    getTodoByID: builder.query<Todo, string | number>({
      query: (id) => `todos/${id}`,
      providesTags: (result, error, id) => [{ type: "Todo", id }],
      keepUnusedDataFor: 600,
    }),
    addTodo: builder.mutation<Todo, Partial<Todo>>({
      query: (body) => ({
        url: "todos",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetTodoByIDQuery, useGetTodosQuery, useAddTodoMutation } =
  todoApi;
