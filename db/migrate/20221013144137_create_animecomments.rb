class CreateAnimecomments < ActiveRecord::Migration[6.1]
  def change
    create_table :animecomments do |t|
      t.integer :comment_id
      t.integer :anime_id

      t.timestamps
    end
  end
end
