# Be sure to restart your server when you modify this file.  bootstrap.min.js
Rails.application.config.assets.precompile += %w( theme.js )
Rails.application.config.assets.precompile += %w( custom.js )
Rails.application.config.assets.precompile += %w( bootstrap.min.js)
Rails.application.config.assets.precompile += %w( smoothscroll.min.js )
Rails.application.config.assets.precompile += %w( jquery.backstretch.min.js )
Rails.application.config.assets.precompile += %w(contact.js)
Rails.application.config.assets.precompile += %w(jquery.waypoints.min.js)
# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )
