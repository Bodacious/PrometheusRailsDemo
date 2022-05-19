let carTimer;
const POST_INTERVAL_MS = 1000;

function postCarSpeeds() {
  document.querySelectorAll(".car_speed_form").forEach((form) => {
    fetch(form.action, { method: 'POST', body: new FormData(form) });
  })
}

export function start() {
  carTimer = setInterval(postCarSpeeds, POST_INTERVAL_MS)
  document.querySelectorAll(".button--start").forEach((button) => button.classList.add("button--hidden"))
  document.querySelectorAll(".button--stop").forEach((button) => button.classList.remove("button--hidden"))
}

export function stop() {
  clearInterval(carTimer);
  document.querySelectorAll(".button--stop").forEach((button) => button.classList.add("button--hidden"))
  document.querySelectorAll(".button--start").forEach((button) => button.classList.remove("button--hidden"))
}
