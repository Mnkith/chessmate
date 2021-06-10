class Game {
  // static currentGame = 'kkk'
  static turn = 'white'
  static selectedPiece = ''
  constructor(event, site = '', white = 'White', black = 'Black') {
    this.event = event
    // this.site = site
    // this.white = white
    // this.black = black
    // this.piecs = pieces
  }
  // static createNewGame(event, site = '', white = 'White', black = 'Black', pieces = []) {
  //   let game = new Game(event, site, white, black, pieces)
  //   fetch("http://localhost:3000/games", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Accept": "application/json"
  //     },
  //     body: JSON.stringify({event: 'eeee'})
  //   });
  // }
  // static fetchAllGames() {
  //   fetch(`http://127.0.0.1:3000/games`)
  //     .then(resp => resp.json())
  //   // .then(json => initializeBoard(json));
  // }

  static fetchGame(round = 1) {
    fetch(`http://127.0.0.1:3000/games/${round}`)
      .then(resp => resp.json())
      .then(json => this.initializeBoard(json));
  }

  static updateTurn() {
    return Game.turn == 'black' ? Game.turn = 'white' : Game.turn = 'black'
  }

  static initializeBoard(game) {
    const controller = new AbortController();
    const board = document.getElementById('board')
    game.pieces.forEach(p => {
      const pieceObj = new Piece(p)
      const div = pieceObj.toDiv
      div.addEventListener('click', (e) => {
        e.stopPropagation()
        if (e.target.dataset.color != Game.turn && !this.selectedPiece)
          alert(`its ${Game.turn}'s turn`)
        else if (this.selectedPiece) {
          // this.selectedPiece.style.border = ''
          if (this.selectedPiece.dataset.color === e.target.dataset.color) {
            this.selectedPiece.style.border = ''
            this.selectedPiece = ''
            // e.currentTarget.style.border
            // e.target.style.border = '3px dashed rgb(238, 42, 8)'
          }
          else {
            pieceObj.capture(e.target)
            // e.target.style.gridArea = p.position
            Game.updateTurn()
            // controller.abort()
            // const capturedPiece = e.target
            // const capturesContainer = document.getElementById(`${selectedPieceColor}-captures`)
            // this.selectedPiece.style.border = ''
            // this.selectedPiece.style.gridArea = capturedPiece.style.gridArea
            // capturedPiece.style.border = ''
            // capturedPiece.className = 'captured'
            // // capturedPiece.disabled = true
            // // capturedPiece.removeEventListener()
            // capturesContainer.appendChild(capturedPiece)
            // this.selectedPiece = ''
          }

        }
        else {
          div.style.border = '3px dashed rgb(238, 42, 8)'
          this.selectedPiece = div
        }

      }, { signal: controller.signal })

      board.appendChild(div)
    })
  }


  persist() {
    fetch("http://127.0.0.1:3000/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this)
    })
  }
}