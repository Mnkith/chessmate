class Piece {
  static selectedPiece = ''
  constructor(p) {
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
    captive.style.gridArea = captive.dataset.defaultPos
    capturesContainer.appendChild(captive)
    Game.selectedPiece.style.border = ''
    Game.selectedPiece = ''
    Game.switchTurn()
  }

  set updatePosision(){
    fetch(`http://localhost:3000/games/${e.target.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        likes: parseInt(e.target.dataset.likes) + 1,
      }),
    })
      .then((resp) => resp.json())
      .then((toy) => {
        document.getElementById(toy.id).innerText = toy.likes;
      });
  }

  get toDiv() {
    const pieceDiv = document.createElement('div')
    pieceDiv.className = 'piece'
    pieceDiv.dataset.color = this.color
    pieceDiv.style.gridArea = this.position
    pieceDiv.innerHTML = this.symbol
    pieceDiv.dataset.defaultPos = this.default_position
    return pieceDiv
  }


}