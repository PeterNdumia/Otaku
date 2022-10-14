class CommentSerializer < ActiveModel::Serializer
  attributes :id, :commentMsg, :anime_id, :user_id
  belongs_to :user, serializer: UserSummarySerializer
end
