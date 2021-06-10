class Game {
  // static currentGame = 'kkk'
  static turn = 'white'
  static selectedPiece = ''

  constructor(event = '', site = '', white = 'White', black = 'Black') {
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

  static fetchGame(round = 0) {
    console.log('fetch')
    fetch(`http://127.0.0.1:3000/games/${round}`)
      .then(resp => resp.json())
      .then(game => this.initializeBoard(game));
  }

  setScene() {
    console.log('setScene')
    document.body.style.backgroundColor = 'black'
    document.body.style.backgroundImage = ""
    document.getElementById('main-menu').style.visibility = 'hidden'
    document.getElementById('white-captures').style.visibility = 'visible'
    document.getElementById('board').style.visibility = 'visible'
    document.getElementById('white-captures').style.visibility = 'visible'
    document.getElementById('black-captures').style.visibility = 'visible'
  }

  static updateTurn() {
    return Game.turn == 'black' ? Game.turn = 'white' : Game.turn = 'black'
  }

  static initializeBoard(game) {
    // const controller = new AbortController();
    // console.log(game.event)
    // console.log(game.pieces)
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
            this.selectedPiece = e.target
            e.target.style.border = '3px dashed rgb(238, 42, 8)'
          }
          else {
            pieceObj.capture(e.target)
            // e.target.style.gridArea = p.position
            Game.updateTurn()
            // controller.abort()
          }

        }
        else {
          div.style.border = '3px dashed rgb(238, 42, 8)'
          this.selectedPiece = div
        }

      }, 
      // { signal: controller.signal }
      )

      document.getElementById('board').appendChild(div)
    })
  }


  persistAndRetrieve() {
    console.log('persist')
    fetch("http://127.0.0.1:3000/games", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(this)
    })
    .then(resp => resp.json())
    .then(game => Game.fetchGame(game.id))
  }
}