source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.4.5"

# Rails
gem 'rails', '~> 6.1.3', '>= 6.1.3.2'

# Database
gem 'pg', '~> 1.2'  # upgrade to latest 1.x for Ruby 3.x compatibility

# App server
gem 'puma', '~> 5.0'

# Security
gem 'bcrypt', '~> 3.1.18'  # latest version compatible with Ruby 3.x

# Caching & boot speed
gem 'bootsnap', '>= 1.7.5', require: false  # newer version for Ruby 3.x

# CORS support
gem 'rack-cors'

gem "logger", "~> 1.6"


# Development & test
group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'rspec-rails', '~> 5.0.1'
end

group :development do
  gem 'listen', '~> 3.5'  # latest listen compatible with Ruby 3.x
  gem 'spring'
end

group :test do
  gem 'rspec-json_expectations'
  gem 'shoulda-matchers', '~> 4.5'
end

# Windows-specific
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Serialization
gem 'active_model_serializers', '~> 0.10.12'
