class CommentsController < ApplicationController

    def create
        comment = Comment.create(comment_params)
        render json: comment, status: :created
    end

    def update
        comment = Comment.find_by(id: params[:id])
        comment.update(comment_update_params)
        render json: comment, status: :ok
    end

    def destroy
        comment = Comment.find_by(id: params[:id])
        comment.destroy
        head :no_content
    end


    private 
    def comment_params
        params.permit(:commentMsg, :anime_id, :user_id)
    end
    def comment_update_params
        params.permit(:commentMsg)
    end
end

