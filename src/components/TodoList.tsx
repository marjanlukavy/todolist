import React from "react";
import TodoItem from "./TodoItem";
import styled from "@emotion/styled";
import { useSelector } from "react-redux";

import { TodoListContainer } from "./Styles";

import { RootState, Todo } from "../store/types";

interface TodoListProps {
  todos: Todo[];
  handleToggleComplete: (todoId: number) => void;
  handleRemoveTodo: (todoId: number) => void;
  searchQuery: string | null;
}

const TodoList: React.FC<TodoListProps> = ({
  todos,
  handleToggleComplete,
  handleRemoveTodo,
  searchQuery,
}) => {
  const filter = useSelector((state: RootState) => state.todos.filter);

  const filteredTodos = todos.filter((todo) => {
    const isMatchingSearch = todo.text
      .toLowerCase()
      .includes((searchQuery ?? "").toLowerCase());

    if (filter === "Done") {
      return isMatchingSearch && todo.isComplete;
    }

    return isMatchingSearch;
  });

  filteredTodos.sort((a, b) => {
    if (a.isComplete && !b.isComplete) {
      return 1;
    } else if (!a.isComplete && b.isComplete) {
      return -1;
    } else {
      return 0;
    }
  });

  return (
    <TodoListContainer>
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleToggleComplete={handleToggleComplete}
            handleRemoveTodo={handleRemoveTodo}
          />
        ))
      ) : (
        <p>No matching todos found.</p>
      )}
    </TodoListContainer>
  );
};

export default TodoList;
