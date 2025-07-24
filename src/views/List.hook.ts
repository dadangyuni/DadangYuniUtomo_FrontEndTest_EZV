import { useAddTodoMutation, useUpdateTodoMutation } from "@/services/todo";
import { Todo } from "@/types/todo.types";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function useTodoList() {
  const [addTodo, result] = useAddTodoMutation();
  const [updateTodo, resultUpdate] = useUpdateTodoMutation();
  const [page, setPage] = useState<number>(1);
  const limit = 10;
  const totalData = 200;
  const totalPage = totalData / limit;
  const start = (page - 1) * limit;

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = handleSubmit(async (value) => {
    const payload = {
      title: value.title,
      userId: 1,
      completed: false,
    };
    await addTodo(payload).then(() => {
      reset();
    });
  });

  const onToggleComplete = async (data: Todo, checked: boolean) => {
    await updateTodo({ ...data, completed: checked }).then(() =>
      alert("Todo updated successfully!")
    );
  };

  useEffect(() => {
    if (result.isSuccess) {
      const timer = setTimeout(() => {
        result.reset();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [result.isSuccess, result]);

  return {
    onSubmit,
    register,
    result,
    resultUpdate,
    page,
    setPage,
    totalPage,
    totalData,
    start,
    limit,
    onToggleComplete,
  };
}
