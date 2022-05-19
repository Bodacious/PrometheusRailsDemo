export default function init() {
  document.addEventListener("DOMContentLoaded", () => {
    displayLivePrometheusMetrics()
  })
}
const metricsTarget = document.querySelector(".metrics_target")

function fetchMetrics() {
  fetch("/metrics")
    .then((response) => response.text())
    .then((metrics) => {
      if (metrics === "") {
        metricsTarget.innerHTML = "<em>No data yet</em>"
        return
      }
      metricsTarget.innerText = metrics
    })
    .catch((err) => console.log(err))
}
function displayLivePrometheusMetrics() {
  const timer = setInterval(fetchMetrics, 1000);
}