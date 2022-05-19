export default function init() {
  document.addEventListener("DOMContentLoaded", () => {
    addSpeedRangeListeners()
  })
}

function updateCarSpeedRange(carSpeedRange) {
  const input  = carSpeedRange.querySelector(".car_speed_range__input")
  const output = carSpeedRange.querySelector(".car_speed_range__output")

  if (!output || !input) return

  output.innerText = `${input.value}mph`
}

function onCarSpeedRangeChange(e) {
  updateCarSpeedRange(e.target.parentElement)
}

function addSpeedRangeListeners() {
  document.querySelectorAll('.car_speed_range__input').forEach((slider) => {
    slider.addEventListener("change", onCarSpeedRangeChange)
  })
}