class CreateWatchItems < ActiveRecord::Migration[6.0]
  def change
    create_table :watch_items do |t|
      t.integer :user_id
      t.integer :movie_id

      t.timestamps
    end
  end
end
