import React from "react";
import { useRecoilState } from "recoil";
import { todoListFilterState } from "../state/atoms";

export function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  return (
    <>
      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
      <br />
    </>
  );
}
