//La sintaxis correcta para importar archivos html es agregando al final '?raw'
import todoStore from "../store/todo.store";
import html from "./app.html?raw";
import { renderTodos } from "./use-cases";

const ElementIDs = {
  TodoList: ".todo-list",
  NewTodo: "#new-todo-input",
};

/**
 *
 * @param {String} elementId
 */
export const App = (elementId) => {
  //Función que dibuja las tareas en el HTML
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter());
    renderTodos(ElementIDs.TodoList, todos);
  };

  //Función ánonima autoinvocada
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();

  //Referencias HTML
  const newTodo = document.querySelector(ElementIDs.NewTodo);

  //Listeners
  newTodo.addEventListener("keyup", (event) => {
    if (event.keyCode !== 13) return; //Enter = 13
    if (event.target.value.trim().length == 0) return;

    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value = "";
  });
};
