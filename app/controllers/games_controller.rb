class GamesController < ApplicationController
  def show
    game = Game.find_by_id params[:id]
    render json: game, include: [:pieces]
  end

  def index
    games = Game.all
    render json: games
  end

  def create
    # p params

    # binding.pry
    game = Game.create game_params
    game.pieces = Game.find_by_id(1).pieces
  end


  private
  def game_params
    params.require(:game).permit(:event, :site, :white, :black)
  end
end
