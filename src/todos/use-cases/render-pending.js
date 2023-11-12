import { Todo } from "../models/todo.model";

let htmlElement;

/**
 *
 * @param {String} elementId
 * @param {Todo} todos
 */
export const renderPending = (elementId, todos = []) => {
  if (!htmlElement) htmlElement = document.querySelector(elementId);
  if (!htmlElement) throw new Error(`Element ${elementId} not found`);

  htmlElement.innerText = todos.length;
};
