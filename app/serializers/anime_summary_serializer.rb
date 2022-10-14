class AnimeSummarySerializer < ActiveModel::Serializer
  attributes :id, :title, :desc, :img, :rating
  has_many :comments, serializer: CommentSerializer
end
