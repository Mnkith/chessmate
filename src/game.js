class Game {
  // static currentGame = 'kkk'
  static selectedPiece = ''
  constructor(event, site = '', white = 'White', black = 'Black') {
    this.event = event
    this.site = site
    this.white = white
    this.black = black
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

  static initializeBoard(game) {
    //  console.log(game)
    const pieces = game.pieces
    const board = document.getElementById('board')
    pieces.forEach(p => {
      const div = document.createElement('div')
      const square = document.getElementById(p.position)
      square.dataset.occupant = p.symbol
      div.className = 'piece'
      div.dataset.color = p.color
      div.innerHTML = p.symbol
      div.style.gridArea = p.position
      div.addEventListener('click', (e) => {
        e.stopPropagation()
        if (this.selectedPiece) {
          const selectedPieceColor = this.selectedPiece.dataset.color
          if (selectedPieceColor === e.target.dataset.color){
            this.selectedPiece.style.border = ''
            this.selectedPiece = ''
          }
          else{
            const capturedPiece = e.target
            const capturesContainer = document.getElementById(`${selectedPieceColor}-captures`)
            this.selectedPiece.style.border = ''
            this.selectedPiece.style.gridArea = capturedPiece.style.gridArea
            capturedPiece.style.border = ''
            // capturedPiece.removeEventListener()
            capturesContainer.appendChild(capturedPiece)
            this.selectedPiece = ''
          }

        }
        else{
          this.selectedPiece = div
        div.style.border = '3px dashed rgb(238, 42, 8)'
        }
        
      })

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