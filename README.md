# README

## Depenendcies

Please ensure you have Prometheus installed locally.

https://prometheus.io/docs/prometheus/latest/installation/

## Installation

Download this repo with git:

    git clone https://github.com/Bodacious/PrometheusRailsDemo

And then call `$ bin/setup`.

## Understanding the app

Start the app with `$ rails server`

Head to [localhost:3000](http://localhost:3000) to view the main app page.

This simple page repesents two cars, and their respective current speeds

When you hit "start", the page will begin sending the speed of car A and car B to the backend to be counted by Prometheus in a histogram.

Move the sliders left and right to change the speed of each car. These values will continue to be updated in Prometheus as they change.

Open a dashboard in [Prometheus Graph](https://prometheus.io/docs/visualization/browser/) or [Grafana](https://prometheus.io/docs/visualization/grafana/).

