import { stays } from "./stays.js";
import {
  handleClickBtns,
  handleClickLocation,
  loadLocationsOptions,
  loadStays,
  submitForm,
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
const decAdultBtn = document.querySelector("#decAdultBtn");
const incAdultBtn = document.querySelector("#incAdultBtn");
const decChildrenBtn = document.querySelector("#decChildrenBtn");
const incChildrenBtn = document.querySelector("#incChildrenBtn");
const contactForm = document.querySelector("#contactForm");

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

decAdultBtn.addEventListener("click", (e) => handleClickBtns(e));
incAdultBtn.addEventListener("click", (e) => handleClickBtns(e));
decChildrenBtn.addEventListener("click", (e) => handleClickBtns(e));
incChildrenBtn.addEventListener("click", (e) => handleClickBtns(e));

contactForm.addEventListener("submit", (e) =>
  submitForm(e, stays, staysContainer)
);

loadStays(stays, staysContainer);
