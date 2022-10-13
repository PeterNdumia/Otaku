class AnimeSerializer < ActiveModel::Serializer
  attributes :id, :title, :desc, :img, :rating
end
