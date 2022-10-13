class Comment < ApplicationRecord
    belongs_to :anime
    validates :commentMsg, presence: true
end
