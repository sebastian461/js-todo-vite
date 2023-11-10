//La sintaxis correcta para importar archivos html es agregando al final '?raw'
import todoStore from "../store/todo.store";
import html from "./app.html?raw";
import { renderTodos } from "./use-cases";
import { Filters } from "../store/todo.store";

const ElementIDs = {
  DeleteCompleted: ".clear-completed",
  NewTodo: "#new-todo-input",
  TodoFilters: ".filter",
  TodoList: ".todo-list",
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
  const todoList = document.querySelector(ElementIDs.TodoList);
  const btnDeleteCompleted = document.querySelector(ElementIDs.DeleteCompleted);
  const todoFilters = document.querySelectorAll(ElementIDs.TodoFilters);

  //Listeners
  newTodo.addEventListener("keyup", (event) => {
    if (event.keyCode !== 13) return; //Enter = 13
    if (event.target.value.trim().length == 0) return;

    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value = "";
  });

  todoList.addEventListener("click", (event) => {
    const element = event.target.closest("[data-id]"); //busca el elemento más cercano que contenga esa propiedad
    todoStore.toggleTodo(element.getAttribute("data-id"));
    displayTodos();
  });

  todoList.addEventListener("click", (event) => {
    if (event.target.className === "destroy") {
      const element = event.target.closest("[data-id]");
      todoStore.deleteTodo(element.getAttribute("data-id"));
      displayTodos();
    }
  });

  btnDeleteCompleted.addEventListener("click", () => {
    todoStore.deleteCompleted();
    displayTodos();
  });

  todoFilters.forEach((element) => {
    element.addEventListener("click", (element) => {
      todoFilters.forEach((el) => {
        el.classList.remove("selected");
      });
      element.target.classList.add("selected");

      switch (element.target.text) {
        case "Todos":
          todoStore.setFilter(Filters.All);
          break;
        case "Pendientes":
          todoStore.setFilter(Filters.Pending);
          break;
        case "Completados":
          todoStore.setFilter(Filters.Completed);
          break;
      }

      displayTodos();
    });
  });
};
