class Comment < ApplicationRecord
    has_many :animecomments
    has_many :animes, through: :animecomments
end
