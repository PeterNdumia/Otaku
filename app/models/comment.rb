class Comment < ApplicationRecord
    belongs_to :anime
    belongs_to :user
    validates :commentMsg, presence: true
end
