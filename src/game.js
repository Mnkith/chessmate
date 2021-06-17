class Game {
  static turn = 'white'
  static selectedPiece = ''
  static currentGameId = 0

  constructor(event = '', site = '', white = 'White', black = 'Black') {
    this.event = event
    this.site = site
    this.white = white
    this.black = black
  }

  set id(gameId){
    this._id = gameId
  }

  get id(){
    return this.id
  }

  static fetchGame(round = 0) {
    Game.currentGameId = round

    document.getElementById('game-id').innerHTML = Game.currentGameId
    fetch(`http://127.0.0.1:3000/games/${round}`)
      .then(resp => resp.json())
      .then(game => this.initializeBoard(game));
  }

  static setScene() {
    document.body.style.backgroundColor = 'black'
    document.body.style.backgroundImage = ""
    document.getElementById('game-id').innerHTML = Game.currentGameId
    Menu.show('board', 'game-menu')
  }

  static switchTurn() {
    return Game.turn == 'black' ? Game.turn = 'white' : Game.turn = 'black'
  }

  

  static initializeBoard(game) {
    game.pieces.forEach(p => {
      let handler
      const pieceObj = new Piece(p)
      const div = pieceObj.toDiv()
      if (p.position.startsWith('x')) {
        div.className = 'captured'
        document.getElementById('board').appendChild(div)
      }
      else {
        div.addEventListener('click', handler = (e) => {
          if (e.target.dataset.color != Game.turn && !this.selectedPiece)
            alert(`its ${Game.turn}'s turn`)
          else if (this.selectedPiece) {
            if (this.selectedPiece.dataset.defaultPos === e.target.dataset.defaultPos) {
              e.target.style.border = ''
              this.selectedPiece = ''
            }
            else if (this.selectedPiece.dataset.color === e.target.dataset.color) {
              this.selectedPiece.style.border = ''
              this.selectedPiece = e.target
              e.target.style.border = '3px dashed #131b47'
            }
            else {
              pieceObj.capture(e.target)
              e.target.removeEventListener('click', handler)
            }

          }
          else {
            div.style.border = '3px dashed #131b47'
            this.selectedPiece = div
          }

        },
        )
        document.getElementById('board').appendChild(div)
      }

    })
  }


  persistAndRetrieve() {
    fetch("http://127.0.0.1:3000/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this)
    })
      .then(resp => resp.json())
      .then(game => {
        // Game.currentGameId = game.id
        // console.log(Game.currentGameId)
        Game.fetchGame(game.id)
      })
  }
}