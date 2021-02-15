class AddMovieToWatchItems < ActiveRecord::Migration[6.0]
  def change
    add_column :watch_items, :movie, :string
  end
end
