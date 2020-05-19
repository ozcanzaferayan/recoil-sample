import React from "react";
import { useRecoilValue } from "recoil";
import { filteredTodoListState } from "./state/selectors";
import { TodoListFilters } from "./components/TodoListFilters";
import { TodoItemCreator } from "./components/TodoItemCreator";
import { TodoItem } from "./components/TodoItem";
import { UserInfo } from "./components/UserInfo";

function App() {
  const filteredTodos = useRecoilValue(filteredTodoListState);

  return (
    <>
      <TodoListFilters />
      <TodoItemCreator />
      {filteredTodos.map((item, index) => (
        <TodoItem key={item.name} item={item} index={index} />
      ))}
      <React.Suspense fallback={<div>Loading...</div>}>
        <UserInfo />
      </React.Suspense>
    </>
  );
}

export default App;
