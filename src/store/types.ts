export interface Todo {
  id: number;
  text: string;
  isComplete: boolean;
}

export interface TodosState {
  todos: Todo[];
  searchQuery: string;
  filter: string;
}

export interface TodoListProps {
  todos: Todo[];
  handleToggleComplete: (todoId: number) => void;
  handleRemoveTodo: (todoId: number) => void;
  searchQuery: string | null;
}

export interface RootState {
  todos: {
    filter: string;
  };
}

export interface TodoItemProps {
  todo: Todo;
  handleToggleComplete: (todoId: number) => void;
  handleRemoveTodo: (todoId: number) => void;
}

export interface FormData {
  textValue: string;
}
