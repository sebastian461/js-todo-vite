import { Todo } from "../todos/models/todo.model";

const Filters = {
  All: "all",
  Completed: "Completed",
  Pending: "Pending",
};

const state = {
  todos: [new Todo("Tarea 1"), new Todo("Tarea 2"), new Todo("Tarea 3")],
  filter: Filters.All,
};

const initStore = () => {
  console.log(state);
  console.log("InitStore 🥑");
};

const loadStore = () => {
  throw new Error("Not implemented");
};

const addTodo = () => {
  throw new Error("Not implemented");
};

const toggleTodo = () => {
  throw new Error("Not implemented");
};

const deleteTodo = () => {
  throw new Error("Not implemented");
};

const deleteCompleted = () => {
  throw new Error("Not implemented");
};

const setFilter = () => {
  throw new Error("Not implemented");
};

const getCurrentFilter = () => {
  throw new Error("Not implemented");
};

export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
