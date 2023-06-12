import { createSlice } from "@reduxjs/toolkit";

interface Todo {
  title: string;
  text: string;
  status: string;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
