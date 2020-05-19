import { atom } from "recoil";

export const todoListState = atom({
  key: "todoListState",
  default: [
    { name: "Apples", isCompleted: false },
    { name: "Eggs", isCompleted: false },
    { name: "Butter", isCompleted: false },
  ],
});
export const todoListState2 = atom({
  key: "todoListState",
  default: [
    { name: "Apples", isCompleted: false },
    { name: "Eggs", isCompleted: false },
    { name: "Butter", isCompleted: false },
  ],
});

export const todoListFilterState = atom({
  key: "todoListFilterState",
  default: "Hepsini göster",
});
