import { start, stop } from "./readings.js"

export default function init() {
  document.addEventListener("DOMContentLoaded", () => {
    addEventListenersToButtons()
  })
}

function addEventListenersToButtons() {
  document.querySelectorAll(".button--start").forEach((button) => button.addEventListener("click", start))
  document.querySelectorAll(".button--stop").forEach((button) => button.addEventListener("click", stop))
}
