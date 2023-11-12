import { Todo } from "../models/todo.model";
import { todoHtml } from "./todo-html";

let htmlElement;

/**
 *
 * @param {String} elementId
 * @param {Todo} todos
 */
export const renderTodos = (elementId, todos = []) => {
  if (!htmlElement) htmlElement = document.querySelector(elementId);
  if (!htmlElement) throw new Error(`Element ${elementId} not found`);

  htmlElement.innerHTML = "";

  todos.forEach((todo) => {
    htmlElement.append(todoHtml(todo));
  });
};
