class ReadingsController < ApplicationController
  def create
    Promenade.metric(:rails_app_car_speed_mph)
             .observe({ car: params[:car] }, params[:value].to_i)
  end
end
