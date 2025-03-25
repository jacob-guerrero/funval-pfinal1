/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */

export function toggleModal() {
  const modal = document.querySelector("#modal");
  modal.classList.toggle("hidden");
}
