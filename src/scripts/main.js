import { stays } from "./stays.js";
import {
  handleClickLocation,
  loadLocationsOptions,
  loadStays,
  toggleModal,
  toggleOptions,
} from "./utils.js";
/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

const closeBtn = document.querySelector("#modal .close");
const searchMenu = document.querySelector("#search-menu");
const staysContainer = document.querySelector("#stays-container");
const locationInput = document.querySelector("#location");
const optionLocationsContainer = document.querySelector(".option-locations");
const guestBtn = document.querySelector("#guest");
const locationBtn = document.querySelector("#location");

closeBtn.addEventListener("click", toggleModal);
searchMenu.addEventListener("click", toggleModal);
locationInput.addEventListener("input", () => {
  loadLocationsOptions(stays, locationInput, optionLocationsContainer);

  const optionsList = document.querySelectorAll(".option-locations li");
  optionsList.forEach((item) =>
    item.addEventListener("click", (e) =>
      handleClickLocation(e, locationInput, optionLocationsContainer)
    )
  );
});
locationBtn.addEventListener("click", (e) => toggleOptions(e));
guestBtn.addEventListener("click", (e) => toggleOptions(e));

loadStays(stays, staysContainer);
