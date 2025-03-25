import { toggleModal } from "./utils.js";
/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

const closeBtn = document.querySelector("#modal .close");
const searchMenu = document.querySelector("#search-menu");

closeBtn.addEventListener("click", toggleModal);
searchMenu.addEventListener("click", toggleModal);
