class PiecesController < ApplicationController
  def index
    pieces = Piece.all 
    render json: pieces
  end

  def update
    binding.pry
    pieces = Game.find_by_id(params[:game_id]).pieces
    pieces.find
  end
private
  def piece_params
    params.require(:piece).permit(position)
  end
end
