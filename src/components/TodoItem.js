import React from "react";
import { useRecoilState } from "recoil";
import { todoListState } from "../state/atoms";

export function TodoItem({ item, index }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  const deleteItemAt = (index) => {
    const todos = [...todoList];
    todos.splice(index, 1);
    setTodoList(todos);
  };
  const editItemAt = (index) => {
    const todos = [...todoList];
    const todo = todoList[index];
    var name = prompt("Change item name", todo.name);
    todos[index] = { ...todo, name: name };
    setTodoList(todos);
  };

  const completeAt = (index) => {
    const todos = [...todoList];
    const todo = todos[index];
    todos[index] = { name: todo.name, isCompleted: !todo.isCompleted };
    setTodoList(todos);
  };

  return (
    <li key={item.name}>
      <span
        onClick={() => completeAt(index)}
        style={{
          textDecoration: item.isCompleted ? "line-through" : "initial",
        }}
      >
        {item.name}
      </span>
      <button onClick={() => deleteItemAt(index)}>Delete</button>
      <button onClick={() => editItemAt(index)}>Edit</button>
    </li>
  );
}
