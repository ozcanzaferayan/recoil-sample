import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { todoListState } from "../state/atoms";

export function TodoItemCreator() {
  const [todo, setTodo] = useState({ name: "" });
  const setTodoList = useSetRecoilState(todoListState);

  return (
    <>
      <input
        value={todo.name}
        onChange={(e) => setTodo({ name: e.target.value })}
      />
      <button onClick={() => setTodoList((todos) => [...todos, todo])}>
        Add
      </button>
    </>
  );
}
