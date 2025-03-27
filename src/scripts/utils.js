/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */

export function toggleModal() {
  const modal = document.querySelector("#modal");
  const optionLocations = document.querySelector(".option-locations");
  modal.classList.toggle("hidden");
  optionLocations.classList.toggle("hidden");
}

export function toggleOptions(e) {
  const optionLocation = document.querySelector(".option-locations");
  const optionGuests = document.querySelector(".option-guests");

  const btnClicked = e.target.id;
  if (btnClicked === "location") {
    optionLocation.classList.remove("hidden");
    optionGuests.classList.add("hidden");
  } else if (btnClicked === "guest") {
    optionGuests.classList.remove("hidden");
    optionLocation.classList.add("hidden");
  }
}

export function loadStays(arr, parent) {
  const staysNumber = document.querySelector(".stays-number");
  staysNumber.textContent = arr.length > 12 ? "12+" : arr.length;

  parent.innerHTML = "";

  arr.forEach((stay) => {
    const stayItem = stayTemplate(stay);
    parent.innerHTML += stayItem;
  });
}
export function stayTemplate({ photo, superHost, type, beds, rating, title }) {
  const isSuperHost = superHost ? "" : "hidden";
  const isNotNull = Number.isInteger(beds) ? "" : "hidden";

  const template = `
        <li class="flex flex-col gap-1">
            <img
            src="${photo}"
            alt="stay photo"
            class="aspect-[4/3] rounded-2xl"
            />

            <div class="flex justify-between items-center text-gray-500">
            <div class="flex gap-1 text-xs sm:gap-3 sm:text-sm">
                <p
                class="py-1 px-2 text-[10px] flex justify-center items-center border-1 border-gray-800 rounded-xl font-semibold text-gray-800 sm:text-xs ${isSuperHost}"
                >
                SUPERHOST
                </p>
                <div class="flex items-center gap-1 sm:text-sm">
                <p>${type}</p>
                <p class="${isNotNull}">-</p>
                <p class="${isNotNull}">${beds} beds</p>
                </div>
            </div>

            <div class="flex gap-1 items-center text-sm">
                <img src="./src/images/icons/star.svg" alt="star" class="w-6" />
                <p>${rating}</p>
            </div>
            </div>

            <p class="font-semibold">${title}</p>
        </li>
    `;

  return template;
}

export function filterLocationInput(arr, inputText) {
  const filteredOpts = arr.filter(({ city }) => {
    const cityLower = city.toLowerCase();
    const inputLower = inputText.toLowerCase();
    return cityLower.includes(inputLower);
  });
  return filteredOpts;
}
export function locationOptionTemplate({ city, country }) {
  const template = `
        <li class="w-max flex gap-1 text-gray-500 hover:cursor-pointer">
            <img
            src="./src/images/icons/location.svg"
            alt="location"
            class="w-6"
            />
            <p>${city}, ${country}</p>
        </li>
    `;
  return template;
}
export function loadLocationsOptions(arr, inputText, parent) {
  const textValue = inputText.value.trim();
  if (!textValue || textValue === "") {
    parent.innerHTML = "";
    return;
  }
  parent.innerHTML = "";
  const filteredLocations = filterLocationInput(arr, textValue);
  filteredLocations.forEach((locationOption) => {
    const locationOptionItem = locationOptionTemplate(locationOption);
    parent.innerHTML += locationOptionItem;
  });
}

export function handleClickLocation(e, locationInput, parent) {
  const textValue = e.target.textContent;
  locationInput.value = textValue;
  parent.innerHTML = "";
}

let countAdult = 0;
let countChildren = 0;
export function handleClickBtns(e) {
  const btnClicked = e.target.id;

  // Validate negative numbers
  if (btnClicked === "decAdultBtn" && countAdult === 0) return;
  if (btnClicked === "decChildrenBtn" && countChildren === 0) return;

  switch (btnClicked) {
    case "decAdultBtn":
      countAdult--;
      break;

    case "incAdultBtn":
      countAdult++;
      break;

    case "decChildrenBtn":
      countChildren--;
      break;

    case "incChildrenBtn":
      countChildren++;
      break;

    default:
      break;
  }

  displayCount(countAdult, countChildren);
}
export function displayCount(countAdult, countChildren) {
  const adultCount = document.querySelector("#adultCount");
  const childrenCount = document.querySelector("#childrenCount");
  const guestCount = document.querySelector("#guest");

  adultCount.textContent = countAdult;
  childrenCount.textContent = countChildren;

  if (countAdult + countChildren === 0) {
    guestCount.value = "";
    return;
  }
  guestCount.value = `${countAdult + countChildren} guests`;
}
