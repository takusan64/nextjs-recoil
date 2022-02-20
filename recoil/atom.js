import { atom } from "recoil";

//todo Atom
export const todoState = atom({
  key: "todo",
  default: ["todo1"]
});