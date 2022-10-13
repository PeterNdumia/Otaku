class Anime < ApplicationRecord
    has_many :animecomments
    has_many :comments, through: :animecomments
end
