class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :year
      t.string :runtime
      t.string :director
      t.string :actors
      t.string :plot
      t.string :poster_url
      t.string :mood
      t.timestamps
    end
  end
end

