import "./App.css";

import { useSelector, useDispatch } from "react-redux";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { removeTodo, toggleComplete } from "./store/todosSlice";
import SearchBar from "./components/SearchBar";
import { CenteredContainer } from "./AppStyles";
import { TodosState } from "./store/types";

interface RootState {
  todos: TodosState;
}

const App = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const searchQuery = useSelector(
    (state: RootState) => state.todos.searchQuery
  );

  const dispatch = useDispatch();

  const handleToggleComplete = (todoId: number) => {
    dispatch(toggleComplete(todoId));
  };

  const handleRemoveTodo = (todoId: number) => {
    dispatch(removeTodo(todoId));
  };

  return (
    <CenteredContainer>
      <SearchBar />
      <TodoList
        todos={todos}
        handleToggleComplete={handleToggleComplete}
        handleRemoveTodo={handleRemoveTodo}
        searchQuery={searchQuery}
      />
      <TodoForm />
    </CenteredContainer>
  );
};

export default App;
