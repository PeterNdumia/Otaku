class AnimesController < ApplicationController

    def index
        animes = Anime.all
        render json: animes, status: :ok
    end

    def show
        anime = Anime.find_by(id: params[:id])
        render json: anime, serializer: AnimeSummarySerializer,  status: :ok
    end
end
