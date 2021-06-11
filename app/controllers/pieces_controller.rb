class PiecesController < ApplicationController
  def index
    pieces = Piece.all
    render json: pieces
  end

  def show
    pieces = Game.find_by_id(params[:game_id]).pieces
    p = pieces.select { |piece| piece[:id] == params[:id].to_i }[0]
    render json: p
  end

  def update
    # binding.pry
    pieces = Game.find_by_id(params[:game_id]).pieces
    pieces.select { |piece| piece[:id] == params[:id].to_i }[0].update(piece_params)
    # Game.find_by_id(params[:game_id]).save
  end

  private

  def piece_params
    params.require(:piece).permit(:position)
  end
end
