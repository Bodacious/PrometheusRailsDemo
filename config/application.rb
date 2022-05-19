require_relative "boot"

%w[
  action_controller/railtie
  action_view/railtie
].each { |lib| require lib }

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module PrometheusDemo
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0
  end
end
