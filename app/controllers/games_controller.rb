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
    game = Game.create 
    Game.find_by_id(1).pieces.each do |p| 
      # binding.pry
       game.pieces << Piece.new(name: p.name, symbol: p.symbol, color: p.color, position: p.position, initial: p.initial)
    end
  end


  private
  # def game_params
  #   params.require(:game).permit(:event, :site, :white, :black)
  # end
end
