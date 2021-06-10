class GamesController < ApplicationController
  def show
    # binding.pry
    
    game = if params[:id] == '0'
             Game.last
           else
             Game.find_by_id params[:id]
           end
    render json: game, include: [:pieces]
    p params[:id]
  end

  def index
    games = Game.all
    render json: games
  end

  def create
    # p params

    # binding.pry
    game = Game.create game_params
    Game.find_by_id(1).pieces.each do |p|
      # binding.pry
      game.pieces << Piece.new(name: p.name, symbol: p.symbol, color: p.color, position: p.position,
                               initial: p.initial)
    end
    render json: game, include: [:pieces]
  end

  def game_params
    params.require(:game).permit(:event, :site, :white, :black)
  end
end
