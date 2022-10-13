class CreateAnimes < ActiveRecord::Migration[6.1]
  def change
    create_table :animes do |t|
      t.string :title
      t.string :desc
      t.string :img
      t.string :rating

      t.timestamps
    end
  end
end
