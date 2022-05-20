require 'prometheus/client'
require 'prometheus/client/rack/collector'
require 'prometheus/client/rack/exporter'


Rails.application.middleware.use Prometheus::Client::Rack::Exporter

Promenade.histogram :rails_app_car_speed_mph do
  doc "Records the speed of each car in MPH"
  buckets [10, 20, 30, 40, 50, 60, 70]
end
