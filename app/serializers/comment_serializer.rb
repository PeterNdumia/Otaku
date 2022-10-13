class CommentSerializer < ActiveModel::Serializer
  attributes :id, :commentMsg, :anime_id
end
