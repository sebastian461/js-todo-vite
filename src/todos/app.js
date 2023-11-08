//La sintaxis correcta para importar archivos html es agregando al final '?raw'
import html from "./app.html?raw";

/**
 *
 * @param {String} elementId
 */
export const App = (elementId) => {
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
  })();
};
