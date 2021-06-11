class Piece {
  static selectedPiece = ''
  constructor(p) {
    this.id = p.id
    this.name = p.name
    this.symbol = p.symbol
    this.color = p.color
    this.position = p.position
    this.default_position = p.default_position
    this.initial = p.initial
  }

  capture(captive) {
    const capturesContainer = document.getElementById(`${Game.selectedPiece.dataset.color}-captures`)
    captive.style.border = ''
    captive.className = 'captured'
    Game.selectedPiece.style.gridArea = captive.style.gridArea
    Game.selectedPiece.dataset.position = captive.style.gridArea.slice(0, 2)
    console.log( captive)

    console.log(this.selectedPiece.dataset.id)
    this.position = captive.style.gridArea.slice(0, 2)
    console.log(this)
    // console.log('before', this.position)
    this.updatePosision()
    captive.style.gridArea = captive.dataset.defaultPos
    // console.log(this.position)
    capturesContainer.appendChild(captive)
    Game.selectedPiece.style.border = ''
    Game.selectedPiece = ''
    Game.switchTurn()
  }

  updatePosision(){
    fetch(`http://localhost:3000/games/${Game.currentGameId}/pieces/${Game.selectedPiece.dataset.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        position: this.position
      }),
    })
  }

  toDiv() {
    const pieceDiv = document.createElement('div')
    pieceDiv.dataset.id = this.id
    pieceDiv.className = 'piece'
    pieceDiv.dataset.color = this.color
    pieceDiv.style.gridArea = this.position
    pieceDiv.innerHTML = this.symbol
    pieceDiv.dataset.defaultPos = this.default_position
    return pieceDiv
  }


}