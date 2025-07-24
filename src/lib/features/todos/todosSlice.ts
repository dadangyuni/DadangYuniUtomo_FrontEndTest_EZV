import { Todo } from "@/types/todo.types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Todo[] = [];

const todosSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    todoAdded(state, action) {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        userId: action.payload.userId,
        completed: false,
      });
    },
    todoToggled(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { todoAdded, todoToggled } = todosSlice.actions;
export default todosSlice.reducer;
