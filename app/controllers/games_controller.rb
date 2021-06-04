class GamesController < ApplicationController
  def show
    game = Game.find_by_id params[:id]
    render json: game, include: [:pieces]
  end

  def index
    games = Game.all
    render json: games
  end
end
