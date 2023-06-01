import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodosState, Todo } from "./types";

const initialState: TodosState = {
  todos: [
    { id: 1, text: "Example Todo 1", isComplete: false },
    { id: 2, text: "Example Todo 2", isComplete: true },
  ],
  searchQuery: "",
  filter: "All",
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        isComplete: false,
      };

      state.todos.push(newTodo);

      const checkedItemIndex = state.todos.findIndex((todo) => todo.isComplete);
      if (checkedItemIndex !== -1) {
        const [checkedItem] = state.todos.splice(checkedItemIndex, 1);
        state.todos.push(checkedItem);
      }
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      const todoId = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== todoId);
    },
    toggleComplete: (state, action: PayloadAction<number>) => {
      const todoId = action.payload;
      const todo = state.todos.find((todo) => todo.id === todoId);
      if (todo) {
        todo.isComplete = !todo.isComplete;
      }
    },
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
  },
});

export const {
  addTodo,
  removeTodo,
  toggleComplete,
  setSearchQuery,
  setFilter,
} = todosSlice.actions;
export default todosSlice.reducer;
